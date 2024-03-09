import React, { createContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export const Context = createContext();

export function Provider( { children } ) {

    const [inform, setInform] = useState();
    const navigate = useNavigate();
    const complate = {};
    const location = useLocation();

    const data = {
        inform,
        setInform,
        navigate,
        location,
        complate,
    };

  return (
    <Context.Provider value={data}>
        { children }
    </Context.Provider>
  )
}
