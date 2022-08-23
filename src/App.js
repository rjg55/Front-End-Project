import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import "./css/Home.css";
import "./css/Articles.css";
import "./css/Topics.css";
import "./css/Title.css";
import Articles from "./components/Articles";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Topics from "./components/Topics";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Title />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topic_id" element={<Articles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
