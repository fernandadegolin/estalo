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
      <form action="#" target="_blank">
        <Button variant="lightRed">Agendamento</Button>
      </form>

      <figure>
        <Image
          src={FaqImage}
          alt="Dois bustos de estátuas estilo grego, uma delas com uma lampada na cabeça e a outra com um novelo de lã vermelho densenrolado"
          width={480}
          height={480}
        />
      </figure>
    </section>
  );
};
