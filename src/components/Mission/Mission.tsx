import Image from "next/image";

import styles from "./Mission.module.scss";
import ValuesImage from "./../../assets/images/values.png";

export function Mission() {
  return (
    <section className={styles.mission} id="mission">
      <div className={styles.missionTitle}>
        <h1>Missão</h1>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem.
        </p>
      </div>
      <div className={styles.values}>
        <figure className={styles.valuesImage}>
          <Image src={ValuesImage} alt="Fundo vermelho, uma mão segurando um megafone soltando flores" />
        </figure>
        <div className={styles.valuesTitle}>
          <h1>Valores</h1>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
        </div>
      </div>
    </section>
  );
}
