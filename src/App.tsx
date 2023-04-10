import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { ThemeProvider } from '@mui/material';
import { LightTheme } from './shared/themes';
import { AppThemeProvider } from './shared/contexts';

import { Light } from '@mui/icons-material';
export const App = () => {
    return (
        <AppThemeProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </AppThemeProvider>
    );
};

