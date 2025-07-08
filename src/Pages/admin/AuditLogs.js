"use client";

import React, { useState, useEffect } from "react";
import {
  ScrollText,
  User,
  CheckCircle,
  FileText,
  Server,
} from "lucide-react";
import { format, parseISO } from "date-fns";
import { saveAs } from "file-saver";

export default function AuditManagement() {
  const [auditLogs] = useState([
    {
      id: "LOG-001",
      actionType: "Invoice Creation",
      actor: "Dr. Alice",
      timestamp: "2025-07-06T10:00:00",
      details: "Created invoice #INV-001 for patient Alice Johnson",
    },
    {
      id: "LOG-002",
      actionType: "Payment Processing",
      actor: "System",
      timestamp: "2025-07-06T10:15:00",
      details: "Processed MEDV payment TXN-001",
    },
    {
      id: "LOG-003",
      actionType: "Patient Update",
      actor: "Dr. Bob",
      timestamp: "2025-07-05T14:30:00",
      details: "Updated patient Bob Smith’s medical history",
    },
  ]);

  const [search, setSearch] = useState("");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [selectedLog, setSelectedLog] = useState(null);

  const [page, setPage] = useState(1);
  const pageSize = 5;

  const [sortKey, setSortKey] = useState("timestamp");
  const [sortOrder, setSortOrder] = useState("desc");

  const filtered = auditLogs.filter((log) => {
    const matchesSearch = Object.values(log).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    );

    const logDate = parseISO(log.timestamp);
    const matchesFrom = dateFrom ? logDate >= dateFrom : true;
    const matchesTo = dateTo ? logDate <= dateTo : true;

    return matchesSearch && matchesFrom && matchesTo;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortKey === "timestamp") {
      const dateA = parseISO(a.timestamp);
      const dateB = parseISO(b.timestamp);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    } else {
      return sortOrder === "asc"
        ? String(a[sortKey]).localeCompare(String(b[sortKey]))
        : String(b[sortKey]).localeCompare(String(a[sortKey]));
    }
  });

  const paginated = sorted.slice((page - 1) * pageSize, page * pageSize);

  const auditStats = [
    {
      label: "Total Logs",
      value: auditLogs.length,
      icon: <ScrollText size={24} />,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      label: "System Actions",
      value: auditLogs.filter((l) => l.actor === "System").length,
      icon: <CheckCircle size={24} />,
      gradient: "from-green-400 to-green-600",
    },
    {
      label: "Doctor Actions",
      value: auditLogs.filter((l) => l.actor.startsWith("Dr.")).length,
      icon: <User size={24} />,
      gradient: "from-purple-400 to-purple-600",
    },
    {
      label: "Actions Types",
      value: [...new Set(auditLogs.map((l) => l.actionType))].length,
      icon: <FileText size={24} />,
      gradient: "from-yellow-400 to-yellow-600",
    },
  ];

  const exportCSV = () => {
    const rows = sorted.map((log) => ({
      ID: log.id,
      ActionType: log.actionType,
      Actor: log.actor,
      Timestamp: format(parseISO(log.timestamp), "yyyy-MM-dd HH:mm"),
      Details: log.details,
    }));
    const header = Object.keys(rows[0]).join(",");
    const csv = rows.map((row) => Object.values(row).join(",")).join("\n");
    const blob = new Blob([header + "\n" + csv], { type: "text/csv" });
    saveAs(blob, "audit_logs.csv");
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedLog(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Audit Log Management</h1>

      {/* ✅ Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {auditStats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 rounded-xl shadow bg-gradient-to-r ${stat.gradient} text-white`}
          >
            <div className="bg-white bg-opacity-20 p-2 rounded-full">
              {stat.icon}
            </div>
            <div>
              <h4 className="text-sm">{stat.label}</h4>
              <p className="text-lg font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-4">

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/3"
        />
        <label className="block mb-1 text-md font-medium text-gray-900">
          From:
        </label>
        <input
          type="date"
          value={dateFrom ? format(dateFrom, "yyyy-MM-dd") : ""}
          onChange={(e) =>
            setDateFrom(
              e.target.value ? new Date(e.target.value + "T00:00:00") : null
            )
          }
          className="border px-3 py-2 rounded"
        />
        <label className="block mb-1 text-md font-medium text-gray-900">
          To:
        </label>
        <input
          type="date"
          value={dateTo ? format(dateTo, "yyyy-MM-dd") : ""}
          onChange={(e) =>
            setDateTo(
              e.target.value ? new Date(e.target.value + "T23:59:59") : null
            )
          }
          className="border px-3 py-2 rounded"
        />

        <button
          onClick={exportCSV}
          className="px-4 py-2 border rounded bg-blue-500 text-white"
        >
          Export CSV
        </button>
      </div>

      {/* ✅ Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-100 text-gray-600 text-sm text-left">
            <tr>
              <th className="p-3">ID</th>
              <th
                className="p-3 cursor-pointer"
                onClick={() => {
                  if (sortKey === "actionType") {
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  } else {
                    setSortKey("actionType");
                    setSortOrder("asc");
                  }
                }}
              >
                Action Type
              </th>
              <th className="p-3">Actor</th>
              <th
                className="p-3 cursor-pointer"
                onClick={() => {
                  if (sortKey === "timestamp") {
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  } else {
                    setSortKey("timestamp");
                    setSortOrder("asc");
                  }
                }}
              >
                Timestamp
              </th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {paginated.map((log) => (
              <tr key={log.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{log.id}</td>
                <td className="p-3">{log.actionType}</td>
                <td className="p-3 flex items-center gap-2">
                  {log.actor === "System" ? (
                    <Server size={16} />
                  ) : (
                    <User size={16} />
                  )}
                  {log.actor}
                </td>
                <td className="p-3">
                  {format(parseISO(log.timestamp), "yyyy-MM-dd HH:mm")}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => setSelectedLog(log)}
                    className="text-blue-600 underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          disabled={page === 1}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {page} of {Math.ceil(filtered.length / pageSize) || 1}
        </span>
        <button
          onClick={() =>
            setPage(
              page < Math.ceil(filtered.length / pageSize) ? page + 1 : page
            )
          }
          disabled={page >= Math.ceil(filtered.length / pageSize)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* ✅ Modal */}
      {selectedLog && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedLog(null)}
        >
          <div
            className="bg-white p-6 rounded-lg w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">
              Log Details: {selectedLog.id}
            </h2>
            <div className="space-y-2">
              <p>
                <strong>Action:</strong> {selectedLog.actionType}
              </p>
              <p>
                <strong>Actor:</strong> {selectedLog.actor}
              </p>
              <p>
                <strong>Timestamp:</strong>{" "}
                {format(parseISO(selectedLog.timestamp), "yyyy-MM-dd HH:mm")}
              </p>
              <p>
                <strong>Details:</strong> {selectedLog.details}
              </p>
            </div>
            <button
              onClick={() => setSelectedLog(null)}
              className="mt-4 px-4 py-2 border rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
