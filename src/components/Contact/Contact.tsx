import { Button } from "../Button/Button";
import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactTitle}>
        <h1>Contatos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
      <div className={styles.contactItems}>
        <form action="#">
          <Button variant="blue">Agendamento</Button>
        </form>
        <form action="">
          <Button variant="light">Email</Button>
        </form>
        <form action="">
          <Button variant="blue">WhatsApp</Button>
        </form>
      </div>
    </section>
  );
};
