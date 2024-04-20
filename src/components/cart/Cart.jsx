import React from 'react';
import '../../App.css';
import { Button, Card, Row, Modal } from 'react-bootstrap';
import './Cart.css';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Cart = (props) => {

  const totalPrice = props.cartItems.reduce((total, item) => total + (item.price.toFixed(2) * item.quantity), 0);

  return (
    <div className='modal-cart'>
      <h2 style={{color: '#F06C00'}}><b>Cart</b></h2>
      <div className="cart-modal-body"> {/* Wrapper div with fixed height */}
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}> {/* Set max height and enable overflow scrolling */}
          {props.cartItems.map((item, index) => (
            <>
                <Modal.Body className='outer-cart-card'>
                  <Card className='card-body'>
                    <Card.Title>{item.name} ({item.quantity})</Card.Title>
                    {/* <img variant="top" src={`${item.image}`} alt={`${item.name}`} style={{ width: '90px', height: "90px" }} /> */}
                    <Card.Footer>£{item.price.toFixed(2)}</Card.Footer>
                    <div className='triple-buttons'>
                      <Button className="badge" variant="primary" onClick={() => {props.addToCart(item.id)}} style={{ backgroundColor: '#F06C00', borderColor: '#F06C00' }}>Add more</Button>
                      <Button className="badge" onClick={() => {props.removeOneFromCart(item.id)}} style={{ backgroundColor: '#F06C00', borderColor: '#F06C00' }}>Remove 1 Item</Button>
                      <Button className="badge" onClick={() => {props.deleteFromCart(item.id)}} style={{ backgroundColor: '#F06C00', borderColor: '#F06C00' }}>Remove All</Button>
                    </div>
                  </Card>
                </Modal.Body>
            </>
          ))} 
        </div>
      </div>
      <p>{props.cartItems.length === 0 ? 'Empty Cart!' : <span className="badge">{totalPrice.toFixed(2)}</span>}</p>

      <Modal.Footer>
        <div className='cart-footer'>
          <h4 >Total = £{totalPrice.toFixed(2)}</h4>
          <XMarkIcon className='icons' onClick={props.handleClose} style={{cursor: 'pointer'}}/>
        </div>
      </Modal.Footer>
    </div>
  )
}

export default Cart