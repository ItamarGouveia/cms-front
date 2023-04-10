import { createContext, useCallback, useState,useMemo, useContext } from 'react';
import { ThemeProvider } from '@mui/material';
import {DarkTheme,LightTheme} from '../../shared/themes';
import {Box} from '@mui/material';
import React from 'react';

interface IThemeContextData{
    themeName: 'light' | 'dark';
    toggleTheme: () => void
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext =() =>{
    return useContext(ThemeContext);
};


interface IAppThemeProviderProps{
    children: React.ReactNode
}
export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({children}) =>{
    const [themeName, setThemeName] = useState<'light'| 'dark'>('light');

    const toggleTheme = useCallback(()=>{
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    },[]);

    const theme = useMemo(()=> {
        if(themeName ==='light') return LightTheme;

        return DarkTheme;
    },[themeName]);

    return(
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={DarkTheme}>
                <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default} >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
