import React from 'react';
import {CarrinhoContext} from '../App'

const Item = (props) => {
    const add = React.useContext(CarrinhoContext)

    return(
      <div className="produto">
      {props.name}
      <button onClick={add}>+</button>
    </div>
    )
}

export default Item;