"use client";

import React from "react";
import {
  DollarSign,
  FileText,
  ShieldCheck,
  ScrollText,
  Lock,
  AlertTriangle,
  PieChart,
  TrendingDown,
  Users,
  User,
  Download,
  CheckCircle,
  GraduationCap,
  CalendarCheck,
} from "lucide-react";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart, // ✅ Alias Recharts PieChart
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function AdminDashboard() {
  const stats = [
    {
      label: "Total Users",
      value: "1,245",
      icon: <Users size={24} />,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      label: "Active Doctors",
      value: "84",
      icon: <GraduationCap size={24} />,
      gradient: " bg-purple-500",
    },
    {
      label: "Active Patients",
      value: "1,114",
      icon: <User size={24} />,
      gradient: "bg-green-500",
    },
    // {
    //   label: "Revenue",
    //   value: "$12,456",
    //   icon: <DollarSign size={24} />,
    //   gradient: "bg-yellow-500",
    // },
    {
      label: "Total Revenue",
      value: "$124,500",
      icon: <DollarSign size={24} />,
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      label: "Active Discounts",
      value: "12",
      icon: <FileText size={24} />,
      gradient: "from-green-400 to-green-600",
    },
    {
      label: "Transactions",
      value: "1,240",
      icon: <ScrollText size={24} />,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      label: "Security Alerts",
      value: "2",
      icon: <Lock size={24} />,
      gradient: "from-red-400 to-red-600",
    },
  ];

  const revenueData = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 15000 },
    { month: "Mar", revenue: 17000 },
    { month: "Apr", revenue: 20000 },
    { month: "May", revenue: 25000 },
    { month: "Jun", revenue: 22000 },
  ];

  const paymentTrends = [
    { month: "Jan", success: 120, failed: 5 },
    { month: "Feb", success: 140, failed: 10 },
    { month: "Mar", success: 160, failed: 8 },
    { month: "Apr", success: 180, failed: 12 },
    { month: "May", success: 220, failed: 6 },
    { month: "Jun", success: 210, failed: 7 },
  ];

  const paymentMethods = [
    { name: "Credit Card", value: 400 },
    { name: "UPI", value: 300 },
    { name: "Bank Transfer", value: 200 },
    { name: "PayPal", value: 100 },
  ];

  const COLORS = ["#34d399", "#60a5fa", "#facc15", "#fb7185"];

  const topCustomers = [
    { name: "Alice", amount: "$1,200" },
    { name: "Bob", amount: "$950" },
    { name: "Charlie", amount: "$875" },
  ];

  const refunds = [
    { id: "RF12345", amount: "$50", status: "Pending", date: "2024-07-04" },
    { id: "RF12346", amount: "$75", status: "Pending", date: "2024-07-02" },
  ];

  const auditLogs = [
    { action: "Discount created", user: "Admin", date: "2024-07-01" },
    { action: "Payment refunded", user: "Admin", date: "2024-06-28" },
    { action: "Security update", user: "Admin", date: "2024-06-25" },
  ];

  const recentTransactions = [
    { id: "TX12345", amount: "$120", status: "Completed", date: "2024-07-04" },
    { id: "TX12346", amount: "$250", status: "Pending", date: "2024-07-03" },
    { id: "TX12347", amount: "$75", status: "Completed", date: "2024-07-02" },
  ];

  const revenueGoal = {
    target: 150000,
    current: 124500,
  };

  const cardStyle =
    "bg-white/90 backdrop-blur border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition transform hover:scale-[1.02]";

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 ">
        {stats.map((stat) => (
          <div key={stat.label} className={`${cardStyle} flex items-center overflow-x-auto  scrollbar-none`}>
            <div
              className={`p-2 md:p-3 rounded-full bg-gradient-to-br ${stat.gradient} text-white flex items-center justify-center shadow`}
            >
              {stat.icon}
            </div>
            <div className="ml-2 md:ml-4">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800 overflow-x-hidden">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Revenue Chart */}
      <div className={cardStyle}>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Monthly Revenue
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `$${value}`} />
            <Tooltip formatter={(value) => `$${value}`} />
            <Bar dataKey="revenue" fill="#facc15" radius={[4, 4, 0, 0]} name="Revenue" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Payment Trends */}
      <div className={cardStyle}>
        <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
          <TrendingDown className="mr-2 text-red-500" size={20} />
          Payment Failure Trends
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={paymentTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="success" stroke="#34d399" strokeWidth={2} name="Success" />
            <Line type="monotone" dataKey="failed" stroke="#f87171" strokeWidth={2} name="Failed" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Payment Methods */}
      <div className={cardStyle}>
        <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
          <PieChart className="mr-2 text-blue-500" size={20} />
          Top Payment Methods
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsPieChart>
            <Pie
              data={paymentMethods}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {paymentMethods.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>

      {/* Top Paying Customers */}
      <div className={cardStyle}>
        <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
          <Users className="mr-2 text-green-500" size={20} />
          Top Paying Customers
        </h2>
        <ul className="space-y-2">
          {topCustomers.map((cust) => (
            <li
              key={cust.name}
              className="flex justify-between border-b pb-2 last:border-b-0"
            >
              <span>{cust.name}</span>
              <span className="text-gray-500 text-sm">{cust.amount}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pending Refunds */}
      <div className={cardStyle}>
        <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
          <AlertTriangle className="mr-2 text-orange-500" size={20} />
          Pending Refunds
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Refund ID</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {refunds.map((r) => (
                <tr key={r.id} className="border-b">
                  <td className="py-2">{r.id}</td>
                  <td className="py-2">{r.amount}</td>
                  <td className="py-2">{r.status}</td>
                  <td className="py-2">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className={cardStyle}>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Recent Transactions
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Transaction ID</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((tx) => (
                <tr key={tx.id} className="border-b">
                  <td className="py-2">{tx.id}</td>
                  <td className="py-2">{tx.amount}</td>
                  <td className="py-2">{tx.status}</td>
                  <td className="py-2">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Audit Logs */}
      <div className={cardStyle}>
        <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
          <ShieldCheck className="mr-2 text-blue-500" size={20} />
          Audit Logs
        </h2>
        <ul className="space-y-2">
          {auditLogs.map((log, index) => (
            <li key={index} className="flex justify-between border-b pb-2 last:border-b-0">
              <span>{log.action}</span>
              <span className="text-gray-500 text-sm">
                {log.user} - {log.date}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Revenue Goal */}
      <div className={cardStyle}>
        <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
          <CheckCircle className="mr-2 text-green-500" size={20} />
          Monthly Revenue Goal Progress
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="h-4 rounded-full bg-gradient-to-r from-green-400 to-green-600"
            style={{
              width: `${Math.min(
                (revenueGoal.current / revenueGoal.target) * 100,
                100
              )}%`,
            }}
          ></div>
        </div>
        <p className="mt-2 text-gray-600">
          ${revenueGoal.current} of ${revenueGoal.target} reached
        </p>
      </div>

      {/* Download Reports */}
      <div className={cardStyle}>
        <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
          <Download className="mr-2 text-purple-500" size={20} />
          Download Reports
        </h2>
        <button className="px-4 py-2 bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded shadow">
          Download CSV
        </button>
      </div>
    </div>
    </div>
  );
}
