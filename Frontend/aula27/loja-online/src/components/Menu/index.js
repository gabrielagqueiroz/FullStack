import {Link, useLocation} from 'react-router-dom';

import './styles.css'

export default function Menu() {
    const url = useLocation()

    const isActive = (path) => {
        return (path === url.pathname) ? "active" : '';
    }

    return(
        <div className="menu">
            <Link className={isActive('/')} to="/">Inicio</Link>
            <Link className={isActive('/produtos')} to="/produtos">Produtos</Link>
            <Link className={url.pathname === "/categorias" && "active"} to="/categorias">Categorias</Link>
            <Link className={url.pathname === "/meus-pedidos" && "active"} to="/meus-pedidos">Pedidos</Link>
        </div>
    )
}