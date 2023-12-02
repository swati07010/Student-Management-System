/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
//import { useHistory } from "react-router-dom";

export default () => {
  //const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Password validation: At least one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    setIsValidPassword(passwordRegex.test(newPassword));
  };
  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setTimeout(() => {
      setSnackbarMessage("");
      // Redirect to the login page after 3 seconds
      window.location.href = "http://localhost:5000/login";
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation: Basic format check
    const emailRegex = /^\S+@\S+\.\S+$/;
    setIsValidEmail(emailRegex.test(email));

    // Perform signup logic if both email and password are valid
    if (isValidEmail && isValidPassword) {
      try {
        // Send signup request to the API
        const response = await fetch("http://localhost:5000/singup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
          // If signup is successful, store user details in local storage
          const userDetails = { name, email };
          const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
          const updatedUsers = [...existingUsers, userDetails];
          localStorage.setItem("users", JSON.stringify(updatedUsers));

          console.log("Signup successful!");

          // Your code snippet for logging
          const argsWithFormat = ["Signup successful!", userDetails];
          Function.prototype.apply.call(console.log, console, argsWithFormat);

          // Redirect to the login page
          window.location.href = "http://localhost:3000/login";
        } else {
          console.error("Signup failed. Please try again.");
        }
      } catch (error) {
        console.error("Error during signup:", error);
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Signup</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Email:
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            style={styles.input}
          />
          {!isValidEmail && (
            <p style={styles.error}>Please enter a valid email address.</p>
          )}
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={styles.input}
          />
          {!isValidPassword && (
            <p style={styles.error}>
              Password must contain at least one letter and one number (6
              characters minimum).
            </p>
          )}
        </label>
        <br />
        <button type="submit" style={styles.button}>
          Signup
        </button>
      </form>
    </div>
  );
};
const Snackbar = ({ message }) => <div style={styles.snackbar}>{message}</div>;
const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginTop: "50px",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};
