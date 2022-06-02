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
        <form action="https://forms.gle/rdQ4gafygL71K9UaA" target="_blank">
          <Button variant="blue">Agendamento</Button>
        </form>
        <form action="mailto:estalo.psi@gmail.com" target="_blank">
          <Button variant="blue">Email</Button>
        </form>
      </div>
    </section>
  );
};
