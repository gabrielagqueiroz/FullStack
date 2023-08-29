 import React from 'react';
 
 export default function AddCampanha() {
    const [nome, setNome] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const [imagem, setImagem] = React.useState('');

    const alterarNome = (event) => {
        setNome(event.target.value);
    }

    const alterarDescricao = (event) => {
        setDescricao(event.target.value);
    }

    const alterarImagem = (event) => {
        setImagem(event.target.value);
    }

    const enviar = (event) => {
        event.preventDefault();

        fetch('http://localhost:8000/campaigns', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                title: nome,
                text: descricao,
                image: imagem
            })
        })
    }

    return(
        <div>
            <h1>Nova Campanha</h1>
            <hr />
            
            <form onSubmit={enviar}>
            <label>Titulo</label>
            <input onChange={alterarNome} placeholder="Digite aqui"/>
            <br />

            <label>Descrição</label>
            <input onChange={alterarDescricao} placeholder="Digite aqui"/>
            <br />

            <label>Imagem</label>
            <input onChange={alterarImagem} placeholder="Digite aqui"/>
            <br />

            <button>Pronto</button>
            </form>
        </div>
    )
}