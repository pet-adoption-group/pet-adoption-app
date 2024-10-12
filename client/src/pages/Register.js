// src/pages/Register.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  return (
    <div>
      <h2>Register Page</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
