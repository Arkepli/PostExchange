import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePosts from "./pages/CreatePosts";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
        <Link to="/CreatePost"> Create A Post </Link>
        <Link to="/"> Home Page </Link>
        <Link to="/login"> Login </Link>
        <Link to="/registration"> Registration </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreatePost" element={<CreatePosts />} />
          <Route path="/Post/:id" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
