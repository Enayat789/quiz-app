import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col justify-center items-center gap-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Quick Quiz</h1>

      <button
        onClick={() => navigate("/quizScreen")}
        className=" text-black text-lg font-semibold px-8 py-3 rounded-lg transition-transform transform animate-bounce hover:animate-none hover:scale-105 hover:shadow-lg"
      >
        Play
      </button>

      <button className="border-4 text-gray-800 text-lg font-semibold px-7 py-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
        Rules
      </button>
    </div>
  );
};

export default Home;
