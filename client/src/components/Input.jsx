import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Input = forwardRef((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="w-full px-4 py-2 text-white rounded-md bg-zinc-700"
  />
));

export default Input