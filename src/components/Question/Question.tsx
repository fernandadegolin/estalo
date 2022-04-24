import Image from "next/image";

import styles from "./Question.module.scss";
import FaqImage from "./../../assets/images/faq.png";
import { Faq, questionFaq } from "./data";
import { Button } from "../Button/Button";

export const Question = () => {
  return (
    <section className={styles.question} id="question">
      <div className={styles.questionTitle}>
        <h1>Por que fazer terapia?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut laboreß
        </p>
      </div>
      <form action="https://fernandadegolin.com" target="_blank">
        <Button variant="light">Agendamento</Button>
      </form>
      <div className={styles.questionAnswer}>
        <div className={styles.faq}>
          {questionFaq.map((faq: Faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <main>{faq.answer}</main>
            </details>
          ))}
        </div>
        <figure>
          <Image
            src={FaqImage}
            alt="Pessoa segurando uma placa com um sinal de interrogação na altura do rosto"
            width={800}
            height={800}
          />
        </figure>
     
      </div>
    </section>
  );
};
