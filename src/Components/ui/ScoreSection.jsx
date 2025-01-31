const ScoreSection = ({ totalQues, currentIndex, score }) => {
  return (
    <div className="w-full max-w-3xl bg-gray-200 flex justify-between items-center p-2 px-8 mb-4 rounded-lg text-xl font-semibold">
      <div className="flex flex-col w-[25%]  items-center justify-center p-2 gap-2">
        <span className="">
          Question {currentIndex + 1} of {totalQues}
        </span>
        <div className=" bg-white w-full h-8 rounded-md"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        Score
        <span className="text-5xl">{score}</span>
      </div>
    </div>
  );
};

export default ScoreSection;
