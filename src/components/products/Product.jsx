import React from 'react'
import '../products/Product.css'
import { Button, Card } from 'react-bootstrap';

const Product = (props) => {

  return (
    <>
        <div className='product'>
            <div key={props.id}>
                <Card.Title className='product_name'>{props.name}</Card.Title>  
                <img variant="top"  src={`../../assets/${props.image}`} alt={`${props.name}`}/>
                <Card.Text>£{props.price.toFixed(2)}</Card.Text>
                <Button variant="primary" onClick={() => {props.onAddToCart(props.id)}}>Add to Cart</Button>
            </div>
        </div>
    </>
    
  )
}

export default Product;