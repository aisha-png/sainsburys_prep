import React from 'react';
import '../products/Product.css';
import { Button, Card, Row } from 'react-bootstrap';
import { HeartIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/outline'

const Product = (props) => {

  return (
    <>
      <div className='product'>
        <Row xs={1} md={5}>
          {props.filteredProducts.map((product, index) => (
            <Card key={product.id} className="custom-card">
              <div key={product.id} className="card-content">
                <Card.Body>
                  <HeartIcon className="icons" style={{display: 'flex', cursor: 'pointer'}}/>
                  <Card.Title className='product_name'>{product.name}</Card.Title>  
                  <img className="product-image-webp" variant="top" src={`${product.image}`} alt={`${product.name}`} style={{ width: '80%', backgroundColor: '#F06C00', borderColor: '#F06C00'  }} />
                  <div style={{display: 'flex', cursor: 'pointer'}}>
                    <StarIcon className="icons" />
                    <StarIcon className="icons" />
                    <StarIcon className="icons" />
                    <StarIcon className="icons" />
                    <StarIcon className="icons" />
                  </div>
                    <Button variant="primary" onClick={() => {props.addToCart(product.id)}} style={{ width: '90%', backgroundColor: '#F06C00', borderColor: '#F06C00'  }}>Add</Button>
                  <Card.Footer><b>£{product.price.toFixed(2)}</b></Card.Footer>
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