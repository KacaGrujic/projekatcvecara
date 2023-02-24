import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';

function FlowerTable({ }) {
  // const tableRef = useRef(null);

  // const table = $(tableRef.current).DataTable({
  //   bDestroy: true,
  //   columnDefs: [{
  //     defaultContent: '-',
  //     targets: '_all'
  //   }],
  //   columns: [
  //     { data: 'arrangement_id' },
  //     { data: 'name' },
  //     { data: 'description' },
  //     { data: 'quantity' },
  //     { data: 'price' },
  //     { data: 'url' },
  //     { data: 'category_id' },
  //     { data: 'flower_id' },
  //     {
  //       data: null,
  //       defaultContent: '<button class="btnEdit btn btn-primary">edit</button> <button class="btnDelete btn btn-danger">delete</button>',
  //       targets: -1
  //     }
  //   ],
  //   data: data
  // });

 

  // useEffect(() => {
  //   table.clear().rows.add(data).draw();
  // }, [data, table]);

  return (
    <>
      <h1>Aranzmani</h1>
      <table 
      //ref={tableRef}
       className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Id</th>
            <th>Naziv</th>
            <th>Opis</th>
            <th>Kolicina</th>
            <th>Cena</th>
            <th>Slika</th>
            <th>Kategorija</th>
            <th>Cvet</th>
            <th>Odaberi</th>
          </tr>
        </thead>
      </table>


      {/* <table className="table align-middle mb-0 bg-white">
    
    <thead className="bg-light">
      <tr>
        
        <th>{data.arrangement_id}</th>
        <th>{data.name}</th>
        <th>{data.description}</th>
        <th>{data.quantity}</th>
        <th>{data.price}</th>
        <th>{data.url}</th>
        <th>{data.category_id}</th>
        <th>{data.flower_id}</th>
        <th>Odaberi</th>
      </tr>
    </thead>
  </table> */}



    </>
  );
}

export default FlowerTable;
