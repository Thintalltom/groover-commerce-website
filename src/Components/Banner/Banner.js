import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Banner.css"

const Banner = () => {
    const [vans, setVans] = useState("https://o.remove.bg/downloads/f3992a32-e4a2-429d-845f-b3ae5beda387/paul-gaudriault-a-QH9MAAVNI-unsplash__1_-removebg-preview.png")
  return (
    <Container className='bigholder'>
       <Row className="bigrow">
           <Col className='attire'>
           <p className='text-white'>20% OFF</p>
           <h1 className='text-white'>FINE <br /> ATTIRES</h1>
           <p className='text-white'>16 Sept to 7 Nov</p>
           </Col>

           <Col className='vans'>
           <img src={vans} className="vansimg"  />
           </Col>

           <Col className='text-white'>
           <p>Nike Vans off the wall</p>
           <h1>Summer Sale</h1>
           <p>company that grows larger in nigeria</p>
           <button className='btn btn-danger text-white'> Shop Now</button>
           </Col>
       </Row>
    </Container>
  )
}

export default Banner