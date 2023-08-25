// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
  return (
    <p className="px-3 py-2 mb-1 text-sm bg-red-500 rounded-sm text-slate-200">
      {message}
    </p>
  );
};

export default Message;
