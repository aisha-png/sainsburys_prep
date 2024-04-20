import React, { useState } from 'react';
import '../products/Product.css';
import { Button, Card, Row } from 'react-bootstrap';
import { HeartIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/outline'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Product = (props) => {
  const [ratings, setRatings] = useState({}); 
  const [selectedRatings, setSelectedRatings] = useState({}); 

  const handleStarHover = (productId, starIndex) => {
    setRatings(prevState => ({
      ...prevState,
      [productId]: starIndex + 1 
    }));
  };

  const handleStarClick = (productId, starIndex) => {
    setSelectedRatings(prevState => ({
      ...prevState,
      [productId]: starIndex + 1 
    }));
  };

  const getRating = (productId) => {
    return selectedRatings[productId] || ratings[productId] || 0; 
  };

  const renderTooltip = (props) => (
    <Tooltip {...props}>
      Add to Favorites
    </Tooltip>
  );

  return (
    <>
      <div className='product'>
        <Row xs={1} md={5}>
          {props.filteredProducts.map((product, index) => (
            <div className='outer-card'>
              <Card key={product.id} className="custom-card">
                <div key={product.id} className="card-content">
                  <Card.Body>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <HeartIcon className="icons" style={{ display: 'flex', cursor: 'pointer' }} />
                    </OverlayTrigger>
                    <img 
                      className="product-image-webp" 
                      variant="top" 
                      src={`${product.image}`} 
                      alt={`${product.name}`} 
                      style={{ width: '80%', backgroundColor: '#F06C00', borderColor: '#F06C00' }} 
                    />
                    <Card.Title className='product_name'>
                      <b>
                        {product.name}
                      </b>
                    </Card.Title>
                    <div style={{ display: 'flex', cursor: 'pointer' }}>
                      {[...Array(5)].map((_, index) => (
                        <StarIcon
                          key={index}
                          className="icons"
                          style={{ fill: index < getRating(product.id) ? '#ffe234' : 'none' }} 
                          onMouseEnter={() => handleStarHover(product.id, index)} 
                          onMouseLeave={() => setRatings(prevState => ({ ...prevState, [product.id]: 0 }))} 
                          onClick={() => handleStarClick(product.id, index)}
                        />
                      ))}
                      <p>(0)</p>
                    </div>
                    <Button 
                      variant="primary" 
                      onClick={() => { props.addToCart(product.id) }} 
                      style={{ width: '90%', backgroundColor: '#F06C00', borderColor: '#F06C00' }}>
                        Add
                    </Button>
                    <Card.Footer>
                      <b>
                        £{product.price.toFixed(2)}
                      </b>
                    </Card.Footer>
                  </Card.Body>
                </div>
              </Card>
            </div>
          ))}
        </Row>
      </div>
    </>
  )
}

export default Product;