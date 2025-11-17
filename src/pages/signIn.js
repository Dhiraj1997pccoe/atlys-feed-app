import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const TEST_ACCOUNTS = [
  { email: "demo@example.com", password: "password123" },
  { email: "test@user.com", password: "testpass" },
];

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const match = TEST_ACCOUNTS.find(
      (u) => u.email === email && u.password === password
    );

    if (match) {
      localStorage.setItem("atlys-auth", "true");
      navigate("/");
      window.location.reload();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="signin-container">
      <h1 className="signin-title">Sign In</h1>

      <form className="signin-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <div className="error">{error}</div>}

        <button type="submit" className="primary-btn">Sign In</button>

        <button
          className="text-link"
          type="button"
          onClick={() => navigate("/signup")}
        >
          Don’t have an account? Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignIn;
