import Navbar from '../../components/Navbar';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import FeaturedCollections from '../../components/FeaturedCollections';
import FeaturedCarousel from '../../components/FeaturedCarousel';


export default function Home() {
    return(
        <div>
            <Navbar/>

            <Menu/>

            <FeaturedCarousel/>

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