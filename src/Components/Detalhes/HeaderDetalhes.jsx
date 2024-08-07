import React from "react";
import styles from "./HeaderDetalhes.module.css";

const HeaderDetalhes = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <>
      <div>
        <div className={styles.navButtons}>
          {children.map((nav, index) => (
            <button
              key={index}
              className={activeTab === index ? styles.navButtonsAtivo : ""}
              onClick={() => setActiveTab(index)}
            >
              {nav.props.title}
            </button>
          ))}
        </div>
        <div>{children[activeTab]}</div>
      </div>{" "}
    </>
  );
};

export default HeaderDetalhes;
