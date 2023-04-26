import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

    export const ThemeProvider = ({ children }) => {
        const [theme, setTheme] = useState('light');
        const [isDataFetched, setIsDataFetched] = useState(false)

        const toggleTheme = () => {
            setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
        };

        return (
            <ThemeContext.Provider value={{ isDataFetched, setIsDataFetched }}>
            {children}
            </ThemeContext.Provider>
        );
    };

export default ThemeContext;