import React from 'react'

const Product = (props) => {

  return (
    <>
        <div>
            <div key={props.id}>
                <h4>{props.name}</h4>  
                <img src={props.image}/>
                <p>{props.price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </>
    
  )
}

export default Product;