import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Footer.module.scss";
import Logo from "./../../assets/images/estalo.png";
import emailColor from "./../../assets/icons/email-color.png";
import facebookBlack from "./../../assets/icons/facebook-black.png";
import facebookColor from "./../../assets/icons/facebook-color.png";
import instagramBlack from "./../../assets/icons/instagram-black.png";
import instagramColor from "./../../assets/icons/instagram-color.png";
import whatsappBlack from "./../../assets/icons/whatsapp-black.png";
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
          <Image src={Logo} alt="Estalo" width={80} height={80} />
        </figure>
      </div>
      <hr></hr>
      <div className={styles.footerIcons}>
        <Link href="">
          <a target="_blank">
            <Image src={emailColor} alt="logo email " width={30} height={30} />
          </a>
        </Link>

        <Link href="#">
          <a target="_blank">
            <Image
              src={facebookColor}
              alt="logo Facebook "
              width={30}
              height={30}
            />
          </a>
        </Link>

        <Link href="#">
          <a target="_blank">
            <Image
              src={instagramColor}
              alt="logo Instagram "
              width={30}
              height={30}
            />
          </a>
        </Link>

        <Link href="#">
          <a target="_blank">
            <Image
              src={whatsappColor}
              alt="logo Whatsapp"
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
            built by <a href="https:">Fernanda Degolin</a>
          </span>
        </p>
      </div>
    </section>
  );
};
