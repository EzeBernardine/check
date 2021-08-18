import React, { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";


export const Context = createContext({});

export function ProviderContext({ children }) {
    
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
export const UseContext = () => React.useContext(Context);
