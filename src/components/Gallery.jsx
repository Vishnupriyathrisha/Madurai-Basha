import { Box, Container, Typography, Stack } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const galleryItems = [
  {
    title: "Birthday Celebrations",
    label: "MOMENTS",
    image: "/gallery-birthday.png",
    size: "featured",
  },
  {
    title: "Chef's Special",
    label: "TASTE",
    image: "/gallery-chef.jpg",
    size: "small",
  },
  {
    title: "Family Moments",
    label: "TOGETHER",
    image: "/gallery-family.jpg",
    size: "small",
  },
  {
    title: "Party Hall",
    label: "CELEBRATE",
    image: "/gallery-partyhall.jpeg",
    size: "wide",
  },
  {
    title: "Special Dinner",
    label: "DINNER",
    image: "/gallery-special-dinner.jpg",
    size: "small",
  },
  {
    title: "Surprise Planning",
    label: "MEMORIES",
    image: "/gallery-surprise.png",
    size: "wide",
  },
];

function MagazineImage({ item, index }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: {
          xs: index === 0 ? 330 : 220,
          sm:
            item.size === "featured"
              ? 420
              : item.size === "wide"
              ? 280
              : 240,
          md:
            item.size === "featured"
              ? 470
              : item.size === "wide"
              ? 290
              : 240,
        },

        overflow: "hidden",

        borderRadius: {
          xs: "18px",
          md: index === 0 ? "26px" : "20px",
        },

        background: "#731e2d",

        border: "1px solid rgba(212,175,90,0.3)",

        boxShadow:
          "0 18px 45px rgba(73,24,28,0.16)",

        transition:
          "transform 0.7s cubic-bezier(0.22,1,0.36,1), box-shadow 0.7s ease, border-color 0.5s ease",

        "&:hover": {
          transform: "translateY(-8px)",

          borderColor: "#d4af5a",

          boxShadow:
            "0 28px 58px rgba(73,24,28,0.3), 0 0 25px rgba(212,175,90,0.16)",

          "& .magazine-image": {
            transform: "scale(1.08)",
            filter: "brightness(0.62) saturate(1.08)",
          },

          "& .magazine-overlay": {
            opacity: 0.94,
          },

          "& .magazine-content": {
            transform: "translateY(0)",
          },

          "& .magazine-label": {
            letterSpacing: "0.3em",
          },

          "& .magazine-line": {
            width: "82px",
          },

          "& .magazine-number": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      }}
    >
      {/* IMAGE */}
      <Box
        component="img"
        src={item.image}
        alt={item.title}
        className="magazine-image"
        sx={{
          position: "absolute",
          inset: 0,

          width: "100%",
          height: "100%",

          objectFit: "cover",

          filter: "brightness(0.82) saturate(0.95)",

          transition:
            "transform 1s cubic-bezier(0.22,1,0.36,1), filter 0.7s ease",
        }}
      />

      {/* CINEMATIC OVERLAY */}
      <Box
        className="magazine-overlay"
        sx={{
          position: "absolute",
          inset: 0,

          background:
            "linear-gradient(180deg, rgba(30,8,12,0.04) 15%, rgba(35,8,14,0.25) 42%, rgba(35,8,14,0.94) 100%)",

          opacity: 0.7,

          transition: "opacity 0.7s ease",
        }}
      />

      {/* TOP GOLD LINE */}
      <Box
        sx={{
          position: "absolute",

          top: {
            xs: 15,
            md: 19,
          },

          left: {
            xs: 15,
            md: 19,
          },

          right: {
            xs: 15,
            md: 19,
          },

          height: 1,

          background:
            "linear-gradient(90deg, rgba(243,210,122,0.75), transparent 55%, rgba(243,210,122,0.25))",

          opacity: 0.8,
        }}
      />

      {/* NUMBER */}
      <Typography
        className="magazine-number"
        sx={{
          position: "absolute",

          top: {
            xs: 22,
            md: 27,
          },

          right: {
            xs: 20,
            md: 25,
          },

          color: "rgba(255,248,233,0.8)",

          fontFamily:
            '"Playfair Display", Georgia, serif',

          fontSize: {
            xs: "1.1rem",
            md: "1.35rem",
          },

          fontWeight: 500,

          letterSpacing: "0.08em",

          transform: "translateY(-6px)",

          opacity: 0.7,

          transition: "all 0.5s ease",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </Typography>

      {/* TEXT INSIDE IMAGE */}
      <Box
        className="magazine-content"
        sx={{
          position: "absolute",

          left: {
            xs: 20,
            md: 27,
          },

          right: {
            xs: 20,
            md: 27,
          },

          bottom: {
            xs: 20,
            md: 25,
          },

          transform: {
            xs: "translateY(0)",
            md: "translateY(7px)",
          },

          transition:
            "transform 0.65s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* LABEL */}
        <Typography
          className="magazine-label"
          sx={{
            color: "#f3d27a",

            fontSize: {
              xs: "0.58rem",
              md: "0.65rem",
            },

            fontWeight: 900,

            letterSpacing: "0.2em",

            textTransform: "uppercase",

            mb: 0.7,

            transition: "letter-spacing 0.6s ease",
          }}
        >
          {item.label}
        </Typography>

        {/* TITLE */}
        <Typography
          sx={{
            color: "#fff8e9",

            fontFamily:
              '"Playfair Display", Georgia, serif',

            fontWeight: 800,

            fontSize: {
              xs: "1.35rem",
              sm:
                item.size === "featured"
                  ? "2rem"
                  : "1.55rem",
              md:
                item.size === "featured"
                  ? "2.35rem"
                  : "1.65rem",
            },

            lineHeight: 1.05,

            textShadow:
              "0 4px 18px rgba(0,0,0,0.4)",
          }}
        >
          {item.title}
        </Typography>

        {/* GOLD LINE */}
        <Box
          className="magazine-line"
          sx={{
            width: {
              xs: 52,
              md: 44,
            },

            height: 2,

            mt: 1.2,

            background:
              "linear-gradient(90deg, #f3d27a, rgba(243,210,122,0))",

            transition:
              "width 0.6s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </Box>
    </Box>
  );
}

export default function Gallery() {
  return (
    <Box
      id="gallery"
      sx={{
        position: "relative",

        overflow: "hidden",

        py: {
          xs: 8,
          md: 11,
        },

        /* BACKGROUND IMAGE */
        backgroundImage:
          "linear-gradient(rgba(255,250,242,0.76), rgba(247,236,223,0.84)), url('/gallery-bg.jpg')",

        backgroundSize: "110% auto",

        backgroundPosition: "center",

        backgroundRepeat: "no-repeat",

        backgroundAttachment: {
          xs: "scroll",
          md: "fixed",
        },

        "&::before": {
          content: '""',

          position: "absolute",

          inset: 0,

          background:
            "radial-gradient(circle at 8% 18%, rgba(115,30,45,0.07), transparent 27%), radial-gradient(circle at 92% 82%, rgba(212,175,90,0.1), transparent 28%)",

          pointerEvents: "none",
        },
      }}
    >
      {/* DECORATIVE CIRCLE */}
      <Box
        sx={{
          position: "absolute",

          width: 500,
          height: 500,

          borderRadius: "50%",

          top: -280,
          right: -220,

          border:
            "1px solid rgba(115,30,45,0.07)",

          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",

          zIndex: 2,
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            textAlign: "center",

            mb: {
              xs: 5,
              md: 7,
            },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1.2}
            sx={{
              mb: 1.5,
            }}
          >
            <Box
              sx={{
                width: 42,
                height: 1,

                background:
                  "linear-gradient(90deg, transparent, #d4af5a)",
              }}
            />

            <Typography
              sx={{
                color: "#a07b31",

                fontSize: {
                  xs: "0.65rem",
                  sm: "0.73rem",
                },

                fontWeight: 900,

                letterSpacing: "0.27em",

                textTransform: "uppercase",
              }}
            >
              Moments of Madurai
            </Typography>

            <Box
              sx={{
                width: 42,
                height: 1,

                background:
                  "linear-gradient(90deg, #d4af5a, transparent)",
              }}
            />
          </Stack>

          <Typography
            sx={{
              fontFamily:
                '"Playfair Display", Georgia, serif',

              fontSize: {
                xs: "2.25rem",
                sm: "3rem",
                md: "3.8rem",
              },

              fontWeight: 900,

              color: "#731e2d",

              lineHeight: 1,

              mb: 1.4,
            }}
          >
            More Than Just

            <Box
              component="span"
              sx={{
                display: {
                  xs: "block",
                  sm: "inline",
                },

                ml: {
                  xs: 0,
                  sm: 1.3,
                },

                color: "#a07b31",
              }}
            >
              a Meal
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: 600,

              mx: "auto",

              color: "#735f55",

              fontSize: {
                xs: "0.84rem",
                sm: "0.94rem",
              },

              lineHeight: 1.75,
            }}
          >
            A collection of beautiful moments, traditional
            flavours, and memories shared around our table.
          </Typography>

          {/* GOLD DECORATION */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{
              mt: 2.5,
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 1,

                background:
                  "linear-gradient(90deg, transparent, #d4af5a)",
              }}
            />

            <StarRoundedIcon
              sx={{
                color: "#d4af5a",

                fontSize: 17,
              }}
            />

            <Box
              sx={{
                width: 60,
                height: 1,

                background:
                  "linear-gradient(90deg, #d4af5a, transparent)",
              }}
            />
          </Stack>
        </Box>

        {/* CINEMATIC MAGAZINE GRID */}
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(12, 1fr)",
            },

            gap: {
              xs: 1.8,
              sm: 2.2,
              md: 2.7,
            },

            alignItems: "stretch",
          }}
        >
          {/* BIRTHDAY - FEATURED */}
          <Box
            sx={{
              gridColumn: {
                xs: "span 1",
                sm: "span 2",
                md: "span 7",
              },
            }}
          >
            <MagazineImage
              item={galleryItems[0]}
              index={0}
            />
          </Box>

          {/* CHEF */}
          <Box
            sx={{
              gridColumn: {
                xs: "span 1",
                sm: "span 1",
                md: "span 5",
              },
            }}
          >
            <MagazineImage
              item={galleryItems[1]}
              index={1}
            />
          </Box>

          {/* FAMILY */}
          <Box
            sx={{
              gridColumn: {
                xs: "span 1",
                sm: "span 1",
                md: "span 5",
              },
            }}
          >
            <MagazineImage
              item={galleryItems[2]}
              index={2}
            />
          </Box>

          {/* PARTY HALL */}
          <Box
            sx={{
              gridColumn: {
                xs: "span 1",
                sm: "span 2",
                md: "span 7",
              },
            }}
          >
            <MagazineImage
              item={galleryItems[3]}
              index={3}
            />
          </Box>

          {/* SPECIAL DINNER */}
          <Box
            sx={{
              gridColumn: {
                xs: "span 1",
                sm: "span 1",
                md: "span 5",
              },
            }}
          >
            <MagazineImage
              item={galleryItems[4]}
              index={4}
            />
          </Box>

          {/* SURPRISE */}
          <Box
            sx={{
              gridColumn: {
                xs: "span 1",
                sm: "span 2",
                md: "span 7",
              },
            }}
          >
            <MagazineImage
              item={galleryItems[5]}
              index={5}
            />
          </Box>
        </Box>

        {/* BOTTOM MESSAGE */}
        <Box
          sx={{
            mt: {
              xs: 4.5,
              md: 6,
            },

            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#731e2d",

              fontFamily:
                '"Playfair Display", Georgia, serif',

              fontStyle: "italic",

              fontSize: {
                xs: "0.98rem",
                sm: "1.1rem",
              },
            }}
          >
            Every celebration deserves a table filled with love.
          </Typography>

          <Box
            sx={{
              width: 50,
              height: 2,

              mx: "auto",

              mt: 1.3,

              background:
                "linear-gradient(90deg, transparent, #d4af5a, transparent)",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}