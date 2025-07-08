"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { Eye, Search } from "lucide-react";

export default function AdminPaymentManagement() {
  const paymentMethodsOptions = ["All", "Crypto (MEDV/USDC)", "Credit/Debit Card"];
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, name: "Crypto (MEDV/USDC)", enabled: true },
    { id: 2, name: "Credit/Debit Card (Stripe)", enabled: true },
  ]);

  const [discount, setDiscount] = useState(20);
  const [showDiscountModal, setShowDiscountModal] = useState(false);

  const [invoices, setInvoices] = useState([
    {
      id: "INV-001",
      patient: "Alice Johnson",
      email: "alice@example.com",
      clinic: "City Clinic",
      amount: 100,
      status: "Unpaid",
      method: "MEDV Token",
      date: "2025-07-06",
    },
    {
      id: "INV-002",
      patient: "Bob Smith",
      email: "bob@example.com",
      clinic: "Health First",
      amount: 200,
      status: "Paid",
      method: "Credit/Debit Card",
      date: "2025-07-05",
    },
    {
      id: "INV-003",
      patient: "Emma Brown",
      email: "emma@example.com",
      clinic: "Downtown Clinic",
      amount: 150,
      status: "Unpaid",
      method: "MEDV Token",
      date: "2025-07-04",
    },
    {
      id: "INV-004",
      patient: "David Lee",
      email: "david@example.com",
      clinic: "Wellness Center",
      amount: 180,
      status: "Paid",
      method: "Credit/Debit Card",
      date: "2025-07-03",
    },
  ]);

  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  const [search, setSearch] = useState("");
  const [filterMethod, setFilterMethod] = useState("All");
  const [filterDate, setFilterDate] = useState("");

  const [showAddInvoiceModal, setShowAddInvoiceModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const invoicesPerPage = 2;

  const toggleMethod = (id) => {
    setPaymentMethods((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, enabled: !m.enabled } : m
      )
    );
  };

  const handleDiscountSave = () => {
    console.log(`Saving discount: ${discount}%`);
    setShowDiscountModal(false);
  };

  const handleAddInvoice = (e) => {
    e.preventDefault();
    const form = e.target;
    const newInvoice = {
      id: form.invoiceId.value,
      patient: form.patientName.value,
      email: form.email.value,
      clinic: form.clinic.value,
      amount: parseFloat(form.amount.value),
      status: form.status.value,
      method: form.method.value,
      date: form.date.value,
    };
    setInvoices([newInvoice, ...invoices]);
    setShowAddInvoiceModal(false);
  };

  const filteredInvoices = invoices.filter((inv) => {
    const query = search.toLowerCase();
    return (
      (filterMethod === "All" || inv.method === filterMethod) &&
      (!filterDate || inv.date === filterDate) &&
      (
        inv.patient.toLowerCase().includes(query) ||
        inv.email.toLowerCase().includes(query) ||
        inv.clinic.toLowerCase().includes(query) ||
        inv.status.toLowerCase().includes(query) ||
        inv.id.toLowerCase().includes(query)
      )
    );
  });

  const totalPages = Math.ceil(filteredInvoices.length / invoicesPerPage);
  const indexOfLast = currentPage * invoicesPerPage;
  const indexOfFirst = indexOfLast - invoicesPerPage;
  const currentInvoices = filteredInvoices.slice(indexOfFirst, indexOfLast);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Payment Management</h1>

      {/* Payment Methods */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="flex items-center justify-between border p-4 rounded-lg"
            >
              <div>
                <p className="font-medium">{method.name}</p>
                <p className="text-sm text-gray-500">
                  {method.enabled ? "Enabled" : "Disabled"}
                </p>
              </div>
              <button
                onClick={() => toggleMethod(method.id)}
                className={`px-4 py-2 rounded ${method.enabled
                  ? "bg-red-100 text-red-800"
                  : "bg-green-100 text-green-800"
                  }`}
              >
                {method.enabled ? "Disable" : "Enable"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Discount Config */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-3 ">
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">MEDV Token Discount</h2>
          <p className="mb-2">
            Current Discount: <strong>{discount}%</strong>
          </p>
          <button
            onClick={() => setShowDiscountModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Update Discount
          </button>
        </div>

        {/* Add Missing Invoice */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Add Missing Invoice</h2>
          <button
            onClick={() => setShowAddInvoiceModal(true)}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Add Invoice
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-3">
        <div className="flex items-center gap-2 border px-3 py-2 rounded-md w-full md:w-1/2">
          <Search className="w-6 h-6 text-gray-500" />
          <input
            type="text"
            placeholder="Search for patients..."
            className="w-full outline-none text-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <select
            value={filterMethod}
            onChange={(e) => setFilterMethod(e.target.value)}
            className="border px-3 py-2 rounded mb-2 md:mb-0"
          >
            {paymentMethodsOptions.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="border px-3 py-2 rounded"
          />
        </div>
      </div>

      {/* Invoices Table */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Invoices</h2>
        <table className="min-w-full text-left border">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-4">Invoice ID</th>
              <th className="p-4">Patient</th>
              <th className="p-4">Email</th>
              <th className="p-4">Clinic</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Method</th>
              <th className="p-4">Date</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {currentInvoices.map((inv) => (
              <tr key={inv.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{inv.id}</td>
                <td className="p-4">{inv.patient}</td>
                <td className="p-4">{inv.email}</td>
                <td className="p-4">{inv.clinic}</td>
                <td className="p-4">${inv.amount.toFixed(2)}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${inv.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                      }`}
                  >
                    {inv.status}
                  </span>
                </td>
                <td className="p-4">{inv.method}</td>
                <td className="p-4">{format(new Date(inv.date), "yyyy-MM-dd")}</td>
                <td className="p-4">
                  <button
                    onClick={() => {
                      setSelectedInvoice(inv);
                      setShowInvoiceModal(true);
                    }}
                    className="text-blue-600 underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* View Invoice Modal */}
      {showInvoiceModal && selectedInvoice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Invoice Details: {selectedInvoice.id}
            </h2>
            <p><strong>Patient:</strong> {selectedInvoice.patient}</p>
            <p><strong>Email:</strong> {selectedInvoice.email}</p>
            <p><strong>Clinic:</strong> {selectedInvoice.clinic}</p>
            <p><strong>Amount:</strong> ${selectedInvoice.amount}</p>
            <p><strong>Status:</strong> {selectedInvoice.status}</p>
            <p><strong>Method:</strong> {selectedInvoice.method}</p>
            <p><strong>Date:</strong> {selectedInvoice.date}</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowInvoiceModal(false)}
                className="px-4 py-2 border rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Discount Modal */}
      {showDiscountModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4">Update MEDV Discount</h2>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="border px-3 py-2 rounded w-full mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowDiscountModal(false)}
                className="px-4 py-2 rounded border"
              >
                Cancel
              </button>
              <button
                onClick={handleDiscountSave}
                className="px-4 py-2 rounded bg-blue-600 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Invoice Modal */}
      {showAddInvoiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Add Invoice</h2>
            <form onSubmit={handleAddInvoice} className="space-y-4">
              <input name="invoiceId" placeholder="Invoice ID" required className="border px-3 py-2 rounded w-full" />
              <input name="patientName" placeholder="Patient Name" required className="border px-3 py-2 rounded w-full" />
              <input name="email" placeholder="Patient Email" required className="border px-3 py-2 rounded w-full" />
              <input name="clinic" placeholder="Clinic Name" required className="border px-3 py-2 rounded w-full" />
              <input name="amount" placeholder="Amount" type="number" required className="border px-3 py-2 rounded w-full" />
              <select name="status" className="border px-3 py-2 rounded w-full">
                <option>Paid</option>
                <option>Unpaid</option>
              </select>
              <select name="method" className="border px-3 py-2 rounded w-full">
                <option>MEDV Token</option>
                <option>Credit/Debit Card</option>
              </select>
              <input name="date" type="date" required className="border px-3 py-2 rounded w-full" />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowAddInvoiceModal(false)}
                  type="button"
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
