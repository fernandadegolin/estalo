import type { NextPage } from "next";

import { Nav } from "../components/Nav/Nav";
import { Main } from "../components/Main/Main";

import styles from "../styles/Home.module.css";
import { Button } from "./../components/Button/Button";
import { Mission } from "./../components/Mission/Mission";
import { Question } from "../components/Question/Question";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Main />
      <Mission />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Estalo</a>
        </h1>
        <form action="/teste">
          <Button type="submit">teste</Button>
        </form>
      </main>
      <Question />
    </div>
  );
};

export default Home;
