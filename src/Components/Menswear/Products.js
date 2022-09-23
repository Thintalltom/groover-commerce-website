import React, {useState} from 'react'
import './Menswear.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { MainList } from "./MenswearList"
import Col from 'react-bootstrap/Col';
import {GiShoppingCart} from "react-icons/gi"
import {FiShoppingCart} from "react-icons/fi"
import { Link } from "react-router-dom"
const Products = ({ categories, onAddToCart }) => {
    

  return (
  
    <Container className='pt-5'>
       
             <Row>
                 {categories.map((category) => {
                     return(
                    <div className='row'>
                    <div className='shadow-sm p-3'>
                    <h5 className='text-muted'>{category.name}</h5>
                    </div>
                        
                        {category.productsData.map ((product) => (
                            <div className='col pt-3'>
                            <div className="card border-white justify-content-center card-hover" style={{ width: '18rem' }} key={product.id} >
                                <Link to ={`product-view/${product.id}`} className="text-decoration-none">
                                <img   src={product.image?.url} className="theimgss" alt="info"/>
                                <p className="card-text text-decoration-none">
                                    {product.name}
                                    </p>
                                <p className='view'>View</p>
                                    </Link>
                                <div className='card-body justify-content-center text-dark'>
                                    <p dangerouslySetInnerHTML={{ __html: product.description}} className="text-muted"/>
                                    <p>{product.price.formatted_with_symbol}
                                    <span>
                                    <button className='btn btn-outline-danger ms-5' onClick ={() => onAddToCart(product.id, 1)}>
                                      Cart
                                    </button>
                                    </span>
                                    </p>
                           
                                </div>                       
                            </div>
                            </div>
                    
                        )) }
        
                    </div>
                     )
                 })}
  
        </Row>
         </Container>
  )

}

export default Products