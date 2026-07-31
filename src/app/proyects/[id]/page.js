"use client";

import { useState, use } from "react";
import Link from "next/link";
import styles from "./proyects.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProyectsDB from "../../../db/proyects.json";
import { useRouter } from "next/navigation";

export default function ProyectoDetalle({ params }) {
  // Find actual proyect
  const { id } = use(params);
  const ActualProyect = ProyectsDB.find((p) => p.link === id);
  // console.log("My proyect actual => ", ActualProyect);

  // Arreglo de imágenes gratuitas de Unsplash para pruebas
  const imagenes = ActualProyect?.listOfImages
    ? ActualProyect?.listOfImages
    : [];

  // Estado para controlar qué imagen se está viendo en grande
  const [imagenActiva, setImagenActiva] = useState(0);

  // Funciones para las flechas del carrusel
  const siguienteImagen = () => {
    setImagenActiva((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  const anteriorImagen = () => {
    setImagenActiva((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const router = useRouter();

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
          {/* DESCRIPCIÓN Y BOTÓN DE REGRESO */}
          <div className={styles.descriptionSection}>
            <p className={styles.descriptionText}>
              {ActualProyect?.description}{" "}
              <a href="#" className={styles.linkText}>
                Agenda Una Visita Gratis Ahora.
              </a>
            </p>

            {/* Asumiendo que tu página principal es "/" */}
            <button onClick={() => router.back()} className={styles.backButton}>
              REGRESAR AL PORTAFOLIO &#10230;
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
