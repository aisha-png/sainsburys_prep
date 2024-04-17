import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Cart = (props) => {
  return (
    <>
    <h4>Cart</h4>
    <Card>
      <Card.Body>
        <Card.Title>temp</Card.Title>
        <Button onClick={() => {props.removeFromCart(item.id)}}></Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Cart