import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home"; // not done
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { CreateQuiz } from "./pages/createQuiz";
import { ReadQuiz } from "./pages/readQuiz";
import { ReadQues } from "./pages/readQues";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/read" element={<ReadQuiz />} />
          <Route path="/ques/:title" element={<ReadQues />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
