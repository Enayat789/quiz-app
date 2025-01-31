// issue....
// Access to XMLHttpRequest at 'https://api.jsonserve.com/Uw5CrX' from origin 'http://localhost:5173'
// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

// To avoid this issue, I switched to using a local JSON file for fetching quiz data instead of making
// a request to the external API that is blocked by CORS.

import Question from "./ui/Question";
import ScoreSection from "./ui/ScoreSection";
import { useState } from "react";
import data from "../data.json";

const QuizScreen = () => {
  const questions = data.questions;

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];
  const [totalQues, setTotalQues] = useState(questions.length);
  const [selectedOption, setSelectedOption] = useState(null);

  const [score, setScore] = useState(0);

  // for showing the next questions..
  const handleNext = () => {
    if (selectedOption?.is_correct) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentIndex < totalQues - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
    }
  };

  // for showing the previous questions...
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center ">
      <ScoreSection
        totalQues={totalQues}
        currentIndex={currentIndex}
        score={score}
      />

      <Question
        currentQuestion={currentQuestion}
        currentIndex={currentIndex}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        totalQues={totalQues}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </div>
  );
};

export default QuizScreen;
