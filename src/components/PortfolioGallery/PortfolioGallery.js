"use client";
import Image from "next/image";
import styles from "./PortfolioGallery.module.css";
import Link from "next/link";
import ProyectsDB from "../../db/proyects.json";

export default function PortfolioGallery() {
  // Función que maneja el desplazamiento hacia la tarjeta
  const scrollToCategoria = (nombreCategoria) => {
    // 1. Busca en el DOM el primer elemento que tenga el data-categoria exacto
    const elemento = document.querySelector(
      `[data-category="${nombreCategoria}"]`,
    );

    // 2. Si lo encuentra, hace un scroll suave hasta él
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>NUESTROS SERVICIOS DISPONIBLES</h2>
          <p className={styles.subtitle}>
            Explora nuestra galería de trabajos de alta calidad en remodelación
            y construcción.
          </p>
        </div>

        {/* Filtros */}
        <div className={styles.filters}>
          {ProyectsDB?.map((proyect) => (
            <button
              key={`Proyect-${proyect?.id}`}
              className={styles.filterBtn}
              onClick={() => scrollToCategoria(proyect?.label)}
            >
              {proyect?.label}
            </button>
          ))}
        </div>

        {/* Cuadrícula de Proyectos */}
        <div id="servicesGallery" className={styles.grid}>
          {ProyectsDB?.map((proyect) => (
            <div
              key={proyect?.id}
              className={styles.card}
              data-category={proyect?.label}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={proyect?.image}
                  alt={proyect?.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={`${styles.cardInfo} ${styles.cardBlue}`}>
                <h3 className={styles.cardTitle}>{proyect?.title}</h3>
                <p className={styles.cardCategory}>{proyect?.label}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.location}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {proyect?.location}
                  </span>
                  <Link
                    href={`/proyects/${proyect?.link}`}
                    className={styles.viewBtn}
                  >
                    Ver Proyectos
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
