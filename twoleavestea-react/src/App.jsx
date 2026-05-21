import { useState, useEffect } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Motto from "./components/Motto";
import BestSellers from "./components/BestSellers";
import Discover from "./components/Discover";
import OurOrigin from "./components/OurOrigin";
import Reviews from "./components/Reviews";
import CafePartners from "./components/CafePartners";
import OurLattes from "./components/OurLattes";
import Journal from "./components/Journal";
import About from "./components/About";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import MobileMenu from "./components/MobileMenu";
import { CartProvider } from "./context/CartContext";
import "./styles/globals.css";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <CartProvider>
      <div id="site">
        <AnnouncementBar />
        <Nav onMenuOpen={() => setMobileMenuOpen(true)} />
        <main className="main-content">
          <Hero />
          <Motto />
          <BestSellers />
          <Discover />
          <OurOrigin />
          <Reviews />
          <CafePartners />
          <OurLattes />
          <Journal />
          <About />
          <Footer />
        </main>
        <CartDrawer />
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </CartProvider>
  );
}
