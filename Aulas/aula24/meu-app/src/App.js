import "./teste.css";

import Tabela from "./Tabela";


function Lista() {
  let frutas = [
    'Maracuja',
    'Banana',
    'Manga',
    'Morango',
    'Uva',
    'Graviola',
  ]

 return (
  <ul>
    {frutas.map(cada => <li>{cada}</li>)}
  </ul>
 )
}


function App() {
  let nome = "Chiquinho";
let cidade = "Fortaleza";

  return (
    <div>
      Olá mundo

      <hr/>

      <p className="vermelho">Texto qualquer</p>

      <p>Me chamo {nome} e moro em {cidade}</p>

      <Lista/> 
      <Tabela/>

    </div>
  );

}

export default App;
