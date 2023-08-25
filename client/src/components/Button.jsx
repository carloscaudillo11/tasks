// eslint-disable-next-line react/prop-types
const Button = ({ onClick, children }) => {
  return (
    <button
      className="px-4 py-1 my-2 bg-indigo-500 rounded-md disabled:bg-indigo-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
