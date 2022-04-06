import Image from "next/image";

import styles from "./Main.module.scss";
import Estalo from './../../assets/images/estalo.png'

export const Main = () => {
  return (
    <section className={styles.main}>
      <div className={styles.mainTitle}>
        <h1>O Estalo que <br></br>você precisava</h1>
        <p>Psicologia baseada em evidências</p>
      </div>
      <figure className={styles.mainEstalo}>
        <Image src={Estalo} alt="Estalo"></Image>
      </figure>
    </section>
  );
};
