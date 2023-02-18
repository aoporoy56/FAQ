import React, { useState } from 'react';
import {Card} from 'react-bootstrap';

export default function FAQ() {
    let [show, showHandle] = useState(true);
    let [rotate, rotateHandle] = useState('0deg');
    let showHide = () =>{
        if(show){
            showHandle(false);
            rotateHandle('-90deg');
        }else{
            showHandle(true);
            rotateHandle('0deg');
        }
    }
  return (
    <div>
      <Card style={{border:'0'}}>
            <Card.Body className='active'>
                <div onClick={showHide} className='header d-flex align-items-center justify-content-between'>
                    <Card.Title className='ms-1'>Why do you need an FAQ page?</Card.Title>
                    <div style={{rotate:rotate}}>&#129144;{/*<FaBeer />*/}</div>
                </div>
                {show && 
                <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
                    necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
                    aperiam. Perspiciatis, porro!
                </Card.Text>}
            </Card.Body>
          </Card>
    </div>
  )
}
