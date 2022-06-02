import Image from "next/image";

import styles from "./Faq.module.scss";

import { FaqItems, questionFaq } from "./data";
import EstaloImage from "./../../assets/images/question.png";
import { Button } from "../Button/Button";

export const Faq = () => {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.faqTitle}>
        <h1>Dúvidas</h1>
        <p>
          Fazer terapia pode te auxiliar a lidar com sintomas e Transtornos,
          mudar hábitos, desenvolver habilidades, promover autoconhecimento,
          entre outros.
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
              <main dangerouslySetInnerHTML={{ __html: faq.answer }}></main>
            </details>
          ))}
        </div>
        <form action="https://forms.gle/rdQ4gafygL71K9UaA" target="_blank">
          <Button>Agendamento</Button>
        </form>
      </div>
    </section>
  );
};
