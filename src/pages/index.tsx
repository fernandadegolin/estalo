import type { NextPage } from "next";

import { Nav } from "../components/Nav/Nav";
import { Main } from "../components/Main/Main";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Main />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Estalo</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
