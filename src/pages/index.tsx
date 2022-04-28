import type { NextPage } from "next";

import styles from "../styles/Home.module.scss";

import { Nav } from "../components/Nav/Nav";
import { Main } from "../components/Main/Main";
import { Mission } from "./../components/Mission/Mission";
import { Question } from "../components/Question/Question";
import { Faq } from "./../components/Faq/Faq";
import { Contact } from "./../components/Contact/Contact";
import { Footer } from "./../components/Footer/Footer";
// import { Who } from "./../components/Who/Who";
import { Card } from "./../components/Who/Card/Card";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Main />
      <Card />
      <Mission />
      <Question />
      <Faq />
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          POLITICA DE PRIVACIDADE <a href="https://nextjs.org">Estalo</a>
        </h1>
      </main> */}
      <p>
        <a target="_blank" href="https://icons8.com/icon/32292/instagram">
          Instagram
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </p>
      {/* <Who /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
