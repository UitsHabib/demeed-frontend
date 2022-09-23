import React from 'react';

import { Routes, Route } from 'react-router-dom'
import { PermissionTable } from '../admin';

function App() {
    return (
        <div>
            <Routes>
              <Route path='/admin/PermissionTable' element={<PermissionTable/>}/>
            </Routes>
        </div>
      );
}
 
export default App;
