"use client";

import React from "react";
import {
  ShieldCheck,
  Lock,
  Key,
  CheckCircle,
  XCircle,
  RotateCcw,
  FileText,
  GlobeLock,
  ServerCog,
  Smartphone,
  BellRing,
  UserCheck,
} from "lucide-react";

// Button color map — unique gradient for each feature
const gradientClasses = {
  "Enforce Two-Factor Auth": "bg-gradient-to-r from-green-500 to-emerald-600",
  "Encryption Key Vault": "bg-gradient-to-r from-blue-500 to-indigo-600",
  "Trusted Devices": "bg-gradient-to-r from-pink-500 to-rose-600",
  "Session Manager": "bg-gradient-to-r from-rose-500 to-red-600",
  "GDPR Compliance": "bg-gradient-to-r from-teal-500 to-cyan-600",
  "Sensitive Action Alerts": "bg-gradient-to-r from-orange-500 to-amber-600",
  "Access Control": "bg-gradient-to-r from-lime-500 to-green-600",
  "API Key Manager": "bg-gradient-to-r from-indigo-500 to-purple-600",
  "Password Policy": "bg-gradient-to-r from-gray-500 to-slate-600",
  "Account Lockout": "bg-gradient-to-r from-rose-600 to-pink-700",
  "Private Key Backup": "bg-gradient-to-r from-purple-500 to-violet-600",
};

export default function SecuritySettings() {
  const handleRotateKeys = () => {
    alert("Encryption keys rotated securely.");
  };

  const handleEnable2FA = () => {
    alert("2FA enforced for all users.");
  };

  const handleApproveLicense = (doctorId) => {
    alert(`Doctor license ${doctorId} approved.`);
  };

  const handleRejectLicense = (doctorId) => {
    alert(`Doctor license ${doctorId} rejected.`);
  };

  const handleSessionManager = () => {
    alert("View & manage active sessions.");
  };

  const handleTrustedDevices = () => {
    alert("Manage trusted devices.");
  };

  const handleGDPRTools = () => {
    alert("Export/Delete user data for GDPR compliance.");
  };

  const handleSensitiveAlerts = () => {
    alert("Configure alerts for critical actions.");
  };

  const handleAccessControl = () => {
    alert("Manage user roles and permissions.");
  };

  const handleApiKeys = () => {
    alert("Manage API keys.");
  };

  const handlePasswordPolicy = () => {
    alert("Edit password policy.");
  };

  const handleAccountLockout = () => {
    alert("Configure account lockout.");
  };

  const handlePrivateKeyBackup = () => {
    alert("Backup/restore private keys securely.");
  };

  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        icon={<Lock className="text-green-600" />}
        title="Enforce Two-Factor Auth"
        description="Require all admins and users to use 2FA for added security."
        buttonLabel="Enforce 2FA"
        onClick={handleEnable2FA}
      />

      <Card
        icon={<Key className="text-blue-600" />}
        title="Encryption Key Vault"
        description="Manage secure encryption keys for Solana wallet operations."
        buttonLabel="Rotate Keys"
        onClick={handleRotateKeys}
        extra={
          <p className="text-xs text-gray-500 mb-2">
            Last rotated: 2024-07-01
          </p>
        }
      />

      <div className="bg-white shadow border rounded-xl p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-purple-600" />
            <h2 className="text-xl font-semibold">Doctor License Checks</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Review and verify doctor licenses for authenticity.
          </p>
          {[
            { name: "Dr. Jane Smith", id: "MED123" },
            { name: "Dr. John Doe", id: "MED456" },
          ].map((doc) => (
            <div
              key={doc.id}
              className="border p-3 rounded flex justify-between items-center mb-2"
            >
              <span>
                {doc.name} — License #{doc.id}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleApproveLicense(doc.id)}
                  className="bg-green-600 text-white px-3 py-1 rounded flex items-center gap-1 text-sm"
                >
                  <CheckCircle size={14} /> Approve
                </button>
                <button
                  onClick={() => handleRejectLicense(doc.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1 text-sm"
                >
                  <XCircle size={14} /> Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white shadow border rounded-xl p-6 flex flex-col justify-between md:col-span-2">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-indigo-600" />
            <h2 className="text-xl font-semibold">Security Audit Logs</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Recent security actions for transparency and compliance.
          </p>
          <ul className="text-sm text-gray-800 space-y-1 max-h-40 overflow-y-auto">
            <li>2024-07-05 10:12 AM — 2FA enforced for Dr. Jane Smith</li>
            <li>2024-07-04 09:30 AM — Encryption keys rotated</li>
            <li>2024-07-03 02:00 PM — Dr. John Doe license approved</li>
            <li>2024-07-02 04:45 PM — PCI audit log exported</li>
          </ul>
        </div>
      </div>

      <Card
        icon={<ShieldCheck className="text-yellow-600" />}
        title="PCI DSS Compliance"
        description="Ensure compliance for secure card payments."
        extra={
          <ul className="list-disc pl-6 text-sm text-gray-800 space-y-1">
            <li>✅ Tokenize & encrypt card data</li>
            <li>✅ No raw card storage</li>
            <li>✅ 3D Secure enforced</li>
            <li>✅ Audit trails enabled</li>
          </ul>
        }
      />

      <Card
        icon={<Smartphone className="text-pink-600" />}
        title="Trusted Devices"
        description="Manage trusted devices & review new device logins."
        buttonLabel="View Devices"
        onClick={handleTrustedDevices}
      />

      <Card
        icon={<RotateCcw className="text-rose-600" />}
        title="Session Manager"
        description="Monitor & revoke active sessions to prevent misuse."
        buttonLabel="Manage Sessions"
        onClick={handleSessionManager}
      />

      <Card
        icon={<GlobeLock className="text-teal-600" />}
        title="GDPR Compliance"
        description="Enable patients to export or delete their data securely."
        buttonLabel="GDPR Tools"
        onClick={handleGDPRTools}
      />

      <Card
        icon={<BellRing className="text-orange-600" />}
        title="Sensitive Action Alerts"
        description="Notify admins when critical actions occur."
        buttonLabel="Configure Alerts"
        onClick={handleSensitiveAlerts}
      />

      <Card
        icon={<UserCheck className="text-lime-600" />}
        title="Access Control"
        description="Manage role-based access for staff and users."
        buttonLabel="Manage Access"
        onClick={handleAccessControl}
      />

      <Card
        icon={<Key className="text-indigo-600" />}
        title="API Key Manager"
        description="Issue/revoke API keys for external integrations."
        buttonLabel="Manage API Keys"
        onClick={handleApiKeys}
      />

      <Card
        icon={<Lock className="text-gray-600" />}
        title="Password Policy"
        description="Define password strength & rotation rules."
        buttonLabel="Edit Policy"
        onClick={handlePasswordPolicy}
      />

      <Card
        icon={<ShieldCheck className="text-rose-700" />}
        title="Account Lockout"
        description="Auto-lock accounts after repeated failed logins."
        buttonLabel="Configure Lockout"
        onClick={handleAccountLockout}
      />

      <Card
        icon={<ServerCog className="text-purple-600" />}
        title="Private Key Backup"
        description="Backup & restore wallet private keys securely."
        buttonLabel="Backup Keys"
        onClick={handlePrivateKeyBackup}
      />
    </section>
  );
}

// ✅ Reusable Card with gradient buttons
const Card = ({ icon, title, description, buttonLabel, onClick, extra }) => {
  const gradient = gradientClasses[title] || "bg-blue-600"; // fallback
  return (
    <div className="bg-white shadow border rounded-xl p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        {extra}
      </div>
      {buttonLabel && (
        <button
          onClick={onClick}
          className={`${gradient} text-white px-4 py-2 rounded hover:opacity-90 transition`}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
};
