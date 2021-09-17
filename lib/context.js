import React, { useState, createContext, useEffect } from "react";


export const Context = createContext({});

export function ProviderContext({ children }) {
    
    const [portalConfig, setPortalConfig] = useState({})
    
    return (
        <Context.Provider 
            value={{
                  portalConfig, setPortalConfig 
            }}
        >
            {children}
        </Context.Provider>
    )
}
export const UseContext = () => React.useContext(Context);


