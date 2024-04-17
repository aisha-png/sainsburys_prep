import React from 'react'
// import 'Product.css'

const Product = (props) => {

  return (
    <>
        <div className='product'>
            <div key={props.id}>
                <h4>{props.name}</h4>  
                <img src={`../../assets/${props.image}`} alt={`${props.name}`}/>
                <p>{props.price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </>
    
  )
}

export default Product;