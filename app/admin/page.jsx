"use client";

import { useState, useEffect } from "react";
import { login, logout, isAuthenticated } from "../../lib/auth";
import { fetchPPC, updatePPCStatus } from "../../lib/api";
export default function AdminPanel() {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const [enquiries, setEnquiries] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

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
      console.error("fetchPPC error", err);
      setFetchError(err?.message || "Failed to fetch enquiries");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (loggedIn) fetchEnquiries(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn, page]);

  /* ---------------- LOGIN PAGE ---------------- */
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
      console.error("Login error", err);
      setError(err?.response?.data?.error || err.message || "Login failed");
    }
  };

  /* ---------------- STATUS UPDATE (UI ONLY) ---------------- */
  const updateStatus = (id, status) => {
    // Optimistic UI update
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status } : e)),
    );
    // Send to API
    (async () => {
      try {
        const newStatus =
          typeof status === "string" ? status.toLowerCase() : status;
        await updatePPCStatus(id, newStatus);
      } catch (err) {
        console.error("Failed to update status", err);
        // revert by refetching current page
        fetchEnquiries(page);
        alert("Failed to update status");
      }
    })();
  };

  const statusStyle = (status) => {
    const upper = String(status).toUpperCase();
    if (upper === "NEW") return "bg-red-100 text-red-700";
    if (upper === "CONTACTED") return "bg-yellow-100 text-yellow-700";
    return "bg-green-100 text-green-700";
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  const handleViewEnquiry = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setModalOpen(true);
  };

  const filtered = enquiries.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.email.toLowerCase().includes(search.toLowerCase()),
  );

  const count = (s) =>
    enquiries.filter((e) => String(e.status).toUpperCase() === s).length;

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
            className="w-full mb-3 px-4 py-3 border rounded-lg cursor-text caret-black"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full mb-4 px-4 py-3 border rounded-lg cursor-text caret-black"
          />

          {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

          <button className="w-full bg-[#D6312F] text-white py-3 rounded-lg font-bold hover:bg-[#b72826]">
            Login
          </button>
        </form>
      </div>
    );
  }

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
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          <Stat label="New" value={count("NEW")} color="red" />
          <Stat label="Hot" value={count("HOT")} color="yellow" />
          <Stat label="Qualified" value={count("QUALIFIED")} color="orange" />
          <Stat label="Contacted" value={count("CONTACTED")} color="green" />
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
                      onClick={() => handleViewEnquiry(e)}
                      className="text-[#D6312F] underline hover:font-semibold"
                    >
                      View
                    </button>
                  </td>
                  <td className="p-3">
                    <select
                      value={String(e.status).toLowerCase()}
                      onChange={(ev) => updateStatus(e.id, ev.target.value)}
                      className={`px-2 py-1 rounded-full text-xs font-bold ${statusStyle(
                        String(e.status).toUpperCase(),
                      )}`}
                    >
                      <option value="new">NEW</option>
                      <option value="contacted">CONTACTED</option>
                      <option value="qualified">QUALIFIED</option>
                      <option value="hot">HOT</option>
                      {/* <option value="closed">CLOSED</option> */}
                    </select>
                  </td>
                  <td className="p-3 text-gray-500">
                    {formatDate(e.created_at)}
                  </td>
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
            <div className="px-3">
              Page {page} / {totalPages}
            </div>
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

      {/* Modal */}
      {modalOpen && selectedEnquiry && (
        <EnquiryModal
          enquiry={selectedEnquiry}
          onClose={() => setModalOpen(false)}
          onStatusChange={(id, status) => {
            updateStatus(id, status);
          }}
          statusStyle={statusStyle}
          formatDate={formatDate}
        />
      )}
    </div>
  );
}

/* ---------------- SMALL STAT CARD ---------------- */
function Stat({ label, value, color }) {
  const colorMap = {
    red: "#dc2626",
    yellow: "#ca8a04",
    green: "#16a34a",
    orange: "#f97316",
  };
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-3xl font-black" style={{ color: colorMap[color] }}>
        {value}
      </p>
    </div>
  );
}

/* -------------------- ENQUIRY MODAL -------------------- */
function EnquiryModal({
  enquiry,
  onClose,
  onStatusChange,
  statusStyle,
  formatDate,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-50 border-b p-6 flex justify-between items-center">
          <h2 className="text-2xl font-black">Enquiry Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Name</p>
              <p className="text-lg font-semibold">{enquiry.name}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
              <p className="text-lg text-blue-600">
                <a href={`mailto:${enquiry.email}`}>{enquiry.email}</a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Phone</p>
              <p className="text-lg font-semibold">{enquiry.phone}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Company
              </p>
              <p className="text-lg font-semibold">
                {enquiry.company || "N/A"}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase font-bold mb-2">
              Message
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border text-sm text-gray-700 whitespace-pre-wrap break-words">
              {enquiry.message}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t pt-4">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Status
              </p>
              <select
                value={String(enquiry.status).toLowerCase()}
                onChange={(e) => onStatusChange(enquiry.id, e.target.value)}
                className={`mt-2 px-3 py-2 rounded-full text-sm font-bold ${statusStyle(
                  String(enquiry.status).toUpperCase(),
                )}`}
              >
                <option value="new">NEW</option>
                <option value="contacted">CONTACTED</option>
                <option value="qualified">QUALIFIED</option>
                <option value="hot">HOT</option>
                {/* <option value="closed">CLOSED</option> */}
              </select>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Date</p>
              <p className="text-sm text-gray-600 mt-2">
                {formatDate(enquiry.created_at)}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t p-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
