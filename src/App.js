import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import "./css/Home.css";
import "./css/Articles.css";
import Articles from "./components/Articles";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Title from "./components/Title";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
