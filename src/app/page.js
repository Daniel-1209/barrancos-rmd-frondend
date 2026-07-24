import ImageCard from "../components/ImageCard";
import styles from "./page.module.css"; // Importamos tu CSS puro

export default function Inicio() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>Barrancos Remodeling LLC</h1>
        <p className={styles.subtitle}>
          Explora nuestro portafolio de proyectos recientes. Nos especializamos
          en transformar espacios y mantener exteriores en perfectas
          condiciones.
        </p>
      </header>

      <section className={styles.grid}>
        <ImageCard
          imageSrc="/images/cocina-terminada.jpg"
          title="Remodelación de Cocina"
          description="Instalación de gabinetes y encimeras modernas."
        />
        <ImageCard
          imageSrc="/images/mantenimiento-cesped.jpg"
          title="Mantenimiento de Césped"
          description="Corte, perfilado y cuidado integral del jardín."
        />
      </section>
    </main>
  );
}
