import {Routes , Route,Navigate } from 'react-router-dom'

export const AppRoutes = () => {
    return(
        <Routes>
             <Route path="/pagina-inicial" element={<p>jflaflaf</p>} />
             <Route path='*' element={<p>404</p>}/>
        </Routes>
    )
}