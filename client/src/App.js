import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePosts from "./pages/CreatePosts";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

//The context API is used here.
function App() {

  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
        }
      });
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
      <Router>
        <div className="navbar">
        <Link to="/CreatePost"> Create A Post </Link>
        <Link to="/"> Home Page </Link>
           {!authState && (
              <>
                <Link to="/registration"> Registration</Link>
                <Link to="/login"> Login</Link> 
              </>
            )}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreatePost" element={<CreatePosts />} />
          <Route path="/Post/:id" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
