// eslint-disable-next-line react/prop-types
const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block my-1 text-xs text-slate-300">
      {children}
    </label>
  );
};

export default Label;
