import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import "./css/Home.css";
import "./css/Articles.css";
import "./css/Topics.css";
import "./css/Title.css";
import "./css/ArticleSingle.css";
import "./css/ChangeUser.css";
import "./css/Comments.css";
import "./css/Nav.css";
import Articles from "./components/Articles";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Topics from "./components/Topics";
import ArticleSingle from "./components/ArticleSingle";
import { useState } from "react";
import { UserContext } from "./context/User";
import ChangeUser from "./components/ChangeUser";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Title />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:topic_id" element={<Articles />} />
            <Route path="/articles/:article_id" element={<ArticleSingle />} />
            <Route path="/users" element={<ChangeUser />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
