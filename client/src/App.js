import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePosts from "./pages/CreatePosts";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/CreatePost">Create A Post</Link>
        <Link to="/"> Home Page</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreatePost" element={<CreatePosts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
