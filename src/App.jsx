
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import WelcomeScreen from "./components/WelcomeScreen";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import BookATable from "./components/BookATable";
import Footer from "./components/Footer";

import CustomerLogin from "./components/CustomerLogin";
import CustomerRegister from "./components/CustomerRegister";

import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function ProtectedRoute({ children }) {
  const token = sessionStorage.getItem("adminToken");

  return token ? children : <Navigate to="/admin/login" replace />;
}

function RestaurantWebsite() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <main
        id="home"
        style={{
          minHeight: "100vh",
          background: "#FFF8EE",
        }}
      >
        <Navbar />
        <Home />
        <About />
        <Menu />
        <Gallery />
        <Contact />
        <BookATable />
        <Footer />
      </main>

      {showWelcome && (
        <WelcomeScreen
          onComplete={() => setShowWelcome(false)}
        />
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RestaurantWebsite />} />

        <Route path="/login" element={<CustomerLogin />} />

        <Route path="/register" element={<CustomerRegister />} />
        
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
