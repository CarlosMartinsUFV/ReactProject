import React from "react";
import Header from "../Header/Header";
import Input from "../Forms/Input";
import Modal from "../Modal/Modal";
import Button from "../Forms/Button";
import styles from "./ContainerDetalhes.module.css";

const ContainerDetalhes = () => {
  return (
    <section>
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
          <ul className={styles.listaEndereco}>
            <li>
              <p>Endereço Completo</p> <span>Rua</span>
              <div>26/03/1997</div>
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
        </ul>
      </div>
    </section>
  );
};

export default ContainerDetalhes;
