
import { Link } from "react-router-dom";
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
            <h6>Owner: {stage.stageOwner}</h6>
            <br></br>   
            <a href="">Edit Stage</a>
            <br></br>
            <a href="">Delete Stage</a>
            <br></br> 
            {/* <a href="">View Steps</a><br></br> */}
          

          {!stepToggle ? 
                      <button 
                        onClick={handleViewStepsClick}>
                        View Steps
                      </button>
                      : <></>
          }

          
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
            

            {/* <Step step={steps[0]} /> */}
            

         
          
        </div>
      );


}


export default Stage