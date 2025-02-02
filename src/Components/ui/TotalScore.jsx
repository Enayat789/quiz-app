import React from "react";

function TotalScore({ score, totalQues, restartQuiz, navigate }) {
  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white flex flex-col justify-between items-center py-4 px-4 sm:px-8 lg:h-[50vh] lg:justify-between rounded-lg text-xl font-semibold shadow-xl border border-gray-300">
        <div className="w-full flex flex-col items-center md:gap-2">
          <h2 className="text-4xl sm:text-3xl lg:text-5xl">Total Score</h2>
          <h2 className="text-4xl sm:text-2xl lg:text-5xl">
            {score} / {totalQues}
          </h2>
        </div>
        <div className="w-full flex flex-col items-center justify-evenly lg:h-full p-4 rounded-lg text-lg space-y-4">
          {score === totalQues ? (
            <p className="text-green-700 font-semibold text-center">
              🎉 Amazing! You got all the answers right!
            </p>
          ) : score >= totalQues / 2 ? (
            <p className="text-blue-700 font-semibold text-center">
              👍 Good job! Keep practicing to improve.
            </p>
          ) : (
            <p className="text-red-700 font-semibold text-center">
              😟 Don't worry! Try again and improve your score.
            </p>
          )}

          <div className="w-full flex flex-col sm:flex-row items-center justify-evenly space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate("/")}
              className="border-4 text-black bg-gray-200 text-md font-semibold px-6 py-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-300 hover:shadow-lg w-full sm:w-auto"
            >
              Home
            </button>
            <button
              onClick={restartQuiz}
              // className="w-40 md:w-48 bg-blue-500 text-white text-lg md:text-xl font-semibold px-6 py-3 rounded-lg transition-transform transform animate-bounce hover:animate-none hover:scale-105 hover:shadow-lg"
              className="border-4 bg-blue-500 text-white text-md font-semibold px-6 py-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            >
              Restart Quiz 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalScore;
