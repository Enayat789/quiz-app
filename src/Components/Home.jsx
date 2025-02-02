import { useNavigate } from "react-router-dom";
import bullysEye from "/bullseye.png";
// import { IoIosRocket } from "react-icons/io";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-r from-gray-100 to-gray-300 justify-center items-center gap-8 p-4">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl flex justify-center items-center gap-2 font-extrabold text-gray-800 mb-4 md:mb-6">
        <img src={bullysEye} alt="bullysEye img" className="w-14" />
        <span> Quick Quiz</span>
      </h1>

      {/* Buttons Container */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Play Button */}
        <button
          onClick={() => navigate("/quizScreen")}
          className="w-40 md:w-48 bg-blue-500 text-white text-lg md:text-xl font-semibold gap-2 px-6 py-3 rounded-lg transition-transform transform animate-bounce hover:animate-none hover:scale-105 hover:shadow-lg"
        >
          Play 🚀
          {/* <IoIosRocket size={20} className=" text-red-300" /> */}
        </button>

        {/* Rules Button */}
        <button
          onClick={() => navigate("/rules")}
          className="w-40 md:w-48 border-2 border-gray-700 bg-white text-gray-800 text-lg md:text-xl font-semibold px-6 py-3 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          Rules 📜
        </button>
      </div>
    </div>
  );
};

export default Home;
