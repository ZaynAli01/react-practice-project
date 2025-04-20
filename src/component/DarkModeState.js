import { useState } from "react";
import DarkModeContext from "./DarkModeContext";

export default function DarkModState(props) {
  const [isActive, setIsActive] = useState(false)




  return (
    <DarkModeContext.Provider value={{ isActive, setIsActive }}>
      {props.children}
    </DarkModeContext.Provider>)
}