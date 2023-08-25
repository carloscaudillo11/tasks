// eslint-disable-next-line react/prop-types
const Card = ({ children }) => {
  return (
    <div className="w-full max-w-md p-10 rounded-md bg-zinc-800">
      {children}
    </div>
  );
};

export default Card;
