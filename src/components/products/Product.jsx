import React from 'react'
import '../products/Product.css'
import { Button, Card, Row } from 'react-bootstrap';

const Product = (props) => {

  return (
    <>
        <div className='product'>
          <Row xs={1} md={4} >
            {props.products.map((product, index) => (
              <Card key={product.id}>
                <div key={product.id}>
                  <Card.Body>
                    <Card.Title className='product_name'>{product.name}</Card.Title>  
                    <img variant="top"  src={`../../assets/${product.image}`} alt={`${product.name}`}/>
                    <Card.Footer>£{product.price.toFixed(2)}</Card.Footer>
                    <Button variant="primary" onClick={() => {props.addToCart(product.id)}}>Add to Cart</Button>
                  </Card.Body>
                </div>
              </Card>
            ))}
          </Row>
        </div>
    </>
    
  )
}

export default Product;