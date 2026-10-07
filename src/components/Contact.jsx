import { Box, Container, Grid, Typography, Stack } from "@mui/material";

import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import DinnerDiningRoundedIcon from "@mui/icons-material/DinnerDiningRounded";

const contactDetails = [
  {
    icon: <LocationOnRoundedIcon />,
    title: "Visit Us",
    text: "Madurai, Tamil Nadu",
    subText: "In the heart of the temple city",
  },
  {
    icon: <PhoneRoundedIcon />,
    title: "Call Us",
    text: "+91 98765 43210",
    subText: "We're happy to hear from you",
  },
  {
    icon: <AccessTimeRoundedIcon />,
    title: "Opening Hours",
    text: "11:00 AM – 11:00 PM",
    subText: "Open every day",
  },
  {
    icon: <EmailRoundedIcon />,
    title: "Email Us",
    text: "hello@maduraibasha.com",
    subText: "We'd love to hear from you",
  },
];

const occasions = [
  {
    icon: <GroupsRoundedIcon />,
    title: "Family Dining",
  },
  {
    icon: <CelebrationRoundedIcon />,
    title: "Celebrations",
  },
  {
    icon: <DinnerDiningRoundedIcon />,
    title: "Special Dinner",
  },
];

function ContactInfoCard({ item, index }) {
  return (
    <Box
      sx={{
        p: { xs: 2.2, sm: 2.8 },
        border: "1px solid rgba(128, 25, 38, 0.18)",
        borderRadius: "18px",
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(247,236,223,0.78))",
        backdropFilter: "blur(4px)",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.45s ease",
        animation: `contactCardIn 0.7s ease ${index * 0.12}s both`,

        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          width: "4px",
          height: "100%",
          background: "#8B1E2D",
          transform: "scaleY(0)",
          transformOrigin: "bottom",
          transition: "transform 0.4s ease",
        },

        "&:hover": {
          transform: "translateY(-7px)",
          borderColor: "#C9A227",
          boxShadow: "0 18px 40px rgba(91, 25, 30, 0.16)",
          background:
            "linear-gradient(145deg, #7D1F2B, #5A1520)",
          color: "#FFF8E8",

          "&::before": {
            transform: "scaleY(1)",
          },

          "& .contact-icon": {
            transform: "rotate(-8deg) scale(1.08)",
            background: "#C9A227",
            color: "#5A1520",
          },

          "& .contact-title": {
            color: "#F6D878",
          },

          "& .contact-text": {
            color: "#FFF8E8",
          },

          "& .contact-sub": {
            color: "rgba(255,248,232,0.72)",
          },
        },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          className="contact-icon"
          sx={{
            width: 48,
            height: 48,
            minWidth: 48,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(139,30,45,0.1)",
            color: "#8B1E2D",
            transition: "all 0.4s ease",
          }}
        >
          {item.icon}
        </Box>

        <Box>
          <Typography
            className="contact-title"
            sx={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "#8B1E2D",
              textTransform: "uppercase",
              mb: 0.35,
              transition: "color 0.4s ease",
            }}
          >
            {item.title}
          </Typography>

          <Typography
            className="contact-text"
            sx={{
              fontSize: { xs: "0.88rem", sm: "0.98rem" },
              fontWeight: 700,
              color: "#3F2024",
              transition: "color 0.4s ease",
              wordBreak: "break-word",
            }}
          >
            {item.text}
          </Typography>

          <Typography
            className="contact-sub"
            sx={{
              mt: 0.3,
              fontSize: "0.72rem",
              color: "#7A6862",
              transition: "color 0.4s ease",
            }}
          >
            {item.subText}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, sm: 10, md: 12 },

        /* CONTACT BACKGROUND IMAGE */
        backgroundImage:
          "linear-gradient(rgba(255,250,242,0.76), rgba(247,236,223,0.86)), url('/contact-bg.jpg')",
        backgroundSize: "110% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: { xs: "scroll", md: "fixed" },

        "@keyframes contactCardIn": {
          from: {
            opacity: 0,
            transform: "translateY(25px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        "@keyframes goldLine": {
          "0%": {
            transform: "scaleX(0)",
            opacity: 0,
          },
          "100%": {
            transform: "scaleX(1)",
            opacity: 1,
          },
        },

        "@keyframes floatIcon": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-7px)",
          },
        },

        "@keyframes bookTitleReveal": {
          from: {
            opacity: 0,
            transform: "translateY(28px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        "@keyframes bookTableReveal": {
          "0%": {
            opacity: 0,
            transform: "translateY(25px) scale(0.96)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0) scale(1)",
          },
        },

        "@keyframes bookingLineReveal": {
          from: {
            width: 0,
            opacity: 0,
          },
          to: {
            width: "60px",
            opacity: 1,
          },
        },

        "@keyframes bookingFloat": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },

        "@keyframes bookingCardReveal": {
          from: {
            opacity: 0,
            transform: "translateY(35px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        "@keyframes occasionReveal": {
          from: {
            opacity: 0,
            transform: "translateY(18px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      {/* Soft Background Glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 80% 20%, rgba(201,162,39,0.13), transparent 30%), radial-gradient(circle at 15% 85%, rgba(139,30,45,0.08), transparent 30%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Decorative glow */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 220, md: 400 },
          height: { xs: 220, md: 400 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,162,39,0.13), transparent 68%)",
          top: -120,
          right: -100,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,30,45,0.07), transparent 70%)",
          bottom: -150,
          left: -100,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* SECTION HEADING */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 5, md: 7 },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1.5}
            sx={{ mb: 1.5 }}
          >
            <Box
              sx={{
                width: { xs: 35, sm: 55 },
                height: "1px",
                background: "#C9A227",
                transformOrigin: "right",
                animation: "goldLine 1s ease both",
              }}
            />

            <RestaurantRoundedIcon
              sx={{
                color: "#C9A227",
                fontSize: 22,
                animation: "floatIcon 2.5s ease-in-out infinite",
              }}
            />

            <Box
              sx={{
                width: { xs: 35, sm: 55 },
                height: "1px",
                background: "#C9A227",
                transformOrigin: "left",
                animation: "goldLine 1s ease both",
              }}
            />
          </Stack>

          <Typography
            sx={{
              color: "#8B1E2D",
              fontSize: { xs: "0.7rem", sm: "0.78rem" },
              fontWeight: 800,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            COME & DINE WITH US
          </Typography>

          <Typography
            sx={{
              color: "#3F2024",
              fontFamily: "Georgia, serif",
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.4rem" },
              lineHeight: 1.08,
              fontWeight: 700,
            }}
          >
            Let's Make It

            <Box
              component="span"
              sx={{
                display: "block",
                color: "#9B7620",
                fontStyle: "italic",
              }}
            >
              Memorable
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: 680,
              mx: "auto",
              mt: 2,
              color: "#75645E",
              fontSize: { xs: "0.86rem", sm: "0.96rem" },
              lineHeight: 1.8,
            }}
          >
            From a casual family lunch to a grand celebration, our table is
            always ready to welcome you with the authentic flavours of Madurai.
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 3, md: 5 }}
          alignItems="stretch"
        >
          {/* LEFT — BOOK YOUR TABLE */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                height: "100%",
                minHeight: { md: 570 },
                borderRadius: "26px",
                background:
                  "linear-gradient(145deg, #6F1826 0%, #51131E 100%)",
                p: { xs: 3, sm: 4, md: 4.5 },
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 25px 55px rgba(75,20,25,0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",

                animation: "bookingCardReveal 0.9s ease-out both",

                "&:hover": {
                  boxShadow: "0 30px 65px rgba(75,20,25,0.28)",
                },
              }}
            >
              {/* Decorative circles */}
              <Box
                sx={{
                  position: "absolute",
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  border: "1px solid rgba(201,162,39,0.2)",
                  right: -80,
                  top: -70,
                  animation: "bookingFloat 5s ease-in-out infinite",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  border: "1px solid rgba(201,162,39,0.15)",
                  right: -30,
                  top: -30,
                }}
              />

              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "#DDBB4B",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.25em",
                    mb: 2,
                    opacity: 0,
                    animation:
                      "bookTitleReveal 0.7s ease-out 0.2s forwards",
                  }}
                >
                  RESERVATIONS
                </Typography>

                <Typography
                  sx={{
                    color: "#FFF8E8",
                    fontFamily: "Georgia, serif",
                    fontSize: { xs: "2rem", sm: "2.35rem" },
                    lineHeight: 1.15,
                    fontWeight: 700,
                    opacity: 0,
                    animation:
                      "bookTitleReveal 0.9s ease-out 0.35s forwards",
                  }}
                >
                  Book Your

                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      color: "#E0C35B",
                      fontStyle: "italic",
                      opacity: 0,
                      animation:
                        "bookTableReveal 1s ease-out 0.65s forwards",
                    }}
                  >
                    Table
                  </Box>
                </Typography>

                <Box
                  sx={{
                    width: 0,
                    height: 2,
                    background: "#C9A227",
                    my: 2.5,
                    animation:
                      "bookingLineReveal 0.8s ease-out 1.15s forwards",
                  }}
                />

                <Typography
                  sx={{
                    color: "rgba(255,248,232,0.76)",
                    fontSize: "0.88rem",
                    lineHeight: 1.8,
                    maxWidth: 390,
                    opacity: 0,
                    animation:
                      "bookTitleReveal 0.8s ease-out 1.35s forwards",
                  }}
                >
                  Gather your loved ones and experience the warmth of
                  traditional Madurai hospitality. Whether it is a simple
                  family meal or a special celebration, we have a table
                  waiting for you.
                </Typography>

                {/* Opening Hours */}
                <Box
                  sx={{
                    mt: 3,
                    p: 2,
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.055)",
                    border: "1px solid rgba(201,162,39,0.18)",
                    opacity: 0,
                    animation:
                      "bookingCardReveal 0.8s ease-out 1.45s forwards",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    <AccessTimeRoundedIcon
                      sx={{
                        color: "#DDBB4B",
                        fontSize: 21,
                      }}
                    />

                    <Box>
                      <Typography
                        sx={{
                          color: "#FFF8E8",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                        }}
                      >
                        Open Every Day
                      </Typography>

                      <Typography
                        sx={{
                          color: "rgba(255,248,232,0.58)",
                          fontSize: "0.7rem",
                          mt: 0.25,
                        }}
                      >
                        11:00 AM – 11:00 PM
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>

              {/* Booking Visual */}
              <Box
                sx={{
                  mt: 3,
                  p: 2.5,
                  borderRadius: "18px",
                  border: "1px solid rgba(201,162,39,0.3)",
                  background: "rgba(255,255,255,0.05)",
                  position: "relative",
                  zIndex: 2,
                  opacity: 0,
                  animation:
                    "bookingCardReveal 0.8s ease-out 1.6s forwards",
                  transition: "all 0.4s ease",

                  "&:hover": {
                    borderColor: "rgba(201,162,39,0.65)",
                    background: "rgba(255,255,255,0.08)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      minWidth: 50,
                      borderRadius: "14px",
                      background: "rgba(201,162,39,0.15)",
                      color: "#E0C35B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      animation:
                        "bookingFloat 3s ease-in-out infinite",
                    }}
                  >
                    <CalendarMonthRoundedIcon />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "#FFF8E8",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                      }}
                    >
                      Your special moments
                    </Typography>

                    <Typography
                      sx={{
                        color: "rgba(255,248,232,0.58)",
                        fontSize: "0.72rem",
                        mt: 0.4,
                      }}
                    >
                      Deserve a special table
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Typography
                sx={{
                  mt: 2.5,
                  color: "rgba(255,248,232,0.4)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  position: "relative",
                  zIndex: 2,
                  opacity: 0,
                  animation:
                    "bookTitleReveal 0.8s ease-out 1.9s forwards",
                }}
              >
                AUTHENTIC • LOCAL • FLAVOUR
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT — CONTACT DETAILS */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2}>
              {contactDetails.map((item, index) => (
                <ContactInfoCard
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}

              {/* PERFECT FOR */}
              <Box
                sx={{
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: "18px",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(247,236,223,0.78))",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(128,25,38,0.14)",
                  animation:
                    "contactCardIn 0.8s ease 0.5s both",
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#8B1E2D",
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                      }}
                    >
                      PERFECT FOR
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.5,
                        color: "#3F2024",
                        fontFamily: "Georgia, serif",
                        fontSize: { xs: "1.15rem", sm: "1.3rem" },
                        fontWeight: 700,
                      }}
                    >
                      Every Moment Worth Sharing
                    </Typography>
                  </Box>

                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                  >
                    {occasions.map((item, index) => (
                      <Box
                        key={item.title}
                        sx={{
                          px: 1.5,
                          py: 1,
                          borderRadius: "12px",
                          background: "rgba(139,30,45,0.06)",
                          border:
                            "1px solid rgba(139,30,45,0.1)",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.7,
                          transition: "all 0.35s ease",
                          animation: `occasionReveal 0.6s ease ${
                            0.65 + index * 0.12
                          }s both`,

                          "&:hover": {
                            background: "#8B1E2D",
                            borderColor: "#C9A227",
                            transform: "translateY(-3px)",

                            "& .occasion-icon": {
                              color: "#F6D878",
                            },

                            "& .occasion-text": {
                              color: "#FFF8E8",
                            },
                          },
                        }}
                      >
                        <Box
                          className="occasion-icon"
                          sx={{
                            color: "#8B1E2D",
                            display: "flex",
                            transition: "color 0.35s ease",
                          }}
                        >
                          {item.icon}
                        </Box>

                        <Typography
                          className="occasion-text"
                          sx={{
                            color: "#5B363A",
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                            transition: "color 0.35s ease",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Box>

              {/* FINAL MESSAGE */}
              <Box
                sx={{
                  mt: 0.5,
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: "18px",
                  background:
                    "linear-gradient(135deg, rgba(201,162,39,0.12), rgba(139,30,45,0.05))",
                  border: "1px dashed rgba(139,30,45,0.25)",
                  textAlign: "center",
                  animation:
                    "contactCardIn 0.8s ease 0.7s both",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0.7}
                  sx={{ mb: 1 }}
                >
                  {[1, 2, 3, 4, 5].map((item) => (
                    <StarRoundedIcon
                      key={item}
                      sx={{
                        fontSize: 15,
                        color: "#C9A227",
                      }}
                    />
                  ))}
                </Stack>

                <Typography
                  sx={{
                    color: "#6A3B40",
                    fontFamily: "Georgia, serif",
                    fontSize: { xs: "0.95rem", sm: "1.05rem" },
                    fontStyle: "italic",
                  }}
                >
                  “Every table has a story. Let yours begin here.”
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}