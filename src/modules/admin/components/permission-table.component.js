import React, { useEffect, useState } from 'react'
import Table from '../../core/components/table.component'
import fetchPermissions from '../service/fetch_permissions'
import Action from '../../core/components/action.component'

function PermissionTable(props) {
    const [permissions, setPermissions] = useState([]);

    const columns = [
        {label:"# ID", path:"id", content:(permission, path) => <>{permission[path]}</> },
        {label:"Name", path:"name", content:(permission, path) => <>{permission[path]}</> },
        {label:"Description", path:"description", content:(permission, path) => <>{permission[path]}</> },
        {label:"Action", content:() => <>{[<Action/>]}</> },
    ];
    
    useEffect(() => {
        const data = fetchPermissions();
        const PermissionTable = data.permissions;
        setPermissions(PermissionTable);
        }, []);

    return (
        <Table
            items={permissions}
            columns={columns}    
        />
    );
}
 
export default PermissionTable;


// // import React, { Component } from 'react';
// import React, {  useState } from 'react';

// // import Table from './common/table.component';
// import Table from '../../core/components/table.component';

// function PermissionTable(props) {
//     const [permissions, setPermissions] = useState(
//         [
//             {
//               action: 'Lorem Ipsum',
//               permissionBtn: 10,
//             },
//             {
//                 action: 'Lorem Ipsum',
//                 permissionBtn: 11,
//             }
//         ]
//     );
//     const columns = [
//         {label:"ID", path:"id", content:(item, path) => <td>{item[path]}</td> },
//         {label:"NAME", path:"name", content:(item, path) => <td>{item[path]}</td> },
//         {label:"DESCRIPTION", path:"description", content:(item, path) => <td>{item[path]}</td> },
//         {label:"ACTION", path:"action", content:(item, path) => <td>{item[path]}</td> },
//     ];
//     return (
//         <Table
//             items={permissions}
//             columns={columns}    
//         />
//     );
// }
 
// export default PermissionTable;


// // class PermissionTable extends Component {
// //     state = {  } 
// //     render() { 
// //         return (
// //             <div className='container'>
// //                 <h1 className='mt-3'>Permission Table</h1>
// //                 <div className='row'>
// //                     <div className='col-8'>
// //                         <table className='table table-bordered table-hover'>
// //                             <thead className='table-dark'>
// //                                 <tr>
// //                                 <th scope="col">ACTION</th>
// //                                 <th scope="col">PERMISSION</th>
// //                                 </tr>
// //                             </thead>
// //                             <tbody>
// //                                 <tr>
// //                                     <td>Lorem Ipsum</td>
// //                                     <td>
// //                                         <div class="form-check form-switch">
// //                                             <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
// //                                         </div>
// //                                     </td>
// //                                 </tr>
// //                                 <tr>
// //                                     <td>Lorem Ipsum</td>
// //                                     <td>
// //                                         <div class="form-check form-switch">
// //                                             <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
// //                                         </div>
// //                                     </td>
// //                                 </tr>
// //                                 <tr>
// //                                     <td>Lorem Ipsum</td>
// //                                     <td>
// //                                         <div class="form-check form-switch">
// //                                             <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
// //                                         </div>
// //                                     </td>
// //                                 </tr>
// //                                 <tr>
// //                                     <td>Lorem Ipsum</td>
// //                                     <td>
// //                                         <div class="form-check form-switch">
// //                                             <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
// //                                         </div>
// //                                     </td>
// //                                 </tr>
// //                                 <tr>
// //                                     <td col>Lorem Ipsum</td>
// //                                     <td>
// //                                         <div class="form-check form-switch">
// //                                             <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
// //                                         </div>
// //                                     </td>
// //                                 </tr>
// //                             </tbody>
// //                         </table>
// //                     </div>
// //                 </div>
// //             </div>
// //         );
// //     }
// // }
 
// // export default PermissionTable;