import React from 'react'
import { Button, Card, Image, Row } from 'react-bootstrap'

const Cart = (props) => {

  const totalPrice = props.cartItems.reduce((total, item) => total + (item.price.toFixed(2) * item.quantity), 0);

  return (
    <>
    <h4>Cart</h4>
    <Row xs={1} md={2} >
      {props.cartItems.map((item, index) => (
        <>
          <Card key={item.id}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <img variant="top"  src={`../../assets/${item.image}`} alt={`${item.name}`}/>
              <Card.Text> x {item.quantity}</Card.Text>
              <Card.Text>£{item.price.toFixed(2)} </Card.Text>
              <Button onClick={() => {props.removeFromCart(item.id)}}>Remove Item</Button>
            </Card.Body>
          </Card>
        </>
      ))} 
    </Row>
    <h4 >Total = £{totalPrice.toFixed(2)}</h4>
    </>
  )
}

export default Cart