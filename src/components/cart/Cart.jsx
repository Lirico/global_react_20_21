import { CartContext } from '@/context/CartContextProvider';
import { useContext } from 'react';


import React from 'react'
import Product from './Product';

const Cart = () => {

    const { products, cart, addToCart } = useContext(CartContext);

    return (
        <>
            <h2>Carrito de Compras</h2>
            <h3>Productos</h3>
            <div className="box grid-responsive">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart} />)
                }
            </div>
            <h3>Carrito</h3>
            <div className="box">
            </div>
            <button>Limpiar Carrito</button>
        </>
    )
}

export default Cart