import React, { useState } from 'react'
import { createContext } from 'react';


 export const contextprovider = createContext()

function Context({children}) {

    const [data, setData] = useState([])
 
    
  return (
    <contextprovider.Provider value={{data, setData}}>
        {children}

    </contextprovider.Provider>
    
  )
}

export default Context;
