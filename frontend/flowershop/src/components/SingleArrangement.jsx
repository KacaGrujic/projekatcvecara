
// import React from 'react'
// import { ImPlus, ImMinus } from "react-icons/im";

// const SingleArrangement = ({a, onAdd, onRemove}) => {
//     const design = { margin: 15, borderStyle: "double" };
    
  
//   return (
//     <div className="card" style={design}>
//       <img className="card-img-top" src={a.url} alt="Arrangement" width="200px" />
//       <div className="card-body">
//         <h3 className="card-title">{a.name}</h3>
//         {/* <p className="card-text">
//           {a.description}   
//         </p> */}
//         <h3 className="card-title">{a.description}</h3>
//         <div className='card-btn-wrapper'>
//           <div className="btn" onClick={() => onAdd(a.arrangement_id)}><ImPlus /></div>
//           <div className="btn" onClick={() => onRemove(a.arrangement_id)}><ImMinus /></div>
//           </div>
//       </div>
//     </div>
//   );

  
// }

// export default SingleArrangement








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
import '../style/singlearr.css';
import { ImPlus, ImMinus } from "react-icons/im";

const SingleArrangement = ({a, onAdd, onRemove}) => {
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

    const design = { margin: 15, borderStyle: "double" };
    
  
  return (
    <div className="card" >
      <img className="card-img-top" src={a.url} alt="Arrangement" width="200px" />
      <div className="card-body">
        <h2 className="card-title">{a.name}</h2>
      
        <h3 className="card-desc">{a.description}</h3>
        <div className='card-btn-wrapper'>
        
      <div className="btn" onClick={() => onAdd(a.arrangement_id)}><ImPlus /></div>
        <div className="btn" onClick={() => onRemove(a.arrangement_id)}><ImMinus /></div>
      </div>
     
    </div>
    </div>
  );
}

export default SingleArrangement;
