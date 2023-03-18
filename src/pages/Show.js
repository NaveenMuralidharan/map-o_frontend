import { Link, useLoaderData, Form } from "react-router-dom";
import { showLoader } from "../loaders";
import CreateStage from "./CreateStage"
import Mermaid from "../Mermaid";
import Stage from "../components/Stage"
import Step from "../components/Step"
import React, { useState } from 'react'
import { updateAction } from "../actions";

//TRIAL
const Show = () => {
    //constructor
    console.log("hi from show.js")
    
    const trialCode = useLoaderData();
    console.log("trialcode  is ", trialCode)
    const { process } = trialCode;

    console.log("deconstructed process is ", process)
    const { stages } = process;
    const { steps } = stages;
    
    console.log("From Show component, mermaid code fro loader data is " + trialCode.mermaidCode);

    return (
        <div>
            <h4>Organization: {trialCode.process.orgUnit}</h4>
            
            <div>
                <Mermaid chart={trialCode.mermaidCode} />
            </div>
            

            <div>
                
                <h4> Stages</h4>
                
                <div>
                    <Form action={`/update/${process.id}`} method="post">
                        Add Stages:
                        
                            <label>Stage Name:</label>
                            <input type="text" name="name" placeholder="Stage name"/>
                            <label>Org Unit:</label>
                            <input type="text" name="orgUnit" placeholder="Org Unit"/>
                            <label>Owner:</label>
                            <input type="text" name="processOwner" placeholder="Process Owner"/>
                            <button type="submit">Create New Stage</button>
                    </Form>
                </div>    
                
                <div>
                    
                    {stages
                        .map((stage) => 
                            <Stage stage={stage} key={stage.id} /> 
                            )
                    }
                </div>
                <div>    
                    {stages.forEach((stage)=>{
                            console.log("Stage is "+ stage.name);
                        return stage.steps.map((step) => {
                            console.log("Step is "+ step.order);
                            return <Step step={step} key={step.id} />
                            console.log(Step)
                        }
 
                        )
                    })

                    }
                </div>
                
            </div>
        </div>

 
    )

}


//TRIAL 2
const Show2 = () => {
    //constructor
    console.log("hi from show.js")
    
    const data = useLoaderData();
    // console.log("Data from showloader2 inside show.js  is ", 
    //             data)

    const { mermaidCode } = data;            
    const { process } = data;

    // console.log("deconstructed process is ", process)
    const { stages } = process;
    const { steps } = stages;
    
    console.log("From Show component, mermaid code fro loader data is " + mermaidCode);

    return (
        <div>
            <h4>Organization: {process.orgUnit}</h4>
            
            <div>
                <Mermaid chart={mermaidCode} />
            </div>
            

            <div>
                
                <h4> Stages of {process.processName}</h4>
                
                <div>
                    <Form action={`/update/${process.id}`} method="post">
                        Add Stages:
                        
                            <label>Stage Name:</label>
                            <input type="text" name="name" placeholder="Stage name"/>
                            <label>Org Unit:</label>
                            <input type="text" name="orgUnit" placeholder="Org Unit"/>
                            <label>Owner:</label>
                            <input type="text" name="processOwner" placeholder="Process Owner"/>
                            <button type="submit">Create  Stage</button>
                    </Form>
                </div>    
                <h3>Stages of {process.processName}</h3>
                <div>
                    
                    {stages
                        .map((stage) => 
                            <Stage stage={stage} key={stage.id} /> 
                            )
                    }
                </div>
                <div>    
                    {stages.forEach((stage)=>{
                            console.log("Stage is "+ stage.name);
                        return stage.steps.map((step) => {
                            console.log("Step is "+ step.order);
                            return <Step step={step} key={step.id} />
                            console.log(Step)
                        }
 
                        )
                    })

                    }
                </div>
                
            </div>
        </div>

 
    )

}

//TRIAL 3

const Show3 = () => {
    //constructor

    console.log("hi from show3.js")
    
    // DESTRUCTURE PROCESS FROM SHOWLOADER
    const data = useLoaderData();
    const { mermaidCode } = data;            
    const { process } = data;
    const { stages } = process;
    const { steps } = stages;
    
    const [processData, setProcessData] = useState({
                                                    mermaidCode: mermaidCode, 
                                                    process: process, 
                                                    stages: stages, 
                                                    steps: steps 
                                                })

                                            

    //Toggle Add stage form visibility
    const [stageToggle, setStageToggle] = useState(false);
    const handleNewStageClick = () => {
        setStageToggle(!stageToggle);
      };

    // TEST - CREATE NEW STAGE FUNC- INPUT OUTPUT 
    const [formData, setFormData] = useState({ name: '', orgUnit: '', owner: '' });
    
    const handleStageSubmit = async (event) =>{
        event.preventDefault(); 
        console.log("form data is ",formData);

        //Create a shallow copy of process update process object with new stage
        const updatedProcess = {...process}
        const newStageOrder = updatedProcess.stages.length; 
        console.log("updated process before stage pus is ", updatedProcess)

        updatedProcess.stages.push({
                                                        order:      newStageOrder,
                                                        name:       formData.name,
                                                        orgUnit:    formData.orgUnit,
                                                        owner:      formData.owner,
                                                        steps:      [
                                                                        {
                                                                            order:          "",
                                                                            action:         "",
                                                                            purpose:        "",
                                                                            stakeholder:    "",
                                                                            tool:           "",
                                                                            pass_to:        ""    

                                                                        }
                                                                    ]
                                                    })
        
        console.log("updated process AFTER stage push is ", updatedProcess)
        
        //TRIAL (FAIL)- CALL UPDATE ACTION FROM ACTION JS
        // updateAction(updatedProcess)
        
        

        //TRIAL - Atempt to get upated process obj
        //returned from update ACtion to update state, processData
            const retrievedProcess = await updateAction(updatedProcess);       
            console.log("retrieved process is ", retrievedProcess)                                              
          const retrievedStages = await retrievedProcess.stages  
          setProcessData({...processData, stages: retrievedStages})
        // handleStateUpdate(processData.stages, retrievedProcess.stages)                                                
            
            //create coy of stages, push new stage
            // setProcessData(processData.process, retrievedProcess)
        //clear form    
        
        //close add form

    }

    const handleStateUpdate = (state, newState) =>{
        const oldState = [...state]
        console.log({oldState, newState})


        // set process state

    }


    const handleInputChange = (event) =>{
        const { name, value } = event.target;
        setFormData((prevState)=>({ ...prevState, [name]: value}));
    }
    


    // console.log("From Show component, mermaid code fro loader data is " + mermaidCode);

    return (
        <div>
            <h4>Organization: {processData.process.orgUnit}</h4>
            
            <div>
                <Mermaid chart={processData.mermaidCode} />
            </div>
            

            <div>
                
                <h4> Stages of {processData.process.processName}</h4>
                
                {!stageToggle? <div>
                    <button 
                        onClick={handleNewStageClick}>
                        Add New Stage
                    </button>
                    
                </div> 
                :
                <></>}
                
                
                {stageToggle ? 
                            <div>
                                
                                <Form onSubmit={handleStageSubmit}>
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

                                    <label htmlFor="orgUnit">Org Unit:</label>
                                    <input type="text" id="orgUnit" name="orgUnit" value={formData.orgUnit} onChange={handleInputChange} />

                                    <label htmlFor="owner">Owner:</label>
                                    <input type="text" id="owner" name="owner" value={formData.owner} onChange={handleInputChange} />

                                    <button type="submit">Submit</button>
                                    
                                    <button 
                                        onClick={handleNewStageClick}>
                                                Cancel
                                    </button>
                                        <br></br>
                                        
                                        
                                </Form>
                                
                            </div>
                            :
                            <></>
            }


                {/* STAGES */}
                <div>
                    
                    {processData.stages
                        .map((stage) => 
                            <Stage stage={stage} key={stage._id} /> 
                            )
                    }
                </div>

                {/* STEPS */}
                <div>    
                    {processData.stages.forEach((stage)=>{
                        console.log("Stage is "+ stage.name);
                        return stage.steps.map((step) => {
                            console.log("Step is "+ step.order);
                            return <Step step={step} key={step._id} />
                            console.log(Step)
                        })
                    })

                    }
                </div>
                
            </div>
        </div>

 
    )

}
export default Show3;

