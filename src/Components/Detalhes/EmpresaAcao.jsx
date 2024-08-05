import React from "react";
import styles from "./EmpresaAcao.module.css";
import Button from "../Forms/Button";

const EmpresaAcao = () => {
  return (
    <section className={styles.contentEmpresaAcao}>
      <nav className={styles.navStyle}>
        <span>Registros</span>
        <span>Arquivos</span>
        <span>Informações Complementares</span>
      </nav>
      <div className={styles.historicoComentarios}></div>
      <div className={styles.secaoComentarios}>
        <textarea className={styles.textarea} name="" id="">
          {" "}
        </textarea>{" "}
        <Button variant={"gr"}>Enviar</Button>
      </div>
    </section>
  );
};

export default EmpresaAcao;
