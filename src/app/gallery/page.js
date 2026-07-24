import ImageCard from "../../components/ImageCard";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Nuestros Trabajos</h1>
      <div className={styles.grid}>
        <ImageCard
          imageSrc="/images/cocina-terminada.jpg"
          title="Cocina"
          description="Remodelación completa"
        />
        <ImageCard
          imageSrc="/images/mantenimiento-cesped.jpg"
          title="Jardín"
          description="Mantenimiento"
        />
      </div>
    </main>
  );
}
