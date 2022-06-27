import React from "react";
import { Button } from "react-bootstrap";
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link to="/login">
        <Button className="btn-lg m-4" variant="outline-success">
          Log in
        </Button>
      </Link>
      <Link to="/signup">
        <Button className="btn-lg m-4" variant="outline-warning">
          Sign up
        </Button>
      </Link>
    </div>
  );
};

export default Header;
