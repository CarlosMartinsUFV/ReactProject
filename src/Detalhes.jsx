import React from "react";
import ContainerDetalhes from "./Components/Detalhes/ContainerDetalhes";
import Header from "../src/Components/Header/Header";
import styles from "./Detalhes.module.css";

import EmpresaAcao from "./Components/Detalhes/EmpresaAcao";

const Detalhes = () => {
  return (
    <>
      {" "}
      <Header />
      <div className={`container ${styles.detalhesPage}`}>
        {" "}
        <ContainerDetalhes /> <EmpresaAcao />
      </div>
    </>
  );
};

export default Detalhes;
