"use client";

import React, { useState } from "react";
import {
    Search,
    Filter,
    Plus,
    Download,
    X,
    Edit,
    FileText,
    Eye,
} from "lucide-react";

const initialPatients = [
    {
        id: 1,
        name: "Sevil Abbasova",
        idNumber: "17244927",
        status: true,
        dob: "1995-05-10",
        gender: "Female",
        phone: "555-1234",
        email: "sevil@example.com",
        address: "123 Street, City",
        insurance: "Pasha",
        nextAppt: "2024-07-29",
        lastVisit: "2024-07-01",
        avatar: "https://i.pravatar.cc/100?img=1",
        medicalHistory: "Asthma",
        allergies: "Pollen",
        doctor: { name: "Dr. John Doe", clinic: "City Clinic" },
        payments: [
            { id: 1, date: "2024-07-01", amount: 200, currency: "USD", status: "Paid" },
        ],
        invoices: [
            { id: "INV-001", date: "2024-07-01", amount: 200, status: "Paid" },
        ],
        emailVerified: true,
        phoneVerified: true,
    },
    {
        id: 2,
        name: "Narmina Quliyeva",
        idNumber: "72987821",
        status: false,
        dob: "1990-08-15",
        gender: "Male",
        phone: "555-5678",
        email: "narmina@example.com",
        address: "456 Avenue, City",
        insurance: "Ateshgah",
        nextAppt: "2024-07-24",
        lastVisit: "2024-07-02",
        avatar: "https://i.pravatar.cc/100?img=2",
        medicalHistory: "Diabetes",
        allergies: "Penicillin",
        doctor: { name: "Dr. Jane Smith", clinic: "Central Hospital" },
        payments: [],
        invoices: [],
        emailVerified: false,
        phoneVerified: false,
    },
    {
        id: 3,
        name: "Sevil Abbasova",
        idNumber: "17244927",
        status: true,
        dob: "1995-05-10",
        gender: "Female",
        phone: "555-1234",
        email: "sevil@example.com",
        address: "123 Street, City",
        insurance: "Pasha",
        nextAppt: "2024-07-29",
        lastVisit: "2024-07-01",
        avatar: "https://i.pravatar.cc/100?img=1",
        medicalHistory: "Asthma",
        allergies: "Pollen",
        doctor: { name: "Dr. John Doe", clinic: "City Clinic" },
        payments: [
            { id: 1, date: "2024-07-01", amount: 200, currency: "USD", status: "Paid" },
        ],
        invoices: [
            { id: "INV-001", date: "2024-07-01", amount: 200, status: "Paid" },
        ],
        emailVerified: true,
        phoneVerified: false,
    },
    {
        id: 4,
        name: "Narmina Quliyeva",
        idNumber: "72987821",
        status: false,
        dob: "1990-08-15",
        gender: "Male",
        phone: "555-5678",
        email: "narmina@example.com",
        address: "456 Avenue, City",
        insurance: "Ateshgah",
        nextAppt: "2024-07-24",
        lastVisit: "2024-07-02",
        avatar: "https://i.pravatar.cc/100?img=2",
        medicalHistory: "Diabetes",
        allergies: "Penicillin",
        doctor: { name: "Dr. Jane Smith", clinic: "Central Hospital" },
        payments: [],
        invoices: [],
        emailVerified: true,
        phoneVerified: true,
    },
    {
        id: 1,
        name: "Sevil Abbasova",
        idNumber: "17244927",
        status: true,
        dob: "1995-05-10",
        gender: "Female",
        phone: "555-1234",
        email: "sevil@example.com",
        address: "123 Street, City",
        insurance: "Pasha",
        nextAppt: "2024-07-29",
        lastVisit: "2024-07-01",
        avatar: "https://i.pravatar.cc/100?img=1",
        medicalHistory: "Asthma",
        allergies: "Pollen",
        doctor: { name: "Dr. John Doe", clinic: "City Clinic" },
        payments: [
            { id: 1, date: "2024-07-01", amount: 200, currency: "USD", status: "Paid" },
        ],
        invoices: [
            { id: "INV-001", date: "2024-07-01", amount: 200, status: "Paid" },
        ],
        emailVerified: false,
        phoneVerified: true,
    },
    {
        id: 5,
        name: "Narmina Quliyeva",
        idNumber: "72987821",
        status: false,
        dob: "1990-08-15",
        gender: "Male",
        phone: "555-5678",
        email: "narmina@example.com",
        address: "456 Avenue, City",
        insurance: "Ateshgah",
        nextAppt: "2024-07-24",
        lastVisit: "2024-07-02",
        avatar: "https://i.pravatar.cc/100?img=2",
        medicalHistory: "Diabetes",
        allergies: "Penicillin",
        doctor: { name: "Dr. Jane Smith", clinic: "Central Hospital" },
        payments: [],
        invoices: [],
        emailVerified: true,
        phoneVerified: true,
    },
    {
        id: 6,
        name: "Sevil Abbasova",
        idNumber: "17244927",
        status: true,
        dob: "1995-05-10",
        gender: "Female",
        phone: "555-1234",
        email: "sevil@example.com",
        address: "123 Street, City",
        insurance: "Pasha",
        nextAppt: "2024-07-29",
        lastVisit: "2024-07-01",
        avatar: "https://i.pravatar.cc/100?img=1",
        medicalHistory: "Asthma",
        allergies: "Pollen",
        doctor: { name: "Dr. John Doe", clinic: "City Clinic" },
        payments: [
            { id: 1, date: "2024-07-01", amount: 200, currency: "USD", status: "Paid" },
        ],
        invoices: [
            { id: "INV-001", date: "2024-07-01", amount: 200, status: "Paid" },
        ],
        emailVerified:false,
        phoneVerified: false,
    },
    {
        id: 7,
        name: "Narmina Quliyeva",
        idNumber: "72987821",
        status: false,
        dob: "1990-08-15",
        gender: "Male",
        phone: "555-5678",
        email: "narmina@example.com",
        address: "456 Avenue, City",
        insurance: "Ateshgah",
        nextAppt: "2024-07-24",
        lastVisit: "2024-07-02",
        avatar: "https://i.pravatar.cc/100?img=2",
        medicalHistory: "Diabetes",
        allergies: "Penicillin",
        doctor: { name: "Dr. Jane Smith", clinic: "Central Hospital" },
        payments: [],
        invoices: [],
        emailVerified: true,
        phoneVerified: true,
    },
    {
        id: 8,
        name: "Sevil Abbasova",
        idNumber: "17244927",
        status: true,
        dob: "1995-05-10",
        gender: "Female",
        phone: "555-1234",
        email: "sevil@example.com",
        address: "123 Street, City",
        insurance: "Pasha",
        nextAppt: "2024-07-29",
        lastVisit: "2024-07-01",
        avatar: "https://i.pravatar.cc/100?img=1",
        medicalHistory: "Asthma",
        allergies: "Pollen",
        doctor: { name: "Dr. John Doe", clinic: "City Clinic" },
        payments: [
            { id: 1, date: "2024-07-01", amount: 200, currency: "USD", status: "Paid" },
        ],
        invoices: [
            { id: "INV-001", date: "2024-07-01", amount: 200, status: "Paid" },
        ],
        emailVerified: true,
        phoneVerified: true,
    },
    {
        id: 9,
        name: "Narmina Quliyeva",
        idNumber: "72987821",
        status: false,
        dob: "1990-08-15",
        gender: "Male",
        phone: "555-5678",
        email: "narmina@example.com",
        address: "456 Avenue, City",
        insurance: "Ateshgah",
        nextAppt: "2024-07-24",
        lastVisit: "2024-07-02",
        avatar: "https://i.pravatar.cc/100?img=2",
        medicalHistory: "Diabetes",
        allergies: "Penicillin",
        doctor: { name: "Dr. Jane Smith", clinic: "Central Hospital" },
        payments: [],
        invoices: [],
        emailVerified: true,
        phoneVerified: true,
    },

];

export default function PatientsManagement() {
    const [patients, setPatients] = useState(initialPatients);
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [editingPatient, setEditingPatient] = useState(null);
    const [selectedPatient, setSelectedPatient] = useState(null);
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    const handleSave = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newPatient = {
            id: editingPatient ? editingPatient.id : patients.length + 1,
            name: formData.get("name"),
            idNumber: editingPatient?.idNumber || Math.floor(Math.random() * 100000000).toString(),
            status: formData.get("status") === "true",
            dob: formData.get("dob"),
            gender: formData.get("gender"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            address: formData.get("address"),
            insurance: formData.get("insurance"),
            nextAppt: formData.get("nextAppt"),
            lastVisit: formData.get("lastVisit"),
            avatar: editingPatient?.avatar || `https://i.pravatar.cc/100?img=${patients.length + 1}`,
            medicalHistory: formData.get("medicalHistory"),
            allergies: formData.get("allergies"),
            doctor: editingPatient?.doctor || { name: "Dr. Example", clinic: "Demo Clinic" },
            payments: editingPatient?.payments || [],
            invoices: editingPatient?.invoices || [],
        };

        if (editingPatient) {
            setPatients(patients.map((p) => (p.id === editingPatient.id ? newPatient : p)));
        } else {
            setPatients([newPatient, ...patients]);
        }

        setShowModal(false);
        setEditingPatient(null);
    };

    const toggleStatus = (id) => {
        setPatients(
            patients.map((p) =>
                p.id === id ? { ...p, status: !p.status } : p
            )
        );
    };

    const filteredPatients = patients.filter((p) => {
        const term = searchTerm.toLowerCase().trim();

        const nameMatch = p.name?.toLowerCase().includes(term);
        const emailMatch = p.email?.toLowerCase().includes(term);
        const statusMatch = (p.status ? "active" : "inactive").includes(term);
        const doctorMatch = p.doctor.name?.toLowerCase().includes(term);
        const clinicMatch = p.doctor.clinic?.toLowerCase().includes(term);

        const genderMatch = term === "male" || term === "female"
            ? p.gender?.toLowerCase() === term // exact match only
            : p.gender?.toLowerCase().includes(term); // fallback for partial if needed

        return (
            nameMatch ||
            emailMatch ||
            statusMatch ||
            doctorMatch ||
            clinicMatch ||
            genderMatch
        );
    });



    const totalPages = Math.ceil(filteredPatients.length / pageSize);
    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    const currentPatients = filteredPatients.slice(startIdx, endIdx);

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
                <h1 className="text-2xl font-semibold">Patients</h1>
            </div>

            {/* Search & Actions */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-3">
                <div className="flex items-center gap-2 border px-3 py-2 rounded-md w-full md:w-1/3">
                    <Search className="w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search for patients..."
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
                            setEditingPatient(null);
                        }}
                        className="flex items-center gap-1 bg-green-600 text-white px-3 py-2 rounded-md text-sm"
                    >
                        <Plus className="w-4 h-4" /> New Patient
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
                            <th className="p-4">Gender</th>
                            <th className="p-4">Doctor</th>
                            <th className="p-4">Insurance</th>
                            <th className="p-4">Next Appt</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {currentPatients.map((p) => (
                            <tr key={p.id} className="border-t hover:bg-gray-50">
                                <td className="p-4 flex items-center gap-2">
                                    <img src={p.avatar} alt={p.name} className="w-8 h-8 rounded-full" />
                                    <div className="font-medium">{p.name}</div>
                                </td>

                                <td className="p-4">{p.email}</td>
                                <td className="p-4">{p.gender} </td>
                                <td className="p-4">{p.doctor.name}</td>
                                <td className="p-4">{p.insurance}</td>
                                <td className="p-4">{p.nextAppt || "-"}</td>
                                <td className="p-4">
                                    <button
                                        onClick={() => toggleStatus(p.id)}
                                        className={`px-2 py-1 rounded-full text-xs ${p.status ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                                            }`}
                                    >
                                        {p.status ? "Active" : "Inactive"}
                                    </button>
                                </td>
                                <td className="p-4 flex gap-2">
                                    <button
                                        onClick={() => {
                                            setEditingPatient(p);
                                            setShowModal(true);
                                        }}
                                        className="text-blue-600 hover:underline flex items-center gap-1"
                                    >
                                        <Edit className="w-4 h-4" /> Edit
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSelectedPatient(p);
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
            {/* Pagination Controls */}
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
                        className="bg-white p-6 rounded-lg w-full max-w-4xl relative"
                    >
                        <button
                            className="absolute top-2 right-2"
                            onClick={() => setShowModal(false)}
                            type="button"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h2 className="text-xl font-semibold mb-4">
                            {editingPatient ? "Edit Patient" : "Add New Patient"}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div>
                                    <label className="block mb-1 text-md font-medium text-gray-900">
                                        Full Name
                                    </label>
                                    <input name="name" defaultValue={editingPatient?.name || ""} required placeholder="Full Name" className="w-full border px-3 py-2 rounded" />
                                </div>
                                <div>
                                    <div>
                                        <label className="block mb-1 text-md font-medium text-gray-900">
                                            Date of Birth
                                        </label>
                                        <input name="dob" defaultValue={editingPatient?.dob || ""} type="date" placeholder="Date of Birth" className="w-full border px-3 py-2 rounded" />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-md font-medium text-gray-900">
                                            Gender
                                        </label>
                                        <input name="gender" defaultValue={editingPatient?.gender || ""} placeholder="Gender" className="w-full border px-3 py-2 rounded" />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-md font-medium text-gray-900">
                                            Phone Number
                                        </label>
                                        <input name="phone" defaultValue={editingPatient?.phone || ""} placeholder="Phone Number" className="w-full border px-3 py-2 rounded" />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-md font-medium text-gray-900">
                                            Email
                                        </label>
                                        <input name="email" defaultValue={editingPatient?.email || ""} placeholder="Email" className="w-full border px-3 py-2 rounded" />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-md font-medium text-gray-900">
                                            Address
                                        </label>
                                        <input name="address" defaultValue={editingPatient?.address || ""} placeholder="Address" className="w-full border px-3 py-2 rounded" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <label className="block mb-1 text-md font-medium text-gray-900">
                                        Insurance
                                    </label>
                                    <input name="insurance" defaultValue={editingPatient?.insurance || ""} placeholder="Insurance" className="w-full border px-3 py-2 rounded" />
                                </div>
                                <div>
                                    <label className="block mb-1 text-md font-medium text-gray-900">
                                        Next Appointment
                                    </label>
                                    <input name="nextAppt" defaultValue={editingPatient?.nextAppt || ""} type="date" placeholder="Next Appointment" className="w-full border px-3 py-2 rounded" />
                                </div>
                                <div>
                                    <label className="block mb-1 text-md font-medium text-gray-900">
                                        Last Visit
                                    </label>
                                    <input name="lastVisit" defaultValue={editingPatient?.lastVisit || ""} type="date" placeholder="Last Visit" className="w-full border px-3 py-2 rounded" />
                                </div>
                                <div>
                                    <label className="block mb-1 text-md font-medium text-gray-900">
                                        Medical History
                                    </label>
                                    <input name="medicalHistory" defaultValue={editingPatient?.medicalHistory || ""} placeholder="Medical History" className="w-full border px-3 py-2 rounded" />
                                </div>
                                <div>
                                    <label className="block mb-1 text-md font-medium text-gray-900">
                                        Allergies
                                    </label>
                                    <input name="allergies" defaultValue={editingPatient?.allergies || ""} placeholder="Allergies" className="w-full border px-3 py-2 rounded" />
                                </div>
                                <div>
                                    <label className="block mb-1 text-md font-medium text-gray-900">
                                        Status
                                    </label>
                                    <select name="status" defaultValue={editingPatient?.status ? "true" : "false"} className="w-full border px-3 py-2 rounded">
                                        <option value="true">Active</option>
                                        <option value="false">Inactive</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full">
                            Save
                        </button>
                    </form>
                </div>
            )}

            {/* View Details Modal */}
            {showViewModal && selectedPatient && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-6 rounded-xl w-full max-w-2xl relative shadow-lg overflow-y-auto max-h-[90vh]">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-black"
                            onClick={() => setShowViewModal(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="flex items-center gap-4 mb-6 border-b pb-4">
                            <img src={selectedPatient.avatar} alt={selectedPatient.name} className="w-20 h-20 rounded-full border" />
                            <div>
                                <h2 className="text-2xl font-bold">{selectedPatient.name}</h2>
                                <p className="text-gray-500">{selectedPatient.email}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <p><strong>ID Number:</strong> {selectedPatient.idNumber}</p>
                                <p><strong>Phone:</strong> {selectedPatient.phone}</p>
                                <p><strong>DOB:</strong> {selectedPatient.dob}</p>
                                <p><strong>Gender:</strong> {selectedPatient.gender}</p>
                                <p><strong>Insurance:</strong> {selectedPatient.insurance}</p>
                            </div>
                            <div>
                                <p><strong>Status:</strong> {selectedPatient.status ? "Active" : "Inactive"}</p>
                                <p><strong>Address:</strong> {selectedPatient.address}</p>
                                <p><strong>Next Appointment:</strong> {selectedPatient.nextAppt || "-"}</p>
                                <p><strong>Last Visit:</strong> {selectedPatient.lastVisit || "-"}</p>
                                <p><strong>Medical History:</strong> {selectedPatient.medicalHistory || "-"}</p>
                                <p><strong>Allergies:</strong> {selectedPatient.allergies || "-"}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">Doctor & Clinic</h3>
                                <p><strong>Doctor:</strong> {selectedPatient.doctor.name}</p>
                                <p><strong>Clinic:</strong> {selectedPatient.doctor.clinic}</p>
                            </div>
                            {/* ✅ NEW: Verification Status Section */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">Verification Status</h3>
                                {(selectedPatient.emailVerified && selectedPatient.phoneVerified) ? (
                                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                        ✅ All Verified
                                    </span>
                                ) : (
                                    <div className="space-y-2 flex flex-col">
                                        {!selectedPatient.emailVerified && (
                                            <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                                                ❌ Email Not Verified
                                            </span>
                                        )}
                                        {!selectedPatient.phoneVerified && (
                                            <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                                                ❌ Phone Not Verified
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Payments</h3>
                            {selectedPatient.payments.length > 0 ? (
                                <ul className="space-y-1">
                                    {selectedPatient.payments.map((pay) => (
                                        <li key={pay.id}>{pay.date}: <strong>{pay.amount} {pay.currency}</strong> ({pay.status})</li>
                                    ))}
                                </ul>
                            ) : <p className="text-gray-500">No payments</p>}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Invoices</h3>
                            {selectedPatient.invoices.length > 0 ? (
                                <ul className="space-y-1">
                                    {selectedPatient.invoices.map((inv) => (
                                        <li key={inv.id}>{inv.date}: <strong>${inv.amount}</strong> ({inv.status})</li>
                                    ))}
                                </ul>
                            ) : <p className="text-gray-500">No invoices</p>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
