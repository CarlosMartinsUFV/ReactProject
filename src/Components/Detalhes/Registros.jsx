import React from "react";
import styles from "./Registros.module.css";
import HeaderDetalhes from "./HeaderDetalhes";
import Nav from "./Nav";
import Comentarios from "./Comentarios";

const Registros = () => {
  return (
    <>
      <section className={styles.contentEmpresaAcao}>
        <HeaderDetalhes>
          <Nav title="Registro">
            <Comentarios />{" "}
          </Nav>
          <Nav title="Arquivos">
            <p>teste2</p>
          </Nav>
          <Nav title="Informações Complementares">
            <p>teste3</p>
          </Nav>
        </HeaderDetalhes>
      </section>
    </>
  );
};

export default Registros;
