import React from 'react'
import {BsPlusLg, BsDashLg} from "react-icons/bs"

function SingleFlower({product,onAdd,onRemove}) {
  return (
    <div className="card">

    <div className="card-header" >
         <img className='card-img-top'  src ={product.image}   /> 
    </div>
    <div className="card-body">


        <h4 className = "naslovKartice">  {product.name}   </h4>
        <hr />
        <h6 className="opisProizvoda"> 

        <br /><br />  <b> Description:</b>   {product.description} 
        <br /><br />  <b>  Category: </b> {product.category.name}

        <br /><br /> <b>  Price:</b> {product.price} RSD 
         </h6>

         <button
                  className="btn"
                  onClick={() => onAdd( product.id)}
                >
                <BsPlusLg />
              </button>
              <button 
                className="btn"
                onClick={() => onRemove( product.id)}>
                <BsDashLg />
            </button>

    </div> 
</div>
  )
}

export default SingleFlower