import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../common/Sidebar';
import { FiAlignCenter } from 'react-icons/fi';


const Dashboard = () => {
  let [menubar, setMenubar]=useState(0)
  console.log(menubar)
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="p-0">
          <div className='d-flex dinner'>
              <div className='menu border border-warning' style={{position:`${menubar ? 'fixed' : 'static'}`,left:`${menubar ? '-100%' : '0'}`,transition:`${menubar ? '0.5s ease-in-out' : ''}`}}>
                 <Sidebar boolmenu={menubar} />
              </div>
              <div className='menuarea border border-success'>
                  <span onClick={()=>setMenubar(menubar?0:1)}><FiAlignCenter /></span>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard