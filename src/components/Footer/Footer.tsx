import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Footer.module.scss";
import Logo from "./../../assets/images/estalo.png";
import emailColor from "./../../assets/icons/email-color.png";
import facebookColor from "./../../assets/icons/facebook-color.png";
import instagramColor from "./../../assets/icons/instagram-color.png";
import whatsappColor from "./../../assets/icons/whatsapp-color.png";

export const Footer = () => {
  const [color, setColor] = useState(false);
  const [noColor, setNoColor] = useState(true);

  function isColor() {
    setColor(!color);
  }

  function isNoColor() {
    setNoColor(!noColor);
  }
  return (
    <section className={styles.footer}>
      <div className={styles.footerLinks}>
        <figure>
          <Image src={Logo} alt="Logo da Estalo, uma ilustração de uma mão estalando os dedos" width={80} height={80} />
        </figure>
      </div>
      <hr></hr>
      <div className={styles.footerIcons}>
        <Link href="mailto:estalo.psi@gmail.com">
          <a target="_blank">
            <Image
              src={emailColor}
              alt="Envelope de email"
              width={30}
              height={30}
            />
          </a>
        </Link>

        <Link href="https://www.facebook.com/Estalo-Psicologia-107572618482550/">
          <a target="_blank">
            <Image
              src={facebookColor}
              alt="Logo do Facebook"
              width={30}
              height={30}
            />
          </a>
        </Link>

        <Link href="https://www.instagram.com/estalo.psi/">
          <a target="_blank">
            <Image
              src={instagramColor}
              alt="Logo do Instagram"
              width={30}
              height={30}
            />
          </a>
        </Link>

        <Link href="#">
          <a target="_blank">
            <Image
              src={whatsappColor}
              alt="Logo do Whatsapp"
              width={30}
              height={30}
            />
          </a>
        </Link>
      </div>
      <div className={styles.footerCopyright}>
        <p>
          Copyright © Estalo 2022. Todos os direitos reservados. <br></br>{" "}
          <span>
            <br></br>
            built by{" "}
            <a
              href="https://www.instagram.com/fernandadegolin/"
              target="_blank"
              rel="noreferrer"
            >
              Fernanda Degolin
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};
