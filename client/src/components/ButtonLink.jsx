import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ButtonLink = ({ to, children }) => {
  return (
    <Link to={to} className="px-4 py-1 bg-indigo-500 rounded-md">
      {children}
    </Link>
  );
};

export default ButtonLink;
