import Image from "next/image";

import styles from "./Question.module.scss";
import FaqImage from "./../../assets/images/faq.png";

import { Button } from "../Button/Button";

export const Question = () => {
  return (
    <section className={styles.question} id="porque-terapia">
      <div className={styles.questionTitle}>
        <h1>Por que fazer terapia?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut laboreß. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          laboreß. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut laboreß.
        </p>
      </div>
      <form action="https://fernandadegolin.com" target="_blank">
        <Button variant="lightRed">Agendamento</Button>
      </form>

      <figure>
        <Image
          src={FaqImage}
          alt="Pessoa segurando uma placa com um sinal de interrogação na altura do rosto"
          width={480}
          height={480}
        />
      </figure>
    </section>
  );
};
