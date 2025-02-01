const ScoreSection = ({
  totalQues,
  currentIndex,
  score,
  progress,
  timeLeft,
}) => {
  return (
    <div className="w-full max-w-3xl bg-gray-200 flex justify-between items-center p-2 px-8 mb-4 rounded-lg text-xl font-semibold">
      <div className="flex flex-col w-[25%]  items-center justify-center p-2 gap-2">
        <span>
          Question {currentIndex + 1} of {totalQues}
        </span>
        <div className="w-full h-3 bg-white rounded-md overflow-hidden">
          <div
            className="h-full bg-gray-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      {/* showing timer */}
      <div className=" w-[20%] p-2 flex items-center justify-evenly">
        <span className="text-red-500">{timeLeft}</span>
        <p>Seconds</p>
      </div>

      {/* Score display */}
      <div className="flex flex-col w-[15%] justify-end items-center">
        Score
        <span className="text-5xl">{score}</span>
      </div>
    </div>
  );
};

export default ScoreSection;
