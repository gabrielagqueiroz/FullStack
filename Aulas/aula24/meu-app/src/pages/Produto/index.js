import {useParams} from "react-router-dom";
import caldo5 from "."

export default function Produto() {
    let params = useParams();
    return (
        <section>
            Pagina do produto {params.id}

            <br />

            <img src="{caldo}" width="40%" />

            <div>
                <img src="{caldo1}" width="100px" />
                <img src="{caldo2}" width="100px" />
                <img src="{caldo3}" width="100px" />
                <img src="{caldo4}" width="100px" />
                <img src="{caldo5}" width="100px" />
            </div>
        </section>
        
    )
}