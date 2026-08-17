import Image from "next/image";
import styles from "./AboutUs.module.css";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section id="nosotros" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Contenedor de la Imagen */}
        <div className={styles.imageWrapper}>
          {/* Asegúrate de tener una imagen llamada "nosotros.jpg" en tu carpeta public/images/ */}
          <Image
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
            alt="Equipo trabajando en remodelación"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Contenedor del Texto */}
        <div className={styles.textContent}>
          <h2 className={styles.tagline}>MEET BARRANCOS REMODELING LLC</h2>
          <h3 className={styles.title}>
            Transforming spaces in Atlanta, Georgia
          </h3>

          <p className={styles.description}>
            We are a commercial and residential contracting company dedicated to
            providing top-tier, comprehensive solutions. We are passionate about
            turning our clients visions into reality, delivering high-quality
            finishes on every project.
          </p>

          <p className={styles.description}>
            In addition to our interior renovations, we specialize in exterior
            property maintenance. Our team combines years of technical expertise
            with the best materials on the market to ensure durability,
            functionality, and exceptional design.
          </p>

          <Link href="/#services" className={styles.ctaButton}>
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
