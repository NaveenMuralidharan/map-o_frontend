import {Link, useLoaderData, Form} from "react-router-dom";
import React, { useState } from "react";

const Index = (props) => {
    const processes = useLoaderData()
    console.log("from index js process is ", processes)

    const [show, setShow] = useState()

    return <>
    <div>
        <br></br>
        <br></br>
        <h3>Critical Process Controller</h3>
        <br></br>
        <br></br>
        {/* Map new process */}
        <div>
            <h4>Map a new Process:</h4>
            <Form action="/process/create" method="post">
                <div>
                    <label for="orgUnit">Org Unit:</label>
                    <input type="text" name="orgUnit"/>
                </div>
                <div>
                    <label for="processOwner">Process Owner:</label>
                    <input type="text" name="processOwner"/>
                </div>
                <div>
                    <label for="processName">Process Name:</label>
                    <input type="text" name="processName"/>
                </div>
                <button type="submit"> Create Process </button>
                
            </Form>
        </div>

        <div>

            {processes.map((process)=>{
               return <div key={process._id}>
                    <Link to={`/process/${process._id}`}>
                        <h4>{process.processName}</h4> 
                   </Link>
                </div>
                
            })}
            {/* <h4>{processes[0].processName}</h4> */}
        </div>

    </div>
    </>

}

export default Index;