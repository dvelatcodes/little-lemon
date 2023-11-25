import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [checker, setChecker] = useState(true);
    const toggleTheme = (theme) => {
        if (theme === "light") setChecker(false)
        else setChecker(true)
    } 
return <ThemeContext.Provider value={{theme : checker? "light" : "dark", toggleTheme }}>
{children}    
</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);
