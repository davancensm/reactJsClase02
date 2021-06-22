import React, {useState} from 'react';

function ItemCount(stock, onAdd, initial){
    const [count, setCount] = useState(initial);

    return(
    <div>    
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={onAdd}>Agregar al carrito.</button>
    </div>);
}

export default ItemCount;