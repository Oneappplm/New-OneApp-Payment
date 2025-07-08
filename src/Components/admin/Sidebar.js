import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  User,
  DollarSign,
  FileText,
  Layers,
  Lock,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin/dashboard",
    },
    {
      id: "doctors",
      label: "Doctors",
      icon: <Users size={20} />,
      path: "/admin/doctors",
    },
    {
      id: "patients",
      label: "Patients",
      icon: <User size={20} />,
      path: "/admin/patients",
    },
    {
      id: "payments",
      label: "Payments",
      icon: <DollarSign size={20} />,
      path: "/admin/payments",
    },
    {
      id: "discounts",
      label: "Discounts",
      icon: <FileText size={20} />,
      path: "/admin/discounts",
    },
    {
      id: "transactions",
      label: "Transaction Logs",
      icon: <Layers size={20} />,
      path: "/admin/transactions",
    },
    {
      id: "audit",
      label: "Audit Logs",
      icon: <Shield size={20} />,
      path: "/admin/audit",
    },
    {
      id: "security",
      label: "Security",
      icon: <Lock size={20} />,
      path: "/admin/security",
    },
  ];

  return (
    <div
      className={`bg-gray-800 text-white transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      } relative`}
    >
      <div className="flex items-center justify-between p-6 border-b border-gray-700">
        {!collapsed && <h1 className="text-2xl font-bold">Admin Panel</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded hover:bg-gray-700"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <nav className="pt-6">
        <ul>
          {menuItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);

            return (
              <li key={item.id} className="relative group">
                <Link
                  to={item.path}
                  className={`flex items-center w-full p-4 pl-4 hover:bg-gray-700 transition-colors ${
                    isActive ? "bg-gray-700" : ""
                  }`}
                >
                  {item.icon}
                  {!collapsed && (
                    <span className="ml-4 text-lg">{item.label}</span>
                  )}
                </Link>

                {collapsed && (
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-max px-2 py-1 rounded bg-gray-700 text-sm opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-20">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
