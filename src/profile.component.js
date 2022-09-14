import React from 'react'
import '../src/css/index.css'
import Content from './components/content.component';
import Sidebar from './components/sidebar.component';


function Profile() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
            <Sidebar/>
            <Content/>
        </div>
      </div>
    </>
  );
}

export default Profile;
