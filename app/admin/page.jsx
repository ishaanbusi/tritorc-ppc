"use client";

import { useState } from "react";

export default function AdminPanel() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      name: "Rahul Mehta",
      email: "rahul@epc.com",
      phone: "+91 98765 43210",
      message: "Need 8000 Nm wrench for refinery shutdown.",
      status: "NEW",
      date: "26 Jan 2025",
    },
    {
      id: 2,
      name: "Ahmed Khan",
      email: "ahmed@construction.ae",
      phone: "+971 55 234 7788",
      message: "Torque range, delivery time & rental option required.",
      status: "CONTACTED",
      date: "25 Jan 2025",
    },
    {
      id: 3,
      name: "Vikram Singh",
      email: "vikram@powerplant.in",
      phone: "+91 98111 22334",
      message: "Looking for hydraulic wrench for turbine maintenance.",
      status: "CLOSED",
      date: "23 Jan 2025",
    },
  ]);

  /* ---------------- LOGIN ---------------- */
  const handleLogin = (e) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target));

    if (form.username === "admin" && form.password === "tritorc@123") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  /* ---------------- STATUS UPDATE (UI ONLY) ---------------- */
  const updateStatus = (id, status) => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status } : e))
    );
  };

  const statusStyle = (status) => {
    if (status === "NEW") return "bg-red-100 text-red-700";
    if (status === "CONTACTED") return "bg-yellow-100 text-yellow-700";
    return "bg-green-100 text-green-700";
  };

  const filtered = enquiries.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.email.toLowerCase().includes(search.toLowerCase())
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
            name="username"
            placeholder="Username"
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

  /* ---------------- DASHBOARD ---------------- */
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-black">Enquiry Admin Panel</h1>
          <button
            onClick={() => setLoggedIn(false)}
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
                      value={e.status}
                      onChange={(ev) => updateStatus(e.id, ev.target.value)}
                      className={`px-2 py-1 rounded-full text-xs font-bold ${statusStyle(
                        e.status
                      )}`}
                    >
                      <option>NEW</option>
                      <option>CONTACTED</option>
                      <option>CLOSED</option>
                    </select>
                  </td>
                  <td className="p-3 text-gray-500">{e.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          Static admin panel • Backend integration ready
        </p>
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
