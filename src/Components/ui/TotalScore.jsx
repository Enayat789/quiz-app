import React from "react";

function TotalScore({ score, totalQues, restartQuiz, navigate }) {
  return (
    <div className="w-full h-full absolute flex items-center justify-center">
      <div className="w-full max-w-3xl h-[60%] bg-gray-200 flex flex-col justify-between items-center py-4 px-8 rounded-lg text-xl font-semibold">
        <div className=" w-full flex flex-col items-center">
          <h1>Total Score</h1>
          <h1>
            {score} / {totalQues}
          </h1>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-evenly p-4 rounded-lg text-lg">
          {score === totalQues ? (
            <p className="text-green-700 font-semibold">
              🎉 Amazing! You got all the answers right!
            </p>
          ) : score >= totalQues / 2 ? (
            <p className="text-blue-700 font-semibold">
              👍 Good job! Keep practicing to improve.
            </p>
          ) : (
            <p className="text-red-700 font-semibold">
              😟 Don't worry! Try again and improve your score.
            </p>
          )}

          <div className="w-full flex flex-row items-center justify-evenly">
            <button
              onClick={() => navigate("/")}
              className="border-4 text-gray-800 text-md font-semibold px-6 py-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              Home
            </button>
            <button
              onClick={restartQuiz}
              className="border-4 text-gray-800 text-md font-semibold px-6 py-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalScore;
