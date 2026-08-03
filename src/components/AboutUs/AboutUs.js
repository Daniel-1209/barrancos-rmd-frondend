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
          <h2 className={styles.tagline}>CONOCE A BARRANCOS REMODELING LLC</h2>
          <h3 className={styles.title}>
            Transformando espacios en Atlanta, Georgia
          </h3>

          <p className={styles.description}>
            Somos una empresa de contratistas comerciales y residenciales
            dedicada a ofrecer soluciones integrales de primer nivel. Nos
            apasiona transformar la visión de nuestros clientes en realidad,
            brindando acabados de alta calidad en cada proyecto.
          </p>

          <p className={styles.description}>
            Además de nuestras renovaciones de interiores, nos especializamos en
            el mantenimiento de propiedades exteriores. Nuestro equipo combina
            años de experiencia técnica con los mejores materiales del mercado
            para garantizar durabilidad, funcionalidad y un diseño excepcional.
          </p>

          <Link href="/#services" className={styles.ctaButton}>
            Explorar Servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
