"use client";

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import MapPicker from "../UsableComponents/MapPicker";
import "react-toastify/dist/ReactToastify.css";
import BGImage from "../assets/BGImage.jpg";
import GreenTexture from "../assets/GreenTexture.jpg";

const Registration = () => {
  const [formData, setFormData] = useState({
    role: "Doctor",
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    country: "US",
    specialty: "",
    licenseNumber: "",
    profilePicture: "",
    clinicName: "",
    clinicAddress: "",
    location: "",
    dateOfBirth: "",
    gender: "",
    emergencyContact: "",
    medicalHistory: "",
    currentMedications: "",
    insuranceInformation: "",
    allergies: "",
    address: "",
    adminNotes: "",
  });

  const [showMap, setShowMap] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [countryList] = useState([
    { code: "US", name: "United States", dialCode: "+1" },
    { code: "UK", name: "United Kingdom", dialCode: "+44" },
    { code: "CA", name: "Canada", dialCode: "+1" },
    { code: "AUS", name: "Australia", dialCode: "+61" },
    { code: "IND", name: "India", dialCode: "+91" },
  ]);

  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");

  useEffect(() => {
    const selected = countryList.find((c) => c.code === formData.country);
    if (selected) setSelectedCountryCode(selected.dialCode);
  }, [formData.country]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "country") {
      const selected = countryList.find((c) => c.code === value);
      const dialCode = selected ? selected.dialCode : "";
      const localNumber = formData.phoneNumber.replace(/^\+\d+\s*/, "");
      setFormData({
        ...formData,
        country: value,
        phoneNumber: `${dialCode} ${localNumber}`.trim(),
      });
      setSelectedCountryCode(dialCode);
    } else if (name === "profilePicture" && files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePicture: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    if (!formData.email) return toast.error("Email is required");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password !== formData.confirmPassword)
      return toast.error("Passwords do not match");

    if (!formData.fullName) return toast.error("Full Name is required");
    if (!formData.phoneNumber) return toast.error("Phone Number is required");

    if (formData.role === "Doctor") {
      if (!formData.specialty) return toast.error("Specialty is required");
      if (!formData.licenseNumber) return toast.error("License Number is required");
      if (!formData.clinicName) return toast.error("Clinic Name is required");
      if (!formData.clinicAddress) return toast.error("Clinic Address is required");
      if (!formData.location) return toast.error("Clinic Location required");
    }
    if (formData.role === "Patient") {
      if (!formData.dateOfBirth) return toast.error("Date of Birth required");
      if (!formData.gender) return toast.error("Gender required");
      if (!formData.emergencyContact) return toast.error("Emergency Contact required");
      if (!formData.address) return toast.error("Address required");
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const selected = countryList.find((c) => c.code === formData.country);
    const dialCode = selected ? selected.dialCode : "";
    const finalPhone = `${dialCode}${formData.phoneNumber}`;

    const finalData = { ...formData, phoneNumber: finalPhone };

    try {
      console.log("Submitted Data: ", finalData);
      toast.success(`${formData.role} account created!`);
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const [gpsCoords, setGpsCoords] = useState(null);

  const handleUseGPS = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setGpsCoords([latitude, longitude]);
        setShowMap(true);
      },
      () => toast.error("Unable to get your location")
    );
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${BGImage})` }}
    >
      <ToastContainer />
      <div
        className="w-full max-w-4xl p-4 rounded-lg"
        style={{
          backgroundImage: `url(${GreenTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="backdrop-blur-sm p-4 rounded-lg">
          <h1 className="text-3xl font-bold text-green-800 mb-4 text-center">
            OneApp Registration
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4"
          >
            {/* Common Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Email"
                />
              </div>

              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Password"
                />
              </div>
              <div>
                <label>Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                >
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div>
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Confirm Password"
                />
              </div>



              {/* Common Name and Phone */}
              <div>
                <label>Full Name</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label>Phone</label>
                <div className="flex">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="border p-2 rounded-l w-1/4"
                  >
                    {countryList.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="border p-2 rounded-r w-full"
                    placeholder="1234567890"
                  />
                </div>
              </div>
            </div>

            {/* Conditional Grid: Doctor & Patient = 2 cols, Admin = 1 col */}
            <div
              className={`grid gap-4 ${formData.role === "Admin" ? "grid-cols-1" : "md:grid-cols-2"
                }`}
            >
              {formData.role === "Doctor" && (
                <>
                  <input placeholder="Specialty" name="specialty" value={formData.specialty} onChange={handleChange} className="w-full border p-2 rounded" />
                  <input placeholder="License Number" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} className="w-full border p-2 rounded" />
                  <input type="file" name="profilePicture" onChange={handleChange} className="w-full" />
                  <input placeholder="Clinic Name" name="clinicName" value={formData.clinicName} onChange={handleChange} className="w-full border p-2 rounded" />
                  <input placeholder="Clinic Address" name="clinicAddress" value={formData.clinicAddress} onChange={handleChange} className="w-full border p-2 rounded" />
                  <input placeholder="Clinic Location" name="location" value={formData.location} onChange={handleChange} className="w-full border p-2 rounded" />
                  <button
                    type="button"
                    onClick={handleUseGPS}
                    className="text-green-700 underline text-sm"
                  >
                    📍 Use GPS | Pick on Map
                  </button>
                </>
              )}

              {formData.role === "Patient" && (
                <>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full border p-2 rounded" />
                  <input placeholder="Gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full border p-2 rounded" />
                  <input placeholder="Emergency Contact" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} className="w-full border p-2 rounded" />
                  <textarea placeholder="Medical History" name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} className="w-full border p-2 rounded" />
                  <textarea placeholder="Current Medications" name="currentMedications" value={formData.currentMedications} onChange={handleChange} className="w-full border p-2 rounded" />
                  <input placeholder="Insurance Information" name="insuranceInformation" value={formData.insuranceInformation} onChange={handleChange} className="w-full border p-2 rounded" />
                  <textarea placeholder="Allergies" name="allergies" value={formData.allergies} onChange={handleChange} className="w-full border p-2 rounded" />
                  <input placeholder="Address" name="address" value={formData.address} onChange={handleChange} className="w-full border p-2 rounded" />
                </>
              )}

              {formData.role === "Admin" && (
                <textarea placeholder="Admin Notes" name="adminNotes" value={formData.adminNotes} onChange={handleChange} className="w-full border p-2 rounded" />
              )}
            </div>

            <button type="submit" disabled={loading} className="w-full bg-green-700 text-white py-2 rounded">
              {loading ? <ClipLoader size={20} color="#fff" /> : "Register"}
            </button>
          </form>

          <div className="pt-4">
            <div className="flex items-center gap-2">
              <p >
                We suggest visiting <Link to="/about-us" className="text-green-700 underline">About Us</Link> to learn more before signing up.
              </p>

              <Link
                to="/about-us"
                className="text-green-700 font-semibold hover:underline"
              >
                About Us
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <p>Already have an account?</p>
              <Link
                to="/login"
                className="text-green-700 font-semibold underline"
              >
                Sign in
              </Link>
            </div>

          </div>
        </div>
      </div>
      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xl">
            <h3 className="text-lg font-semibold mb-2">Pick Clinic Location</h3>
            <div className="h-[400px] w-full overflow-hidden rounded">
              <MapPicker
                latLng={gpsCoords}
                setAddress={(address) => {
                  setFormData({ ...formData, location: address });
                  setShowMap(false);
                }}
              />
            </div>
            <button
              onClick={() => setShowMap(false)}
              className="mt-2 text-red-600 underline text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Registration;
