import React from "react";
import styles from "./Comentarios.module.css";
import Button from "../Forms/Button";

const Comentarios = () => {
  return (
    <>
      {" "}
      <div className={styles.conteudo}>
        <div className={styles.secaoComentarios}>
          <textarea className={styles.textarea} name="" id="">
            {" "}
          </textarea>{" "}
          <Button variant={"gr"}>Enviar</Button>{" "}
        </div>
      </div>
    </>
  );
};

export default Comentarios;
