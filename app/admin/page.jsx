"use client";

import { useState, useEffect } from "react";
import { login, logout, isAuthenticated } from "../../lib/auth";
import { fetchPPC, updatePPCStatus } from "../../lib/api";
export default function AdminPanel() {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  const [enquiries, setEnquiries] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  /* ---------------- LOGIN ---------------- */
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target));
    const email = form.email;
    const password = form.password;

    try {
      await login(email, password);
      setLoggedIn(true);
      setError("");
    } catch (err) {
      console.error('Login error', err);
      setError(err?.response?.data?.message || err.message || 'Login failed');
    }
  };

  /* ---------------- STATUS UPDATE (UI ONLY) ---------------- */
  const updateStatus = (id, status) => {
    // Optimistic UI update
    setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, status } : e)));
    // Send to API
    (async () => {
      try {
        const newStatus = typeof status === 'string' ? status.toLowerCase() : status;
        await updatePPCStatus(id, newStatus);
      } catch (err) {
        console.error('Failed to update status', err);
        // revert by refetching current page
        fetchEnquiries(page);
        alert('Failed to update status');
      }
    })();
  };

  const statusStyle = (status) => {
    if (status === "NEW") return "bg-red-100 text-red-700";
    if (status === "CONTACTED") return "bg-yellow-100 text-yellow-700";
    return "bg-green-100 text-green-700";
  };

  const filtered = enquiries.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()) || e.email.toLowerCase().includes(search.toLowerCase())
  );

  const count = (s) => enquiries.filter((e) => e.status === s).length;

  /* ---------------- LOGIN PAGE ---------------- */
  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm"
        >
          <h2 className="text-2xl font-black mb-6 text-center">Admin Login</h2>

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full mb-3 px-4 py-3 border rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full mb-4 px-4 py-3 border rounded-lg"
          />

          {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

          <button className="w-full bg-[#D6312F] text-white py-3 rounded-lg font-bold hover:bg-[#b72826]">
            Login
          </button>
        </form>
      </div>
    );
  }

  async function fetchEnquiries(p = 1) {
    setLoading(true);
    setFetchError(null);
    try {
      const res = await fetchPPC(p, limit);
      // expected { data, pagination }
      setEnquiries(res.data || []);
      if (res.pagination) {
        setTotalPages(res.pagination.totalPages || 1);
        setTotalCount(res.pagination.total || 0);
        setPage(res.pagination.page || p);
      }
    } catch (err) {
      console.error('fetchPPC error', err);
      setFetchError(err?.message || 'Failed to fetch enquiries');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (loggedIn) fetchEnquiries(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn, page]);
  /* ---------------- DASHBOARD ---------------- */
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-black">Enquiry Admin Panel</h1>
          <button
            onClick={() => {
              logout();
              setLoggedIn(false);
            }}
            className="text-sm text-gray-600 hover:text-red-600"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <Stat label="New" value={count("NEW")} color="red" />
          <Stat label="Contacted" value={count("CONTACTED")} color="yellow" />
          <Stat label="Closed" value={count("CLOSED")} color="green" />
        </div>

        {/* Search */}
        <input
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-lg border"
        />

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr key={e.id} className="border-t">
                  <td className="p-3 font-medium">{e.name}</td>
                  <td className="p-3">{e.email}</td>
                  <td className="p-3">{e.phone}</td>
                  <td className="p-3">
                    <button
                      onClick={() =>
                        setExpanded(expanded === e.id ? null : e.id)
                      }
                      className="text-[#D6312F] underline"
                    >
                      View
                    </button>
                    {expanded === e.id && (
                      <div className="mt-2 text-gray-700">{e.message}</div>
                    )}
                  </td>
                  <td className="p-3">
                    <select
                      value={String(e.status).toLowerCase()}
                      onChange={(ev) => updateStatus(e.id, ev.target.value)}
                      className={`px-2 py-1 rounded-full text-xs font-bold ${statusStyle(
                        String(e.status).toUpperCase()
                      )}`}
                    >
                      <option value="new">NEW</option>
                      <option value="contacted">CONTACTED</option>
                      <option value="qualified">QUALIFIED</option>
                      <option value="hot">HOT</option>
                      <option value="closed">CLOSED</option>
                    </select>
                  </td>
                  <td className="p-3 text-gray-500">{e.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-600">{`Total: ${totalCount}`}</div>
          <div className="flex items-center gap-2">
            <button
              disabled={page <= 1 || loading}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1 bg-white border rounded"
            >
              Prev
            </button>
            <div className="px-3">Page {page} / {totalPages}</div>
            <button
              disabled={page >= totalPages || loading}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1 bg-white border rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SMALL STAT CARD ---------------- */
function Stat({ label, value, color }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`text-3xl font-black text-${color}-600`}>{value}</p>
    </div>
  );
}
