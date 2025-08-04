import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import TodoApp from "./Components/Todo";
import GuessTheWord from "./Components/GuessTheWord";
import About from "./Components/About";
import TestComp from "./Components/TestComp";

function App() {
  return (
    <>
      <TodoApp />
      {/* <TestComp /> */}
    </>

    // <BrowserRouter>
    //   <Navbar />

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/services" element={<About />} />
    //     <Route path="/blog" element={<About />} />
    //     {/* Optional: add other components */}
    //     {/* <Route path="/todo" element={<TodoApp />} /> */}
    //     {/* <Route path="/game" element={<GuessTheWord />} /> */}
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
