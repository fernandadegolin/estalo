import Image from "next/image";

import styles from "./Card.module.scss";
import instagram from "./../../../assets/icons/instagram.svg";
import twitter from "./../../../assets/icons/twitter.svg";
import linkedin from "./../../../assets/icons/linkedin.svg";

import { cardPerson, CardItems } from "./data";

export const Card = () => {
  return (
    <section className={styles.card} id="quem-somos">
      <div className={styles.cardTitle}>
        <h1>Quem somos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      <div className={styles.cardItem}>
        {cardPerson.map((person: CardItems) => (
          <div className={styles.cardItems} key={person.initial}>
            <div className={styles.cardinfo}>
              <div className={styles.cardavatar}>
                <p>{person.initial}</p>
              </div>
              <h1>{person.name}</h1>
              <p>{person.info}</p>
            </div>

            <ul className={styles.cardsocial}>
              <li className={styles.cardsocial__item}>
                <a href={person.link1} target="_blank" rel="noreferrer">
                  <Image src={instagram} alt="" width={24} height={24} />
                </a>
              </li>
              <li className={styles.cardsocial__item}>
                <a href={person.link1} target="_blank" rel="noreferrer">
                  <Image src={twitter} alt="" width={24} height={24} />
                </a>
              </li>
              <li className={styles.cardsocial__item}>
                <a href={person.link1} target="_blank" rel="noreferrer">
                  <Image src={linkedin} alt="" width={24} height={24} />
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
