
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Divider,
} from "@mui/material";

import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const navItems = [
  { label: "Home", icon: HomeRoundedIcon },
  { label: "About", icon: InfoRoundedIcon },
  { label: "Menu", icon: MenuBookRoundedIcon },
  { label: "Gallery", icon: PhotoLibraryRoundedIcon },
  { label: "Contact", icon: PhoneRoundedIcon },
];

function Navbar() {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [accountAnchor, setAccountAnchor] = useState(null);
  const [customer, setCustomer] = useState(null);

  const accountMenuOpen = Boolean(accountAnchor);

  const readCustomer = () => {
    try {
      const details = sessionStorage.getItem("customerDetails");
      const token = sessionStorage.getItem("customerToken");

      if (!token || !details) {
        setCustomer(null);
        return;
      }

      setCustomer(JSON.parse(details));
    } catch {
      setCustomer(null);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const handleStorageChange = () => {
      readCustomer();
    };

    handleScroll();
    readCustomer();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("customer-auth-changed", handleStorageChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(
        "customer-auth-changed",
        handleStorageChange
      );
    };
  }, []);

  const handleNavClick = (item) => {
    setActive(item);

    const sectionId = item.toLowerCase();

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleBookTable = () => {
    setActive("");

    const section = document.getElementById("booking");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("customerToken");
    sessionStorage.removeItem("customerDetails");

    setCustomer(null);
    setAccountAnchor(null);

    window.dispatchEvent(new Event("customer-auth-changed"));

    navigate("/login");
  };

  const gold = "#FFD166";
  const cream = "#FFF4D6";
  const maroon = "#26070A";

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled
          ? "rgba(38, 7, 10, 0.97)"
          : "rgba(38, 7, 10, 0.84)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255, 209, 102, 0.16)",
        transition: "all 350ms ease",
        zIndex: 1200,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: { xs: 66, sm: 74 },
          px: { xs: 1.2, sm: 3, md: 4, lg: 6 },
          display: "flex",
          alignItems: "center",
          gap: { xs: 0.5, sm: 1 },
        }}
      >
        {/* LOGO */}

        <Box
          onClick={() => handleNavClick("Home")}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.6, sm: 1 },
            cursor: "pointer",
            flexShrink: 0,
            mr: { xs: 0.7, sm: 2, md: 2.5 },
          }}
        >
          <Box
            sx={{
              width: { xs: 33, sm: 42 },
              height: { xs: 33, sm: 42 },
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 209, 102, 0.10)",
              border: "1px solid rgba(255, 209, 102, 0.42)",
              flexShrink: 0,
            }}
          >
            <RestaurantRoundedIcon
              sx={{
                color: gold,
                fontSize: { xs: 18, sm: 24 },
              }}
            />
          </Box>

          <Box sx={{ flexShrink: 0 }}>
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", sm: "1rem" },
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: { xs: "0.8px", sm: "2px" },
                color: "#FFF1C1",
              }}
            >
              MADURAI
            </Typography>

            <Typography
              sx={{
                mt: 0.3,
                fontSize: { xs: "0.52rem", sm: "0.68rem" },
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: { xs: "1.2px", sm: "2.5px" },
                color: gold,
              }}
            >
              BASHA
            </Typography>
          </Box>
        </Box>

        {/* NAVIGATION */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            minWidth: 0,
            overflowX: "auto",
            overflowY: "hidden",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            gap: { xs: 0, sm: 0.3, md: 0.5 },
            justifyContent: { xs: "flex-start", md: "flex-end" },
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.label)}
                startIcon={
                  <Icon
                    sx={{
                      fontSize: {
                        xs: "14px !important",
                        sm: "17px !important",
                        md: "18px !important",
                      },
                    }}
                  />
                }
                sx={{
                  position: "relative",
                  minWidth: "auto",
                  flexShrink: 0,
                  px: { xs: 0.7, sm: 1.1, md: 1.3 },
                  py: { xs: 0.9, sm: 1.1 },
                  color: active === item.label ? gold : cream,
                  fontSize: { xs: "0.62rem", sm: "0.76rem", md: "0.82rem" },
                  fontWeight: active === item.label ? 800 : 600,
                  letterSpacing: { xs: 0, sm: "0.4px", md: "0.6px" },
                  textTransform: "none",
                  borderRadius: 1.5,
                  whiteSpace: "nowrap",
                  transition: "all 250ms ease",
                  "& .MuiButton-startIcon": {
                    marginRight: { xs: "3px", sm: "5px" },
                    marginLeft: 0,
                  },
                  "&:hover": {
                    background: "rgba(255, 209, 102, 0.08)",
                    color: gold,
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: "18%",
                    right: "18%",
                    bottom: 3,
                    height: 2,
                    borderRadius: 5,
                    background: gold,
                    transform:
                      active === item.label ? "scaleX(1)" : "scaleX(0)",
                    transition: "transform 250ms ease",
                  },
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Box>

        {/* BOOK A TABLE */}

        <Button
          onClick={handleBookTable}
          startIcon={<EventAvailableRoundedIcon />}
          sx={{
            flexShrink: 0,
            ml: { xs: 0.3, sm: 0.8, md: 1 },
            px: { xs: 0.8, sm: 1.4, md: 1.8 },
            py: { xs: 0.75, sm: 0.9 },
            minWidth: "auto",
            borderRadius: 2,
            background: "linear-gradient(135deg, #FFD166, #E9A928)",
            color: "#2B080A",
            fontSize: { xs: "0.6rem", sm: "0.73rem", md: "0.8rem" },
            fontWeight: 900,
            textTransform: "none",
            whiteSpace: "nowrap",
            "& .MuiButton-startIcon": {
              mr: { xs: "3px", sm: "5px" },
              ml: 0,
            },
            "& .MuiSvgIcon-root": {
              fontSize: { xs: 15, sm: 18 },
            },
            "&:hover": {
              background: "linear-gradient(135deg, #FFE39A, #FFD166)",
              transform: "translateY(-2px)",
            },
          }}
        >
          Book a Table
        </Button>

        {/* CUSTOMER ACCOUNT */}

        {customer ? (
          <>
            <Button
              onClick={(event) => setAccountAnchor(event.currentTarget)}
              startIcon={<PersonOutlineRoundedIcon />}
              sx={{
                ml: { xs: 0.3, sm: 1 },
                px: { xs: 0.7, sm: 1.4 },
                minWidth: "auto",
                flexShrink: 0,
                color: gold,
                border: "1px solid rgba(255,209,102,0.5)",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 700,
                fontSize: { xs: "0.65rem", sm: "0.8rem" },
                "&:hover": {
                  background: "rgba(255,209,102,0.1)",
                },
              }}
            >
              <Box
                component="span"
                sx={{ display: { xs: "none", sm: "inline" } }}
              >
                {customer.name?.split(" ")[0] || "Account"}
              </Box>
              <Box
                component="span"
                sx={{ display: { xs: "inline", sm: "none" } }}
              >
                Account
              </Box>
            </Button>

            <Menu
              anchorEl={accountAnchor}
              open={accountMenuOpen}
              onClose={() => setAccountAnchor(null)}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1,
                    minWidth: 190,
                    borderRadius: 2,
                    border: "1px solid #EBDCC5",
                  },
                },
              }}
            >
              <MenuItem disabled>
                <Box>
                  <Typography fontWeight={700} color={maroon}>
                    {customer.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {customer.email}
                  </Typography>
                </Box>
              </MenuItem>

              <Divider />

              <MenuItem onClick={handleLogout} sx={{ color: "#9B2638" }}>
                <LogoutRoundedIcon fontSize="small" sx={{ mr: 1 }} />
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.3, sm: 0.7 },
              ml: { xs: 0.3, sm: 1 },
              flexShrink: 0,
            }}
          >
            <Button
              component={Link}
              to="/login"
              startIcon={<LoginRoundedIcon />}
              sx={{
                minWidth: "auto",
                px: { xs: 0.7, sm: 1.2 },
                color: cream,
                border: "1px solid rgba(255,209,102,0.45)",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 700,
                fontSize: { xs: "0.62rem", sm: "0.78rem" },
                "& .MuiButton-startIcon": {
                  mr: { xs: "2px", sm: "5px" },
                  ml: 0,
                },
                "& .MuiSvgIcon-root": {
                  fontSize: { xs: 15, sm: 18 },
                },
                "&:hover": {
                  background: "rgba(255,209,102,0.1)",
                  color: gold,
                },
              }}
            >
              Login
            </Button>

            <Button
              component={Link}
              to="/register"
              startIcon={<PersonAddAlt1RoundedIcon />}
              sx={{
                display: { xs: "none", md: "inline-flex" },
                minWidth: "auto",
                px: 1.2,
                color: "#2B080A",
                background: "linear-gradient(135deg, #FFD166, #E9A928)",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 800,
                fontSize: "0.78rem",
                "&:hover": {
                  background: "linear-gradient(135deg, #FFE39A, #FFD166)",
                },
              }}
            >
              Register
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
