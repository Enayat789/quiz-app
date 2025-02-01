import React from "react";
import { useNavigate } from "react-router-dom";

function Rules() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300 px-4">
      <div className="w-full max-w-3xl md:max-w-2xl lg:max-w-3xl bg-white shadow-xl flex flex-col justify-evenly items-center p-6 md:p-8 rounded-lg text-lg md:text-xl font-semibold border border-gray-300">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
          📝 Quiz Rules
        </h2>

        {/* Rules List */}
        <div className="w-full p-2 md:p-4 flex flex-col justify-center text-sm md:text-lg font-mono text-gray-700 gap-3">
          <p>✅ Each question has four options, but only one correct answer.</p>
          <p>
            ✅ You must select an answer before moving to the next question.
          </p>
          <p>✅ Each question has a 60-second time limit.</p>
          <p>
            ✅ If time runs out, the quiz will automatically move to the next
            question.
          </p>
          <p>✅ The timer resets when a new question appears.</p>
          <p>✅ You cannot pause the timer once a question starts.</p>
          <p>✅ Each correct answer gives +1 point.</p>
          <p>✅ No negative marking for wrong answers.</p>
          <p>✅ Your final score is displayed at the end of the quiz.</p>
        </div>

        {/* Buttos for Home and Start Quiz */}
        <div className="w-full flex flex-col md:flex-row items-center justify-around mt-4 gap-4">
          <button
            onClick={() => navigate("/")}
            className="w-full md:w-auto bg-gray-200 border-2 border-gray-600 text-gray-700 px-6 py-2 rounded-lg text-md md:text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-gray-300"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/quizScreen")}
            className="w-full md:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg text-md md:text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            Start Quiz 🚀
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rules;
