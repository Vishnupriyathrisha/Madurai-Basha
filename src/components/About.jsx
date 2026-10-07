import { useEffect, useRef, useState } from "react";

import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
} from "@mui/material";

import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";

function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = aboutRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Every time About enters/leaves viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={aboutRef}
      id="about"
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #FFF8EE 0%, #FFF1D6 50%, #F9E7C5 100%)",
        color: "#3A0714",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        py: { xs: 9, md: 12 },
      }}
    >
      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <Box
        sx={{
          position: "absolute",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,163,76,0.18), transparent 70%)",
          top: "-150px",
          right: "-120px",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(90,11,28,0.07), transparent 70%)",
          bottom: "-120px",
          left: "-100px",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* =========================
            HEADING
        ========================== */}

        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
            opacity: isVisible ? 1 : 0,

            animation: isVisible
              ? "aboutHeading 1s ease-out both"
              : "none",
          }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1.5}
            sx={{ mb: 2 }}
          >
            <Box
              sx={{
                width: 45,
                height: 1.5,
                background: "#C58E32",
              }}
            />

            <AutoAwesomeRoundedIcon
              sx={{
                fontSize: 19,
                color: "#C58E32",
              }}
            />

            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#8A5A20",
              }}
            >
              OUR STORY
            </Typography>

            <AutoAwesomeRoundedIcon
              sx={{
                fontSize: 19,
                color: "#C58E32",
              }}
            />

            <Box
              sx={{
                width: 45,
                height: 1.5,
                background: "#C58E32",
              }}
            />
          </Stack>

          <Typography
            component="h2"
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: {
                xs: "40px",
                sm: "52px",
                md: "64px",
              },
              lineHeight: 1.05,
              fontWeight: 700,
              color: "#5A0B1C",
              mb: 2,
            }}
          >
            A Taste of
            <Box
              component="span"
              sx={{
                color: "#B27A28",
                fontStyle: "italic",
                ml: 1,
              }}
            >
              Home
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,
              mx: "auto",
              color: "#6E5A4A",
              fontSize: { xs: 14, md: 16 },
              lineHeight: 1.8,
            }}
          >
            More than a restaurant, we are a little piece of Madurai served
            with warmth, tradition and unforgettable flavour.
          </Typography>
        </Box>

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
          }}
        >
          {/* =========================
              IMAGE
          ========================== */}

          <Box
            sx={{
              opacity: isVisible ? 1 : 0,

              animation: isVisible
                ? "aboutImage 1.2s ease-out both"
                : "none",
            }}
          >
            <Box
              sx={{
                position: "relative",
              }}
            >
              {/* Top Frame */}

              <Box
                sx={{
                  position: "absolute",
                  top: -14,
                  left: -14,
                  width: "65%",
                  height: "65%",
                  borderTop: "2px solid #C58E32",
                  borderLeft: "2px solid #C58E32",
                  borderRadius: "24px 0 0 0",
                  opacity: 0.8,
                }}
              />

              {/* Image */}

              <Box
                sx={{
                  position: "relative",
                  height: {
                    xs: 350,
                    sm: 430,
                    md: 500,
                  },
                  borderRadius: {
                    xs: "24px",
                    md: "32px",
                  },
                  overflow: "hidden",
                  border:
                    "1px solid rgba(181,128,42,0.45)",
                  boxShadow:
                    "0 25px 60px rgba(58,7,20,0.18)",
                  background: "#EBD6B4",
                }}
              >
                <Box
                  component="img"
                  src="/madurai-about.jpg"
                  alt="Traditional Madurai restaurant"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.8s ease",

                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />

                {/* Image Overlay */}

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(58,7,20,0.02) 45%, rgba(58,7,20,0.55) 100%)",
                  }}
                />

                {/* Image Badge */}

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 22,
                    left: 22,
                    right: 22,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    p: 2,
                    borderRadius: "16px",
                    background:
                      "rgba(255,248,238,0.92)",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.15)",
                  }}
                >
                  <RestaurantRoundedIcon
                    sx={{
                      color: "#8A5A20",
                      fontSize: 28,
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: "1.5px",
                        color: "#5A0B1C",
                      }}
                    >
                      AUTHENTIC MADURAI
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 11,
                        color: "#806A56",
                      }}
                    >
                      Tradition on every plate
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Bottom Frame */}

              <Box
                sx={{
                  position: "absolute",
                  bottom: -14,
                  right: -14,
                  width: "45%",
                  height: "45%",
                  borderBottom: "2px solid #C58E32",
                  borderRight: "2px solid #C58E32",
                  borderRadius: "0 0 24px 0",
                  opacity: 0.8,
                }}
              />
            </Box>
          </Box>

          {/* =========================
              RIGHT CONTENT
          ========================== */}

          <Box
            sx={{
              opacity: isVisible ? 1 : 0,

              animation: isVisible
                ? "aboutContent 1.2s ease-out 0.15s both"
                : "none",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: {
                  xs: 30,
                  sm: 36,
                  md: 42,
                },
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#5A0B1C",
                mb: 3,
              }}
            >
              Where every meal
              <br />

              <Box
                component="span"
                sx={{
                  color: "#B27A28",
                  fontStyle: "italic",
                }}
              >
                tells a story.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#6E5A4A",
                fontSize: {
                  xs: 14,
                  md: 16,
                },
                lineHeight: 1.9,
                mb: 2.5,
              }}
            >
              At Madurai Basha, we believe food is not just something you
              eat. It is a memory, a tradition and a feeling that brings
              people together.
            </Typography>

            <Typography
              sx={{
                color: "#6E5A4A",
                fontSize: {
                  xs: 14,
                  md: 16,
                },
                lineHeight: 1.9,
                mb: 3.5,
              }}
            >
              Inspired by the vibrant streets and timeless flavours of
              Madurai, our kitchen brings together authentic recipes,
              carefully selected ingredients and the warmth of South Indian
              hospitality.
            </Typography>

            {/* =====================================================
                SCROLL QUOTE
            ====================================================== */}

            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: {
                  xs: 190,
                  sm: 210,
                  md: 225,
                },
                mb: 4,
                overflow: "hidden",

                opacity: isVisible ? 1 : 0,

                animation: isVisible
                  ? "scrollContainer 0.8s ease-out 0.3s both"
                  : "none",
              }}
            >
              {/* ============================
                  PAPER
              ============================= */}

              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  bottom: 16,
                  left: 22,
                  right: 22,

                  overflow: "hidden",

                  background:
                    "linear-gradient(180deg, #E5C77D 0%, #D5B564 50%, #C49A49 100%)",

                  borderTop:
                    "1px solid rgba(100,65,20,0.4)",

                  borderBottom:
                    "1px solid rgba(100,65,20,0.4)",

                  boxShadow:
                    "inset 0 3px 0 rgba(255,242,181,0.55), inset 0 -4px 0 rgba(92,57,17,0.25), 0 15px 30px rgba(75,48,18,0.18)",

                  clipPath:
                    "inset(0 100% 0 0)",

                  animation: isVisible
                    ? "paperReveal 2.8s cubic-bezier(0.65,0,0.35,1) 0.5s forwards"
                    : "none",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,

                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent 0px, transparent 8px, rgba(87,57,19,0.18) 9px, transparent 10px)",

                    opacity: 0.5,
                    pointerEvents: "none",
                  },
                }}
              >
                {/* Quote */}

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",

                    textAlign: "center",

                    px: {
                      xs: 3,
                      sm: 5,
                      md: 6,
                    },

                    zIndex: 2,

                    opacity: 0,

                    animation: isVisible
                      ? "quoteAppear 1s ease-out 1.8s forwards"
                      : "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Georgia, serif",
                      fontSize: {
                        xs: 16,
                        sm: 19,
                        md: 22,
                      },
                      fontWeight: 700,
                      fontStyle: "italic",
                      color: "#4A2C12",
                      lineHeight: 1.6,
                      textShadow:
                        "0 1px 0 rgba(255,239,176,0.5)",
                    }}
                  >
                    “Good food fills the stomach.
                    <br />
                    Traditional food fills the heart.”
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 32,
                        height: 1,
                        background:
                          "rgba(74,44,18,0.45)",
                      }}
                    />

                    <RestaurantRoundedIcon
                      sx={{
                        fontSize: 17,
                        color: "#5A3513",
                      }}
                    />

                    <Box
                      sx={{
                        width: 32,
                        height: 1,
                        background:
                          "rgba(74,44,18,0.45)",
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* ==============================
                  MOVING WOODEN ROLLER
              =============================== */}

              <Box
                sx={{
                  position: "absolute",

                  zIndex: 10,

                  top: 0,
                  bottom: 0,

                  left: {
                    xs: -4,
                    sm: -6,
                    md: -8,
                  },

                  width: {
                    xs: 30,
                    sm: 36,
                    md: 42,
                  },

                  borderRadius: "50%",

                  background:
                    "linear-gradient(90deg, #4A290D 0%, #85521D 20%, #D5A34C 48%, #9A6225 72%, #4B2A0E 100%)",

                  boxShadow:
                    "5px 0 12px rgba(57,32,8,0.4), inset 2px 0 4px rgba(255,224,145,0.35)",

                  animation: isVisible
                    ? "woodRoll 2.8s cubic-bezier(0.65,0,0.35,1) 0.5s forwards"
                    : "none",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: "50%",
                    top: 8,
                    bottom: 8,
                    width: 4,
                    transform: "translateX(-50%)",
                    borderRadius: "50%",
                    background:
                      "rgba(68,38,10,0.4)",
                  },
                }}
              />

              {/* ==============================
                  MOVING END CAP
              =============================== */}

              <Box
                sx={{
                  position: "absolute",

                  zIndex: 11,

                  top: "50%",
                  left: -9,

                  width: {
                    xs: 42,
                    sm: 49,
                    md: 56,
                  },

                  height: {
                    xs: 42,
                    sm: 49,
                    md: 56,
                  },

                  transform:
                    "translateY(-50%)",

                  borderRadius: "50%",

                  background:
                    "radial-gradient(circle at 35% 30%, #E5B963 0%, #A66B28 35%, #633B14 70%, #3B200A 100%)",

                  boxShadow:
                    "4px 5px 12px rgba(55,31,8,0.4)",

                  animation: isVisible
                    ? "woodCapRoll 2.8s cubic-bezier(0.65,0,0.35,1) 0.5s forwards"
                    : "none",

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 9,
                    borderRadius: "50%",
                    border:
                      "2px solid rgba(238,194,105,0.42)",
                  },
                }}
              />

              {/* ==============================
                  RIGHT ROLLER
              =============================== */}

              <Box
                sx={{
                  position: "absolute",

                  zIndex: 8,

                  top: 0,
                  bottom: 0,

                  right: {
                    xs: -4,
                    sm: -6,
                    md: -8,
                  },

                  width: {
                    xs: 30,
                    sm: 36,
                    md: 42,
                  },

                  borderRadius: "50%",

                  background:
                    "linear-gradient(90deg, #4A290D 0%, #85521D 20%, #D5A34C 48%, #9A6225 72%, #4B2A0E 100%)",

                  boxShadow:
                    "-5px 0 12px rgba(57,32,8,0.4), inset -2px 0 4px rgba(255,224,145,0.35)",
                }}
              />

              {/* ==============================
                  RIGHT END CAP
              =============================== */}

              <Box
                sx={{
                  position: "absolute",

                  zIndex: 9,

                  top: "50%",
                  right: -9,

                  width: {
                    xs: 42,
                    sm: 49,
                    md: 56,
                  },

                  height: {
                    xs: 42,
                    sm: 49,
                    md: 56,
                  },

                  transform:
                    "translateY(-50%)",

                  borderRadius: "50%",

                  background:
                    "radial-gradient(circle at 35% 30%, #E5B963 0%, #A66B28 35%, #633B14 70%, #3B200A 100%)",

                  boxShadow:
                    "-4px 5px 12px rgba(55,31,8,0.4)",

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 9,
                    borderRadius: "50%",
                    border:
                      "2px solid rgba(238,194,105,0.42)",
                  },
                }}
              />
            </Box>

            {/* =========================
                DIVIDER
            ========================== */}

            <Divider
              sx={{
                mb: 3,
                borderColor:
                  "rgba(138,90,32,0.22)",
              }}
            />

            {/* =========================
                HIGHLIGHTS
            ========================== */}

            <Stack
              direction="row"
              spacing={{
                xs: 2,
                sm: 4,
              }}
              flexWrap="wrap"
              useFlexGap
            >
              {/* Authentic */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                }}
              >
                <LocalDiningRoundedIcon
                  sx={{
                    color: "#B27A28",
                    fontSize: 25,
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: 12,
                      color: "#5A0B1C",
                    }}
                  >
                    AUTHENTIC
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#806A56",
                    }}
                  >
                    Local Recipes
                  </Typography>
                </Box>
              </Box>

              {/* Fresh */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                }}
              >
                <RestaurantRoundedIcon
                  sx={{
                    color: "#B27A28",
                    fontSize: 25,
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: 12,
                      color: "#5A0B1C",
                    }}
                  >
                    FRESH
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#806A56",
                    }}
                  >
                    Every Day
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>

      {/* =========================
          ANIMATIONS
      ========================== */}

      <style>
        {`
          @keyframes aboutHeading {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes aboutImage {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes aboutContent {
            0% {
              opacity: 0;
              transform: translateX(50px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Paper reveals from LEFT to RIGHT */

          @keyframes paperReveal {
            0% {
              clip-path: inset(0 100% 0 0);
            }

            100% {
              clip-path: inset(0 0 0 0);
            }
          }

          /* Quote appears */

          @keyframes quoteAppear {
            0% {
              opacity: 0;
              transform: translateX(-15px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Wooden roller moves LEFT → RIGHT */

          @keyframes woodRoll {
            0% {
              left: -4px;
              transform: rotate(0deg);
            }

            100% {
              left: calc(100% - 26px);
              transform: rotate(720deg);
            }
          }

          /* Wooden cap follows roller */

          @keyframes woodCapRoll {
            0% {
              left: -9px;
              transform: translateY(-50%) rotate(0deg);
            }

            100% {
              left: calc(100% - 38px);
              transform: translateY(-50%) rotate(720deg);
            }
          }

          @keyframes scrollContainer {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* =========================
             MOBILE
          ========================== */

          @media (max-width: 600px) {

            @keyframes aboutImage {
              0% {
                opacity: 0;
                transform: translateY(30px);
              }

              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes aboutContent {
              0% {
                opacity: 0;
                transform: translateY(30px);
              }

              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes woodRoll {
              0% {
                left: -4px;
                transform: rotate(0deg);
              }

              100% {
                left: calc(100% - 27px);
                transform: rotate(720deg);
              }
            }

            @keyframes woodCapRoll {
              0% {
                left: -9px;
                transform: translateY(-50%) rotate(0deg);
              }

              100% {
                left: calc(100% - 39px);
                transform: translateY(-50%) rotate(720deg);
              }
            }
          }
        `}
      </style>
    </Box>
  );
}

export default About;