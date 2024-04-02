import React ,{createContext,useState,useContext} from "react";

const ThemeContext=createContext();

export const ThemeProvider=({children})=>{
  const [data,setData]=useState({
    age:23
  })

  const updateData=(data)=>{
    setData(data);
  }


  return (
    <ThemeContext.Provider value={{data,updateData}}>

    </ThemeContext.Provider>
  )

}

export default ThemeContext;
