'use client'
import React, { useState, useEffect } from 'react';
import { MoveRight } from "lucide-react";
import styles from "@/styles/quiz.module.css";
import quiz from "@/data/quiz.json";

function Quiz() {
  const [questions, setQuestions] = useState(quiz);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [questionNo, setQuestionNo] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [hoverCounts, setHoverCounts] = useState({});
  const [selectCount, setSelectCount] = useState(0);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    setSelectedQuestion(questions[questionNo]);
    setStartTime(Date.now());
    setSelectCount(0);
  }, [questionNo, questions]);

  const handleAnswerSelect = (answer) => {
    if (selectedAnswer !== answer) {
      setSelectCount(selectCount + 1);
    }
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const responseTime = Date.now() - startTime;
    const newResponse = {
      questionID: selectedQuestion.id,
      answer: selectedAnswer,
      responseTime,
      hoverCount: hoverCounts[selectedQuestion.id] || 0,
      selectCount
    };

    // Update existing response if it exists, otherwise add a new response
    setResponses(prevResponses => {
      const existingIndex = prevResponses.findIndex(response => response.questionID === selectedQuestion.id);
      if (existingIndex !== -1) {
        // Update existing response
        return [
          ...prevResponses.slice(0, existingIndex),
          newResponse,
          ...prevResponses.slice(existingIndex + 1)
        ];
      } else {
        // Add new response
        return [...prevResponses, newResponse];
      }
    });

    if (questionNo < questions.length - 1) {
      setQuestionNo(questionNo + 1);
      setSelectedAnswer('');
    } else {
      // Handle end of quiz logic here, such as submitting responses
      console.log(responses);
    }
  };

  const handleHover = (questionID) => {
    setHoverCounts(prevCounts => ({
      ...prevCounts,
      [questionID]: (prevCounts[questionID] || 0) + 1
    }));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h3>{selectedQuestion?.question}</h3>
        <div className={styles.options}>
          {selectedQuestion?.options && Object.entries(selectedQuestion.options).map(([key, value]) => (
            <button
              key={key}
              style={{ 
                backgroundColor: selectedAnswer === key ? 'white' : '',
                color: selectedAnswer === key ? 'black' : ''
              }}
              onClick={() => handleAnswerSelect(key)}
              onMouseOver={() => handleHover(selectedQuestion.id)}
            >
              {value}
            </button>
          ))}
        </div>
        <button
          className={styles.submit_btn}
          onClick={handleNextQuestion}
          disabled={!selectedAnswer}
        >
          Next
          <MoveRight />
        </button>
      </div>
    </>
  );
}

export default Quiz;
