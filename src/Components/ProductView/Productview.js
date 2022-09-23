import React, { useState, useEffect } from 'react'
import './productview.css'
import { commerce }  from '../../lib/commerce';


const Productview = ({ onAddToCart }) => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        const {name, price, image, quantity, description} = response;
        setProduct({
            id, name, quantity, description, src:image.url, price: price.formatted_with_symbol,
        }) 
    };
    useEffect( () => {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);
    }, []);
    const handleQuantity= (param) => {
        if(param === "reduce" && quantity > 1)
        {
            setQuantity(quantity - 1)
        }
        if(param === "increase" && quantity < 10)
        {
            setQuantity(quantity + 1)
        }
    }

  return (
    <div className='container pt-5'>
        <div className="d-flex gap-5">
            <div>
            <img src={product.src}  className='productviewimg' />
            </div>
            <div className='container space'>
            <h3 className='text-dark'>{product.name}</h3>
            <p>{product.price}</p>
            <p dangerouslySetInnerHTML={{ __html: product.description}} />
            <div className='container d-flex p-3'>
                <button className='btn btn-outline-success' onClick={() => {handleQuantity("increase");}}> +</button>
                <button className='btn'>{quantity}</button>
                <button className='btn btn-outline-danger' onClick={() => {handleQuantity("reduce");}}> - </button>
            </div>
            <button className='btn btn-primary' onClick={() => {onAddToCart(product.id, quantity);}}>Add to cart </button>
            </div>
            
      
        </div>
    </div>
  )
}

export default Productview