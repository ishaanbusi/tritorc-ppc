import axios from 'axios';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000',
	headers: { 'Content-Type': 'application/json' },
	timeout: 10000,
});

// Attach JWT from localStorage (client-side) to requests
api.interceptors.request.use(
	(config) => {
		if (typeof window !== 'undefined') {
			const token = localStorage.getItem('tritorc_token');
			if (token) {
				config.headers = config.headers || {};
				config.headers.Authorization = `Bearer ${token}`;
			}
		}
		return config;
	},
	(error) => Promise.reject(error)
);

export async function sendContact(formData) {
	const endpoint = '/api/ppc';
	const payload = { ...formData };
	const res = await api.post(endpoint, payload);
	return res.data;
}

export function setAuthToken(token) {
	if (typeof window === 'undefined') return;
	if (token) {
		localStorage.setItem('tritorc_token', token);
	} else {
		localStorage.removeItem('tritorc_token');
	}
}

// Fetch paginated PPC submissions
export async function fetchPPC(page = 1, limit = 10) {
	const res = await api.get('/api/ppc', { params: { page, limit } });
	return res.data; // expected { data, pagination }
}

// Update PPC status by id
export async function updatePPCStatus(id, status) {
	const res = await api.patch(`/api/ppc/${id}/status`, { status });
	return res.data;
}

export default api;

