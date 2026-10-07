import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
} from "@mui/material";

import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";
import LunchDiningRoundedIcon from "@mui/icons-material/LunchDiningRounded";
import IcecreamRoundedIcon from "@mui/icons-material/IcecreamRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const menuSections = [
  {
    title: "Breakfast",
    subtitle: "Start your day the Madurai way",
    icon: <RestaurantMenuRoundedIcon />,
    items: [
      {
        name: "Idli",
        description: "Soft steamed rice cakes served with chutney & sambar",
        price: "₹60",
        image: "/menu-idli.jpg",
        tag: "Classic",
      },
      {
        name: "Dosa",
        description: "Crispy golden dosa served with traditional accompaniments",
        price: "₹80",
        image: "/menu-dosa.webp",
        tag: "Popular",
      },
      {
        name: "Pongal",
        description: "Warm ghee pongal with pepper, cashews & aromatic spices",
        price: "₹90",
        image: "/menu-pongal.jpg",
        tag: "Traditional",
      },
      {
        name: "Poori",
        description: "Fluffy golden pooris served with delicious potato masala",
        price: "₹80",
        image: "/menu-poori.jpg",
        tag: "Favourite",
      },
    ],
  },

  {
    title: "Main Course",
    subtitle: "Hearty meals made with tradition",
    icon: <LocalDiningRoundedIcon />,
    items: [
      {
        name: "South Indian Meals",
        description: "Complete traditional meal served on a fresh banana leaf",
        price: "₹180",
        image: "/menu-meals.jpg",
        tag: "Signature",
      },
      {
        name: "Madurai Biryani",
        description: "Aromatic rice cooked with tender meat & secret spices",
        price: "₹220",
        image: "/menu-biryani.avif",
        tag: "Must Try",
      },
      {
        name: "Parotta",
        description: "Flaky layered parotta served with spicy salna",
        price: "₹70",
        image: "/menu-parotta.jpg",
        tag: "Popular",
      },
      {
        name: "Kothu Parotta",
        description: "Chopped parotta tossed with egg, vegetables & masala",
        price: "₹140",
        image: "/menu-kothuparotta.jpg",
        tag: "Madurai Special",
      },
    ],
  },

  {
    title: "Non-Veg Specials",
    subtitle: "Bold flavours from the heart of Madurai",
    icon: <LunchDiningRoundedIcon />,
    items: [
      {
        name: "Chicken Curry",
        description: "Tender chicken simmered in a rich traditional masala",
        price: "₹190",
        image: "/menu-chicken.webp",
        tag: "Chef Special",
      },
      {
        name: "Mutton Curry",
        description: "Slow-cooked mutton with authentic South Indian spices",
        price: "₹260",
        image: "/menu-mutton.avif",
        tag: "Signature",
      },
      {
        name: "Chicken 65",
        description: "Crispy spicy chicken marinated with aromatic spices",
        price: "₹180",
        image: "/menu-chicken65.webp",
        tag: "Favourite",
      },
      {
        name: "Fish Fry",
        description: "Fresh fish coated with our traditional spicy masala",
        price: "₹220",
        image: "/menu-fish.jpg",
        tag: "Fresh",
      },
    ],
  },

  {
    title: "Desserts & Drinks",
    subtitle: "Finish your meal with something special",
    icon: <IcecreamRoundedIcon />,
    items: [
      {
        name: "Jigarthanda",
        description: "Madurai's legendary chilled milk-based dessert drink",
        price: "₹100",
        image: "/menu-jigarthanda.jpg",
        tag: "Madurai Icon",
      },
      {
        name: "Traditional Sweet",
        description: "Authentic South Indian sweet made with love",
        price: "₹90",
        image: "/menu-dessert.jpg",
        tag: "Sweet",
      },
      {
        name: "Filter Coffee",
        description: "Strong aromatic South Indian filter coffee",
        price: "₹60",
        image: "/menu-filtercoffee.jpg",
        tag: "Classic",
      },
    ],
  },
];

function MenuCard({ item }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        borderRadius: "24px",
        overflow: "hidden",

        background:
          "linear-gradient(145deg, rgba(255,252,247,0.98), rgba(248,237,224,0.96))",

        border: "1px solid rgba(115,30,45,0.12)",

        boxShadow:
          "0 14px 35px rgba(73,24,28,0.10)",

        cursor: "default",

        transition:
          "transform 0.45s cubic-bezier(0.22,1,0.36,1), background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",

        "&:hover": {
          transform: "translateY(-8px) scale(1.015)",

          background:
            "linear-gradient(145deg, #731e2d 0%, #581520 100%)",

          borderColor: "#d4af5a",

          boxShadow:
            "0 22px 45px rgba(73,24,28,0.30), 0 0 28px rgba(212,175,90,0.18)",

          "& .menu-image": {
            transform: "scale(1.1)",
            filter: "brightness(0.72) saturate(1.05)",
          },

          "& .image-overlay": {
            opacity: 0.5,
          },

          "& .menu-title": {
            color: "#f3d27a",
          },

          "& .menu-description": {
            color: "#f9e8c2",
          },

          "& .menu-tag": {
            color: "#f3d27a",
            borderColor: "rgba(243,210,122,0.55)",
            background: "rgba(212,175,90,0.08)",
          },

          "& .price-badge": {
            background:
              "linear-gradient(135deg, #f3d27a, #d4af5a)",
            color: "#5b1721",
            boxShadow:
              "0 6px 18px rgba(212,175,90,0.25)",
          },

          "& .card-glow": {
            opacity: 1,
          },
        },
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          position: "relative",
          height: {
            xs: 205,
            sm: 220,
            md: 215,
          },
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.name}
          className="menu-image"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",

            transition:
              "transform 0.8s cubic-bezier(0.22,1,0.36,1), filter 0.6s ease",
          }}
        />

        {/* IMAGE OVERLAY */}
        <Box
          className="image-overlay"
          sx={{
            position: "absolute",
            inset: 0,

            background:
              "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(40,8,14,0.78))",

            opacity: 0.28,

            transition: "opacity 0.5s ease",
          }}
        />

        {/* TAG */}
        <Box
          className="menu-tag"
          sx={{
            position: "absolute",
            top: 14,
            left: 14,

            px: 1.4,
            py: 0.65,

            borderRadius: "30px",

            background: "rgba(255,250,242,0.94)",

            border:
              "1px solid rgba(115,30,45,0.16)",

            color: "#731e2d",

            fontSize: "0.72rem",
            fontWeight: 800,
            letterSpacing: "0.06em",

            transition:
              "color 0.45s ease, background 0.45s ease, border-color 0.45s ease",
          }}
        >
          {item.tag}
        </Box>

        {/* PRICE */}
        <Box
          className="price-badge"
          sx={{
            position: "absolute",
            right: 14,
            bottom: 14,

            minWidth: 58,
            px: 1.3,
            py: 0.7,

            borderRadius: "14px",

            background:
              "rgba(255,250,242,0.96)",

            color: "#731e2d",

            textAlign: "center",

            fontWeight: 900,
            fontSize: "0.95rem",

            transition:
              "background 0.45s ease, color 0.45s ease, box-shadow 0.45s ease",
          }}
        >
          {item.price}
        </Box>
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          position: "relative",
          p: {
            xs: 2.3,
            sm: 2.6,
          },
        }}
      >
        <Typography
          className="menu-title"
          sx={{
            fontFamily:
              '"Playfair Display", "Georgia", serif',

            fontSize: {
              xs: "1.25rem",
              sm: "1.35rem",
            },

            fontWeight: 800,

            color: "#731e2d",

            mb: 0.8,

            transition: "color 0.45s ease",
          }}
        >
          {item.name}
        </Typography>

        <Typography
          className="menu-description"
          sx={{
            color: "#765b52",

            fontSize: "0.9rem",
            lineHeight: 1.7,

            minHeight: {
              xs: "auto",
              sm: 48,
            },

            transition: "color 0.45s ease",
          }}
        >
          {item.description}
        </Typography>

        {/* BOTTOM DETAILS */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={0.7}
          sx={{
            mt: 1.8,
          }}
        >
          <StarRoundedIcon
            sx={{
              fontSize: 17,
              color: "#d4af5a",
            }}
          />

          <Typography
            sx={{
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(115,30,45,0.68)",

              transition: "color 0.45s ease",

              ".MuiBox-root:hover &": {
                color: "#f3d27a",
              },
            }}
          >
            Made with tradition
          </Typography>
        </Stack>

        {/* GOLD INNER GLOW */}
        <Box
          className="card-glow"
          sx={{
            position: "absolute",
            inset: 0,

            borderRadius: "24px",

            boxShadow:
              "inset 0 0 35px rgba(212,175,90,0.16)",

            opacity: 0,

            pointerEvents: "none",

            transition: "opacity 0.5s ease",
          }}
        />
      </Box>
    </Box>
  );
}

function MenuSection({ section }) {
  return (
    <Box
      sx={{
        mb: {
          xs: 7,
          md: 10,
        },
      }}
    >
      {/* SECTION TITLE */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        sx={{
          mb: 1,
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "15px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            background:
              "linear-gradient(135deg, #731e2d, #551520)",

            color: "#f3d27a",

            boxShadow:
              "0 8px 22px rgba(115,30,45,0.18)",
          }}
        >
          {section.icon}
        </Box>

        <Box>
          <Typography
            sx={{
              fontFamily:
                '"Playfair Display", "Georgia", serif',

              fontSize: {
                xs: "1.65rem",
                sm: "2rem",
                md: "2.25rem",
              },

              fontWeight: 800,

              color: "#731e2d",

              lineHeight: 1.1,
            }}
          >
            {section.title}
          </Typography>

          <Typography
            sx={{
              mt: 0.5,

              color: "#866b60",

              fontSize: {
                xs: "0.8rem",
                sm: "0.9rem",
              },
            }}
          >
            {section.subtitle}
          </Typography>
        </Box>
      </Stack>

      {/* GOLD LINE */}
      <Box
        sx={{
          width: {
            xs: 100,
            sm: 150,
          },

          height: 2,

          mb: 3.5,

          ml: {
            xs: 0,
            sm: 6.5,
          },

          background:
            "linear-gradient(90deg, #d4af5a, transparent)",
        }}
      />

      {/* CARDS */}
      <Grid
        container
        spacing={{
          xs: 2,
          sm: 2.5,
          md: 3,
        }}
      >
        {section.items.map((item) => (
          <Grid
            key={item.name}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <MenuCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default function Menu() {
  return (
    <Box
      id="menu"
      sx={{
        position: "relative",
        overflow: "hidden",

        py: {
          xs: 8,
          md: 12,
        },

        background:
          "linear-gradient(180deg, #fffaf2 0%, #f7ecdf 45%, #fffaf3 100%)",

        /* TEMPLE BACKGROUND */
        "&::before": {
          content: '""',

          position: "absolute",
          inset: 0,

          backgroundImage:
            "linear-gradient(rgba(255,250,242,0.72), rgba(255,250,242,0.82)), url('/madurai-temple-bg.jpg')",

          backgroundSize: "80% auto",

          backgroundPosition: "center",

          backgroundAttachment: {
            xs: "scroll",
            md: "fixed",
          },

          opacity: 0.78,

          filter: "blur(0.8px)",

          transform: "scale(1.03)",

          pointerEvents: "none",

          zIndex: 0,
        },

        /* SOFT MAROON GLOW */
        "&::after": {
          content: '""',

          position: "absolute",

          width: 520,
          height: 520,

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(115,30,45,0.09), transparent 70%)",

          bottom: -220,
          right: -180,

          pointerEvents: "none",

          zIndex: 1,
        },
      }}
    >
      {/* GOLD DECORATIVE GLOW */}
      <Box
        sx={{
          position: "absolute",

          width: 420,
          height: 420,

          borderRadius: "50%",

          top: -180,
          left: -180,

          background:
            "radial-gradient(circle, rgba(212,175,90,0.10), transparent 70%)",

          pointerEvents: "none",

          zIndex: 1,
        }}
      />

      {/* MAIN CONTENT */}
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
              xs: 7,
              md: 10,
            },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{
              mb: 1.5,
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 1,

                background:
                  "linear-gradient(90deg, transparent, #d4af5a)",
              }}
            />

            <Typography
              sx={{
                color: "#a07b31",

                fontSize: {
                  xs: "0.7rem",
                  sm: "0.78rem",
                },

                fontWeight: 900,

                letterSpacing: "0.25em",

                textTransform: "uppercase",
              }}
            >
              Our Menu
            </Typography>

            <Box
              sx={{
                width: 32,
                height: 1,

                background:
                  "linear-gradient(90deg, #d4af5a, transparent)",
              }}
            />
          </Stack>

          <Typography
            sx={{
              fontFamily:
                '"Playfair Display", "Georgia", serif',

              fontSize: {
                xs: "2.35rem",
                sm: "3.1rem",
                md: "4rem",
              },

              fontWeight: 900,

              lineHeight: 1.05,

              color: "#731e2d",

              mb: 1.5,
            }}
          >
            Taste the Soul of Madurai
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,

              mx: "auto",

              color: "#735f55",

              fontSize: {
                xs: "0.9rem",
                sm: "1rem",
              },

              lineHeight: 1.8,
            }}
          >
            From crispy dosas to legendary biryani, every dish carries
            the authentic flavours, warmth and traditions of Madurai.
          </Typography>

          {/* DECORATION */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{
              mt: 3,
            }}
          >
            <Box
              sx={{
                width: 70,
                height: 1,

                background:
                  "linear-gradient(90deg, transparent, #d4af5a)",
              }}
            />

            <StarRoundedIcon
              sx={{
                color: "#d4af5a",
                fontSize: 20,
              }}
            />

            <Box
              sx={{
                width: 70,
                height: 1,

                background:
                  "linear-gradient(90deg, #d4af5a, transparent)",
              }}
            />
          </Stack>
        </Box>

        {/* MENU SECTIONS */}
        {menuSections.map((section) => (
          <MenuSection
            key={section.title}
            section={section}
          />
        ))}

        {/* BOTTOM MESSAGE */}
        <Box
          sx={{
            mt: 2,

            py: {
              xs: 3,
              md: 4,
            },

            px: 3,

            borderRadius: "24px",

            textAlign: "center",

            background:
              "rgba(115,30,45,0.94)",

            border:
              "1px solid rgba(212,175,90,0.55)",

            boxShadow:
              "0 18px 45px rgba(73,24,28,0.18)",
          }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{
              mb: 1,
            }}
          >
            <CheckCircleRoundedIcon
              sx={{
                color: "#f3d27a",
                fontSize: 21,
              }}
            />

            <Typography
              sx={{
                color: "#f3d27a",

                fontWeight: 900,

                letterSpacing: "0.08em",

                fontSize: {
                  xs: "0.75rem",
                  sm: "0.82rem",
                },

                textTransform: "uppercase",
              }}
            >
              Made Fresh. Served Warm.
            </Typography>
          </Stack>

          <Typography
            sx={{
              color: "#f8ead0",

              fontFamily:
                '"Playfair Display", "Georgia", serif',

              fontSize: {
                xs: "1.1rem",
                sm: "1.25rem",
              },

              fontStyle: "italic",
            }}
          >
            "Good food tastes better when it carries a story."
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}