import React from 'react';

export default function Formulario(){
  const [cep, setCep] = React.useState('');
  const [localidade, setLocalidade] = React.useState('');
  const [logradouro, setLogradouro] = React.useState('');
  const inputLogradouro = React.createRef();
  const inputNumero = React.createRef();
  

  const alterarCep = (event) => {
    if (event.target.value === '88888888'){
    alert('CEP INVALIDO');
    }

    if(event.target.value.length === 8) {
      fetch(`https://viacep.com.br/ws/${event.target.value}/json`)
      .then(res => res.json())
      .then(endereco => {
        if(endereco.erro === true){
          inputLogradouro.current.focus();
          alert('erro');
          return;
        }
        setLogradouro(endereco.logradouro);
        setLocalidade(endereco.localidade)
        inputNumero.current.focus();
      })
    }
  };

  return(
    <div>
      <form>
        <input onChange={alterarCep} placeholder="CEP"/>

        <input value={logradouro} ref={inputLogradouro} placeholder="Logradouro" />

        <input value={localidade} placeholder="Cidade" />

        <input ref={inputNumero} placeholder="Numero" />

        <button>Enviar</button>
      </form>
    </div>
  )
}