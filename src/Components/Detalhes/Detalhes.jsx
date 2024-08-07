import React from "react";
import ContainerDetalhes from "./ContainerDetalhes";
import Header from "../Header/Header";
import styles from "./Detalhes.module.css";
import Registros from "./Registros";

const Detalhes = () => {
  return (
    <section className={"animeLeft"}>
      {" "}
      <Header />
      <div className={`container ${styles.detalhesPage}`}>
        {" "}
        <ContainerDetalhes /> <Registros />
      </div>
    </section>
  );
};

export default Detalhes;
