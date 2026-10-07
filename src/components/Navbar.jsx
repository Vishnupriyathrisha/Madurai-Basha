import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
} from "@mui/material";

import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";

const navItems = [
  {
    label: "Home",
    icon: HomeRoundedIcon,
  },
  {
    label: "About",
    icon: InfoRoundedIcon,
  },
  {
    label: "Menu",
    icon: MenuBookRoundedIcon,
  },
  {
    label: "Gallery",
    icon: PhotoLibraryRoundedIcon,
  },
  {
    label: "Contact",
    icon: PhoneRoundedIcon,
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (item) => {
    setActive(item);

    const sectionId = item.toLowerCase();

    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

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

        borderBottom:
          "1px solid rgba(255, 209, 102, 0.16)",

        transition: "all 350ms ease",

        zIndex: 1200,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: {
            xs: 66,
            sm: 74,
          },

          px: {
            xs: 1.2,
            sm: 3,
            md: 6,
            lg: 9,
          },

          display: "flex",
          alignItems: "center",
        }}
      >
        {/* =================================================
            LOGO
        ================================================== */}

        <Box
          onClick={() => handleNavClick("Home")}
          sx={{
            display: "flex",
            alignItems: "center",

            gap: {
              xs: 0.6,
              sm: 1,
            },

            cursor: "pointer",

            flexShrink: 0,

            mr: {
              xs: 0.7,
              sm: 2,
              md: 3,
              lg: 4,
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: 33,
                sm: 42,
              },

              height: {
                xs: 33,
                sm: 42,
              },

              borderRadius: "50%",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              background:
                "rgba(255, 209, 102, 0.10)",

              border:
                "1px solid rgba(255, 209, 102, 0.42)",

              flexShrink: 0,
            }}
          >
            <RestaurantRoundedIcon
              sx={{
                color: "#FFD166",

                fontSize: {
                  xs: 18,
                  sm: 24,
                },
              }}
            />
          </Box>

          <Box
            sx={{
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "0.75rem",
                  sm: "1rem",
                },

                lineHeight: 1,

                fontWeight: 900,

                letterSpacing: {
                  xs: "0.8px",
                  sm: "2px",
                },

                color: "#FFF1C1",
              }}
            >
              MADURAI
            </Typography>

            <Typography
              sx={{
                mt: 0.3,

                fontSize: {
                  xs: "0.52rem",
                  sm: "0.68rem",
                },

                lineHeight: 1,

                fontWeight: 800,

                letterSpacing: {
                  xs: "1.2px",
                  sm: "2.5px",
                },

                color: "#FFD166",
              }}
            >
              BASHA
            </Typography>
          </Box>
        </Box>

        {/* =================================================
            NAVIGATION
        ================================================== */}

        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            flex: 1,

            overflowX: "auto",
            overflowY: "hidden",

            scrollbarWidth: "none",

            "&::-webkit-scrollbar": {
              display: "none",
            },

            gap: {
              xs: 0,
              sm: 0.3,
              md: 0.6,
            },

            justifyContent: {
              xs: "flex-start",
              md: "flex-end",
            },
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Button
                key={item.label}
                onClick={() =>
                  handleNavClick(item.label)
                }
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

                  px: {
                    xs: 0.7,
                    sm: 1.1,
                    md: 1.5,
                  },

                  py: {
                    xs: 0.9,
                    sm: 1.1,
                  },

                  color:
                    active === item.label
                      ? "#FFD166"
                      : "#FFF4D6",

                  fontSize: {
                    xs: "0.62rem",
                    sm: "0.76rem",
                    md: "0.84rem",
                  },

                  fontWeight:
                    active === item.label
                      ? 800
                      : 600,

                  letterSpacing: {
                    xs: "0px",
                    sm: "0.5px",
                    md: "0.8px",
                  },

                  textTransform: "none",

                  borderRadius: 1.5,

                  whiteSpace: "nowrap",

                  transition:
                    "all 250ms ease",

                  "& .MuiButton-startIcon": {
                    marginRight: {
                      xs: "3px",
                      sm: "5px",
                    },

                    marginLeft: 0,
                  },

                  "&:hover": {
                    background:
                      "rgba(255, 209, 102, 0.08)",

                    color: "#FFD166",
                  },

                  "&::after": {
                    content: '""',

                    position: "absolute",

                    left: "18%",
                    right: "18%",

                    bottom: 3,

                    height: 2,

                    borderRadius: 5,

                    background: "#FFD166",

                    transform:
                      active === item.label
                        ? "scaleX(1)"
                        : "scaleX(0)",

                    transition:
                      "transform 250ms ease",
                  },
                }}
              >
                {item.label}
              </Button>
            );
          })}

          {/* =================================================
              BOOK A TABLE
          ================================================== */}

          <Button
            onClick={handleBookTable}
            startIcon={
              <EventAvailableRoundedIcon
                sx={{
                  fontSize: {
                    xs: "15px !important",
                    sm: "18px !important",
                    md: "19px !important",
                  },
                }}
              />
            }
            sx={{
              flexShrink: 0,

              ml: {
                xs: 0.4,
                sm: 1,
                md: 1.5,
              },

              px: {
                xs: 1,
                sm: 1.6,
                md: 2.2,
              },

              py: {
                xs: 0.75,
                sm: 0.9,
              },

              minWidth: "auto",

              borderRadius: 2,

              background:
                "linear-gradient(135deg, #FFD166, #E9A928)",

              color: "#2B080A",

              fontSize: {
                xs: "0.62rem",
                sm: "0.75rem",
                md: "0.82rem",
              },

              fontWeight: 900,

              letterSpacing: {
                xs: "0px",
                sm: "0.4px",
                md: "0.7px",
              },

              textTransform: "none",

              whiteSpace: "nowrap",

              boxShadow:
                "0 5px 18px rgba(255, 193, 7, 0.20)",

              transition:
                "all 250ms ease",

              "& .MuiButton-startIcon": {
                marginRight: {
                  xs: "3px",
                  sm: "5px",
                },

                marginLeft: 0,
              },

              "&:hover": {
                background:
                  "linear-gradient(135deg, #FFE39A, #FFD166)",

                transform:
                  "translateY(-2px)",

                boxShadow:
                  "0 8px 22px rgba(255, 193, 7, 0.30)",
              },
            }}
          >
            Book a Table
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
