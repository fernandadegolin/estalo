import type { NextPage } from "next";

import styles from "../styles/Home.module.scss";

import { Nav } from "../components/Nav/Nav";
import { Main } from "../components/Main/Main";
import { Mission } from "./../components/Mission/Mission";
import { Question } from "../components/Question/Question";
import { Faq } from "./../components/Faq/Faq";
import { Contact } from "./../components/Contact/Contact";
import { Footer } from "./../components/Footer/Footer";
import { Who } from "./../components/Who/Who";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <Nav /> */}
      <Main />
      <Who />
      <Mission />
      <Question />
      <Faq />
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          POLITICA DE PRIVACIDADE <a href="https://nextjs.org">Estalo</a>
        </h1>
      </main> */}

      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
