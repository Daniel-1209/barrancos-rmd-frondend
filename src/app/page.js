import Navbar from "@/components/Navbar/Navbar";
import ImageCard from "../components/ImageCard/ImageCard";
import styles from "./page.module.css"; // Importamos tu CSS puro
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import PortfolioGallery from "@/components/PortfolioGallery/PortfolioGallery";
import AboutUs from "@/components/AboutUs/AboutUs";

export default function Inicio() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* PortfolioGallery  */}
      <PortfolioGallery />

      {/* About Us */}
      <AboutUs />

      {/* Footer */}
      <Footer />
    </main>
  );
}
