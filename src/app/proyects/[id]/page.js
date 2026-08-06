"use client";

import { useState, use } from "react";
import Link from "next/link";
import styles from "./proyects.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProyectsDB from "../../../db/proyects.json";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProyectoDetalle({ params }) {
  // Find actual proyect
  const { id } = use(params);
  const ActualProyect = ProyectsDB.find((p) => p.link === id);
  // console.log("My proyect actual => ", ActualProyect);

  const imagenes = ActualProyect?.listOfImages
    ? ActualProyect?.listOfImages
    : [];

  // Estado para controlar qué imagen se está viendo en grande
  const [imagenActiva, setImagenActiva] = useState(0);
  const [paginaMiniaturas, setPaginaMiniaturas] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // NUEVO ESTADO: Controla si la imagen grande está cargando
  const [isImageLoading, setIsImageLoading] = useState(true);

  const IMAGENES_POR_PAGINA = 20;
  const totalPaginas = Math.ceil(imagenes.length / IMAGENES_POR_PAGINA);
  const indexInicio = paginaMiniaturas * IMAGENES_POR_PAGINA;
  const indexFin = indexInicio + IMAGENES_POR_PAGINA;
  const miniaturasVisibles = imagenes.slice(indexInicio, indexFin);

  // NUEVA FUNCIÓN: Centraliza el cambio de imagen y activa el "Cargando"
  const cambiarImagen = (nuevoIndex) => {
    if (nuevoIndex === imagenActiva) return; // Si es la misma foto, no hace nada
    setIsImageLoading(true); // Activa el spinner
    setImagenActiva(nuevoIndex);
    setPaginaMiniaturas(Math.floor(nuevoIndex / IMAGENES_POR_PAGINA));
  };

  const siguienteImagen = () => {
    const nextIndex =
      imagenActiva === imagenes.length - 1 ? 0 : imagenActiva + 1;
    cambiarImagen(nextIndex);
  };

  const anteriorImagen = () => {
    const nextIndex =
      imagenActiva === 0 ? imagenes.length - 1 : imagenActiva - 1;
    cambiarImagen(nextIndex);
  };

  const router = useRouter();

  return (
    <main className={styles.mainContainer}>
      <Navbar />
      <div className={styles.contentWrapper}>
        {/* ENCABEZADO */}
        <header className={styles.header}>
          <h1 className={styles.title}>DETALLES DEL PROYECTO:</h1>
          <h2 className={styles.subtitle}>{ActualProyect?.title}</h2>
        </header>

        {/* GALERÍA DE IMÁGENES */}
        {imagenes.length !== 0 && (
          <section className={styles.galleryContainer}>
            <div
              className={styles.mainImageWrapper}
              onClick={() => setIsLightboxOpen(true)}
            >
              {/* NUEVO: Contenedor del Spinner de Carga */}
              {isImageLoading && (
                <div className={styles.loaderOverlay}>
                  <div className={styles.spinner}></div>
                </div>
              )}

              <button
                className={`${styles.arrowBtn} ${styles.left}`}
                onClick={(e) => {
                  e.stopPropagation();
                  anteriorImagen();
                }}
              >
                &#10094;
              </button>

              <Image
                src={imagenes[imagenActiva]}
                alt="Proyecto remodelación"
                fill
                priority={true}
                loading="eager"
                sizes="(max-width: 768px) 100vw, 800px"
                className={styles.mainImage}
                onLoad={() => setIsImageLoading(false)} // APAGA EL SPINNER AL TERMINAR
              />

              <button
                className={`${styles.arrowBtn} ${styles.right}`}
                onClick={(e) => {
                  e.stopPropagation();
                  siguienteImagen();
                }}
              >
                &#10095;
              </button>
            </div>

            {/* Miniaturas */}
            <div className={styles.thumbnailsGrid}>
              {miniaturasVisibles?.map((img, index) => {
                const realIndex = indexInicio + index;
                return (
                  <div
                    key={realIndex}
                    className={`${styles.thumbWrapper} ${
                      imagenActiva === realIndex ? styles.activeThumb : ""
                    }`}
                    onClick={() => cambiarImagen(realIndex)} // Usa la nueva función aquí
                  >
                    <Image
                      src={img}
                      alt={`Miniatura ${realIndex + 1}`}
                      fill
                      sizes="150px"
                      className={styles.thumbImage}
                    />
                  </div>
                );
              })}
            </div>

            {/* Paginación de Miniaturas... (Se mantiene igual que antes) */}
            {totalPaginas > 1 && (
              <div className={styles.paginationContainer}>
                <button
                  className={styles.pageBtn}
                  onClick={() =>
                    setPaginaMiniaturas((prev) => Math.max(prev - 1, 0))
                  }
                  disabled={paginaMiniaturas === 0}
                >
                  &#10094; Atrás
                </button>
                <span className={styles.pageInfo}>
                  Pág {paginaMiniaturas + 1} de {totalPaginas}
                </span>
                <button
                  className={styles.pageBtn}
                  onClick={() =>
                    setPaginaMiniaturas((prev) =>
                      Math.min(prev + 1, totalPaginas - 1),
                    )
                  }
                  disabled={paginaMiniaturas === totalPaginas - 1}
                >
                  Siguiente &#10095;
                </button>
              </div>
            )}
          </section>
        )}

        {/* LIGHTBOX (MODAL PANTALLA COMPLETA) */}
        {isLightboxOpen && (
          <div
            className={styles.lightboxOverlay}
            onClick={() => setIsLightboxOpen(false)}
          >
            <button className={styles.closeLightboxBtn}>&times;</button>
            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              {/* NUEVO: Spinner de Carga también dentro del Lightbox */}
              {isImageLoading && (
                <div className={styles.loaderOverlayLightbox}>
                  <div className={styles.spinner}></div>
                </div>
              )}

              <Image
                src={imagenes[imagenActiva]}
                alt="Vista ampliada del proyecto"
                fill
                sizes="100vw"
                className={styles.lightboxImage}
                onLoad={() => setIsImageLoading(false)} // APAGA EL SPINNER AL TERMINAR
              />

              <button
                className={`${styles.arrowBtn} ${styles.left} ${styles.lightboxArrow}`}
                onClick={(e) => {
                  e.stopPropagation();
                  anteriorImagen();
                }}
              >
                &#10094;
              </button>
              <button
                className={`${styles.arrowBtn} ${styles.right} ${styles.lightboxArrow}`}
                onClick={(e) => {
                  e.stopPropagation();
                  siguienteImagen();
                }}
              >
                &#10095;
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
