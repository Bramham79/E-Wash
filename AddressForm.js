import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddressForm = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("❌ No token found. Redirecting to login...");
      navigate("/login");
    }
  }, [navigate]);

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found. Please log in again.");
      navigate("/login");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/address",
        { address, city, state, pincode },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("✅ Address Saved Successfully! Redirecting...");
      navigate("/service-centers");
    } catch (error) {
      setError(error.response?.data?.message || "Error saving address");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Enter Address</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleAddressSubmit}>
        <div className="mb-3">
          <label>Address:</label>
          <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>City:</label>
          <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>State:</label>
          <input type="text" className="form-control" value={state} onChange={(e) => setState(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Pincode:</label>
          <input type="text" className="form-control" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Save & Continue</button>
      </form>
    </div>
  );
};

export default AddressForm;
