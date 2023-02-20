// import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const SingleArrangement = ({a}) => {
//   return (


// <div className='arrangement'>
//         {/* <img className='arrangement-img-top' src={arrangement.url} alt="Arrangement"/> */}
//         <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//         <img className='arrangement-img-top' src={a.url} alt="Arrangement"/>
// {/* 
//             <h3 className='arrangement-name'>{a.name}</h3>
//             <h3 className='arrangement-description'>{a.description}</h3>
//             <h5 className='arrangement-price'>{a.price}</h5> */}
//             </div>
        
//             <div className="card-body">
//     <h5 className="card-title">{a.name}</h5>
//     <p className="card-text">{a.description}</p>
//     <a href="#!" className="btn btn-primary">Add</a>
//     <a href="#!" className="btn btn-primary">Remove</a>

//   </div>

//         <div className='button-section'>
         

//           {/* <input type="number" name="quantity" className='quantity'
//                   min="1" max="5" step="1" defaultValue="1" onChange={handleInput}>
//           </input> */}
//           <button className="arrangement-button" >
//           </button>
//         </div>
       

//     </div>


//     )
// }

// export default SingleArrangement




import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './SingleArrangement.module.css';

const SingleArrangement = ({a}) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleInput = (event) => {
    setQuantity(event.target.value);
  }

  const handleAddToCart = () => {
    axios.post('/api/cart', { arrangement: a, quantity })
      .then(() => navigate('/cart'))
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles['card']}>
    <div className={styles.arrangement}>
      <div className={`${styles['bg-image']} ${styles['hover-overlay']} ${styles['ripple']}`} data-mdb-ripple-color="light">
        <img className={styles['arrangement-img-top']} src={a.url} alt="Arrangement" />
        <h3 className={styles['arrangement-name']}>{a.name}</h3>
        <h3 className={styles['arrangement-description']}>{a.description}</h3>
        <h5 className={styles['arrangement-price']}>{a.price}</h5>
      </div>
      <div className={styles['card-body']}>
        
        <button className={styles['arrangement-button']}>Add</button>
        <button className={styles['arrangement-button']}>Remove</button>
      </div>
      {/* <div className={styles['button-section']}>
        <input type="number" name="quantity" className={styles.quantity} min="1" max="5" step="1" defaultValue="1" onChange={handleInput} />
        <button className={styles['arrangement-button']} onClick={handleAddToCart}>Add to Cart</button>
      </div> */}
    </div>
    </div>
  );
}

export default SingleArrangement;
