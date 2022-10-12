import React from 'react'
import("../../../../style/admin-home-page.css");

function Dashboard(props) {

    return (

        <div className='container px-4 py-5' >
            <nav className="pb-2 border-bottom custom-breadcrumb" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/admin/homepage">Admin</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Permission</li>
                    <li className="breadcrumb-item active" aria-current="page">Create</li>
                </ol>
            </nav>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 ">

                <div className="col d-flex align-items-start ">
                    <div className="custom-border">
                        <h3 className="fw-bold mb-0 fs-4">Manage Users</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in repellendus deleniti iusto repellat quod. Veniam recusandae architecto cumque cupiditate? Qui ab cupiditate veritatis maxime. Aliquam iure quisquam quibusdam perferendis quas recusandae culpa fugiat iste. Commodi illo reprehenderit deleniti corrupti quo sapiente beatae ad, placeat exercitationem at ipsam, dolore excepturi.</p>
                    </div>
                </div>

                <div className="col d-flex align-items-start">
                    <div className="custom-border">
                        <h3 className="fw-bold mb-0 fs-4">Manage Permissions</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in repellendus deleniti iusto repellat quod. Veniam recusandae architecto cumque cupiditate? Qui ab cupiditate veritatis maxime. Aliquam iure quisquam quibusdam perferendis quas recusandae culpa fugiat iste. Commodi illo reprehenderit deleniti corrupti quo sapiente beatae ad, placeat exercitationem at ipsam, dolore excepturi.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div className="custom-border">
                        <h3 className="fw-bold mb-0 fs-4">Manage Permission Set</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in repellendus deleniti iusto repellat quod. Veniam recusandae architecto cumque cupiditate? Qui ab cupiditate veritatis maxime. Aliquam iure quisquam quibusdam perferendis quas recusandae culpa fugiat iste. Commodi illo reprehenderit deleniti corrupti quo sapiente beatae ad, placeat exercitationem at ipsam, dolore excepturi.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div className="custom-border">
                        <h3 className="fw-bold mb-0 fs-4">Manage Customers</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in repellendus deleniti iusto repellat quod. Veniam recusandae architecto cumque cupiditate? Qui ab cupiditate veritatis maxime. Aliquam iure quisquam quibusdam perferendis quas recusandae culpa fugiat iste. Commodi illo reprehenderit deleniti corrupti quo sapiente beatae ad, placeat exercitationem at ipsam, dolore excepturi.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div class="custom-border">
                        <h3 className="fw-bold mb-0 fs-4">Manage Services</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in repellendus deleniti iusto repellat quod. Veniam recusandae architecto cumque cupiditate? Qui ab cupiditate veritatis maxime. Aliquam iure quisquam quibusdam perferendis quas recusandae culpa fugiat iste. Commodi illo reprehenderit deleniti corrupti quo sapiente beatae ad, placeat exercitationem at ipsam, dolore excepturi.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    <div class="custom-border">
                        <h3 className="fw-bold mb-0 fs-4">Featured title6</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in repellendus deleniti iusto repellat quod. Veniam recusandae architecto cumque cupiditate? Qui ab cupiditate veritatis maxime. Aliquam iure quisquam quibusdam perferendis quas recusandae culpa fugiat iste. Commodi illo reprehenderit deleniti corrupti quo sapiente beatae ad, placeat exercitationem at ipsam, dolore excepturi.</p>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Dashboard;