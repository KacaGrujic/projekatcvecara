import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SingleArrangement = () => {
  return (


<div className='arrangement'>
        <img className='arrangement-img-top' src={arrangement.image} alt="Arrangement"/>
        <div className='arrangement-body'>
            <h3 className='arrangement-name'>{arrangement.name}</h3>
            <h3 className='arrangement-description'>{arrangement.description}</h3>

            <h5 className='arrangement-price'>{amount + " " + currency}</h5>
          
        </div>
        <div className='button-section'>
         

          <input type="number" name="quantity" className='quantity'
                  min="1" max="5" step="1" defaultValue="1" onChange={handleInput}>
          </input>
          <button className="arrangement-button" >
          </button>
        </div>
       

    </div>


    )
}

export default SingleArrangement