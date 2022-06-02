import Image from "next/image";

import styles from "./Mission.module.scss";
import ValuesImage from "./../../assets/images/values.png";

export function Mission() {
  return (
    <section className={styles.mission} id="missao-valores">
      <div className={styles.missionTitle}>
        <h1>Missão</h1>
        <p>
          A Estalo tem como missão revolucionar o acesso a serviços de
          psicologia no Brasil, prestando atendimento seguro, baseado em
          ciência, de forma acessível e transparente. Além de propagar
          conhecimentos socialmente relevante que favoreçam a saúde mental e
          facilitem o contato do público com conceitos psicológicos importantes.
        </p>
      </div>
      <div className={styles.values}>
        <figure className={styles.valuesImage}>
          <Image
            src={ValuesImage}
            alt="Fundo vermelho, uma mão segurando um megafone soltando flores"
          />
        </figure>
        <div className={styles.valuesTitle}>
          <h1>Valores</h1>
          <p>
            <span>Criatividade:</span> a Estalo é uma empresa jovem baseada em
            soluções criativas para facilitar o acesso à psicologia.
          </p>
          <p>
            <span>Segurança:</span> todos os serviços prestados são baseados em
            ciência.
          </p>
          <p>
            <span>Clareza:</span> nossos serviços e conteúdos visam sempre
            acessar todos os públicos e, para isso, mantemos sempre uma
            comunicação fácil e democrática.
          </p>
        </div>
      </div>
    </section>
  );
}
