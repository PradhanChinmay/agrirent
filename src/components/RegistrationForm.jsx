import React, { useState } from 'react';

import "../styles/RegistrationForm.css"


const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    password: '',
    phoneNumber: '',
    address: { pinCode: '', state: '', country: '', fullAddress: '' },
  }); // State to manage registration form data

  // Function to handle registration form submission
  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Implement your registration logic here using registrationData state
    console.log('Registration data:', registrationData);
  };

  return (
    <div className="registration-container">
      <form class="Registration-form" onSubmit={handleRegistrationSubmit}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={registrationData.username}
          onChange={(e) => setRegistrationData({ ...registrationData, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={registrationData.password}
          onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={registrationData.phoneNumber}
          onChange={(e) => setRegistrationData({ ...registrationData, phoneNumber: e.target.value })}
          required
        />
        <textarea
          type="text"
          placeholder="Full Address"
          value={registrationData.address.fullAddress}
          onChange={(e) =>
            setRegistrationData({
              ...registrationData,
              address: { ...registrationData.address, fullAddress: e.target.value },
            })
          }
          required
        />
        <input
          type="text"
          placeholder="Pin Code"
          value={registrationData.address.pinCode}
          onChange={(e) =>
            setRegistrationData({
              ...registrationData,
              address: { ...registrationData.address, pinCode: e.target.value },
            })
          }
          required
        />
        <input
          type="text"
          placeholder="State"
          value={registrationData.address.state}
          onChange={(e) =>
            setRegistrationData({
              ...registrationData,
              address: { ...registrationData.address, state: e.target.value },
            })
          }
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={registrationData.address.country}
          onChange={(e) =>
            setRegistrationData({
              ...registrationData,
              address: { ...registrationData.address, country: e.target.value },
            })
          }
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
