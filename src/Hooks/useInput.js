import { useState } from "react";
export const useInput = () => {
  const [value, setValue] = useState("");
  const attributes = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  return [value, attributes, setValue];
};
