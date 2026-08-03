"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  // Estado para controlar si el menú de celular está abierto o cerrado
  const [menuAbierto, setMenuAbierto] = useState(false);
  // Obtenemos la ruta actual para saber qué link subrayar
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          {/* Asegúrate de tener tu logo en la carpeta public/ */}
          <Image
            src="/Barrancos-LHR02.png"
            alt="Barrancos Remodeling LLC Logo"
            width={180}
            height={50}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* BOTÓN HAMBURGUESA (Solo visible en celular) */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {/* Las 3 rayitas del menú */}
          <span
            className={`${styles.bar} ${menuAbierto ? styles.barAbierta1 : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${menuAbierto ? styles.barAbierta2 : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${menuAbierto ? styles.barAbierta3 : ""}`}
          ></span>
        </button>

        {/* ENLACES DE NAVEGACIÓN */}
        <ul
          className={`${styles.navLinks} ${menuAbierto ? styles.menuActivo : ""}`}
        >
          <li>
            <Link
              href="/"
              className={pathname === "/" ? styles.linkActivo : styles.link}
              onClick={() => setMenuAbierto(false)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/#nosotros"
              className={
                pathname === "/#nosotros" ? styles.linkActivo : styles.link
              }
              onClick={() => setMenuAbierto(false)}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="/#servicesGallery"
              className={
                pathname === "/#servicesGallery"
                  ? styles.linkActivo
                  : styles.link
              }
              onClick={() => setMenuAbierto(false)}
            >
              Servicios
              {/* Icono de flechita hacia abajo imitando tu diseño */}
              <svg
                className={styles.flecha}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="/#formulario"
              className={
                pathname === "/#formulario" ? styles.linkActivo : styles.link
              }
              onClick={() => setMenuAbierto(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
