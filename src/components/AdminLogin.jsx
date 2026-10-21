
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000/api";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(`${API}/admin/login`, {
        email,
        password,
      });

      if (response.data.success && response.data.token) {
        sessionStorage.setItem(
          "adminToken",
          response.data.token
        );

        sessionStorage.setItem(
          "adminDetails",
          JSON.stringify(response.data.admin)
        );

        navigate("/admin/dashboard", { replace: true });
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your connection."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleLogin} style={styles.card}>
        <div style={styles.logo}>MB</div>

        <p style={styles.eyebrow}>MADURAI BASHA</p>
        <h1 style={styles.heading}>Admin Login</h1>
        <p style={styles.description}>
          Sign in to manage your restaurant
        </p>

        <label style={styles.label}>Email address</label>
        <input
          type="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter admin email"
          required
          style={styles.input}
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
          style={styles.input}
        />

        {error && (
          <p role="alert" style={styles.error}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={styles.button}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
          style={styles.back}
        >
          ← Back to restaurant website
        </button>
      </form>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: 20,
    background:
      "linear-gradient(135deg, #3B1018, #701F2D, #280B12)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: 420,
    boxSizing: "border-box",
    padding: "38px 30px",
    borderRadius: 18,
    background: "#FFF8EE",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  },
  logo: {
    width: 58,
    height: 58,
    display: "grid",
    placeItems: "center",
    margin: "0 auto 16px",
    borderRadius: "50%",
    background: "#6B1725",
    color: "#E8BF70",
    fontSize: 23,
    fontWeight: 800,
  },
  eyebrow: {
    textAlign: "center",
    color: "#8B2635",
    letterSpacing: 3,
    fontSize: 12,
    fontWeight: 700,
  },
  heading: {
    textAlign: "center",
    color: "#3B1018",
    marginBottom: 8,
  },
  description: {
    textAlign: "center",
    color: "#75656A",
    marginBottom: 28,
    fontSize: 14,
  },
  label: {
    display: "block",
    marginBottom: 8,
    marginTop: 16,
    color: "#3B1018",
    fontWeight: 600,
    fontSize: 14,
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: 13,
    border: "1px solid #D9C6B9",
    borderRadius: 8,
    background: "#FFFFFF",
    fontSize: 15,
    outlineColor: "#8B2635",
  },
  error: {
    color: "#B42318",
    fontSize: 14,
    marginTop: 14,
  },
  button: {
    width: "100%",
    padding: 14,
    marginTop: 24,
    border: "none",
    borderRadius: 8,
    background: "#701F2D",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
  },
  back: {
    display: "block",
    margin: "20px auto 0",
    border: "none",
    background: "transparent",
    color: "#701F2D",
    cursor: "pointer",
  },
};
