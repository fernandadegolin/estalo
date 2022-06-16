import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";

import styles from "./Nav.module.scss";
import Logo from "./../../assets/images/logo.png";

import { Button } from "./../Button/Button";

export function Nav() {
  const windowWidth = useWindowWidth();
  const [isOpen, setOpen] = useState(false);

  function openMenu() {
    setOpen(!isOpen);
  }

  function Mobile() {
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

        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#942c2b"
          duration={0.8}
        />

        {isOpen && (
          <div className={styles.navMobile}>
            <ul>
              <li>
                <Link href="#quem-somos">
                  <a onClick={openMenu}>Quem Somos</a>
                </Link>
              </li>

              <li>
                <Link href="#missao-valores">
                  <a onClick={openMenu}>Missão e Valores</a>
                </Link>
              </li>

              <li>
                <Link href="#porque-terapia">
                  <a onClick={openMenu}>Por que fazer terapia?</a>
                </Link>
              </li>
              <li>
                <Link href="#faq">
                  <a onClick={openMenu}>Dúvidas</a>
                </Link>
              </li>
              <li>
                <Link href="#contatos">
                  <a onClick={openMenu}>Contatos</a>
                </Link>
              </li>
            </ul>
            <form action="https://forms.gle/rdQ4gafygL71K9UaA" target="_blank">
              <Button>Agendamento</Button>
            </form>
          </div>
        )}
      </section>
    );
  }

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
      {windowWidth <= 768 ? (
        <Mobile />
      ) : (
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
      )}
      <form action="https://forms.gle/rdQ4gafygL71K9UaA" target="_blank">
        <Button>Agendamento</Button>
      </form>
    </section>
  );
}
