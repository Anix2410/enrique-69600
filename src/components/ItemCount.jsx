import React, {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
 const [count, setCount]=useState(1)
    
const add = () => {
    if(count < stock){
        setCount( count + 1 )
    }
}

const substract = () => {
    if(count > 1){  
        setCount(count - 1)
    }
}

const comprar = () => {
    onAdd(count)
}


  return (
   <div>
    {
        stock === 0 ? <p>Lo sentimos no hay stock! Estará disponible en breve.</p>
        : <div>
        <div>
        <button className='btn btn-danger' onClick={substract}>-</button>
        <span className='btn'>{count}</span>
        <button onClick={add} className='btn btn-success'>+</button>
    </div>
    <button className='btn btn-primary' onClick={()=>onAdd(count)}>Agregar al carrito</button>
    </div>
    }
   </div>
  )
}

export default ItemCount