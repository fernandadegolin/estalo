import Image from "next/image";

import styles from "./Faq.module.scss";

import { FaqItems, questionFaq } from "./data";
import EstaloImage from "./../../assets/images/question.png";

export const Faq = () => {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.faqTitle}>
        <h1>Dúvidas</h1>
        <p>
          fazer terapia pode te auxiliar a lidar com sintomas e Transtornos,
          mudar hábitos, desenvolver habilidades, promove autoconhecimento.
        </p>
      </div>
      <div className={styles.faqAnswer}>
        <figure>
          <Image
            src={EstaloImage}
            alt="Pessoa segurando uma placa com um sinal de interrogação na altura do rosto"
            width={600}
            height={600}
          />
        </figure>

        <div className={styles.faqAnswerItems}>
          {questionFaq.map((faq: FaqItems) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <main>{faq.answer}</main>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
