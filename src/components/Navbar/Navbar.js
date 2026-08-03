"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  // Estado para controlar el menú principal en celular
  const [menuAbierto, setMenuAbierto] = useState(false);
  // Nuevo estado para controlar el submenú de Contacto
  const [contactoAbierto, setContactoAbierto] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
    // Si cerramos el menú de celular, cerramos también el de contacto
    if (menuAbierto) setContactoAbierto(false);
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
          {/* Home */}
          <li>
            <Link
              href="/"
              className={pathname === "/" ? styles.linkActivo : styles.link}
              onClick={() => {
                setMenuAbierto(false);
                setContactoAbierto(false);
              }}
            >
              Inicio
            </Link>
          </li>

          {/* About us */}
          <li>
            <Link
              href="/#nosotros"
              className={
                pathname === "/#nosotros" ? styles.linkActivo : styles.link
              }
              onClick={() => {
                setMenuAbierto(false);
                setContactoAbierto(false);
              }}
            >
              Nosotros
            </Link>
          </li>

          {/* Services */}
          <li>
            <Link
              href="/#servicesGallery"
              className={
                pathname === "/#servicesGallery"
                  ? styles.linkActivo
                  : styles.link
              }
              onClick={() => {
                setMenuAbierto(false);
                setContactoAbierto(false);
              }}
            >
              Servicios
            </Link>
          </li>

          {/* Contact */}
          <li className={styles.contactoWrapper}>
            <button
              className={styles.linkBoton}
              onClick={() => setContactoAbierto(!contactoAbierto)}
            >
              Contactar
              <svg
                className={`${styles.flecha} ${contactoAbierto ? styles.flechaRotada : ""}`}
                width="12"
                height="8"
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
            </button>

            {/* Menú Desplegable Animado */}
            {contactoAbierto && (
              <div className={styles.dropdownContacto}>
                <a
                  href="tel:+15123440698"
                  className={styles.dropdownItem}
                  onClick={() => {
                    setContactoAbierto(false);
                    setMenuAbierto(false);
                  }}
                >
                  <div className={styles.iconoFondo}>
                    {/* Ícono de Teléfono Profesional */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span>Llamar ahora</span>
                </a>

                <a
                  href="sms:+15123440698?body=Quiero%20un%20estimado%20para%20"
                  className={styles.dropdownItem}
                  onClick={() => {
                    setContactoAbierto(false);
                    setMenuAbierto(false);
                  }}
                >
                  <div className={styles.iconoFondo}>
                    {/* Ícono de Mensaje Profesional */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <span>Mandar mensaje</span>
                </a>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
