function Button(props) {
    return (
        <button className={"btn btn-" + props.cor}>{props.children}</button>
    )
}

export default function Perfil() {
    return (
        <div>
            Pagina de Perfil

        <br />
         
        <Button cor="primary" texto="cadastrar">Cadastrar</Button>
        <Button cor="danger" texto="Listar">Listar</Button>
        <Button cor="success" texto="Excluir">Excluir</Button>
        </div>

    )
}