import { useState, createContext } from "react";
import horoscopes from "../data/horoscopes";

export const HoroscopeContext = createContext();
const HoroscopeProvider = (props) => {
  const [currentSign, setCurrentSign] = useState("Virgo");
  const sign = horoscopes[currentSign];
  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeProvider;
