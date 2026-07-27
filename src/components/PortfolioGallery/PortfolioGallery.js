import Image from "next/image";
import styles from "./PortfolioGallery.module.css";

export default function PortfolioGallery() {
  // Datos de ejemplo simulando tu diseño
  const proyectos = [
    {
      id: 1,
      title: "Remodelación Moderna de Sala de Estar",
      category: "Remodelación",
      location: "Atlanta, GA",
      image: "/images/cocina-terminada.jpg",
      colorClass: styles.cardBlue,
    },
    {
      id: 2,
      title: "Instalación de Techo Residencial",
      category: "Remodelación",
      location: "Atlanta, GA",
      image: "/images/mantenimiento-cesped.jpg",
      colorClass: styles.cardGrey,
    },
    {
      id: 3,
      title: "Remodelación de Cocina Contemporánea",
      category: "Remodelación",
      location: "Atlanta, GA",
      image: "/images/cocina-terminada.jpg",
      colorClass: styles.cardGrey,
    },
    {
      id: 4,
      title: "Renovación Completa de Baño Principal",
      category: "Remodelación",
      location: "Atlanta, GA",
      image: "/images/mantenimiento-cesped.jpg",
      colorClass: styles.cardBlue,
    },
  ];

  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>NUESTROS PROYECTOS FINALIZADOS</h2>
          <p className={styles.subtitle}>
            Explora nuestra galería de trabajos de alta calidad en remodelación
            y construcción.
          </p>
        </div>

        {/* Filtros */}
        <div className={styles.filters}>
          <button className={`${styles.filterBtn} ${styles.active}`}>
            TODOS
          </button>
          <button className={styles.filterBtn}>REMODELACIÓN COMPLETA</button>
          <button className={styles.filterBtn}>TECHOS & CUBIERTAS</button>
          <button className={styles.filterBtn}>BAÑOS & COCINAS</button>
        </div>

        {/* Cuadrícula de Proyectos */}
        <div className={styles.grid}>
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={proyecto.image}
                  alt={proyecto.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={`${styles.cardInfo} ${proyecto.colorClass}`}>
                <h3 className={styles.cardTitle}>{proyecto.title}</h3>
                <p className={styles.cardCategory}>{proyecto.category}</p>
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
                    {proyecto.location}
                  </span>
                  <button className={styles.viewBtn}>Ver Proyecto</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Cargar Más */}
        <div className={styles.loadMoreContainer}>
          <button className={styles.loadMoreBtn}>Cargar más</button>
        </div>
      </div>
    </section>
  );
}
