import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Nav.module.scss";
import Logo from "./../../assets/images/logo.png";

import { Button } from "./../Button/Button";

export function Nav() {
  return (
    <section className={styles.nav}>
      <a href="#">
        <figure className={styles.navLogo}>
          <Image
            src={Logo}
            alt="Logo da Estalo, uma ilustração de uma mão estalando os dedos"
          />
        </figure>
      </a>

      <div className={styles.navBar}>
        <ul>
          <li>
            <Link href="#quem-somos">
              <a>Quem Somos</a>
            </Link>
          </li>

          <li>
            <Link href="#missao-valores">
              <a>Missão e Valores</a>
            </Link>
          </li>

          <li>
            <Link href="#porque-terapia">
              <a>Por que fazer terapia?</a>
            </Link>
          </li>
          <li>
            <Link href="#faq">
              <a>Dúvidas</a>
            </Link>
          </li>
          <li>
            <Link href="#contatos">
              <a>Contatos</a>
            </Link>
          </li>
        </ul>
      </div>
      <form action="https://forms.gle/rdQ4gafygL71K9UaA" target="_blank">
        <Button>Agendamento</Button>
      </form>
    </section>
  );
}
