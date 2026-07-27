import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Textos Principales */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            CONSTRUCCIÓN Y REMODELACIÓN DE PRIMERA CLASE EN ATLANTA
          </h1>
          <p className={styles.subtitle}>
            Expertos en transformaciones de interiores, techos de alta calidad y
            más.
          </p>
        </div>

        {/* Imagen y Botón de Llamada */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/cocina-terminada.jpg"
              alt="Sala de estar moderna remodelada"
              fill
              className={styles.image}
              priority
            />
          </div>

          <a href="tel:+15123440698" className={styles.ctaButton}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            LLAMA AHORA: 512 344 0698
          </a>
        </div>

        {/* Indicador hacia el portafolio */}
        <div className={styles.scrollIndicator}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
          <span>PORTAFOLIO DE IMÁGENES</span>
        </div>
      </div>
    </section>
  );
}
