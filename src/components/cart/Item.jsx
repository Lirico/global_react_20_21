



import React from 'react'

const Item = ({item, removeFromCart}) => {

    const {name, price, id, quantity} = item;

    return (
        <div className="cart-item">
            <h4>{name}</h4>
            <h5>${price} x {quantity} = {price * quantity}</h5>
            <button onClick={() => removeFromCart(id)}>Eliminar uno</button>
            <button onClick={() => removeFromCart(id, true)}>Eliminar todos</button>
        </div>
    )
}

export default Item