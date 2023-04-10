import { Button } from '@mui/material'
import {Routes , Route } from 'react-router-dom'

export const AppRoutes = () => {
    return(
        <Routes>
             <Route path="/pagina-inicial" element={<Button variant='contained' color='primary'>teste</Button>} />
             <Route path='*' element={<p>404</p>}/>
        </Routes>
    )
}