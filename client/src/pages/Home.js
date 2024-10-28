import axios from "axios";
import { useState, useEffect } from "react";

function Home() {

    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:3001/posts")
        .then((response) => {
          console.log(response.data);
          setListOfPosts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div className="post">
            <div className="title">{value.title}</div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
