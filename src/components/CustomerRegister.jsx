
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Divider,
  CircularProgress,
} from "@mui/material";

import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";

function CustomerRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
    setSuccess("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/customers/register",
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          password: formData.password,
        }
      );

      if (response.data.success) {
        setSuccess("Account created successfully! Redirecting to login...");

        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 1200);
      } else {
        setError("Unable to create your account.");
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

  const fieldSx = {
    mb: 2,
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
      py: 1.55,
    },
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
          maxWidth: 460,
          p: { xs: 3, sm: 4 },
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
            mb: 2,
          }}
        >
          Back to Home
        </Button>

        <Box sx={{ textAlign: "center", mb: 2.5 }}>
          <Box
            sx={{
              width: 65,
              height: 65,
              mx: "auto",
              mb: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              color: gold,
              background: `linear-gradient(135deg, ${maroon}, #4B101B)`,
              border: `3px solid ${gold}`,
            }}
          >
            <RestaurantRoundedIcon sx={{ fontSize: 34 }} />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: maroon,
              fontSize: { xs: 26, sm: 30 },
            }}
          >
            Create Account
          </Typography>

          <Typography sx={{ color: "#8A6C52", mt: 0.7, fontSize: 14 }}>
            Join the Madurai Basha family!
          </Typography>
        </Box>

        <Divider sx={{ mb: 2.5, borderColor: "#EBDCC5" }} />

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Typography sx={{ mb: 0.7, fontSize: 14, fontWeight: 650 }}>
            Full Name
          </Typography>

          <TextField
            fullWidth
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
            disabled={loading}
            sx={fieldSx}
          />

          <Typography sx={{ mb: 0.7, fontSize: 14, fontWeight: 650 }}>
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
            sx={fieldSx}
          />

          <Typography sx={{ mb: 0.7, fontSize: 14, fontWeight: 650 }}>
            Password
          </Typography>

          <TextField
            fullWidth
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Minimum 8 characters"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
            disabled={loading}
            sx={fieldSx}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      type="button"
                      aria-label="Toggle password visibility"
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

          <Typography sx={{ mb: 0.7, fontSize: 14, fontWeight: 650 }}>
            Confirm Password
          </Typography>

          <TextField
            fullWidth
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            required
            disabled={loading}
            sx={fieldSx}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      type="button"
                      aria-label="Toggle confirm password visibility"
                      onClick={() =>
                        setShowConfirmPassword((previous) => !previous)
                      }
                      edge="end"
                    >
                      {showConfirmPassword ? (
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
              sx={{ color: "#B42318", fontSize: 13, mb: 2 }}
            >
              {error}
            </Typography>
          )}

          {success && (
            <Typography
              role="status"
              sx={{ color: "#237A42", fontSize: 13, mb: 2 }}
            >
              {success}
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
                <PersonAddAlt1RoundedIcon />
              )
            }
            sx={{
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontSize: 16,
              fontWeight: 750,
              color: "#FFF8EE",
              background: `linear-gradient(135deg, ${maroon}, #4B101B)`,
              boxShadow: "0 8px 18px rgba(116, 28, 44, 0.2)",
              "&:hover": {
                background: "linear-gradient(135deg, #8D293B, #5A1422)",
              },
            }}
          >
            {loading ? "Creating Account..." : "Create My Account"}
          </Button>
        </Box>

        <Box sx={{ textAlign: "center", mt: 2.5 }}>
          <Typography component="span" sx={{ color: "#766761", fontSize: 14 }}>
            Already have an account?{" "}
          </Typography>

          <Button
            component={Link}
            to="/login"
            sx={{
              p: 0,
              minWidth: "auto",
              textTransform: "none",
              fontWeight: 750,
              color: maroon,
            }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default CustomerRegister;
