import {Link} from "react-router-dom"
import "./styles.css"

export default function Menu() {
    return (
        <nav className="Nav">
          <Link className="Nav" to="/cadastro">Cadastro</Link>
          <Link className="Nav" to="/listar">Listar</Link>
          <Link className="Nav" to="/perfil">Perfil</Link>
          <Link className="Nav" to="/produtos">Produtos</Link>
          <Link className="Nav" to="/produto">Produto</Link>
        </nav>
    )
}