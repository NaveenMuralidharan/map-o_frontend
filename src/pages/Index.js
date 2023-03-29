import {Link, useLoaderData, Form, redirect} from "react-router-dom";
import React, {useState} from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { deleteAction2 } from "../actions";

const Index = (props) => {
    const processes = useLoaderData()
    console.log("from index js process is ", processes)
    
    const [processToggle, setProcessToggle] = useState(false);

    const handleNewProcessClick = () => {
        setProcessToggle(!processToggle);
      };

    // const handleDelete = (procssID)=>{
    //     deleteAction2(procssID)
    //     redirect("/")

    // }
      
    // const [show, setShow] = useState()
    // const handleDelete=(id)=>{
    //     console.log("handle delete process func")
    // }

    return <>
    <Container maxWidth="sm">
        <br></br>
        <br></br>
        <h4>Process Mapper</h4>
        <br></br>
        <br></br>
        {/* Map new process */}

        {!processToggle? 
            // <button onClick={handleNewProcessClick}>
            //     Create Process Map
            // </button>
            <Card variant="outlined">
                <p>Build Process Maps</p>
                <Button variant="outlined" onClick={handleNewProcessClick}>
                        Create Process Map
                </Button>
                <br></br>
                <br></br>
            </Card>
            
        : <></>}

        { processToggle? 
        
        <div>
        <h4>Map a new Process:</h4>
        <Form action="/process/create" method="post">
            <div>
                <label htmlFor="orgUnit">Org Unit:</label>
                <input type="text" name="orgUnit"/>
            </div>
            <div>
                <label htmlFor="processOwner">Process Owner:</label>
                <input type="text" name="processOwner"/>
            </div>
            <div>
                <label htmlFor="processName">Process Name:</label>
                <input type="text" name="processName"/>
            </div>
            {/* <button type="submit"> Create Process </button> */}
            <Button variant="outlined" type="submit">Create Process</Button>
        </Form>

        { processToggle? 
        
        // <button onClick={handleNewProcessClick}>Cancel</button>
        <Button variant="outlined" onClick={handleNewProcessClick}>
            Cancel
        </Button>

            : <></>

        }       
        
        
        </div>
        
        : <></> }
        

        <div>

            {processes.map((process)=>{
               return <Card variant="outlined" key={process._id}>

                    <Link to={`/process/${process._id}`}>
                        <h4>{process.processName}</h4> 
                   </Link>
                    
                   <Form action={`/process/${process._id}/delete`} method="post">
                    <Button type="submit" variant="outlined" >Delete Process</Button>
                    </Form>

                   
                </Card>
                
            })}
            {/* <h4>{processes[0].processName}</h4> */}
        </div>

    </Container>
    </>

}

export default Index;