import imagem from "./404.svg"

export default function NotFound(){
    return (
        <>
         <p>Pagina não encontrada</p>

         <img src={imagem} width="50%" />
        </>
    )
}