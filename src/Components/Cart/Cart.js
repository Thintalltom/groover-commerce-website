import React from 'react'
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'
const Cart = ( {cart,
    handleUpdateCartQty,
       handleRemoveFromCart,
       handleEmptyCart
} ) => {
    
const EmptyCart =() =>
(

<Link to ="/">
<h5>You have no Item in your shopping cart add some </h5>
</Link>
);


const FilledCart = () =>
(
    <>
<div className='container row'>
        {cart.line_items.map((item) => (
            <div key={item.id} className="col">
                <div className='card border-white' style={{ width: '12rem' }}>
                <img src={item.image?.url} className="card-img" />
                    <div className='card-body'>
                    <h5>{item.name}</h5>
                    <p>{item.price.formatted_with_symbol}</p>
                <div className=''>

                <button className='btn btn-outline-success'
                onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}> + </button>
                    <span className='p-2'>{item.quantity}</span>
                    <button className='btn btn-outline-danger'
                 onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
                    > - </button>
                    </div>
                </div>
                <button className='btn btn-danger'
                onClick= {() =>handleRemoveFromCart(item.id)  }
                >
                    Remove
                    </button>
                   
            </div>
    
</div>    
        ))}
   
    <div className='container'>
        <h4>Subtotal: { cart.subtotal.formatted_with_symbol }</h4>
        <div>
        <button className='btn btn-danger me-5' onClick={handleEmptyCart}>Empty Cart </button>
       <Link to ="/checkout">
        <button className='btn btn-primary'>Checkout </button>
        </Link>
    </div>
    </div>
    
</div>
</>

);
if(!cart.line_items) return "Loading..."
return (
    <div className='container'>
        <h3 className='text-dark'> Your shopping cart </h3>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </div>
  )
}

export default Cart