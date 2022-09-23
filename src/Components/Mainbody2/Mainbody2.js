import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Mainbody2.css"
function Mainbody2() {
  const [logo1, setLogo1] = useState("https://o.remove.bg/downloads/71d74d5c-ff57-4836-bccf-bd3bd8e86949/pngfind.com-adidas-logo-png-590837-removebg-preview.png")
  const [logo2, setLogo2] = useState ("https://o.remove.bg/downloads/0630f3c7-89de-4b5a-82d4-be03e990ea86/pngfind.com-gold-swoosh-png-6859359-removebg-preview.png")
  const [logo3, setLogo3] = useState ("https://o.remove.bg/downloads/34313a69-1b01-4e59-b97a-ac880927126b/pngfind.com-jumpman-png-5497956-removebg-preview.png")
  const [logo4, setLogo4] = useState ("https://o.remove.bg/downloads/2e27c69d-b1c9-4850-b8a2-466ef9c63d5c/pngfind.com-adidas-png-1814001-removebg-preview.png")

  return (
    <div>
        <Container>
            <div>
                <h1 className='text-center p-2 some'>Some of our trusted brands</h1>
            </div>
        </Container>
        <Container className='content'>
          <Row className='jastify-content-center text-center content2'>
            <Col>
              <img src= {logo1} alt="" className='logos' />
            </Col>
            <Col>
            <img src= {logo2} alt=""  className='logos'  />
            </Col>
            <Col>
            <img src= {logo3} alt=""  className='logos'  />
            </Col>
            <Col>
            <img src= {logo4} alt=""  className='logos'  />
            </Col>
            
          </Row>
        </Container>
    </div>
  )
}

export default Mainbody2