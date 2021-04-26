import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styles from "./styles.module.css";
import { Question } from "../../components";

let Questions = ({ history }) => {
  let [questionIndex, toggleQuestionIndex] = useState(0);

  const questions = [
    {
      title: "Are you a student?",
      options: ["Yes", "No"]
    },
    {
      title: "Which of the following describes Environmental Racism?",
      options: [
        "Environmental injustice that occurs within a racialized context both in practice and policy",
        "The belief that groups of humans possess different behavioral traits corresponding to physical appearance and can be divided based on the superiority of one race over another",
        "A social movement that focuses on the 'fair' distribution of environmental benefits and burdens"
      ]
    },
    {
      title: "What are you doing now to make an impact?",
      options: [
        "Attending/hosting events",
        "Having honest conversations with BIPOC",
        "None",
        "Contacting government officials",
        "Research",
        "Engaging with content created by BIPOC",
        "Other",
        "Completing trainings",
        "Correcting racial bias in everyday speech"
      ]
    },
    {
      title: "If you had more time and resources, what else would you do?",
      options: [
        "Attending/hosting events",
        "Having honest conversations with BIPOC",
        "None",
        "Contacting government officials",
        "Research",
        "Engaging with content created by BIPOC",
        "Other",
        "Completing trainings",
        "Correcting racial bias in everyday speech"
      ]
    }
  ];

  const renderQuestion = () => {
    if (questionIndex === questions.length - 1) {
      return (
        <Question
          question={questions[questionIndex]}
          onOptionClick={() => {
            history.push("/home");
          }}
        />
      );
    } else {
      return (
        <Question
          question={questions[questionIndex]}
          onOptionClick={() => {
            console.log("hello");
            toggleQuestionIndex(questionIndex + 1);
          }}
        />
      );
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>{renderQuestion()}</div>
    </div>
  );
};

Questions = withRouter(Questions);

export { Questions };
