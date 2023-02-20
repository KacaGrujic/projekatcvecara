import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';

function FlowerTable({ data, setData, showArrangement, arrangement, setArrangement }) {
  const tableRef = useRef(null);

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      bDestroy: true,
      columnDefs: [{
        defaultContent: '-',
        targets: '_all'
      }],
     
      data: data,
      columns: [
        { data: 'id' },
        { data: 'naziv' },
        { data: 'opis' },
        { data: 'kolicina' },
        { data: 'cena' },
        { data: 'url' },
        { data: 'categoryid' },
        { data: 'flowerid' },
        {
          data: null,
          defaultContent: '<button class="btnEdit btn btn-primary">edit</button> <button class="btnDelete btn btn-danger">delete</button>',
          targets: -1
        }
      ]
    });

  
  }, [data]);

  return (
    <>
      <h1>Aranzmani</h1>
      <table ref={tableRef} className="table align-middle mb-0 bg-white">
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
    </>
  );
}

export default FlowerTable;
