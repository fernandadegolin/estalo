import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Nav.module.scss";
import Logo from "./../../assets/images/logo.png";

import { Button } from "./../Button/Button";

export function Nav() {
  return (
    <section className={styles.nav}>
      <figure className={styles.navLogo}>
        <Image src={Logo} alt="Estalo" />
      </figure>
      <div className={styles.navBar}>
        <ul>
          <li>
            <Link href="#">
              <a className="navBarLink">Quem Somos</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="navBarLink">Missão e Valores</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="navBarLink">Por que fazer terapia?</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="navBarLink">Dúvidas</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="navBarLink">Contato</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.roundedButton}>
        <button>Agendamento</button>
      </div>
    </section>
  );
}
