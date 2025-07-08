"use client";
import React, { useState } from "react";
import {
  ScrollText,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Bitcoin,
  CreditCard,
  Copy,
  Search,
  X
} from "lucide-react";
import jsPDF from "jspdf";
import { format, isWithinInterval, parseISO } from "date-fns";
import { saveAs } from "file-saver";

export default function TransactionManagement() {
  const transactionStats = [
    {
      label: "Total Transactions",
      value: "1,240",
      icon: <ScrollText size={24} />,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      label: "Successful Payments",
      value: "1,200",
      icon: <CheckCircle size={24} />,
      gradient: "from-green-400 to-green-600",
    },
    {
      label: "Failed Payments",
      value: "40",
      icon: <AlertTriangle size={24} />,
      gradient: "from-red-400 to-red-600",
    },
    {
      label: "Revenue (USD)",
      value: "$124,500",
      icon: <DollarSign size={24} />,
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      label: "Crypto Payments",
      value: "340",
      icon: <Bitcoin size={24} />,
      gradient: "from-purple-400 to-purple-600",
    },
    {
      label: "Card Payments",
      value: "900",
      icon: <CreditCard size={24} />,
      gradient: "from-indigo-400 to-indigo-600",
    },
  ];

  const [transactions] = useState([
    {
      id: "TXN-001",
      patient: "Alice Johnson",
      paymentMethod: "Crypto",
      amount: 120,
      discount: "20% MEDV",
      discountType: "Percentage",
      discountStartDate: "2025-07-01",
      discountEndDate: "2025-07-15",
      status: "Confirmed",
      date: "2025-07-06 10:30",
      blockchainHash: "0xabc123...",
      fromWallet: "0xUserWalletABC...",
      toWallet: "0xDoctorWalletXYZ...",
      gateway: "Raydium",
      walletBalance: 5000,
      actor: "Patient",
      action: "Payment",
    },
    {
      id: "TXN-002",
      patient: "Bob Smith",
      paymentMethod: "Card",
      amount: 250,
      discount: "None",
      discountType: "None",
      discountStartDate: "",
      discountEndDate: "",
      status: "Completed",
      date: "2025-07-05 15:45",
      cardGateway: "Stripe",
      cardMasked: "**** 5678",
      cardFee: 3.5,
      threeDSecure: true,
      transactionId: "ch_1ABC...",
      actor: "Patient",
      action: "Card Payment",
    },
  ]);

  const [search, setSearch] = useState("");
  const [amountSort, setAmountSort] = useState("none");
  const [dateRange, setDateRange] = useState([null, null]);
  const [selectedTxn, setSelectedTxn] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const exportPDF = (txn) => {
    const blob = new Blob([JSON.stringify(txn, null, 2)], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, `${txn.id}.txt`);
  };

  const markStatus = (newStatus) => {
    alert(`Marking transaction as ${newStatus}`);
  };
  const handleExport = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Transaction Report", 20, 20);

    filtered.forEach((txn, idx) => {
      const y = 30 + idx * 20;
      doc.text(
        `${txn.id} | ${txn.patient} | $${txn.amount} | ${txn.status}`,
        20,
        y
      );
    });

    doc.save("transactions.pdf");
  };

  const filtered = transactions
    .filter((txn) =>
      Object.values(txn).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    )
    .filter((txn) => {
      if (dateRange[0] && dateRange[1]) {
        const txDate = new Date(txn.date);
        return isWithinInterval(txDate, {
          start: dateRange[0],
          end: dateRange[1],
        });
      }
      return true;
    });

  const sortedFiltered = [...filtered].sort((a, b) => {
    if (amountSort === "low") return a.amount - b.amount;
    if (amountSort === "high") return b.amount - a.amount;
    return 0;
  });

  const pageData = sortedFiltered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Transaction Management</h1>

      {/* ✅ Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {transactionStats.map((stat, index) => (
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
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-3">
        <div className="flex items-center gap-2 border px-3 py-2 rounded-md w-full md:w-1/2">
          <Search className="w-6 h-6 text-gray-500" />
          <input
            type="text"
            className="w-full outline-none text-md"
            placeholder="Search by ID, patient, method, status..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <select
            value={amountSort}
            onChange={(e) => setAmountSort(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="none">Sort by Amount</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>

          <input
            type="date"
            onChange={(e) =>
              setDateRange([dateRange[0], new Date(e.target.value)])
            }
            className="border px-3 py-2 rounded"
          />
        </div>
      </div>

      {/* ✅ Table */}
      <table className="min-w-full border">
        <thead className="bg-gray-100 text-gray-600 text-sm">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Patient</th>
            <th className="p-3">Method</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
            <th className="p-3">Date</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {pageData.map((txn) => (
            <tr key={txn.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{txn.id}</td>
              <td className="p-3">{txn.patient}</td>
              <td className="p-3">{txn.paymentMethod}</td>
              <td className="p-3">${txn.amount}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${txn.status === "Confirmed" || txn.status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : txn.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                    }`}
                >
                  {txn.status}
                </span>
              </td>
              <td className="p-3">
                {format(new Date(txn.date), "yyyy-MM-dd HH:mm")}
              </td>
              <td className="p-3">
                <button
                  onClick={() => setSelectedTxn(txn)}
                  className="text-blue-600 underline"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded"
        >
          Prev
        </button>
        <p>
          Page {currentPage} of{" "}
          {Math.ceil(sortedFiltered.length / itemsPerPage)}
        </p>
        <button
          onClick={() =>
            setCurrentPage((p) =>
              Math.min(
                p + 1,
                Math.ceil(sortedFiltered.length / itemsPerPage)
              )
            )
          }
          disabled={
            currentPage === Math.ceil(sortedFiltered.length / itemsPerPage)
          }
          className="px-3 py-1 border rounded"
        >
          Next
        </button>
      </div>

      {/* ✅ Modal */}
      {selectedTxn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="relative bg-white p-6 rounded-lg w-full max-w-4xl">
            {/* Close Icon */}
            <button
              onClick={() => setSelectedTxn(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-4">
              Transaction: {selectedTxn.id}
            </h2>

            {/* Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Main Info */}
              <div className="space-y-2">
                <p><strong>Patient:</strong> {selectedTxn.patient}</p>
                <p><strong>Amount:</strong> ${selectedTxn.amount}</p>
                <p><strong>Status:</strong> {selectedTxn.status}</p>
                <p><strong>Method:</strong> {selectedTxn.paymentMethod}</p>
                <p><strong>Discount:</strong> {selectedTxn.discount}</p>
                <p><strong>Discount Type:</strong> {selectedTxn.discountType}</p>
                {selectedTxn.discountType !== "None" && (
                  <>
                    <p><strong>Valid From:</strong> {selectedTxn.discountStartDate}</p>
                    <p><strong>Valid To:</strong> {selectedTxn.discountEndDate}</p>
                  </>
                )}
                <p><strong>Actor:</strong> {selectedTxn.actor}</p>
                <p><strong>Action:</strong> {selectedTxn.action}</p>
              </div>

              {/* Right: Conditional & Actions */}
              <div className="space-y-4">
                {selectedTxn.paymentMethod === "Crypto" && (
                  <div className="bg-gray-50 p-3 rounded">
                    <h3 className="font-semibold mb-2">Blockchain Info</h3>
                    <p><strong>Hash:</strong> {selectedTxn.blockchainHash}</p>
                    <p><strong>From:</strong> {selectedTxn.fromWallet}</p>
                    <p><strong>To:</strong> {selectedTxn.toWallet}</p>
                    <p><strong>Wallet Balance:</strong> {selectedTxn.walletBalance} MEDV</p>
                  </div>
                )}

                {selectedTxn.paymentMethod === "Card" && (
                  <div className="bg-gray-50 p-3 rounded">
                    <h3 className="font-semibold mb-2">Card Info</h3>
                    <p><strong>Masked:</strong> {selectedTxn.cardMasked}</p>
                    <p><strong>Fee:</strong> ${selectedTxn.cardFee}</p>
                    <p><strong>3D Secure:</strong> {selectedTxn.threeDSecure ? "Yes" : "No"}</p>
                    <p><strong>Gateway:</strong> {selectedTxn.cardGateway}</p>
                    <p><strong>Transaction ID:</strong> {selectedTxn.transactionId}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="grid grid-clo gap-2">
                  <button
                    onClick={() =>
                      copyToClipboard(selectedTxn.blockchainHash || selectedTxn.transactionId)
                    }
                    className="px-3 py-2 bg-blue-600 text-white rounded"
                  >
                    Copy Hash / ID
                  </button>

                  <button
                    onClick={() => exportPDF(selectedTxn)}
                    className="px-3 py-2 bg-green-600 text-white rounded"
                  >
                    Export as TXT
                  </button>

                  <button
                    onClick={() => markStatus("Confirmed")}
                    className="px-3 py-2 bg-yellow-500 text-white rounded"
                  >
                    Mark Confirmed
                  </button>

                  <button
                    onClick={() => markStatus("Failed")}
                    className="px-3 py-2 bg-red-600 text-white rounded"
                  >
                    Mark Failed
                  </button>


                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
