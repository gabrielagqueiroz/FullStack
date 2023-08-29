import React from 'react';
import {Divider} from '@mui/material'
import {Link} from 'react-router-dom';

export default function Admin(){
    const [campaigns, setCampaigns] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/campaigns')
        .then(res => res.json())
        .then(dados =>  setCampaigns(dados))
    }, []);
   
    const remove = (id) => {
        if(false === window.confirm('Tem certeza?')) {
            return;
        }

        fetch(`http://localhost:8000/campaigns/${id}`, {
            method: 'DELETE'
        });

        setCampaigns(campaigns.filter(cada => cada.id !== id))
    };

    return(
        <div>
            <h1>Admin</h1>
            <Divider/>

            <Link to="/admin/campanhas/nova">Nova Campanha</Link>

            <table width="100%">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Imagem</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map (cada => {
                        return(
                            <tr>
                            <td>{cada.id}</td>
                            <td>{cada.title}</td>
                            <td>{cada.text}</td>
                            <td> <img src={cada.image} width="100rem" alt="" /></td>
                            <td>
                                <Link to={"/admin/campanhas/"+cada.id+"/editar"}>
                                    <button>Editar</button>
                                </Link>
                                
                                <button onClick={() => remove(cada.id)}>Excluir</button>
                            </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}