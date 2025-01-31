import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Hero from "./Components/Hero";
import Home from "./Components/Home";
import QuizScreen from "./Components/QuizScreen";
// import QuizScreen2 from "./Components/QuizScreen2";

function App() {
  return (


    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizScreen" element={<QuizScreen />} />
        {/* <Route path="/quizScreen2" element={<QuizScreen2 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
