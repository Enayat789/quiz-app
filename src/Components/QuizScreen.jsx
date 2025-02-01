// issue....
// Access to XMLHttpRequest at 'https://api.jsonserve.com/Uw5CrX' from origin 'http://localhost:5173'
// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

// To avoid this issue, I switched to using a local JSON file for fetching quiz data instead of making
// a request to the external API that is blocked by CORS.

import Question from "./ui/Question";
import ScoreSection from "./ui/ScoreSection";
import { useState } from "react";
import data from "../data.json";
import TotalScore from "./ui/TotalScore";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const QuizScreen = () => {
  const questions = data.questions;
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];
  const [totalQues, setTotalQues] = useState(questions.length);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimeUp, setIsTimeUp] = useState(false);

  // updating the progress bar accordingly the no of questions..
  const progress = ((currentIndex + 1) / totalQues) * 100;

  // handling the timer
  // const handlingTimer = () => {
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsTimeUp(true);
      handleNext();
      // setQuizCompleted();
    }
  }, [timeLeft]);
  // };

  // for showing the next questions..
  const handleNext = () => {
    if (selectedOption?.is_correct) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentIndex < totalQues - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
    setTimeLeft(60);
  };

  // for showing the previous questions...
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(null);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setQuizCompleted(false);
    setTimeLeft(60);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center ">
      {quizCompleted ? (
        <TotalScore
          score={score}
          totalQues={totalQues}
          restartQuiz={restartQuiz}
          navigate={navigate}
        />
      ) : (
        <>
          <ScoreSection
            totalQues={totalQues}
            currentIndex={currentIndex}
            score={score}
            progress={progress}
            timeLeft={timeLeft}
          />

          <Question
            currentQuestion={currentQuestion}
            currentIndex={currentIndex}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            totalQues={totalQues}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            navigate={navigate}
          />
        </>
      )}
    </div>
  );
};

export default QuizScreen;
