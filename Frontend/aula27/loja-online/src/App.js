/* import {Button} from '@mui/material';
import {Favorite, Home} from '@mui/icons-material' */

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Slides from "./pages/Slides";
import Admin from "./pages/Admin";
import AddCampanha from './pages/AddCampanha';
import EditCampanha from './pages/EditCampanha';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/categorias" element={<Categories/>} />
    <Route path="/meus-pedidos" element={<Orders/>} />
    <Route path="/produtos/:id" element={<ProductDetails/>} />
    <Route path="/produtos" element={<Products/>} />
    <Route path="/slides" element={<Slides/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/admin/campanhas/nova" element={<AddCampanha/>}/>
    <Route path="/admin/campanhas/:id/editar" element={<EditCampanha/>}/>
    </Routes>
    </BrowserRouter>
  )
}