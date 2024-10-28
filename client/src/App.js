import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePosts from "./pages/CreatePosts";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
        <Link to="/CreatePost">Create A Post</Link>
        <Link to="/"> Home Page</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreatePost" element={<CreatePosts />} />
          <Route path="/Post/:id" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
