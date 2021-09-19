import React, { useState } from "react";
import questions from "../../data.json";
import QuestionCard from "../QuestionCard/QuestionCard";
import classes from "./questions.module.css";

const Questions = () => {
  const [currentQuestionCount, setCurrentQuestionCount] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  const isLast = questions.length === currentQuestionCount;

  const selectAnswerHandler = (answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questions[currentQuestionCount].id]: answer,
    }));
    setCurrentQuestionCount((prev) => (isLast ? prev : ++prev));
    setScore((prev) =>
      questions[currentQuestionCount].answerId === answer ? ++prev : prev
    );
  };

  return (
    <div>
      <p className={classes.score}>Score: {score}</p>
      <div className={classes.questionsContainer}>
        {currentQuestionCount > 0 && (
          <QuestionCard
            answerSelector={selectAnswerHandler}
            question={
              isLast
                ? questions[currentQuestionCount - 2]
                : questions[currentQuestionCount - 1]
            }
            isPrevious
            selectedAnswer={
              isLast
                ? selectedAnswers[questions[currentQuestionCount - 2].id]
                : selectedAnswers[questions[currentQuestionCount - 1].id]
            }
            questionNumber={
              isLast ? currentQuestionCount - 2 : currentQuestionCount - 1
            }
          />
        )}
        {isLast && (
          <QuestionCard
            answerSelector={selectAnswerHandler}
            question={questions[currentQuestionCount - 1]}
            isPrevious
            selectedAnswer={
              selectedAnswers[questions[currentQuestionCount - 1].id]
            }
            isLast={isLast}
            questionNumber={currentQuestionCount - 1}
          />
        )}
        <QuestionCard
          answerSelector={selectAnswerHandler}
          question={questions[currentQuestionCount]}
          questionNumber={currentQuestionCount}
        />
      </div>
    </div>
  );
};

export default Questions;
