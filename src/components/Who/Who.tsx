/* eslint-disable @next/next/no-img-element */
import { Card } from "./Card/Card";

import styles from "./Who.module.scss";

import { cardPerson } from "./Card/data";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export const Who = () => {
  return (
    <section className={styles.card} id="quem-somos">
      <div className={styles.cardTitle}>
        <h1>Quem somos</h1>
        <p>
          Muito prazer! A Estalo Psicologia existe desde 2020 e é formada por um
          grupo de 6 amigos que se conheceu ainda durante o período de
          graduação.
        </p>
        <p>
          Nos unimos para oferecer atendimento psicoterapêutico, a princípio na
          modalidade online, de forma ética e respeitosa, a todos que se
          interessem.
        </p>
      </div>

      <div className={styles.cardItem}>
        {cardPerson.map((person) => (
          <Card
            key={person.name}
            avatar={person.avatar}
            name={person.name}
            info={person.info}
            bio={person.bio}
          />
        ))}
      </div>
    </section>
  );
};

//Opção de Carosel
{
  /* <ul className={styles.cardSlider}>
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
</ul>; */
}
