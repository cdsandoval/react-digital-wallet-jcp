/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

function Button({ path, children }) {
  return (
    <Link to={path}>
      <button>{children}</button>
    </Link>
  );
}

export default Button;
