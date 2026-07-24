import Image from "next/image";
import styles from "./ImageCard.module.css"; // Importamos tu CSS puro

export default function ImageCard({ imageSrc, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imageSrc} alt={title} fill className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
