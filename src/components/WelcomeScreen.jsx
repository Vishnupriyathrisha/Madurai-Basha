import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  LinearProgress,
} from "@mui/material";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function WelcomeScreen({ onComplete }) {
  const [opened, setOpened] = useState(false);
  const [progress, setProgress] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Start center reveal
    const revealTimer = setTimeout(() => {
      setOpened(true);
    }, 300);

    // Loading starts only after reveal
    const loadingTimer = setTimeout(() => {
      let value = 0;

      const interval = setInterval(() => {
        value += 1;
        setProgress(value);

        if (value >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setClosing(true);

            setTimeout(() => {
              onComplete();
            }, 800);
          }, 500);
        }
      }, 35);

      return () => clearInterval(interval);
    }, 3000);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(loadingTimer);
    };
  }, [onComplete]);

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        overflow: "hidden",

        background:
          "linear-gradient(135deg, #22070A 0%, #3B0D12 50%, #170406 100%)",

        opacity: closing ? 0 : 1,
        transform: closing ? "scale(1.025)" : "scale(1)",

        transition:
          "opacity 800ms ease, transform 900ms ease",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* =====================================================
          FULL SCREEN BACKGROUND IMAGE
      ====================================================== */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          backgroundImage:
            "url('/madurai-welcome.avif')",

          backgroundSize: "cover",
          backgroundPosition: "center",

          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,

            background:
              "linear-gradient(135deg, rgba(20,3,4,0.38), rgba(70,10,15,0.20), rgba(12,2,3,0.48))",
          },
        }}
      />

      {/* =====================================================
          GOLDEN CENTER GLOW
      ====================================================== */}

      <Box
        sx={{
          position: "absolute",
          width: {
            xs: 300,
            sm: 450,
            md: 600,
          },

          height: {
            xs: 300,
            sm: 450,
            md: 600,
          },

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(255,196,75,0.20), transparent 68%)",

          left: "50%",
          top: "50%",

          transform: "translate(-50%, -50%)",

          filter: "blur(8px)",

          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          STARS
      ====================================================== */}

      <StarRoundedIcon
        sx={{
          position: "absolute",
          top: "13%",
          left: "18%",

          color: "#FFD978",
          fontSize: 18,

          opacity: 0.8,

          animation: "twinkleOne 2.5s ease-in-out infinite",

          "@keyframes twinkleOne": {
            "0%, 100%": {
              opacity: 0.25,
              transform: "scale(0.8)",
            },

            "50%": {
              opacity: 1,
              transform: "scale(1.2)",
            },
          },
        }}
      />

      <StarRoundedIcon
        sx={{
          position: "absolute",
          top: "22%",
          right: "18%",

          color: "#FFE7A6",
          fontSize: 14,

          opacity: 0.75,

          animation: "twinkleTwo 3s ease-in-out infinite",

          "@keyframes twinkleTwo": {
            "0%, 100%": {
              opacity: 0.25,
            },

            "50%": {
              opacity: 1,
            },
          },
        }}
      />

      <StarRoundedIcon
        sx={{
          position: "absolute",
          top: "35%",
          left: "9%",

          color: "#FFD978",
          fontSize: 11,

          opacity: 0.7,
        }}
      />

      {/* =====================================================
          CRESCENT MOON
      ====================================================== */}

      <Box
        sx={{
          position: "absolute",

          top: {
            xs: "8%",
            sm: "9%",
          },

          right: {
            xs: "8%",
            sm: "10%",
          },

          width: {
            xs: 55,
            sm: 70,
            md: 82,
          },

          height: {
            xs: 55,
            sm: 70,
            md: 82,
          },

          borderRadius: "50%",

          background:
            "radial-gradient(circle at 35% 35%, #FFFBE5, #FFD76B 65%, #E5A52B 100%)",

          boxShadow:
            "0 0 35px rgba(255,214,111,0.55), 0 0 80px rgba(255,191,70,0.20)",

          "&::after": {
            content: '""',

            position: "absolute",

            width: "100%",
            height: "100%",

            borderRadius: "50%",

            background: "#25070A",

            transform:
              "translate(19px, -8px)",
          },
        }}
      />

      {/* =====================================================
          CENTER REVEAL PANELS
          4 PANELS:
          LEFT OUTER
          LEFT INNER
          RIGHT INNER
          RIGHT OUTER
      ====================================================== */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          zIndex: 50,

          pointerEvents: "none",
        }}
      >
        {/* LEFT OUTER */}
        <Box
          sx={{
            position: "absolute",

            top: 0,
            bottom: 0,
            left: 0,

            width: "25%",

            background:
              "linear-gradient(135deg, #1E0609, #420D13)",

            transform: opened
              ? "translateX(-105%)"
              : "translateX(0)",

            transition:
              "transform 1500ms cubic-bezier(0.77, 0, 0.18, 1)",

            boxShadow: opened
              ? "none"
              : "8px 0 30px rgba(0,0,0,0.35)",
          }}
        />

        {/* LEFT INNER */}
        <Box
          sx={{
            position: "absolute",

            top: 0,
            bottom: 0,
            left: "25%",

            width: "25%",

            background:
              "linear-gradient(135deg, #2A080D, #511119)",

            transform: opened
              ? "translateX(-105%)"
              : "translateX(0)",

            transition:
              "transform 1500ms cubic-bezier(0.77, 0, 0.18, 1)",

            boxShadow: opened
              ? "none"
              : "5px 0 28px rgba(0,0,0,0.30)",
          }}
        />

        {/* RIGHT INNER */}
        <Box
          sx={{
            position: "absolute",

            top: 0,
            bottom: 0,
            right: "25%",

            width: "25%",

            background:
              "linear-gradient(225deg, #2A080D, #511119)",

            transform: opened
              ? "translateX(105%)"
              : "translateX(0)",

            transition:
              "transform 1500ms cubic-bezier(0.77, 0, 0.18, 1)",

            boxShadow: opened
              ? "none"
              : "-5px 0 28px rgba(0,0,0,0.30)",
          }}
        />

        {/* RIGHT OUTER */}
        <Box
          sx={{
            position: "absolute",

            top: 0,
            bottom: 0,
            right: 0,

            width: "25%",

            background:
              "linear-gradient(225deg, #1E0609, #420D13)",

            transform: opened
              ? "translateX(105%)"
              : "translateX(0)",

            transition:
              "transform 1500ms cubic-bezier(0.77, 0, 0.18, 1)",

            boxShadow: opened
              ? "none"
              : "-8px 0 30px rgba(0,0,0,0.35)",
          }}
        />
      </Box>

      {/* =====================================================
          CENTER CONTENT
          FULLY CENTERED
      ====================================================== */}

      <Box
        sx={{
          position: "relative",

          zIndex: 80,

          width: "100%",

          px: {
            xs: 2.5,
            sm: 4,
          },

          display: "flex",
          flexDirection: "column",

          alignItems: "center",
          justifyContent: "center",

          textAlign: "center",

          opacity: opened ? 1 : 0,

          transition:
            "opacity 700ms ease 900ms",

          pointerEvents: "none",
        }}
      >
        {/* RESTAURANT ICON */}

        <Box
          sx={{
            width: {
              xs: 64,
              sm: 78,
              md: 88,
            },

            height: {
              xs: 64,
              sm: 78,
              md: 88,
            },

            borderRadius: "50%",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            background:
              "rgba(255,193,7,0.14)",

            border:
              "1px solid rgba(255,215,120,0.55)",

            boxShadow:
              "0 0 35px rgba(255,193,7,0.28)",

            mb: 2,

            animation:
              "iconFloat 3s ease-in-out infinite",

            "@keyframes iconFloat": {
              "0%, 100%": {
                transform: "translateY(0)",
              },

              "50%": {
                transform: "translateY(-7px)",
              },
            },
          }}
        >
          <RestaurantRoundedIcon
            sx={{
              fontSize: {
                xs: 34,
                sm: 42,
                md: 48,
              },

              color: "#FFD166",
            }}
          />
        </Box>

        {/* MADURAI */}

        <Typography
          sx={{
            width: "100%",

            fontSize: {
              xs: "2.2rem",
              sm: "3.3rem",
              md: "4.4rem",
            },

            fontWeight: 900,

            letterSpacing: {
              xs: "3px",
              sm: "5px",
              md: "7px",
            },

            lineHeight: 1,

            color: "#FFF1C1",

            textAlign: "center",

            textShadow:
              "0 3px 18px rgba(0,0,0,0.8), 0 0 25px rgba(255,196,75,0.22)",
          }}
        >
          MADURAI
        </Typography>

        {/* BASHA */}

        <Typography
          sx={{
            width: "100%",

            mt: 0.6,

            fontSize: {
              xs: "1.7rem",
              sm: "2.5rem",
              md: "3.3rem",
            },

            fontWeight: 800,

            letterSpacing: {
              xs: "6px",
              sm: "9px",
              md: "12px",
            },

            color: "#FFD166",

            textAlign: "center",

            textShadow:
              "0 3px 18px rgba(0,0,0,0.8)",
          }}
        >
          BASHA
        </Typography>

        {/* GOLD LINE */}

        <Box
          sx={{
            width: {
              xs: 130,
              sm: 180,
              md: 220,
            },

            height: 2,

            mx: "auto",

            my: 2.5,

            background:
              "linear-gradient(90deg, transparent, #FFD166, transparent)",

            boxShadow:
              "0 0 12px rgba(255,209,102,0.7)",
          }}
        />

        {/* TAGLINE */}

        <Typography
          sx={{
            width: "100%",

            fontSize: {
              xs: "0.82rem",
              sm: "1rem",
              md: "1.15rem",
            },

            letterSpacing: {
              xs: "0.8px",
              sm: "1.5px",
              md: "2px",
            },

            fontWeight: 500,

            color: "#FFF4D6",

            textAlign: "center",

            whiteSpace: "normal",

            textShadow:
              "0 2px 10px rgba(0,0,0,0.85)",
          }}
        >
          From the streets of Madurai to your table...
        </Typography>

        {/* AUTHENTIC LOCAL FLAVOUR */}

        <Typography
          sx={{
            width: "100%",

            mt: 2.2,

            fontSize: {
              xs: "0.68rem",
              sm: "0.76rem",
              md: "0.82rem",
            },

            letterSpacing: {
              xs: "1.5px",
              sm: "2.5px",
              md: "3px",
            },

            fontWeight: 700,

            color: "#FFD978",

            textAlign: "center",

            display: "block",

            whiteSpace: "nowrap",

            textShadow:
              "0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          AUTHENTIC • LOCAL • FLAVOUR
        </Typography>
      </Box>

      {/* =====================================================
          LOADING BAR
      ====================================================== */}

      <Box
        sx={{
          position: "absolute",

          zIndex: 100,

          bottom: {
            xs: 38,
            sm: 50,
            md: 60,
          },

          left: "50%",

          transform: "translateX(-50%)",

          width: {
            xs: "72%",
            sm: 330,
            md: 390,
          },

          opacity: opened ? 1 : 0,

          transition:
            "opacity 600ms ease 1600ms",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            mb: 1,
          }}
        >
          <Typography
            sx={{
              color: "#FFE8AE",

              fontSize: {
                xs: "0.62rem",
                sm: "0.7rem",
              },

              letterSpacing: "1.5px",

              fontWeight: 600,
            }}
          >
            PREPARING YOUR TABLE
          </Typography>

          <Typography
            sx={{
              color: "#FFD166",

              fontSize: "0.7rem",

              fontWeight: 700,
            }}
          >
            {progress}%
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 4,

            borderRadius: 10,

            backgroundColor:
              "rgba(255,255,255,0.16)",

            "& .MuiLinearProgress-bar": {
              borderRadius: 10,

              background:
                "linear-gradient(90deg, #D99A22, #FFD166, #FFF0B0)",

              boxShadow:
                "0 0 12px rgba(255,209,102,0.7)",
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default WelcomeScreen;
