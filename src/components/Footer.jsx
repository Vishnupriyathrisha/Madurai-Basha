import { Box, Container, Grid, Typography, Stack } from "@mui/material";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const quickLinks = [
  {
    label: "Home",
    icon: <HomeRoundedIcon />,
    href: "#home",
  },
  {
    label: "About Us",
    icon: <RestaurantMenuRoundedIcon />,
    href: "#about",
  },
  {
    label: "Our Menu",
    icon: <RestaurantMenuRoundedIcon />,
    href: "#menu",
  },
  {
    label: "Gallery",
    icon: <PhotoLibraryRoundedIcon />,
    href: "#gallery",
  },
  {
    label: "Contact",
    icon: <ContactMailRoundedIcon />,
    href: "#contact",
  },
  {
    label: "Book a Table",
    icon: <CalendarMonthRoundedIcon />,
    href: "#booking",
  },
];

const socialItems = [
  {
    label: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    label: "Facebook",
    icon: <FacebookRoundedIcon />,
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(145deg, #2A0A10 0%, #3A0F16 45%, #24080D 100%)",
        color: "#FFF8E8",

        "@keyframes footerReveal": {
          from: {
            opacity: 0,
            transform: "translateY(25px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        "@keyframes goldGlow": {
          "0%, 100%": {
            opacity: 0.35,
          },
          "50%": {
            opacity: 0.75,
          },
        },

        "@keyframes floatStar": {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-5px) rotate(8deg)",
          },
        },
      }}
    >
      {/* Decorative Glow */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 180, md: 320 },
          height: { xs: 180, md: 320 },
          borderRadius: "50%",
          top: -130,
          left: -100,
          background:
            "radial-gradient(circle, rgba(201,162,39,0.15), transparent 68%)",
          animation: "goldGlow 5s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 200, md: 350 },
          height: { xs: 200, md: 350 },
          borderRadius: "50%",
          bottom: -160,
          right: -120,
          background:
            "radial-gradient(circle, rgba(201,162,39,0.12), transparent 68%)",
          animation: "goldGlow 5s ease-in-out 1s infinite",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          pt: { xs: 7, md: 9 },
        }}
      >
        {/* ================= TOP BRAND AREA ================= */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 5, md: 7 },
            animation: "footerReveal 0.9s ease-out both",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1.2}
          >
            <StarRoundedIcon
              sx={{
                color: "#C9A227",
                fontSize: 16,
                animation: "floatStar 3s ease-in-out infinite",
              }}
            />

            <Typography
              sx={{
                color: "#D8B94C",
                fontSize: {
                  xs: "0.65rem",
                  sm: "0.72rem",
                },
                fontWeight: 800,
                letterSpacing: {
                  xs: "2px",
                  sm: "3px",
                },
              }}
            >
              AUTHENTIC • LOCAL • FLAVOUR
            </Typography>

            <StarRoundedIcon
              sx={{
                color: "#C9A227",
                fontSize: 16,
                animation:
                  "floatStar 3s ease-in-out 0.5s infinite",
              }}
            />
          </Stack>

          <Typography
            sx={{
              mt: 1.5,
              fontFamily: "Georgia, serif",
              fontWeight: 800,
              fontSize: {
                xs: "2rem",
                sm: "2.6rem",
                md: "3rem",
              },
              color: "#FFF8E8",
              lineHeight: 1.05,
            }}
          >
            Madurai{" "}
            <Box
              component="span"
              sx={{
                color: "#D8B94C",
                fontStyle: "italic",
              }}
            >
              Basha
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              maxWidth: 580,
              mx: "auto",
              color: "rgba(255,248,232,0.58)",
              fontSize: {
                xs: "0.82rem",
                sm: "0.9rem",
              },
              lineHeight: 1.8,
            }}
          >
            Bringing the authentic taste of Madurai to your
            table, with traditional flavours, warm hospitality,
            and memories made around every meal.
          </Typography>
        </Box>

        {/* ================= GOLD DIVIDER ================= */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
            mb: { xs: 5, md: 6 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(201,162,39,0.5))",
            }}
          />

          <StarRoundedIcon
            sx={{
              color: "#C9A227",
              fontSize: 15,
            }}
          />

          <Box
            sx={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(201,162,39,0.5), transparent)",
            }}
          />
        </Box>

        {/* ================= FOOTER COLUMNS ================= */}
        <Grid
          container
          spacing={{ xs: 4, sm: 4, md: 6 }}
        >
          {/* BRAND */}
          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
            sx={{
              animation:
                "footerReveal 0.8s ease-out 0.15s both",
            }}
          >
            <Box
              sx={{
                pr: {
                  md: 4,
                },
              }}
            >
              <Typography
                sx={{
                  color: "#D8B94C",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "2.5px",
                  mb: 1.2,
                }}
              >
                OUR STORY • OUR FLAVOUR
              </Typography>

              <Typography
                sx={{
                  color: "#FFF8E8",
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1.45rem",
                }}
              >
                Taste the Heart
                <br />
                of Madurai.
              </Typography>

              <Typography
                sx={{
                  mt: 1.8,
                  color: "rgba(255,248,232,0.52)",
                  fontSize: "0.78rem",
                  lineHeight: 1.8,
                }}
              >
                Every dish carries a little piece of our
                tradition. Every table holds a story.
                Come hungry, leave with memories.
              </Typography>

              {/* Social Icons */}
              <Stack
                direction="row"
                spacing={1.2}
                sx={{
                  mt: 2.5,
                }}
              >
                {socialItems.map((item) => (
                  <Box
                    key={item.label}
                    title={item.label}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#D8B94C",
                      border:
                        "1px solid rgba(201,162,39,0.25)",
                      background:
                        "rgba(255,248,232,0.04)",
                      cursor: "pointer",
                      transition:
                        "transform 0.3s ease, background 0.3s ease, border-color 0.3s ease",
                      "&:hover": {
                        transform:
                          "translateY(-5px)",
                        background:
                          "rgba(201,162,39,0.12)",
                        borderColor: "#C9A227",
                      },
                    }}
                  >
                    {item.icon}
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* QUICK LINKS */}
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
            sx={{
              animation:
                "footerReveal 0.8s ease-out 0.3s both",
            }}
          >
            <Typography
              sx={{
                color: "#D8B94C",
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "2px",
                mb: 2.2,
              }}
            >
              QUICK LINKS
            </Typography>

            <Stack spacing={1.25}>
              {quickLinks.map((link) => (
                <Box
                  key={link.label}
                  component="a"
                  href={link.href}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.1,
                    width: "fit-content",
                    textDecoration: "none",
                    color:
                      "rgba(255,248,232,0.62)",
                    fontSize: "0.78rem",
                    transition:
                      "color 0.3s ease, transform 0.3s ease",

                    "& .linkIcon": {
                      color: "#9F7D20",
                      fontSize: 17,
                      transition:
                        "color 0.3s ease, transform 0.3s ease",
                    },

                    "&:hover": {
                      color: "#D8B94C",
                      transform:
                        "translateX(5px)",
                    },

                    "&:hover .linkIcon": {
                      color: "#D8B94C",
                      transform:
                        "scale(1.1)",
                    },
                  }}
                >
                  <Box
                    className="linkIcon"
                    sx={{
                      display: "flex",
                    }}
                  >
                    {link.icon}
                  </Box>

                  {link.label}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* CONTACT */}
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 2.5,
            }}
            sx={{
              animation:
                "footerReveal 0.8s ease-out 0.45s both",
            }}
          >
            <Typography
              sx={{
                color: "#D8B94C",
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "2px",
                mb: 2.2,
              }}
            >
              FIND US
            </Typography>

            <Stack spacing={2}>
              <Stack
                direction="row"
                alignItems="flex-start"
                spacing={1.2}
              >
                <LocationOnRoundedIcon
                  sx={{
                    color: "#D8B94C",
                    fontSize: 19,
                    mt: 0.2,
                  }}
                />

                <Typography
                  sx={{
                    color:
                      "rgba(255,248,232,0.58)",
                    fontSize: "0.76rem",
                    lineHeight: 1.6,
                  }}
                >
                  Madurai,
                  <br />
                  Tamil Nadu, India
                </Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1.2}
              >
                <PhoneRoundedIcon
                  sx={{
                    color: "#D8B94C",
                    fontSize: 18,
                  }}
                />

                <Typography
                  sx={{
                    color:
                      "rgba(255,248,232,0.58)",
                    fontSize: "0.76rem",
                  }}
                >
                  +91 98765 43210
                </Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="flex-start"
                spacing={1.2}
              >
                <AccessTimeRoundedIcon
                  sx={{
                    color: "#D8B94C",
                    fontSize: 18,
                    mt: 0.1,
                  }}
                />

                <Typography
                  sx={{
                    color:
                      "rgba(255,248,232,0.58)",
                    fontSize: "0.76rem",
                    lineHeight: 1.6,
                  }}
                >
                  11:00 AM – 11:00 PM
                  <br />
                  Open Every Day
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* ================= QUOTE ================= */}
        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            py: { xs: 3, md: 3.5 },
            px: 2,
            textAlign: "center",
            borderTop:
              "1px solid rgba(201,162,39,0.12)",
            borderBottom:
              "1px solid rgba(201,162,39,0.12)",
            animation:
              "footerReveal 0.8s ease-out 0.6s both",
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,248,232,0.58)",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: {
                xs: "0.88rem",
                sm: "1rem",
              },
            }}
          >
            “Good food. Good people. Good memories.”
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{
              mt: 1.2,
            }}
          >
            <Box
              sx={{
                width: 28,
                height: "1px",
                background: "#C9A227",
              }}
            />

            <Typography
              sx={{
                color: "#D8B94C",
                fontSize: "0.58rem",
                fontWeight: 800,
                letterSpacing: "2px",
              }}
            >
              MADURAI BASHA
            </Typography>

            <Box
              sx={{
                width: 28,
                height: "1px",
                background: "#C9A227",
              }}
            />
          </Stack>
        </Box>

        {/* ================= COPYRIGHT ================= */}
        <Box
          sx={{
            py: 2.5,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color:
                "rgba(255,248,232,0.38)",
              fontSize: {
                xs: "0.62rem",
                sm: "0.68rem",
              },
            }}
          >
            © 2026 Madurai Basha. All Rights Reserved.
          </Typography>

          <Typography
            sx={{
              mt: 0.7,
              color:
                "rgba(216,185,76,0.55)",
              fontSize: "0.58rem",
              letterSpacing: "1.5px",
            }}
          >
            MADE WITH TRADITION • SERVED WITH LOVE
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}