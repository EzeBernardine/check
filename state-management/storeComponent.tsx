import { createContext, ReactNode, useReducer } from "react";
import { combinedReducers, initialState } from "./reducers";

const store = createContext({});

type Props = {
  children?: ReactNode;
  initialData?: any;
};

const StoreComponent = ({ children, initialData = {} }: Props) => {
  const [state, dispatch] = useReducer(combinedReducers, {
    ...initialState,
    ...initialData,
  });

  const { Provider } = store;

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store };
export default StoreComponent;
