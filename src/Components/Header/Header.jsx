import React from "react";
import styles from "./Header.module.css";
import IconeConta from "./default-avatar.png";
import Lupa from "./Lupa.jsx";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext.jsx";
import Button from "../Forms/Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const context = React.useContext(UserContext);
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <nav className={`container ${styles.navStyle}`}>
      {" "}
      <div className={styles.userName}>
        {data
          ? `Bem-vindo 
      ${data.nome} `
          : ""}
      </div>
      <div className={styles.headerStyle}>
        <Lupa />
        <div>
          <img src={IconeConta} alt="" />
        </div>{" "}
        <div className={styles.sair} onClick={userLogout}>
          <span>Sair</span>
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
          ></FontAwesomeIcon>{" "}
        </div>
      </div>
    </nav>
  );
};

export default Header;
