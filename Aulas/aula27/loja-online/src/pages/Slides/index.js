import React from 'react';

export default function Slides(){
    const [atual, setAtual] = React.useState(0);


    const frases = [
        'Frase 0',
        'Frase 1',
        'Frase 2',
        'Frase 3',
    ];


    const add = () => {
        if (atual === frases.length - 1) {  //validação para não passar da quantidade do array
           setAtual(0)
           return
        }

        setAtual(atual + 1); //click para passar +1
    }

    const remove = () => {
        if (atual === 0) {   //validação para não diminuir da quantidade do array
            setAtual(frases.length - 1)
            return
         }

        setAtual(atual - 1);//click para voltar 1
    }

   

    return(
        <div>
           {frases[atual]}
           <br />

           <button onClick={remove}>Voltar</button>
           <button onClick={add}>Avançar</button>
        </div>
    )
}