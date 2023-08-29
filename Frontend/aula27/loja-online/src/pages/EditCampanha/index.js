import React from 'react';
import { useParams } from 'react-router-dom';
 
export default function EditCampanha() {
    const {id} = useParams();
   const [nome, setNome] = React.useState('');
   const [descricao, setDescricao] = React.useState('');
   const [imagem, setImagem] = React.useState('');

   React.useEffect(() => { //PREENCHER INPUTS COM AS INFORMAÇÕES NO EDITAR
    fetch('http://localhost:8000/campaigns/'+id)  
    .then(res => res.json())
    .then(dados => {
        setNome(dados.title);
        setDescricao(dados.text);
        setImagem(dados.image);
    })
   }, [id]);

   const alterarNome = (event) => {
       setNome(event.target.value);
   }

   const alterarDescricao = (event) => {
       setDescricao(event.target.value);
   }

   const alterarImagem = (event) => {
       setImagem(event.target.value);
   }

   const enviar = (event) => {  // ATUALIZAR COM AS NOVAS INFORMAÇÕES
       event.preventDefault();

       fetch('http://localhost:8000/campaigns/'+id, {
           method: 'PATCH',
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
           <h1>Editar Campanha</h1>
           <hr />
           
           <form onSubmit={enviar}>
           <label>Titulo</label>
           <input value={nome} onChange={alterarNome} placeholder="Digite aqui"/>
           <br />

           <label>Descrição</label>
           <input value={descricao} onChange={alterarDescricao} placeholder="Digite aqui"/>
           <br />

           <label>Imagem</label>
           <input value={imagem} onChange={alterarImagem} placeholder="Digite aqui"/>
           <br />

           <button>Pronto</button>
           </form>
       </div>
   )
}