import React from "react";
import style from "./Card.module.css";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Card = () => {
  const [accordion, setAccordion] = React.useState(false);
  function handleClick() {
    setAccordion((accordion) => {
      return !accordion;
    });
  }

  return (
    <div className={style.containerStatus}>
      <div className={style.arrow} onClick={handleClick}>
        {accordion ? <SlArrowUp /> : <SlArrowDown />}
      </div>
      <h1>Minhas empresas</h1>

      {accordion ? (
        <div className={style.containerText}>
          <div className={style.listCard}>
            <ul className={style.containerList}>
              <li>Não iniciadas</li>
              <li>Em processo</li>
              <li>Em backlog</li>
              <li>Finalizadas</li>
            </ul>
            <div className={style.cardHoje}></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
