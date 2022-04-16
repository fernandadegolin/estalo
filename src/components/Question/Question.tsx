import Image from "next/image";

import styles from "./Question.module.scss";
import QuestionImage from "./../../assets/images/question.png";

export const Question = () => {
  return (
    <section className={styles.question}>
      <div className={styles.questionTitle}>
        <h1>Por que fazer terapia?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut laboreß
        </p>
      </div>
      <div className={styles.questionAnswer}>
        <figure>
          <Image 
          src={QuestionImage} 
          alt="" 
          width={500} 
          height={500} />
        </figure>
      </div>
    </section>
  );
};
