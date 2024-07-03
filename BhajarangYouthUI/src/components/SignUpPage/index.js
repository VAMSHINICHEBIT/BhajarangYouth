// src/components/SignUpPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    phone: "",
    pincode: "",
    dob: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!formData.username) {
      errors.username = "Username is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.address) {
      errors.address = "Address is required";
    }
    if (!formData.phone) {
      errors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!formData.pincode) {
      errors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      errors.pincode = "Invalid pincode";
    }
    if (!formData.dob) {
      errors.dob = "Date of Birth is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Bhajrang Youth Association</h2>
        {Object.keys(formErrors).length > 0 && (
          <div className="error-msg">Please Enter Valid Details:</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className={`form-group ${formErrors.firstName && "error"}`}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {formErrors.firstName && (
              <span className="error-msg">{formErrors.firstName}</span>
            )}
          </div>
          <div className={`form-group ${formErrors.lastName && "error"}`}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {formErrors.lastName && (
              <span className="error-msg">{formErrors.lastName}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            {formErrors.dob && (
              <span className="error-msg">{formErrors.dob}</span>
            )}
          </div>
          <div className={`form-group ${formErrors.username && "error"}`}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {formErrors.username && (
              <span className="error-msg">{formErrors.username}</span>
            )}
          </div>
          <div className={`form-group ${formErrors.email && "error"}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span className="error-msg">{formErrors.email}</span>
            )}
          </div>
          <div className={`form-group ${formErrors.address && "error"}`}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {formErrors.address && (
              <span className="error-msg">{formErrors.address}</span>
            )}
          </div>
          <div className={`form-group ${formErrors.phone && "error"}`}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {formErrors.phone && (
              <span className="error-msg">{formErrors.phone}</span>
            )}
          </div>
          <div className={`form-group ${formErrors.pincode && "error"}`}>
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
            {formErrors.pincode && (
              <span className="error-msg">{formErrors.pincode}</span>
            )}
          </div>
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
