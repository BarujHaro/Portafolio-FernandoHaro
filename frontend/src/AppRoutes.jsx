import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';


export function AppRoutes(){
    return(
        <Routes>
            <Route index element = {<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
          </Routes>
    );
}