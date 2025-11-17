import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    setSuccess("Account created! Redirecting…");

    setTimeout(() => navigate("/signin"), 1200);
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>

      <form className="signup-form" onSubmit={handleSubmit}>
        
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
        {success && <div className="success">{success}</div>}

        <button type="submit" className="primary-btn">Sign Up</button>

        <button
          className="text-link"
          type="button"
          onClick={() => navigate("/signin")}
        >
          Already have an account? Sign In
        </button>
      </form>
    </div>
  );
};

export default SignUp;
