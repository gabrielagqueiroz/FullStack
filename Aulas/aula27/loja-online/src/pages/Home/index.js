import Navbar from '../../components/Navbar';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import FeaturedCollections from '../../components/FeaturedCollections';


export default function Home() {
    return(
        <div>
            <Navbar/>

            <Menu/>

            <div>
                Carrosel
            </div>

            <FeaturedCollections/>

            <div>
                Coleções em Destaque 2
            </div>

            <div>
                Produtos
            </div>
            
            <div>
                Oferta Especial
            </div>

            <Footer/>
        </div>
    )
}