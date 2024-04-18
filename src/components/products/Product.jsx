import React from 'react'
import '../products/Product.css'
import { Button, Card, Row } from 'react-bootstrap';

const Product = (props) => {

  return (
    <>
      <div className='product'>
        <Row xs={1} md={5}>
          {props.filteredProducts.map((product, index) => (
            <Card key={product.id}>
              <div key={product.id}>
                <Card.Body>
                  <Card.Title className='product_name'>{product.name}</Card.Title>  
                  <img className="product-image-webp" variant="top" src={`${product.image}`} alt={`${product.name}`} style={{ width: '90%' }} />
                  <Card.Footer>£{product.price.toFixed(2)}</Card.Footer>
                  <div className='double-buttons'>
                    <Button variant="primary" className="badge" onClick={() => {props.addToCart(product.id)}} style={{ width: '90%' }}>Add to Cart</Button>
                    <Button variant="primary" className="badge" onClick={() => {props.removeFromCart(product.id)}} style={{ width: '90%' }}>Remove</Button>
                  </div>
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