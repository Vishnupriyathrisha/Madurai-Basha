import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  TextField,
  MenuItem,
} from "@mui/material";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";

const occasions = [
  "Family Dining",
  "Birthday",
  "Anniversary",
  "Special Dinner",
  "Celebration",
];

const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    color: "#FFF8E8",
    background: "rgba(255,248,232,0.06)",
    borderRadius: "12px",
    transition: "0.3s ease",

    "& fieldset": {
      borderColor: "rgba(216,185,76,0.28)",
      transition: "0.3s ease",
    },

    "&:hover fieldset": {
      borderColor: "rgba(216,185,76,0.65)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#D8B94C",
      borderWidth: "1px",
    },

    "& input": {
      color: "#FFF8E8",
    },

    "& textarea": {
      color: "#FFF8E8",
    },
  },

  "& .MuiInputLabel-root": {
    color: "rgba(255,248,232,0.58)",
    fontSize: "0.82rem",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#D8B94C",
  },

  "& .MuiSvgIcon-root": {
    color: "#D8B94C",
  },

  "& input[type='date']::-webkit-calendar-picker-indicator": {
    filter: "invert(80%) sepia(60%) saturate(500%)",
  },

  "& input[type='time']::-webkit-calendar-picker-indicator": {
    filter: "invert(80%) sepia(60%) saturate(500%)",
  },
};

export default function BookATable() {
  return (
    <Box
      id="booking"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, sm: 10, md: 12 },

        backgroundImage:
          "linear-gradient(rgba(255,250,242,0.86), rgba(247,236,223,0.93)), url('/booking-table.jpg')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        backgroundAttachment: {
          xs: "scroll",
          md: "fixed",
        },

        "@keyframes fadeUp": {
          from: {
            opacity: 0,
            transform: "translateY(30px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        "@keyframes slideLeft": {
          from: {
            opacity: 0,
            transform: "translateX(-40px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },

        "@keyframes slideRight": {
          from: {
            opacity: 0,
            transform: "translateX(40px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },

        "@keyframes lineReveal": {
          from: {
            width: 0,
            opacity: 0,
          },
          to: {
            width: "90px",
            opacity: 1,
          },
        },

        "@keyframes floatIcon": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-6px)",
          },
        },

        "@keyframes softGlow": {
          "0%, 100%": {
            opacity: 0.3,
          },
          "50%": {
            opacity: 0.75,
          },
        },
      }}
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <Box
        sx={{
          position: "absolute",
          width: { xs: 220, md: 420 },
          height: { xs: 220, md: 420 },
          borderRadius: "50%",
          top: -150,
          right: -120,
          background:
            "radial-gradient(circle, rgba(201,162,39,0.16), transparent 68%)",
          animation: "softGlow 5s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 200, md: 350 },
          height: { xs: 200, md: 350 },
          borderRadius: "50%",
          bottom: -150,
          left: -120,
          background:
            "radial-gradient(circle, rgba(139,30,45,0.08), transparent 68%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative circle */}

      <Box
        sx={{
          position: "absolute",
          width: { xs: 170, md: 300 },
          height: { xs: 170, md: 300 },
          borderRadius: "50%",
          border: "1px solid rgba(139,30,45,0.08)",
          top: 50,
          right: -130,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ================= HEADER ================= */}

        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 5, md: 7 },
            animation: "fadeUp 0.9s ease-out both",
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
                color: "#A57D16",
                fontSize: 17,
              }}
            />

            <Typography
              sx={{
                color: "#8C6A13",
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
              RESERVATIONS
            </Typography>

            <StarRoundedIcon
              sx={{
                color: "#A57D16",
                fontSize: 17,
              }}
            />
          </Stack>

          <Typography
            sx={{
              mt: 1.5,
              color: "#3A0F16",
              fontFamily: "Georgia, serif",
              fontWeight: 800,
              fontSize: {
                xs: "2.15rem",
                sm: "2.8rem",
                md: "3.5rem",
              },
              lineHeight: 1.05,
            }}
          >
            Reserve Your{" "}
            <Box
              component="span"
              sx={{
                color: "#A57D16",
                fontStyle: "italic",
              }}
            >
              Table
            </Box>
          </Typography>

          <Box
            sx={{
              height: "2px",
              width: "90px",
              mx: "auto",
              mt: 2,
              background:
                "linear-gradient(90deg, transparent, #C9A227, transparent)",
              animation: "lineReveal 1s ease-out 0.3s both",
            }}
          />

          <Typography
            sx={{
              mt: 2,
              color: "#6E5149",
              fontSize: {
                xs: "0.82rem",
                sm: "0.92rem",
              },
              letterSpacing: {
                xs: "1px",
                sm: "2px",
              },
            }}
          >
            AN EVENING WORTH REMEMBERING
          </Typography>
        </Box>

        {/* ================= MAIN CONTENT ================= */}

        <Grid
          container
          spacing={{ xs: 4, md: 5 }}
          alignItems="stretch"
        >
          {/* ================= LEFT IMAGE ================= */}

          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
            sx={{
              animation: "slideLeft 1s ease-out 0.2s both",
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: {
                  xs: 300,
                  sm: 420,
                  md: "100%",
                },
                minHeight: {
                  md: 600,
                },
                borderRadius: {
                  xs: "24px",
                  md: "30px",
                },
                overflow: "hidden",
                border: "1px solid rgba(139,30,45,0.28)",
                boxShadow:
                  "0 25px 55px rgba(58,15,22,0.2)",

                "&:hover img": {
                  transform: "scale(1.06)",
                },

                "&:hover .imageFrame": {
                  inset: {
                    xs: 11,
                    md: 16,
                  },
                },
              }}
            >
              <Box
                component="img"
                src="/booking-table.jpg"
                alt="Restaurant dining table"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition:
                    "transform 1.2s cubic-bezier(0.22,1,0.36,1)",
                }}
              />

              {/* Image overlay */}

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(58,15,22,0.02) 25%, rgba(58,15,22,0.88) 100%)",
                }}
              />

              {/* Gold Frame */}

              <Box
                className="imageFrame"
                sx={{
                  position: "absolute",
                  inset: {
                    xs: 14,
                    md: 20,
                  },
                  border:
                    "1px solid rgba(255,220,110,0.65)",
                  borderRadius: {
                    xs: "17px",
                    md: "22px",
                  },
                  transition: "0.5s ease",
                  pointerEvents: "none",
                }}
              />

              {/* Image Content */}

              <Box
                sx={{
                  position: "absolute",
                  left: {
                    xs: 28,
                    md: 38,
                  },
                  right: {
                    xs: 28,
                    md: 38,
                  },
                  bottom: {
                    xs: 28,
                    md: 38,
                  },
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{
                    mb: 1.2,
                  }}
                >
                  <RestaurantRoundedIcon
                    sx={{
                      color: "#D8B94C",
                      fontSize: 19,
                      animation:
                        "floatIcon 3s ease-in-out infinite",
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#D8B94C",
                      fontSize: "0.62rem",
                      fontWeight: 800,
                      letterSpacing: "2.2px",
                    }}
                  >
                    MADURAI BASHA
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    color: "#FFF8E8",
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    fontSize: {
                      xs: "1.7rem",
                      md: "2.15rem",
                    },
                    lineHeight: 1.15,
                  }}
                >
                  Gather Around
                  <br />
                  The Table.
                </Typography>

                <Typography
                  sx={{
                    mt: 1.2,
                    color:
                      "rgba(255,248,232,0.72)",
                    fontSize: "0.78rem",
                    lineHeight: 1.6,
                    maxWidth: 300,
                  }}
                >
                  Authentic flavours, warm hospitality,
                  and memories waiting to be made.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* ================= FORM ================= */}

          <Grid
            size={{
              xs: 12,
              md: 7,
            }}
            sx={{
              animation: "slideRight 1s ease-out 0.3s both",
            }}
          >
            <Box
              component="form"
              sx={{
                height: "100%",
                p: {
                  xs: 2.5,
                  sm: 4,
                  md: 4.5,
                },
                borderRadius: {
                  xs: "24px",
                  md: "30px",
                },

                background:
                  "linear-gradient(145deg, #4A121B, #320B11)",

                border:
                  "1px solid rgba(201,162,39,0.55)",

                boxShadow:
                  "0 25px 60px rgba(58,15,22,0.3)",

                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Form decorative glow */}

              <Box
                sx={{
                  position: "absolute",
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  top: -100,
                  right: -90,
                  background:
                    "radial-gradient(circle, rgba(201,162,39,0.12), transparent 68%)",
                  pointerEvents: "none",
                }}
              />

              {/* Form Header */}

              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  mb: 3.5,
                }}
              >
                <Typography
                  sx={{
                    color: "#D8B94C",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    letterSpacing: "2.5px",
                  }}
                >
                  TABLE RESERVATION
                </Typography>

                <Typography
                  sx={{
                    mt: 0.8,
                    color: "#FFF8E8",
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    fontSize: {
                      xs: "1.65rem",
                      sm: "2rem",
                    },
                  }}
                >
                  Tell us about your visit
                </Typography>

                <Typography
                  sx={{
                    mt: 0.8,
                    color:
                      "rgba(255,248,232,0.56)",
                    fontSize: "0.78rem",
                    lineHeight: 1.7,
                  }}
                >
                  Fill in the details below and get ready
                  for a memorable dining experience.
                </Typography>
              </Box>

              {/* ================= FORM FIELDS ================= */}

              <Grid
                container
                spacing={2}
                sx={{
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Name */}

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Your Name"
                    placeholder="Enter your name"
                    variant="outlined"
                    sx={textFieldStyle}
                  />
                </Grid>

                {/* Phone */}

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Phone Number"
                    placeholder="+91"
                    variant="outlined"
                    sx={textFieldStyle}
                  />
                </Grid>

                {/* Date */}

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    type="date"
                    label="Date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    sx={textFieldStyle}
                  />
                </Grid>

                {/* Time */}

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    type="time"
                    label="Preferred Time"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    sx={textFieldStyle}
                  />
                </Grid>

                {/* Guests */}

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    select
                    label="Number of Guests"
                    defaultValue=""
                    variant="outlined"
                    sx={{
                      ...textFieldStyle,

                      "& .MuiSelect-select": {
                        color: "#FFF8E8",
                      },

                      "& .MuiSelect-icon": {
                        color: "#D8B94C",
                      },
                    }}
                  >
                    <MenuItem value="">
                      Select guests
                    </MenuItem>

                    <MenuItem value="1">
                      1 Guest
                    </MenuItem>

                    <MenuItem value="2">
                      2 Guests
                    </MenuItem>

                    <MenuItem value="3">
                      3 Guests
                    </MenuItem>

                    <MenuItem value="4">
                      4 Guests
                    </MenuItem>

                    <MenuItem value="5">
                      5 Guests
                    </MenuItem>

                    <MenuItem value="6">
                      6 Guests
                    </MenuItem>

                    <MenuItem value="7+">
                      7+ Guests
                    </MenuItem>
                  </TextField>
                </Grid>

                {/* Occasion */}

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    select
                    label="Occasion"
                    defaultValue=""
                    variant="outlined"
                    sx={{
                      ...textFieldStyle,

                      "& .MuiSelect-select": {
                        color: "#FFF8E8",
                      },

                      "& .MuiSelect-icon": {
                        color: "#D8B94C",
                      },
                    }}
                  >
                    <MenuItem value="">
                      Select occasion
                    </MenuItem>

                    {occasions.map((occasion) => (
                      <MenuItem
                        key={occasion}
                        value={occasion}
                      >
                        {occasion}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Special Request */}

                <Grid size={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Special Request"
                    placeholder="Any special request or message..."
                    variant="outlined"
                    sx={textFieldStyle}
                  />
                </Grid>
              </Grid>

              {/* ================= INFO STRIP ================= */}

              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  mt: 3,
                  p: 2,
                  borderRadius: "14px",
                  border:
                    "1px solid rgba(201,162,39,0.18)",
                  background:
                    "rgba(255,248,232,0.045)",
                }}
              >
                <Stack
                  direction={{
                    xs: "column",
                    sm: "row",
                  }}
                  spacing={{
                    xs: 1.5,
                    sm: 3,
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <CalendarMonthRoundedIcon
                      sx={{
                        color: "#D8B94C",
                        fontSize: 19,
                      }}
                    />

                    <Typography
                      sx={{
                        color:
                          "rgba(255,248,232,0.66)",
                        fontSize: "0.68rem",
                      }}
                    >
                      Advance reservation recommended
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <AccessTimeRoundedIcon
                      sx={{
                        color: "#D8B94C",
                        fontSize: 19,
                      }}
                    />

                    <Typography
                      sx={{
                        color:
                          "rgba(255,248,232,0.66)",
                        fontSize: "0.68rem",
                      }}
                    >
                      11:00 AM – 11:00 PM
                    </Typography>
                  </Stack>
                </Stack>
              </Box>

              {/* ================= BUTTON ================= */}

              <Box
                component="button"
                type="button"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  mt: 2.5,
                  py: 1.7,
                  border: "none",
                  borderRadius: "13px",
                  cursor: "pointer",

                  background:
                    "linear-gradient(135deg, #D8B94C, #B78A16)",

                  color: "#3A0F16",

                  fontFamily: "inherit",
                  fontSize: "0.78rem",
                  fontWeight: 900,
                  letterSpacing: "2px",

                  boxShadow:
                    "0 10px 28px rgba(201,162,39,0.22)",

                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow:
                      "0 15px 35px rgba(201,162,39,0.35)",
                  },

                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={1}
                >
                  <CelebrationRoundedIcon
                    sx={{
                      fontSize: 20,
                    }}
                  />

                  <span>
                    RESERVE MY TABLE
                  </span>
                </Stack>
              </Box>

              {/* Bottom message */}

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  mt: 2.2,
                }}
              >
                <GroupsRoundedIcon
                  sx={{
                    color: "#D8B94C",
                    fontSize: 17,
                  }}
                />

                <Typography
                  sx={{
                    color:
                      "rgba(255,248,232,0.4)",
                    fontSize: "0.62rem",
                    letterSpacing: "1px",
                  }}
                >
                  WE'LL MAKE YOUR VISIT SPECIAL
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* ================= BOTTOM QUOTE ================= */}

        <Box
          sx={{
            mt: { xs: 5, md: 6 },
            textAlign: "center",
            animation:
              "fadeUp 1s ease-out 1s both",
          }}
        >
          <Typography
            sx={{
              color: "#70544C",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: {
                xs: "0.85rem",
                sm: "0.95rem",
              },
            }}
          >
            “Every gathering becomes a memory around our table.”
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
                width: 30,
                height: "1px",
                background: "#C9A227",
              }}
            />

            <StarRoundedIcon
              sx={{
                color: "#A57D16",
                fontSize: 13,
              }}
            />

            <Box
              sx={{
                width: 30,
                height: "1px",
                background: "#C9A227",
              }}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}