import { Button } from "../Button/Button";
import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <section className={styles.contact} id="contatos">
      <div className={styles.contactTitle}>
        <h1>Contatos</h1>
        <p>
          Em caso de dúvidas, você pode entrar em contato conosco através das
          redes sociais ou nos canais de atendimento. Estamos à disposição!
        </p>
      </div>
      <div className={styles.contactItems}>
        <form action="#">
          <Button variant="blue">Agendamento</Button>
        </form>
        <form action="mailto:estalo.psi@gmail.com" target="_blank">
          <Button variant="light">Email</Button>
        </form>
        <form action="">
          <Button variant="blue">WhatsApp</Button>
        </form>
      </div>
    </section>
  );
};
