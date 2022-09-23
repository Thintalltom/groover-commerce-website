import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import "./Mainbody.css"
const Mainbody = () => {
    const [img, setImg] = useState("https://o.remove.bg/downloads/6dde5ff2-da03-47b4-adc8-12f4f6f5de54/imani-bahati-LxVxPA1LOVM-unsplash-removebg-preview.png")
  return (
    <Container fluid className='fluid'>
     <div className='row'>
       <div className='col'>
         <h1>Nike AF1</h1>
         <p>This has been seen a long time ago <br />
         1990's repping
         </p>
         <div>
           <Button variant="contained" color="success">Add to Cart</Button>
         </div>
       </div>
       <div className='col'>
        <h1>CHECK OUT</h1>
        <h1>THESE</h1>
        <img src={img} />
        <h1>KICKS</h1>
        <p>$29.99</p>
       </div>

     </div>
    </Container>
  )
}

export default Mainbody