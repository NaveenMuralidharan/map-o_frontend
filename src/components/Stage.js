
import Step from "../components/Step"
import React, { useState } from 'react'

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
                      <button 
                        onClick={handleViewStepsClick}>
                        View Steps
                      </button>
                      
                      : <></>
          }

          <hr></hr>
          {stepToggle ? 
                        <div>
                            <button onClick={handleViewStepsClick}>
                              Cancel
                            </button>
                            
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