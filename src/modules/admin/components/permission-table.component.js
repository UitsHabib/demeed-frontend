import React, { Component } from 'react'

class PermissionTable extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
                <h1 className='mt-3'>Permission Table</h1>
                <div className='row'>
                    <div className='col-8'>
                        <table className='table table-bordered table-hover'>
                            <thead className='table-dark'>
                                <tr>
                                <th scope="col">ACTION</th>
                                <th scope="col">PERMISSION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lorem Ipsum</td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lorem Ipsum</td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lorem Ipsum</td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lorem Ipsum</td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td col>Lorem Ipsum</td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PermissionTable;