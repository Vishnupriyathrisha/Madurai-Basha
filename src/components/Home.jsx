import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import EventSeatRoundedIcon from "@mui/icons-material/EventSeatRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 78% 42%, rgba(177,119,32,0.18), transparent 30%), linear-gradient(135deg, #3A0714 0%, #5A0B1C 45%, #25030D 100%)",
        color: "#FFF8EE",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* TOP GLOW */}
      <Box
        sx={{
          position: "absolute",
          top: "-180px",
          right: "-120px",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,163,76,0.22), transparent 68%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />

      {/* BOTTOM GLOW */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-220px",
          left: "-160px",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,163,76,0.14), transparent 68%)",
          filter: "blur(12px)",
          pointerEvents: "none",
        }}
      />

      {/* DECORATIVE DOTS */}
      <Box
        sx={{
          position: "absolute",
          top: "22%",
          right: "42%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#D4A34C",
          opacity: 0.6,
          animation: "dotFloat 3s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "18%",
          left: "44%",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#E7C477",
          opacity: 0.55,
          animation: "dotFloat 4s ease-in-out infinite reverse",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 8, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.05fr 0.95fr",
            },
            alignItems: "center",
            gap: { xs: 5, md: 4 },
          }}
        >
          {/* ================= LEFT CONTENT ================= */}
          <Box
            sx={{
              animation: "heroText 1.2s ease-out both",
              maxWidth: 680,
            }}
          >
            {/* BADGE */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                mb: 3,
                borderRadius: "30px",
                border: "1px solid rgba(231,196,119,0.45)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
              }}
            >
              <AutoAwesomeRoundedIcon
                sx={{
                  fontSize: 17,
                  color: "#E7C477",
                }}
              />

              <Typography
                sx={{
                  fontSize: { xs: 11, sm: 12 },
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: "#E7C477",
                }}
              >
                AUTHENTIC MADURAI TASTE
              </Typography>
            </Box>

            {/* TITLE */}
            <Typography
              component="h1"
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: "46px",
                  sm: "58px",
                  md: "72px",
                  lg: "82px",
                },
                lineHeight: 0.98,
                fontWeight: 700,
                letterSpacing: "-2px",
                color: "#FFF8EE",
                mb: 3,
              }}
            >
              Taste the
              <br />

              <Box
                component="span"
                sx={{
                  color: "#D4A34C",
                  fontStyle: "italic",
                }}
              >
                Heart of Madurai
              </Box>
            </Typography>

            {/* DIVIDER */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
              sx={{ mb: 3 }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 2,
                  background:
                    "linear-gradient(90deg, #D4A34C, transparent)",
                }}
              />

              <RestaurantRoundedIcon
                sx={{
                  color: "#D4A34C",
                  fontSize: 22,
                }}
              />

              <Box
                sx={{
                  width: 35,
                  height: 2,
                  background:
                    "linear-gradient(90deg, #D4A34C, transparent)",
                }}
              />
            </Stack>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                maxWidth: 580,
                color: "rgba(255,248,238,0.72)",
                fontSize: { xs: 15, md: 17 },
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              From the bustling streets of Madurai to your table, experience
              soulful flavours, traditional recipes and the warmth of
              authentic South Indian hospitality.
            </Typography>

            {/* BUTTONS */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 5 }}
            >
              <Button
                href="#menu"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#3A0714",
                  background:
                    "linear-gradient(135deg, #E7C477, #C58E32)",
                  boxShadow: "0 12px 30px rgba(197,142,50,0.25)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #F0D28F, #D4A34C)",
                    transform: "translateY(-2px)",
                  },
                  transition: "0.3s ease",
                }}
              >
                Explore Menu
              </Button>

              <Button
                href="#booking"
                variant="outlined"
                startIcon={<EventSeatRoundedIcon />}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#FFF8EE",
                  borderColor: "rgba(231,196,119,0.5)",
                  "&:hover": {
                    borderColor: "#E7C477",
                    background: "rgba(231,196,119,0.08)",
                  },
                }}
              >
                Book a Table
              </Button>
            </Stack>

            {/* STATS */}
            <Stack
              direction="row"
              spacing={{ xs: 2, sm: 4 }}
              flexWrap="wrap"
              useFlexGap
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#E7C477",
                    fontWeight: 700,
                    mb: 0.4,
                  }}
                >
                  100%
                </Typography>

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "rgba(255,248,238,0.58)",
                  }}
                >
                  Local Flavour
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#E7C477",
                    fontWeight: 700,
                    mb: 0.4,
                  }}
                >
                  FRESH
                </Typography>

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "rgba(255,248,238,0.58)",
                  }}
                >
                  Every Day
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#E7C477",
                    fontWeight: 700,
                    mb: 0.4,
                  }}
                >
                  TRADITION
                </Typography>

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "rgba(255,248,238,0.58)",
                  }}
                >
                  Made With Love
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* ================= RIGHT IMAGE ================= */}
          <Box
            sx={{
              minHeight: { xs: 420, md: 560 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              animation: "heroFood 1.4s ease-out both",
            }}
          >
            {/* IMAGE WRAPPER */}
            <Box
              sx={{
                width: {
                  xs: "88%",
                  sm: 390,
                  md: 470,
                },
                maxWidth: 470,
                position: "relative",
                textAlign: "center",
              }}
            >
              {/* IMAGE */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: {
                    xs: 300,
                    sm: 390,
                    md: 440,
                  },
                  borderRadius: {
                    xs: "28px",
                    md: "36px",
                  },
                  overflow: "hidden",
                  border: "1px solid rgba(231,196,119,0.55)",
                  background: "#4A0917",
                  boxShadow:
                    "0 30px 70px rgba(0,0,0,0.48), 0 0 35px rgba(212,163,76,0.12)",
                  animation: "foodImageFloat 5s ease-in-out infinite",
                }}
              >
                <Box
                  component="img"
                  src="/banana-leaf-meal.jpg"
                  alt="Traditional South Indian banana leaf meal"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.7s ease",
                    "&:hover": {
                      transform: "scale(1.04)",
                    },
                  }}
                />

                {/* IMAGE DARK OVERLAY */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(40,3,12,0.03) 45%, rgba(40,3,12,0.48) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* GOLD CORNER */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 18,
                    left: 18,
                    width: 45,
                    height: 45,
                    borderTop: "2px solid #E7C477",
                    borderLeft: "2px solid #E7C477",
                    borderRadius: "12px 0 0 0",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 18,
                    right: 18,
                    width: 45,
                    height: 45,
                    borderBottom: "2px solid #E7C477",
                    borderRight: "2px solid #E7C477",
                    borderRadius: "0 0 12px 0",
                  }}
                />
              </Box>

              {/* MADE WITH TRADITION */}
              <Typography
                sx={{
                  mt: 3,
                  fontFamily: "Georgia, serif",
                  fontSize: {
                    xs: 15,
                    sm: 17,
                    md: 19,
                  },
                  letterSpacing: {
                    xs: "3px",
                    sm: "4px",
                  },
                  fontWeight: 700,
                  color: "#E7C477",
                  textAlign: "center",
                  animation: "traditionText 2.5s ease-in-out infinite",
                }}
              >
                MADE WITH TRADITION
              </Typography>

              {/* SMALL SUBTEXT */}
              <Typography
                sx={{
                  mt: 1,
                  fontSize: {
                    xs: 10,
                    sm: 11,
                  },
                  letterSpacing: "2px",
                  color: "rgba(255,248,238,0.55)",
                  textTransform: "uppercase",
                }}
              >
                Served with the soul of Madurai
              </Typography>

              {/* FLOATING GOLD DOT */}
              <Box
                sx={{
                  position: "absolute",
                  top: "8%",
                  right: "-4%",
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 35% 30%, #E8B96A, #9A5420)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                  animation: "spice1 4s ease-in-out infinite",
                }}
              />

              {/* SECOND FLOATING DOT */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "20%",
                  left: "-4%",
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 35% 30%, #D8B05B, #7B351D)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                  animation: "spice2 5s ease-in-out infinite",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      {/* ================= ANIMATIONS ================= */}
      <style>
        {`
          @keyframes heroText {
            0% {
              opacity: 0;
              transform: translateX(-45px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes heroFood {
            0% {
              opacity: 0;
              transform: translateX(45px) scale(0.94);
            }

            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          @keyframes foodImageFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-8px);
            }
          }

          @keyframes traditionText {
            0%,
            100% {
              opacity: 0.72;
              letter-spacing: 3px;
            }

            50% {
              opacity: 1;
              letter-spacing: 4px;
            }
          }

          @keyframes spice1 {
            0%,
            100% {
              transform: translate(0, 0) rotate(0deg);
            }

            50% {
              transform: translate(8px, -12px) rotate(12deg);
            }
          }

          @keyframes spice2 {
            0%,
            100% {
              transform: translate(0, 0);
            }

            50% {
              transform: translate(-7px, 10px);
            }
          }

          @keyframes dotFloat {
            0%,
            100% {
              transform: translateY(0);
              opacity: 0.4;
            }

            50% {
              transform: translateY(-12px);
              opacity: 0.9;
            }
          }

          @media (max-width: 600px) {
            @keyframes heroText {
              0% {
                opacity: 0;
                transform: translateY(25px);
              }

              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes heroFood {
              0% {
                opacity: 0;
                transform: translateY(25px) scale(0.94);
              }

              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          }
        `}
      </style>
    </Box>
  );
}

export default Home;