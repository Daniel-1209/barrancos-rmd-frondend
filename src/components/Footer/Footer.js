"use client"; // Obligatorio en Next.js para usar interactividad (clics y estados)

import { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  // Estado para controlar si el aviso legal está visible o no
  const [mostrarAviso, setMostrarAviso] = useState(false);

  // 1. Creamos la información del contacto en formato vCard (estándar telefónico)
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Barrancos Remodeling
ORG:Barrancos Remodeling LLC
TEL:+17045249747
END:VCARD`;

  // 2. Convertimos esa información en una URL de datos que el navegador pueda "descargar"
  const vCardUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCardData)}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* SECCIÓN DE CONTACTO */}
        <div className={styles.contactSection}>
          <a href="tel:+17045249747" className={styles.contactItem}>
            {/* Ícono de Teléfono */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>704-524-9747</span>
          </a>

          {/* Cambiamos el componente <Link> de Next.js por una etiqueta <a> nativa 
              para permitir la descarga del archivo de contacto */}
          <a
            href={vCardUrl}
            download="Barrancos_Remodeling.vcf"
            className={styles.contactItem}
          >
            {/* Ícono de Usuario / Contacto */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Contact</span>
          </a>
        </div>

        {/* SECCIÓN DE DERECHOS DE AUTOR */}
        <div className={styles.copyrightSection}>
          <p>© 2026 Barrancos Remodeling LLC - All rights reserved.</p>
        </div>

        {/* SECCIÓN DE AVISO LEGAL DE IMÁGENES (BOTÓN Y TEXTO DESPLEGABLE) */}
        <div className={styles.legalContainer}>
          <button
            onClick={() => setMostrarAviso(!mostrarAviso)}
            className={styles.legalToggleBtn}
          >
            Image Policy
          </button>

          {/* Este bloque solo se renderiza si mostrarAviso es verdadero */}
          {mostrarAviso && (
            <div className={styles.legalNotice}>
              <p>
                <strong>Image and Privacy Notice:</strong> The photographs shown
                in this portfolio are used exclusively for illustrative purposes
                to showcase the quality of our services. If you are the legal
                owner of any of the properties or images shown on this website
                and do not wish your property to appear in our portfolio, please
                contact us at <strong>704-524-9747</strong>. We will remove the
                image immediately and without any issues.
              </p>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
