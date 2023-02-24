import React from 'react'
import FlowerTable from './FlowerTable';
import { useState, useEffect } from 'react';
import axios from 'axios'
import FlowerData from './FlowerData';


const AdminHomePage = () => {

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
<FlowerTable/>
{arrangements == null ? <></> : arrangements.map((data) => <FlowerData data={data} key={data.arrangement_id}/>

)}


    </div>

    )
}

export default AdminHomePage