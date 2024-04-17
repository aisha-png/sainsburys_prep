import React from 'react'
import { Button, Card, Image, Row, Modal } from 'react-bootstrap'

const Cart = (props) => {

  const totalPrice = props.cartItems.reduce((total, item) => total + (item.price.toFixed(2) * item.quantity), 0);

  return (
    <>
    <h3>Cart</h3>
    <h4 >Total = £{totalPrice.toFixed(2)}</h4>
    <Row xs={1} md={1} >
      {props.cartItems.map((item, index) => (
        <>
            <Modal.Body>
              <Card>
                <Card.Title>{item.name}</Card.Title>
                <img variant="top"  src={`../../assets/${item.image}`} alt={`${item.name}`}/>
                <Card.Text>£{item.price.toFixed(2)} ({item.quantity}) </Card.Text>
                <Button variant="primary" onClick={() => {props.addToCart(item.id)}}>Add to Cart</Button>
                <Button onClick={() => {props.removeFromCart(item.id)}}>Remove Item</Button>
                <Button onClick={() => {props.deleteFromCart(item.id)}}>Delete</Button>
              </Card>
            </Modal.Body>
        </>
      ))} 
    </Row>
    <p>{props.cartItems.length === 0 ? 'Empty Cart!' : <span className="badge">{totalPrice.toFixed(2)}</span>}</p>

    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
    </Modal.Footer>
    </>
  )
}

export default Cart