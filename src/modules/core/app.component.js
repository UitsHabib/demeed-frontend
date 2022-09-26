import React from 'react';

import { Routes, Route } from 'react-router-dom'
import { PermissionTable } from '../admin';

function App() {
    return (
        <div>
            <Routes>
              <Route path='/admin/permissions' element={<PermissionTable/>}/>
            </Routes>
        </div>
      );
}
 
export default App;
