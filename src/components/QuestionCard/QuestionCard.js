import React from "react";
import classes from "./questionCard.module.css";

const QuestionCard = (props) => {
  const {
    question,
    answerSelector,
    isPrevious,
    selectedAnswer,
    isLast,
    questionNumber,
  } = props;

  if (!question) {
    return <></>;
  }

  return (
    <div
      className={`${classes.card} ${isPrevious ? classes.previous : ""} ${
        isLast ? classes.lastQuestion : ""
      }`}
    >
      <p className={classes.question}>
        {questionNumber + 1}. {question.question}
      </p>
      <div className={classes.options}>
        {question.options.map((option) => (
          <p
            className={
              isPrevious
                ? question.answerId === option.id
                  ? classes.correctOption
                  : ""
                : ""
            }
            style={
              selectedAnswer === option.id &&
              selectedAnswer !== question.answerId
                ? { color: "white", backgroundColor: "red" }
                : {}
            }
            onClick={isPrevious ? () => false : () => answerSelector(option.id)}
            key={option.id}
          >
            {option.option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
