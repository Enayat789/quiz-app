const ScoreSection = ({
  totalQues,
  currentIndex,
  score,
  progress,
  timeLeft,
}) => {
  return (
    <div className="w-full max-w-3xl bg-gray-200 flex justify-between items-center p-2 px-4 sm:px-6 md:px-8 mb-4 rounded-lg text-lg sm:text-xl font-semibold">
      <div className="flex flex-col w-[35%] sm:w-[25%] items-center justify-center p-1 sm:p-2 gap-1 sm:gap-2">
        <span className="text-sm sm:text-xl">
          Question {currentIndex + 1} of {totalQues}
        </span>
        <div className="w-full h-2 sm:h-3 bg-white rounded-md overflow-hidden">
          <div
            className="h-full bg-gray-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* showing timer */}
      <div className="w-[25%] sm:w-[18%] p-1 sm:p-2 gap-2 flex items-center justify-evenly">
        <span className="text-red-500 text-sm sm:text-base md:text-lg">
          {timeLeft}
        </span>
        <p className="text-sm sm:text-base">Seconds</p>
      </div>

      {/* Score display */}
      <div className="flex flex-col w-[20%] sm:w-[15%] justify-end items-center">
        <span className="text-sm sm:text-base md:text-xl">Score</span>
        <span className="text-3xl sm:text-5xl ml-1 sm:ml-2">{score}</span>
      </div>
    </div>
  );
};

export default ScoreSection;
