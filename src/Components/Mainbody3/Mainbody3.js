import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Mainbody3.css"
import { MainList } from './Mainbody3List';
import { MenList } from './Mainbody3men'


const Mainbody3 = () => {
   
  return (
    <Container>
        <div>
            <h3 className='text-center'>Shop By Category</h3>
        </div>

        <Row> 
           
        { MainList.map ((item, id) => {
                return(
                    <div className='col-sm'>
                    <div className="card mt-3 border-white" style={{ width: '18rem' }} key={id}  >
                        <img   src={item.image} />
                        <div className='card-img-overlay badge text-dark'>
                            <p className="card-text">
                            {item.text}
                            </p>
                        </div>
                        <div className='card-body'>
                    <a className='btn btn-outline-warning'>Quick View</a>
                    </div>
                    </div>
                    </div>
                )
            }) }
           
        </Row>

        <Row>
        { MenList.map ((cate, id) => {
                return(
                    <div className='col pt-3'>
                    <div className="card border-white" style={{ width: '18rem' }} key={id}  >
                        <img   src={cate.image} />
                        <div className='card-img-overlay justify-content-center badge text-dark'>
                            <p className="card-text">
                            {cate.text}
                            </p>
                        </div>
                    <div className='card-body'>
                    <a className='btn btn-outline-warning'>Quick View</a>
                    </div>
                       
                    </div>
                    </div>
                )
            }) }

        </Row>
    </Container>
   
     
   
  )
}

export default Mainbody3