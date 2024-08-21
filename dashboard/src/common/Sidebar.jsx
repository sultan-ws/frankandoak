import React from 'react'
import { AiOutlineDashboard } from 'react-icons/ai'
import { CiSettings } from 'react-icons/ci'
import { MdOutlineColorLens } from 'react-icons/md'
import Accordion from 'react-bootstrap/Accordion';

const Sidebar = (props) => {
 
  return (
    <div className='sidebar p-2'>
        <h3 className='text-center fw-normal p-3'>Frank and Oak</h3>
        
        <div className='d-flex align-items-center'>
            <ul className='icon'>
                <li><AiOutlineDashboard /></li>
                <li><MdOutlineColorLens /></li>
                <li><CiSettings /></li>
                <li><CiSettings /></li>
            </ul>
            <ul className='item'>
                 <li>Dashboard</li>
                 <li>Colors</li>
                 <li>Profile</li>
                 <li>Home</li>
            </ul> 
         </div>
         <div className='d-flex'>
            <ul className='icon'>
                <li><AiOutlineDashboard /></li>
                
            </ul>
            <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
            </div>
        
    </div>
  )
}
 
export default Sidebar