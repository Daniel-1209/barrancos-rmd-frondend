"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./proyects.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function ProyectoDetalle() {
  // Arreglo de imágenes gratuitas de Unsplash para pruebas
  const imagenes = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1556912172-45b7ee98142a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
  ];

  // Estado para controlar qué imagen se está viendo en grande
  const [imagenActiva, setImagenActiva] = useState(0);

  // Funciones para las flechas del carrusel
  const siguienteImagen = () => {
    setImagenActiva((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  const anteriorImagen = () => {
    setImagenActiva((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  return (
    <main className={styles.mainContainer}>
      <Navbar />
      <div className={styles.contentWrapper}>
        {/* ENCABEZADO */}
        <header className={styles.header}>
          <h1 className={styles.title}>DETALLES DEL PROYECTO:</h1>
          <h2 className={styles.subtitle}>
            Renovación Completa de Baño Principal, Atlanta
          </h2>
        </header>

        {/* GALERÍA DE IMÁGENES */}
        <section className={styles.galleryContainer}>
          {/* Imagen Principal */}
          <div className={styles.mainImageWrapper}>
            <button
              className={`${styles.arrowBtn} ${styles.left}`}
              onClick={anteriorImagen}
            >
              &#10094;
            </button>
            <img
              src={imagenes[imagenActiva]}
              alt="Proyecto remodelación"
              className={styles.mainImage}
            />
            <button
              className={`${styles.arrowBtn} ${styles.right}`}
              onClick={siguienteImagen}
            >
              &#10095;
            </button>
          </div>

          {/* Miniaturas (Thumbnails) */}
          <div className={styles.thumbnailsGrid}>
            {imagenes.map((img, index) => (
              <div
                key={index}
                className={`${styles.thumbWrapper} ${imagenActiva === index ? styles.activeThumb : ""}`}
                onClick={() => setImagenActiva(index)}
              >
                <img
                  src={img}
                  alt={`Miniatura ${index + 1}`}
                  className={styles.thumbImage}
                />
              </div>
            ))}
          </div>
        </section>

        {/* BARRA DE INFORMACIÓN (Cambia drásticamente de Móvil a PC en el CSS) */}
        <div className={styles.infoBar}>
          <div className={styles.infoItem}>
            <span className={styles.icon}>👤</span>
            <div>
              <div className={styles.infoLabel}>CLIENTE:</div>
              <div className={styles.infoValue}>Privado</div>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📍</span>
            <div>
              <div className={styles.infoLabel}>UBICACIÓN:</div>
              <div className={styles.infoValue}>Atlanta, Georgia</div>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>🛁</span>
            <div>
              <div className={styles.infoLabel}>TIPO:</div>
              <div className={styles.infoValue}>Baños & Cocinas</div>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📅</span>
            <div>
              <div className={styles.infoLabel}>AÑO:</div>
              <div className={styles.infoValue}>2026</div>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📏</span>
            <div>
              <div className={styles.infoLabel}>ÁREA:</div>
              <div className={styles.infoValue}>12 m²</div>
            </div>
          </div>
        </div>

        {/* DESCRIPCIÓN Y BOTÓN DE REGRESO */}
        <div className={styles.descriptionSection}>
          <p className={styles.descriptionText}>
            Un proyecto desafiante que transformó un espacio anticuado en un
            refugio moderno y funcional, utilizando materiales de alta gama y
            diseño personalizado.{" "}
            <a href="#" className={styles.linkText}>
              Ver más detalles sobre el proceso.
            </a>
          </p>

          {/* Asumiendo que tu página principal es "/" o "/galeria" */}
          <Link href="/" className={styles.backButton}>
            REGRESAR AL PORTAFOLIO &#10230;
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
