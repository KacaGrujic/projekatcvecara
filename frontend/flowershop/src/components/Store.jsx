import React from 'react'
import SingleArrangement from './SingleArrangement'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Store = () => {
    const [arrangements, setArrangement] = useState();
    useEffect(() => {
        if(arrangements == null) {
            axios.get("api/arrangements").then((res) => {
                console.log(res.data);
                setArrangement(res.data.arrangements);
            });
        }
    }, [arrangements]);

  return (
 <div>
    <h3>Aranzmani</h3>
    {arrangements == null ? <></> : arrangements.map((a) => <SingleArrangement a={a} key={a.arrangement_id}/>)}

 </div>



    );
};

export default Store