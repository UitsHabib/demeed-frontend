import React from 'react'
import TableBody from './table-body.component';
import TableHeader from './table-header.component';

function Table(props) {
    const { items, columns } = props;
    return (
       <div className='container mt-5'>
          <table className='table table-bordered table-hover'>
            <TableHeader columns={columns}/>
            <TableBody items={items} columns={columns}/>
         </table>
       </div>
    );
}
 
export default Table;