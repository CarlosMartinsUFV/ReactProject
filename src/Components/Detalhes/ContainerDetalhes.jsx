import React from "react";
import styles from "./ContainerDetalhes.module.css";

const ContainerDetalhes = () => {
  return (
    <div className={styles.containerDetalhes}>
      <h1> Nome da empresa</h1>
      <ul className={styles.lista}>
        <li>
          <p>Status</p>
          <div>Não iniciada</div>{" "}
        </li>
        <li>
          <p>CNPJ</p>
          <div>25021140000177 </div>
        </li>
        <li>
          <p>Data de Abertura</p>
          <div>26/03/1997</div>
        </li>
        <h3>Endereço Completo</h3>
        <li>
          <span>Rua</span>
          <div>26/03/1997</div>{" "}
        </li>
        <li>
          <span>Número</span>
          <div>26/03/1997</div>
        </li>
        <li>
          {" "}
          <span>Bairro</span>
          <div>26/03/1997</div>
        </li>
        <li>
          <span>Cidade</span>
          <div>26/03/1997</div>
        </li>
        <li>
          {" "}
          <span>Estado</span>
          <div>26/03/1997</div>
        </li>
      </ul>
    </div>
  );
};

export default ContainerDetalhes;
