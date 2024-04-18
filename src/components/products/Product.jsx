import React from 'react'
import '../products/Product.css'
import { Button, Card, Row } from 'react-bootstrap';

const Product = (props) => {

  return (
    <>
        <div className='product'>
          <Row xs={1} md={5} >
            {props.filteredProducts.map((product, index) => (
              <Card key={product.id}>
                <div key={product.id}>
                  <Card.Body>
                    <Card.Title className='product_name'>{product.name}</Card.Title>  
                    <img variant="top"  src={`${product.image}`} alt={`${product.name}`} style={{ width: 'auto', height: "auto" }}/>
                    <Card.Footer>£{product.price.toFixed(2)}</Card.Footer>
                    <Button variant="primary" className="badge" onClick={() => {props.addToCart(product.id)}}>Add to Cart</Button>
                    <Button variant="primary" className="badge" onClick={() => {props.removeFromCart(product.id)}}>Remove</Button>
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