import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import MovieList from "./Component/Movie/MovieList";
import TodoList from "./Component/Todo/CreatePags";
import NumberGuessingGame from "./Component/Game/NumberGuessingGame";
import Quiz from "./Component/Game/Quiz";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Todo from "./Component/Todo/Todo";
import WeatherSerach from "./Component/Weather/WeatherSearch";
import Weather from "./Component/Weather/Weather";
import FastClick from "./Component/Game/FastClick";
function App() {
  return (
    <Router>
      <div>
        <Header />

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<MovieList />} />
            <Route path="/todos" element={<TodoList />} />
            <Route
              path="/numberGuessingGame"
              element={<NumberGuessingGame />}
            />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/weatherSerach" element={<WeatherSerach />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/fastclick" element={<FastClick />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
