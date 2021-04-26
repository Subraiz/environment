import React from "react";
import styles from "./styles.module.css";
import { Header } from "../../components";
import Store from "../../store.json";

const Home = () => {
  console.log(Store);
  return (
    <div>
      <Header />
    </div>
  );
};

export { Home };
