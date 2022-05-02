import Image from "next/image";

import styles from "./Card.module.scss";
import { CardItems } from "./data";

import instagram from "./../../../assets/icons/instagram.svg";
import twitter from "./../../../assets/icons/twitter.svg";
import linkedin from "./../../../assets/icons/linkedin.svg";

export const Card = ({ initial, name, info, link1, title, bio }: CardItems) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.cardItems}>
        <div className={styles.cardinfo}>
          <div className={styles.cardavatar}>
            <p>{initial}</p>
          </div>
          <h1>{name}</h1>
          <p>{info}</p>
        </div>

        <ul className={styles.cardsocial}>
          <li className={styles.cardsocial__item}>
            <a href={link1} target="_blank" rel="noreferrer">
              <Image
                src={instagram}
                alt="Logo do Instagram"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li className={styles.cardsocial__item}>
            <a href={link1} target="_blank" rel="noreferrer">
              <Image
                src={twitter}
                alt="Logo do Twitter"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li className={styles.cardsocial__item}>
            <a href={link1} target="_blank" rel="noreferrer">
              <Image
                src={linkedin}
                alt="Logo do LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.cardBio}>
        <h3>{title}</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
};
