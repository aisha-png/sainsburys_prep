import React, { useState } from 'react';
import '../products/Product.css';
import { Button, Card, Row } from 'react-bootstrap';
import { HeartIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/outline'

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

  return (
    <>
      <div className='product'>
        <Row xs={1} md={5}>
          {props.filteredProducts.map((product, index) => (
            <Card key={product.id} className="custom-card">
              <div key={product.id} className="card-content">
                <Card.Body>
                  <HeartIcon className="icons" style={{ display: 'flex', cursor: 'pointer' }} />
                  <Card.Title className='product_name'>{product.name}</Card.Title>
                  <img className="product-image-webp" variant="top" src={`${product.image}`} alt={`${product.name}`} style={{ width: '80%', backgroundColor: '#F06C00', borderColor: '#F06C00' }} />
                  <div style={{ display: 'flex', cursor: 'pointer' }}>
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        className="icons"
                        style={{ fill: index < getRating(product.id) ? '#F06C00' : 'none' }} // Fill the star if its index is less than the selected or temporary rating
                        onMouseEnter={() => handleStarHover(product.id, index)} // Set the temporary rating of the current product on hover
                        onMouseLeave={() => setRatings(prevState => ({ ...prevState, [product.id]: 0 }))} // Reset the temporary rating when mouse leaves
                        onClick={() => handleStarClick(product.id, index)} // Set the selected rating on click
                      />
                    ))}
                  </div>
                  <Button variant="primary" onClick={() => { props.addToCart(product.id) }} style={{ width: '90%', backgroundColor: '#F06C00', borderColor: '#F06C00' }}>Add</Button>
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