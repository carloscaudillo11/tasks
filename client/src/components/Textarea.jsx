import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Textarea = forwardRef((props, ref, rows = 2) => (
  <textarea
    {...props}
    ref={ref}
    className="w-full px-4 py-2 text-white rounded-md bg-zinc-700"
    rows={rows}
  />
));

export default Textarea;
