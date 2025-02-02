// import { useState } from "react";

const Question = ({
  currentQuestion,
  currentIndex,
  handleNext,
  handlePrevious,
  totalQues,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="w-full max-w-3xl h-[72vh] sm:h-[60vh] md:h-[58vh] bg-gray-200 flex flex-col items-center justify-between gap-4 p-2 sm:p-4 sm:px-6 rounded-lg shadow-md">
      <div className="w-full h-auto sm:h-[20%] flex md:flex-row gap-2 sm:gap-4 md:gap-6 p-1 rounded-lg items-center sm:items-center md:items-center justify-start ">
        <h2 className="bg-white h-min p-2 px-3 md:text-2xl rounded-lg flex items-center justify-start md:justify-center">
          Q:
        </h2>
        <h2 className="text-sm md:text-md h-auto font-bold">
          {currentQuestion.description}
        </h2>
      </div>

      <div className="w-full">
        {currentQuestion.options && currentQuestion.options.length > 0 ? (
          currentQuestion.options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                if (!selectedOption) {
                  setSelectedOption(option);
                }
              }}
              className={`p-2 pl-2 bg-white flex flex-row items-center text-md gap-6 rounded-lg shadow-sm mb-2 cursor-pointer hover:bg-gray-300 transform transition-transform ease-in-out duration-300 ${
                selectedOption
                  ? "cursor-not-allowed hover:bg-white animate-fade-in"
                  : "hover:scale-104 animate-slide-up"
              }`}
            >
              <span className="h-full px-4 p-2 rounded-lg bg-gray-200">
                {/* showing A , B, C, D in options. */}
                {String.fromCharCode(65 + index)}
              </span>

              {/* showing the opton */}
              {option.description}
              {/* <span className="animate-fade-in">{option.description}</span> */}

              {/* checking the answer.. */}
              {selectedOption === option && option.is_correct && (
                <span className="text-green-500 font-bold ml-4">Correct</span>
              )}

              {selectedOption === option && option.is_correct === false && (
                <span className="text-red-500 font-bold ml-4">In Correct</span>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No options available</p>
        )}
      </div>

      {/* buttons for next and previous question.... */}
      <div className="w-full flex justify-between items-center">
        <button
          onClick={handlePrevious}
          className={`border-4  text-gray-800 text-md font-semibold px-7 py-2 rounded-lg transition-transform transform ${
            currentIndex === 0
              ? "cursor-not-allowed opacity-70 bg-gray-100"
              : "hover:scale-105 hover:shadow-lg bg-white"
          }`}
        >
          Previous
        </button>

        {totalQues === currentIndex + 1 ? (
          <button
            onClick={handleNext}
            className="border-4 bg-white text-gray-800 text-md font-semibold px-7 py-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            Show Score
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="border-4 bg-white text-gray-800 text-md font-semibold px-7 py-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
