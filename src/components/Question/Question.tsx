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
          Diversas demandas podem te trazer até a Estalo Psicologia: conflitos
          nos relacionamentos, sintomas físicos, estados de humor como tristeza,
          angústia, raiva ou até mesmo pensamentos recorrentes e dificuldades em
          tomadas de decisões...
        </p>
        <p>
          A terapia pode te auxiliar nessas questões enquanto oferece
          acolhimento de escuta ativa, sigilo e ainda te auxilia a desenvolver
          ainda mais seu autoconhecimento.
        </p>
        <p>
          Muito além de lidar com sintomas e transtornos, a busca por um
          psicólogo é, em sua essência, a promoção de saúde mental. Caso você
          sinta dificuldade, esteja em sofrimento ou deseje desenvolver uma
          melhor compreensão de si mesmo, agende uma consulta conosco.
        </p>
      </div>
      <form action="https://forms.gle/rdQ4gafygL71K9UaA" target="_blank">
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
