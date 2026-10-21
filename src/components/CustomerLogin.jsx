
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Divider,
  CircularProgress,
} from "@mui/material";

import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";

function CustomerLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const maroon = "#741C2C";
  const gold = "#D9AC57";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!formData.email.trim() || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/customers/login",
        {
          email: formData.email.trim(),
          password: formData.password,
        }
      );

      if (response.data.success && response.data.token) {
        sessionStorage.setItem(
          "customerToken",
          response.data.token
        );

        sessionStorage.setItem(
          "customerDetails",
          JSON.stringify(response.data.customer)
        );
         window.dispatchEvent(new Event("customer-auth-changed"));
        navigate("/", { replace: true });
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 2, sm: 3 },
        boxSizing: "border-box",
        background: `
          radial-gradient(circle at top left, #F3DCA8 0%, transparent 35%),
          linear-gradient(135deg, #FFF8EE 0%, #F8E9D6 50%, #F2DCC5 100%)
        `,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 440,
          p: { xs: 3, sm: 4.5 },
          borderRadius: 4,
          border: "1px solid rgba(116, 28, 44, 0.12)",
          boxShadow: "0 20px 60px rgba(77, 30, 25, 0.13)",
          backgroundColor: "#FFFCF7",
          boxSizing: "border-box",
        }}
      >
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBackRoundedIcon />}
          sx={{
            color: maroon,
            textTransform: "none",
            fontWeight: 600,
            mb: 3,
          }}
        >
          Back to Home
        </Button>

        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Box
            sx={{
              width: 76,
              height: 76,
              mx: "auto",
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              color: gold,
              background: `linear-gradient(135deg, ${maroon}, #4B101B)`,
              border: `3px solid ${gold}`,
              boxShadow: "0 8px 22px rgba(116, 28, 44, 0.2)",
            }}
          >
            <RestaurantRoundedIcon sx={{ fontSize: 39 }} />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: maroon,
              letterSpacing: "-0.8px",
              fontSize: { xs: 27, sm: 32 },
            }}
          >
            Madurai Basha
          </Typography>

          <Typography
            sx={{
              mt: 0.7,
              color: "#9B783E",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            AUTHENTIC TASTE · TRADITIONAL LOVE
          </Typography>
        </Box>

        <Divider sx={{ mb: 3, borderColor: "#EBDCC5" }} />

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            sx={{
              color: "#35191B",
              fontWeight: 750,
              mb: 1,
              textAlign: "center",
            }}
          >
            Welcome Back!
          </Typography>

          <Typography
            sx={{
              color: "#7B6A62",
              fontSize: 14,
              textAlign: "center",
              lineHeight: 1.7,
            }}
          >
            Sign in to continue your delicious journey with us.
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Typography
            sx={{
              mb: 1,
              fontWeight: 650,
              fontSize: 14,
              color: "#44272A",
            }}
          >
            Email Address
          </Typography>

          <TextField
            fullWidth
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
            disabled={loading}
            sx={{
              mb: 2.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                backgroundColor: "#FFFFFF",
                "&.Mui-focused fieldset": {
                  borderColor: maroon,
                  borderWidth: 2,
                },
              },
              "& .MuiInputBase-input": {
                fontSize: 14,
                py: 1.7,
              },
            }}
          />

          <Typography
            sx={{
              mb: 1,
              fontWeight: 650,
              fontSize: 14,
              color: "#44272A",
            }}
          >
            Password
          </Typography>

          <TextField
            fullWidth
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
            disabled={loading}
            sx={{
              mb: 1.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                backgroundColor: "#FFFFFF",
                "&.Mui-focused fieldset": {
                  borderColor: maroon,
                  borderWidth: 2,
                },
              },
              "& .MuiInputBase-input": {
                fontSize: 14,
                py: 1.7,
              },
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      type="button"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={() =>
                        setShowPassword((previous) => !previous)
                      }
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffRoundedIcon />
                      ) : (
                        <VisibilityRoundedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          {error && (
            <Typography
              role="alert"
              sx={{
                color: "#B42318",
                fontSize: 13,
                mb: 2,
                lineHeight: 1.6,
              }}
            >
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            startIcon={
              loading ? (
                <CircularProgress size={18} color="inherit" />
              ) : (
                <LoginRoundedIcon />
              )
            }
            sx={{
              mt: 1,
              py: 1.55,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 750,
              fontSize: 16,
              color: "#FFF8EE",
              background: `linear-gradient(135deg, ${maroon}, #4B101B)`,
              boxShadow: "0 8px 18px rgba(116, 28, 44, 0.2)",
              "&:hover": {
                background: "linear-gradient(135deg, #8D293B, #5A1422)",
                boxShadow: "0 10px 24px rgba(116, 28, 44, 0.28)",
                transform: "translateY(-1px)",
              },
              "&.Mui-disabled": {
                background: "#B9A4A4",
                color: "#FFFFFF",
              },
              transition: "all 0.2s ease",
            }}
          >
            {loading ? "Logging in..." : "Login to Your Account"}
          </Button>
        </Box>

        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography
            component="span"
            sx={{ color: "#766761", fontSize: 14 }}
          >
            Don't have an account?{" "}
          </Typography>

          <Button
            component={Link}
            to="/register"
            sx={{
              p: 0,
              minWidth: "auto",
              textTransform: "none",
              fontSize: 14,
              fontWeight: 750,
              color: maroon,
              "&:hover": {
                backgroundColor: "transparent",
                color: "#A52A40",
                textDecoration: "underline",
              },
            }}
          >
            Create Account
          </Button>
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            mt: 3,
            color: "#9A8B80",
            fontSize: 11,
          }}
        >
          © Madurai Basha Restaurant
        </Typography>
      </Paper>
    </Box>
  );
}

export default CustomerLogin;
