import { useEffect, useRef } from "react";

export const useFocus = () => {
  const ref = useRef(null);
  useEffect(() => {
    ref && ref.current && ref.current.focus();
  }, [ref]);
  return ref;
};
