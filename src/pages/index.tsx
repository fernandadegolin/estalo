import type { NextPage } from "next";

import { Nav } from "../components/Nav/Nav";
import { Main } from "../components/Main/Main";

import styles from "../styles/Home.module.css";
import { Button } from "./../components/Button/Button";
import { Mission } from "./../components/Mission/Mission";
import { Question } from "../components/Question/Question";
import { Contact } from "./../components/Contact/Contact";
import { Footer } from "./../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Main />
      <Mission />
      <Question />
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
