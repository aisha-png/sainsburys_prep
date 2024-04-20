import React from 'react';
import '../../App.css';
import { Button, Card, Row, Modal } from 'react-bootstrap';
import './Cart.css';

const Cart = (props) => {

  const totalPrice = props.cartItems.reduce((total, item) => total + (item.price.toFixed(2) * item.quantity), 0);

  return (
    <>
    <h2>Cart</h2>
    <h4 >Total = £{totalPrice.toFixed(2)}</h4>
    <Row xs={1} md={1} >
      {props.cartItems.map((item, index) => (
        <>
            <Modal.Body>
              <Card className='card-body'>
                <Card.Title>{item.name} ({item.quantity})</Card.Title>
                {/* <img variant="top" src={`${item.image}`} alt={`${item.name}`} style={{ width: 'auto', height: "auto" }} /> */}
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
    </Row>
    <p>{props.cartItems.length === 0 ? 'Empty Cart!' : <span className="badge">{totalPrice.toFixed(2)}</span>}</p>

    <Modal.Footer>
      <Button className="badge" variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
    </Modal.Footer>
    </>
  )
}

export default Cart