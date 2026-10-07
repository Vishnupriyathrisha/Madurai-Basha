import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import BookATable from "./components/BookATable";
import Footer from "./components/Footer";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {/* MAIN WEBSITE */}

      <main
        id="home"
        style={{
          minHeight: "100vh",
          background: "#FFF8EE",
        }}
      >
        {/* NAVBAR */}
        <Navbar />

        {/* HOME / HERO */}
        <Home />

        {/* ABOUT */}
        <About />

        {/* MENU */}
        <Menu />

        {/* GALLERY */}
        <Gallery />

        {/* CONTACT */}
        <Contact />

        {/* BOOKING */}
        <BookATable />

        <Footer />
      </main>

      {/* WELCOME SCREEN */}

      {showWelcome && (
        <WelcomeScreen
          onComplete={() => {
            setShowWelcome(false);
          }}
        />
      )}
    </>
  );
}

export default App;
