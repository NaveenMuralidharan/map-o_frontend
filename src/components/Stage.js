
import Step from "../components/Step"
import React, { useState } from 'react'
import Button from '@mui/material/Button';

const Stage = ({stage}) => {

    const { steps } = stage;
    // console.log("DEBUG ", { stage, steps })
    //constructor
    const [stepToggle, setStepToggle] = useState(false);
    const handleViewStepsClick = () => {
        setStepToggle(!stepToggle);
      };


    return (
        <div>      
            <h6>{stage.order} - {stage.name} </h6>
            <h6>By {stage.stageOwner}</h6>

          

          {!stepToggle ? 
                      <Button variant="outlined"
                        onClick={handleViewStepsClick}>
                        View Steps
                      </Button>
                      
                      : <></>
          }

          <hr></hr>
          {stepToggle ? 
                        <div>
                            <Button variant="outlined" onClick={handleViewStepsClick}>
                              Cancel
                            </Button>
                            
                            <br></br>  
                          <h6>Steps in {stage.name}</h6>
                          {steps.map((step) =>{
                            return <Step step={step} key={step._id} />
                       
                          })}
                        </div>
                       : <></> 
          }
            

           

         
          
        </div>
      );


}


export default Stage