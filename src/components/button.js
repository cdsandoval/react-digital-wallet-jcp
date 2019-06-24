/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

function Button({ path, children, color }) {
  return (
    <Link to={path}>
      <button
        css={{
          borderRadius: "5px",
          padding: "7px",
          margin: "10px",
          backgroundColor: `${color}`,
          border: "2px solid black",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#eee"
          }
        }}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
