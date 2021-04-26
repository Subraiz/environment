import React from "react";
import styles from "./styles.module.css";

const Question = ({ question, onOptionClick }) => {
  const { title, options } = question;

  const renderOptions = () => {
    return options.map((option, i) => {
      return (
        <div className={styles.option} onClick={() => onOptionClick()} key={i}>
          <p>{option}</p>
        </div>
      );
    });
  };

  return (
    <div className={styles.question}>
      <p className={styles.title}>{title}</p>
      <div className={styles.options}>{renderOptions()}</div>
    </div>
  );
};

export { Question };
