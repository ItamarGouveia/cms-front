import { Button } from '@mui/material';
import {Routes , Route } from 'react-router-dom';
import React from 'react';
export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Button variant='contained' color='primary'>teste</Button>} />
            <Route path='*' element={<p>404</p>}/>
        </Routes>
    );
};