"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  Download,
  X,
  Edit,
  Eye,
} from "lucide-react";

const initialDoctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    email: "john@example.com",
    phone: "555-1234",
    specialty: "Cardiology",
    clinic: "City Clinic",
    status: true,
    avatar: "https://i.pravatar.cc/100?img=20",
    patients: [
      { id: 1, name: "Sevil Abbasova" },
      { id: 2, name: "Narmina Quliyeva" },
    ],
    licenseVerified: true,
    emailVerified: true,
    phoneVerified: true,
    clinicAddress: "123 Main Street",
    location: "Downtown",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    email: "jane@example.com",
    phone: "555-5678",
    specialty: "Dermatology",
    clinic: "Central Hospital",
    status: false,
    avatar: "https://i.pravatar.cc/100?img=21",
    patients: [
      { id: 3, name: "Ali Veliyev" },
    ],
    licenseVerified: false,
    emailVerified: true,
    phoneVerified: false,
    clinicAddress: "123 Main Street",
    location: "Downtown",
  },
  {
    id: 3,
    name: "Dr. John Doe",
    email: "john@example.com",
    phone: "555-1234",
    specialty: "Cardiology",
    clinic: "City Clinic",
    status: true,
    avatar: "https://i.pravatar.cc/100?img=20",
    patients: [
      { id: 1, name: "Sevil Abbasova" },
      { id: 2, name: "Narmina Quliyeva" },
    ],
    licenseVerified: true,
    emailVerified: true,
    phoneVerified: true,
    clinicAddress: "123 Main Street",
    location: "Downtown",
  },
  {
    id: 4,
    name: "Dr. Jane Smith",
    email: "jane@example.com",
    phone: "555-5678",
    specialty: "Dermatology",
    clinic: "Central Hospital",
    status: false,
    avatar: "https://i.pravatar.cc/100?img=21",
    patients: [
      { id: 3, name: "Ali Veliyev" },
    ],
    licenseVerified: false,
    emailVerified: true,
    phoneVerified: false,
    clinicAddress: "123 Main Street",
    location: "Downtown",
  },
  {
    id: 5,
    name: "Dr. John Doe",
    email: "john@example.com",
    phone: "555-1234",
    specialty: "Cardiology",
    clinic: "City Clinic",
    status: true,
    avatar: "https://i.pravatar.cc/100?img=20",
    patients: [
      { id: 1, name: "Sevil Abbasova" },
      { id: 2, name: "Narmina Quliyeva" },
    ],
    licenseVerified: true,
    emailVerified: true,
    phoneVerified: true,
    clinicAddress: "123 Main Street",
    location: "Downtown",
  },
  {
    id: 6,
    name: "Dr. Jane Smith",
    email: "jane@example.com",
    phone: "555-5678",
    specialty: "Dermatology",
    clinic: "Central Hospital",
    status: false,
    avatar: "https://i.pravatar.cc/100?img=21",
    patients: [
      { id: 3, name: "Ali Veliyev" },
    ],
    licenseVerified: false,
    emailVerified: true,
    phoneVerified: false,
    clinicAddress: "123 Main Street",
    location: "Downtown",
  },
  {
    id: 7,
    name: "Dr. John Doe",
    email: "john@example.com",
    phone: "555-1234",
    specialty: "Cardiology",
    clinic: "City Clinic",
    status: true,
    avatar: "https://i.pravatar.cc/100?img=20",
    patients: [
      { id: 1, name: "Sevil Abbasova" },
      { id: 2, name: "Narmina Quliyeva" },
    ],
    licenseVerified: true,
    emailVerified: true,
    phoneVerified: true,
    clinicAddress: "123 Main Street",
    location: "Downtown",
  },
  {
    id: 8,
    name: "Dr. Jane Smith",
    email: "jane@example.com",
    phone: "555-5678",
    specialty: "Dermatology",
    clinic: "Central Hospital",
    status: false,
    avatar: "https://i.pravatar.cc/100?img=21",
    patients: [
      { id: 3, name: "Ali Veliyev" },
    ],
    licenseVerified: false,
    emailVerified: true,
    phoneVerified: false,
    clinicAddress: "123 Main Street",
    location: "Downtown",
  },
  {
    id: 9,
    name: "Dr. John Doe",
    email: "john@example.com",
    phone: "555-1234",
    specialty: "Cardiology",
    clinic: "City Clinic",
    status: true,
    avatar: "https://i.pravatar.cc/100?img=20",
    patients: [
      { id: 1, name: "Sevil Abbasova" },
      { id: 2, name: "Narmina Quliyeva" },
    ],
    licenseVerified: true,
    emailVerified: true,
    phoneVerified: true,
    clinicAddress: "123 Main Street",
    location: "Downtown",
  },
];

export default function DoctorsManagement() {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handleSave = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newDoctor = {
      id: editingDoctor ? editingDoctor.id : Date.now(),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      specialty: formData.get("specialty"),
      clinic: formData.get("clinic"),
      status: true,
      avatar: editingDoctor?.avatar || `https://i.pravatar.cc/40?img=${doctors.length + 1}`,
      patients: editingDoctor?.patients || [],

      // ✅ preserve or default these:
      licenseVerified: editingDoctor?.licenseVerified ?? false,
      emailVerified: editingDoctor?.emailVerified ?? false,
      phoneVerified: editingDoctor?.phoneVerified ?? false,
      clinicAddress: formData.get("clinicAddress") || editingDoctor?.clinicAddress || "",
      location: formData.get("location") || editingDoctor?.location || "",
    };

    if (editingDoctor) {
      setDoctors(doctors.map((d) => (d.id === editingDoctor.id ? newDoctor : d)));
    } else {
      setDoctors([newDoctor, ...doctors]);
    }

    setShowModal(false);
    setEditingDoctor(null);
  };

  const toggleStatus = (id) => {
    setDoctors(
      doctors.map((d) =>
        d.id === id ? { ...d, status: !d.status } : d
      )
    );
  };

  const filteredDoctors = doctors.filter((d) => {
    const term = searchTerm.toLowerCase().trim();
    const nameMatch = d.name?.toLowerCase().includes(term);
    const emailMatch = d.email?.toLowerCase().includes(term);
    const clinicMatch = d.clinic?.toLowerCase().includes(term);
    const specialtyMatch = d.specialty?.toLowerCase().includes(term);
    const statusMatch = (d.status ? "active" : "inactive").includes(term);
    return nameMatch || emailMatch || clinicMatch || specialtyMatch || statusMatch;
  });

  const totalPages = Math.ceil(filteredDoctors.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const currentDoctors = filteredDoctors.slice(startIdx, endIdx);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Doctors</h1>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-3">
        <div className="flex items-center gap-2 border px-3 py-2 rounded-md w-full md:w-1/3">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search for doctors..."
            className="w-full outline-none text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 border px-3 py-2 rounded-md text-sm">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button
            onClick={() => {
              setShowModal(true);
              setEditingDoctor(null);
            }}
            className="flex items-center gap-1 bg-green-600 text-white px-3 py-2 rounded-md text-sm"
          >
            <Plus className="w-4 h-4" /> New Doctor
          </button>
          <button className="flex items-center gap-1 border px-3 py-2 rounded-md text-sm">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Specialty</th>
              <th className="p-4">Clinic</th>
              <th className="p-4">Patients</th>
              <th className="p-4">Verified</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {currentDoctors.map((d) => (
              <tr key={d.id} className="border-t hover:bg-gray-50">
                <td className="p-4 flex items-center gap-2">
                  <img src={d.avatar} alt={d.name} className="w-8 h-8 rounded-full" />
                  <div className="font-medium">{d.name}</div>
                </td>
                <td className="p-4">{d.email}</td>
                <td className="p-4">{d.phone}</td>
                <td className="p-4">{d.specialty}</td>
                <td className="p-4">{d.clinic}</td>
                <td className="p-4">{d.patients.length}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${d.licenseVerified && d.emailVerified && d.phoneVerified
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                      }`}
                  >
                    {d.licenseVerified && d.emailVerified && d.phoneVerified
                      ? "Verified"
                      : "Not Verified"}
                  </span>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => toggleStatus(d.id)}
                    className={`px-2 py-1 rounded-full text-xs ${d.status ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}
                  >
                    {d.status ? "Active" : "Inactive"}
                  </button>
                </td>
                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => {
                      setEditingDoctor(d);
                      setShowModal(true);
                    }}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <Edit className="w-4 h-4" /> Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedDoctor(d);
                      setShowViewModal(true);
                    }}
                    className="text-gray-700 hover:underline flex items-center gap-1"
                  >
                    <Eye className="w-4 h-4" /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleSave}
            className="bg-white p-6 rounded-lg w-full max-w-xl relative"
          >
            <button
              className="absolute top-2 right-2"
              onClick={() => setShowModal(false)}
              type="button"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold mb-4">
              {editingDoctor ? "Edit Doctor" : "Add New Doctor"}
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block mb-1 text-md font-medium text-gray-900">
                  Full Name
                </label>

                <input name="name" defaultValue={editingDoctor?.name || ""} required placeholder=" Full Name" className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block mb-1 text-md font-medium text-gray-900">
                  Email
                </label>
              <input name="email" defaultValue={editingDoctor?.email || ""} placeholder="Email" className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block mb-1 text-md font-medium text-gray-900">
                 Phone
                </label>
              <input name="phone" defaultValue={editingDoctor?.phone || ""} placeholder="Phone" className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block mb-1 text-md font-medium text-gray-900">
                 Specialty
                </label>
              <input name="specialty" defaultValue={editingDoctor?.specialty || ""} placeholder="Specialty" className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block mb-1 text-md font-medium text-gray-900">
                  Clinic Name
                </label>
              <input name="clinic" defaultValue={editingDoctor?.clinic || ""} placeholder="Clinic" className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block mb-1 text-md font-medium text-gray-900">
                  Status
                </label>
              <select name="status" defaultValue={editingDoctor?.status ? "true" : "false"} className="w-full border px-3 py-2 rounded">
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
              </div>
            </div>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full">Save</button>
          </form>
        </div>
      )}

      {/* View Details Modal */}
      {showViewModal && selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-2xl relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setShowViewModal(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4 mb-6 border-b pb-4">
              <img src={selectedDoctor.avatar} alt={selectedDoctor.name} className="w-20 h-20 rounded-full border" />
              <div>
                <h2 className="text-2xl font-bold">{selectedDoctor.name}</h2>
                <p className="text-gray-500">{selectedDoctor.email}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p><strong>Phone:</strong> {selectedDoctor.phone}</p>
                <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
                <p><strong>Clinic:</strong> {selectedDoctor.clinic}</p>
              </div>
              <div>
                <p><strong>Status:</strong> {selectedDoctor.status ? "Active" : "Inactive"}</p>
                <p><strong>Number of Patients:</strong> {selectedDoctor.patients.length}</p>
              </div>
              {/* ✅ NEW: Verification Status Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Verification Status</h3>
                {(selectedDoctor.licenseVerified && selectedDoctor.emailVerified && selectedDoctor.phoneVerified) ? (
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    ✅ All Verified
                  </span>
                ) : (
                  <div className="space-y-2 flex flex-col">
                    {!selectedDoctor.licenseVerified && (
                      <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        ❌ License Not Verified
                      </span>
                    )}
                    {!selectedDoctor.emailVerified && (
                      <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        ❌ Email Not Verified
                      </span>
                    )}
                    {!selectedDoctor.phoneVerified && (
                      <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        ❌ Phone Not Verified
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Patients</h3>
                {selectedDoctor.patients.length > 0 ? (
                  <ul className="space-y-1">
                    {selectedDoctor.patients.map((p) => (
                      <li key={p.id}>{p.name}</li>
                    ))}
                  </ul>
                ) : <p className="text-gray-500">No patients</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
