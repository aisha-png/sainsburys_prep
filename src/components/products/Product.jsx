import React from 'react'
import '../products/Product.css'
import { Button, Card, Row } from 'react-bootstrap';

const Product = (props) => {

  return (
    <>
        <div className='product'>
          <Row xs={1} md={3} >
            <Card>
              <div key={props.id}>
                <Card.Body>
                  <Card.Title className='product_name'>{props.name}</Card.Title>  
                  <img variant="top"  src={`../../assets/${props.image}`} alt={`${props.name}`}/>
                  <Card.Footer>£{props.price.toFixed(2)}</Card.Footer>
                  <Button variant="primary" onClick={() => {props.onAddToCart(props.id)}}>Add to Cart</Button>
                </Card.Body>
                </div>
            </Card>
          </Row>
        </div>
    </>
    
  )
}

export default Product;