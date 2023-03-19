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
    
    // const { mermaidCode } = data;
                
    const { process } = data;
    console.log("process obj in show js is", process)
    const { stages } = process;
    const { steps } = stages;
    // TRIAL - get mermaid code from process obj
    const { mermaidCode } = process;
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
    const [formData, setFormData] = useState({ name: '', orgUnit: '', stageOwner: '', contactDetails: '', 
            stepOwner: '', stepAction: '', pass_to: '', purpose: '', channel: '', tool: '' });
    
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
                                                        stageOwner: formData.stageOwner,
                                                        contactDetails: formData.contactDetails,
                                                        steps:      [
                                                                        {
                                                                            order:          1.1,
                                                                            stepOwner:      formData.stepOwner,
                                                                            action:         formData.stepAction,
                                                                            pass_to:        formData.pass_to, 
                                                                            purpose:        formData.purpose,
                                                                            channel:        formData.channel,
                                                                            tool:           formData.tool,
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
            
        //create new mermaid diagram and update mermaid code state                                            
        const newmermaidCodeGen = (diagObj)=>{

            let text=""
            const diagType="sequenceDiagram"
            // text = text +"\n"+ diagObj.type+"\n"
            text = text + "\n" + diagType + "\n"
            diagObj.stages.forEach((stage) => {
                text = text + "box " + stage.name+"\n"
                let lastindex = stage.steps.length - 1
        
                stage.steps.forEach((step,i)=>{
                    text = text + "participant " + step.stakeholder+"\n"
                    if(lastindex == i){ 
                        text = text + "end" + "\n"
                    }
                })
                
                stage.steps.forEach((step)=>{
                    text = text + "activate " + step.stakeholder + "\n"
                    text = text + "Note over " + step.stakeholder +": " + step.stakeholder+ " - <br/>" +  step.action + "<br/>" + "Doc: " + step.docType+ "\n"
                    // text = text + "Note over " + step.stakeholder +": Channel: " + "" +step.channel + "<br/> Tool: " + step.tool + "<br/>" + "\n"
                    // text = text + step.stakeholder + "-->" + step.pass_to + ":" + step.desc + "\n"
                    text = text + step.stakeholder + "->>" + step.pass_to + ":" + "Channel: "+ "" + step.channel + "<br/> Tool: " + step.tool + "<br/>"+"\n"
                    
                })
                
            })
            // console.log(text)
            return text
        }

        console.log('state mermaidCode BEFORE update ', processData.mermaidCode)
        const updatedMermaidCode = newmermaidCodeGen(retrievedProcess)
        console.log({updatedMermaidCode})
        setProcessData({...processData, mermaidCode: updatedMermaidCode})
        console.log('state mermaidCode after update ', processData.mermaidCode)
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

                                    <label htmlFor="stageOwner">Stage Owner:</label>
                                    <input type="text" id="stageOwner" name="stageOwner" value={formData.stageOwner} onChange={handleInputChange} />

                                    <label htmlFor="name">Contact Details:</label>
                                    <input type="text" id="contactDetails" name="contactDetails" value={formData.contactDetails} onChange={handleInputChange} />

                                    <h5>Step 1</h5>

                                    <label htmlFor="stepOwner">Step Owner:</label>
                                    <input type="text" id="stepOwner" name="stepOwner" value={formData.stepOwner} onChange={handleInputChange} />

                                    <label htmlFor="stepAction">Step Action:</label>
                                    <input type="text" id="stepAction" name="stepAction" value={formData.stepAction} onChange={handleInputChange} />

                                    <label htmlFor="pass_to">Passed to:</label>
                                    <input type="text" id="pass_to" name="pass_to" value={formData.pass_to} onChange={handleInputChange} />

                                    <label htmlFor="purpose">Purpose:</label>
                                    <input type="text" id="purpose" name="purpose" value={formData.purpose} onChange={handleInputChange} />
                                    
                                    <label htmlFor="channel">Channel:</label>
                                    <input type="text" id="channel" name="channel" value={formData.channel} onChange={handleInputChange} />
                                    
                                    <label htmlFor="tool">Tool:</label>
                                    <input type="text" id="tool" name="tool" value={formData.tool} onChange={handleInputChange} />
                                    
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

