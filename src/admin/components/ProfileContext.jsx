import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileContext = () => {
  const [name, setName] = useState("Kumar Vishesh");
  const [phone, setPhone] = useState("+91 9876543211");
  const [email, setEmail] = useState("kumar@gmail.com");
  const [gender, setGender] = useState("Male");
  const [username, setUsername] = useState("kumar_here");
  const [password, setPassword] = useState("********");
  const [role, setRole] = useState("Admin");
  const [companyName, setCompanyName] = useState("Doe Enterprises");
  const [address, setAddress] = useState("123 Main St, Springfield");

  const [isEditable, setIsEditable] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Handle Edit button click
  const handleEditClick = () => {
    setIsEditable(true);
    setIsUpdating(true);
  };

  // Handle form submission
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      phone,
      email,
      gender,
      username,
      password,
      role,
      companyName,
      address,
    });

    setIsEditable(false);
    setIsUpdating(false);
  };

  // Conditional styling for disabled inputs
  const disabledStyle = {
    backgroundColor: "var(--grey)",
    color: "#ccccc",
  };

  return (
    <main>
      <div className="header">
        <div className="left">
          <h1>Profile</h1>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "1.5px",
          backgroundColor: "var(--grey)",
          marginBottom: "20px",
        }}
      ></div>
      <div className="profile-container">
        <img
          className="profile-image"
          src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
          alt="Profile"
        />
        <div className="profile-details">
          <h3 className="name-text">Kumar Vishesh</h3>
          <p className="role-text">Admin User</p>
        </div>
        <button className="website-button" onClick={handleEditClick}>
          Edit Profile
        </button>
      </div>
      <div
        style={{
          width: "100%",
          height: "1.5px",
          backgroundColor: "var(--grey)",
          marginBottom: "30px",
          marginTop: "20px",
        }}
      ></div>

      <form onSubmit={handleUpdateSubmit} className="profile-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditable}
            style={!isEditable ? disabledStyle : {}}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={!isEditable}
            style={!isEditable ? disabledStyle : {}}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEditable}
            style={!isEditable ? disabledStyle : {}}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            disabled={!isEditable}
            style={!isEditable ? disabledStyle : {}}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={!isEditable}
            style={!isEditable ? disabledStyle : {}}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={!isEditable}
            style={!isEditable ? disabledStyle : {}}
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            disabled={!isEditable}
            style={!isEditable ? disabledStyle : {}}
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            {/* Add more roles as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            disabled={!isEditable}
            style={!isEditable ? disabledStyle : {}}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            disabled={!isEditable}
            style={!isEditable ? disabledStyle : {}}
          />
        </div>
        <div className="submit-container">
          <button
            type="submit"
            className="submit-button"
            disabled={!isUpdating}
          >
            UPDATE PROFILE
          </button>
        </div>
      </form>
    </main>
  );
};

export default ProfileContext;
