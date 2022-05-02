import Slider from "react-slick";
import { Card } from "./Card/Card";
import styles from "./Who.module.scss";

import { cardPerson } from "./Card/data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Who = () => {
  return (
    <section className={styles.card} id="quem-somos">
      <div className={styles.cardTitle}>
        <h1>Quem somos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      <ul className={styles.cardSlider}>
        <Slider infinite={true}>
          {cardPerson.map((person) => (
            <Card
              key={person.initial}
              initial={person.initial}
              name={person.name}
              info={person.info}
              link1={person.link1}
              title={person.title}
              bio={person.bio}
            />
          ))}
        </Slider>
      </ul>
    </section>
  );
};
