import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <p>
        Go back to Home page
        <Link style={{ color: "blue" }} to="/">
          HERE
        </Link>
      </p>
    </div>
  );
}

export default PageNotFound;
