import api, { setAuthToken } from './api';

export async function login(email, password) {
  const res = await api.post('/api/auth/login', { email, password });
  const data = res.data;
  const token = data?.token || data?.accessToken || data?.access_token || null;
  if (!token) throw new Error('No token returned from login');
  setAuthToken(token);
  return data;
}

export function logout() {
  setAuthToken(null);
}

export function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('tritorc_token');
}

export function isAuthenticated() {
  return !!getToken();
}
