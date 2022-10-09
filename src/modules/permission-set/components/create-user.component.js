import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateUser () {
    const [setName, setState] = useState('');

    useEffect(() => {
        async function getName () {
            try {
                const permissionSetName = await axios.get("http://localhost:4000/api/users");
                console.log(permissionSetName);
            }
            catch(err) {
                const newName = "Admin";
                setState(newName)
            }
        }
        getName();
    },[]);

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card mt-4">
                    <div className="card-body text-center">
                        <h3> {`${setName} created successfully`}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateUser ;