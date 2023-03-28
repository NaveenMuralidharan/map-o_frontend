import { useState } from "react";
import { useLoaderData, Form} from "react-router-dom";
import { updateAction } from "../actions";

const Edit = (params)=> {
    
    // const data = useLoaderData();
    
    // const {process} = data
    
    // const { stages } = process
    // const { steps } = stages
    // //Destructure
    // console.log("process from loader data is ", process)
    // const {formData, setFormData} = useState(process)
    const data = useLoaderData();
    const { process } = data;
    console.log("process obj in show js is", process)
    // const { stages } = process;
    // const { steps } = stages;
    // TRIAL - get mermaid code from process obj
    // const { mermaidCode } = process;

    //STATE for process meta data
    const [formData, setFormData] = useState(process)
    
    //STATE for stages array data
    // const [stageFormData, setStageFormData] = useState(stages)

    // const [toggleStageEdit, setToggleStageEdit] = useState(false)
    
  
    // console.log(stageFormData)

    //HANDLE CHANGE FOR Process meta data
    const handleChange = (event)=>{
        
        const{name, value} = event.target
        // console.log("name and value are", name, value)
        setFormData((prevState)=>({...prevState, [name]: value}))
        // console.log("PROCESS METADATA EDIT - set form data is ", formData)

    }
    //HANDLE SUBMIT FOR Process meta data
   
    const handleSubmit = (event)=>{
        event.preventDefault();
        // console.log("submitted form data is ", formData)
        //package updated process
        const updatedProcess = {...formData}
        // console.log("updated process before api call ", updatedProcess)
        //send updated process to update backend
        updateAction(updatedProcess)
    }
 
    // const handleStageSubmit = (event, stageIndex)=>{
    //     event.preventDefault()

    //     const formDataCopy = JSON.parse(JSON.stringify(formData))
    //     formDataCopy.stages[stageIndex].name = event.target.value;
    //     console.log(formDataCopy, formData)    
        
    //     setFormData(formDataCopy)
    // }
    
    // //handle change to stage in process
    // const handleStageChange = (stageIndex, event)=>{
    //     //get updated stage values and key from event target
    //     const {name, value} = event.target
        
    //     //save the current stage's data and update it with new key value
    //     const updatedStages = {...formData.stages}
    //     updatedStages[stageIndex] = {...updatedStages[stageIndex], [name]: value};

    //     //set form data with new stage
    //     setFormData({...formData, stages: updatedStages})
    //     console.log("STAGES EDIT - set form data is ", formData)
    // }

    // const handleStepChange = (stepIndex, stageIndex, event)=>{
    //     //get name and value from event target
    //     const{name, value} = event.target;

    //     //copy steps array from current state and modify the specific step
    //     const updatedSteps = {...formData.stages[stageIndex].steps}
    //     updatedSteps[stepIndex] = {...updatedSteps[stepIndex], [name]: value}

    //     //set form data with new step
    //     setFormData({...process.stages[stageIndex].steps, updatedSteps})

    // }


    console.log(formData)

    return (
        <div>
            <h2>Edit Process: </h2>
           
            <div>
                    <Form onSubmit={handleSubmit}>
                        
                        <label>Org Unit:</label>
                        <input type="text" 
                                  name="orgUnit"
                                  value={formData.orgUnit} 
                                  onChange={handleChange} />

                        <label>Process Name:</label>
                        <input type="text" 
                                  name="processName"
                                  value={formData.processName} 
                                  onChange={handleChange} />          

                        <label>Process Owner:</label>
                        <input type="text" 
                                  name="processOwner"
                                  value={formData.processOwner} 
                                  onChange={handleChange} />  


                    {formData.stages.map((stage, stageIndex) => {
                        console.log({stage})
                        return (<div>
                                <h5>{stage.order} - {stage.name}</h5>
                                
                                <label>Stage Name</label>
                                <input type="text" name="name" value={formData.stages[stageIndex].name}                        
                                onChange={(e)=> {

                                    const formDataCopy = JSON.parse(JSON.stringify(formData))
                                    formDataCopy.stages[stageIndex].name = e.target.value;
                                    console.log(formDataCopy, formData)    
                                    
                                    setFormData(formDataCopy)
 
                                    }}></input>

                                <label>Stage Owner</label>
                                <input type="text" name="stageOwner" value={formData.stages[stageIndex].stageOwner}                        
                                onChange={(e)=> {

                                    const formDataCopy = JSON.parse(JSON.stringify(formData))
                                    formDataCopy.stages[stageIndex].stageOwner = e.target.value;
                                    console.log(formDataCopy, formData)    
                                    
                                    setFormData(formDataCopy)
 
                                    }}></input>        

                                
                                <label>Org Unit:</label>
                                <input type="text" name="orgUnit" value={formData.stages[stageIndex].orgUnit}                        
                                onChange={(e)=> {

                                    const formDataCopy = JSON.parse(JSON.stringify(formData))
                                    formDataCopy.stages[stageIndex].orgUnit = e.target.value;
                                    console.log(formDataCopy, formData)    
                                    
                                    setFormData(formDataCopy)
 
                                    }}></input>        
        


                        {stage.steps.map((step, stepIndex)=>{
                            console.log({step})
                            return (<div>
                                    
                                    <h6>{step.order}</h6>
                                    
                                    <label>Step Action</label>
                                    <input type="text"
                                            name="action"
                                            value={formData.stages[stageIndex].steps[stepIndex].action}
                                            onChange={(e)=> {
                                                
                                                
                                                const stepFormCopy = JSON.parse(JSON.stringify(formData))
                                                stepFormCopy.stages[stageIndex].steps[stepIndex].action = e.target.value;
                                                // console.log(stepFormCopy, formData)
                                                setFormData(stepFormCopy)
                                                // console.log(formData)


                                                }}>

                                    </input>

                                    <label>Step Owner</label>
                                    <input type="text"
                                            name="stepOwner"
                                            value={formData.stages[stageIndex].steps[stepIndex].stepOwner}
                                            onChange={(e)=> {
                                                
                                                
                                                const stepFormCopy = JSON.parse(JSON.stringify(formData))
                                                stepFormCopy.stages[stageIndex].steps[stepIndex].stepOwner = e.target.value;
                                                // console.log(stepFormCopy, formData)
                                                setFormData(stepFormCopy)
                                                // console.log(formData)


                                                }}>

                                    </input>

                                    <label>Pass to:</label>
                                    <input type="text"
                                            name="pass_to"
                                            value={formData.stages[stageIndex].steps[stepIndex].pass_to}
                                            onChange={(e)=> {
                                                
                                                
                                                const stepFormCopy = JSON.parse(JSON.stringify(formData))
                                                stepFormCopy.stages[stageIndex].steps[stepIndex].pass_to = e.target.value;
                                                // console.log(stepFormCopy, formData)
                                                setFormData(stepFormCopy)
                                                // console.log(formData)


                                                }}>

                                    </input>

                                    <label>Purpose:</label>
                                    <input type="text"
                                            name="purpose"
                                            value={formData.stages[stageIndex].steps[stepIndex].purpose}
                                            onChange={(e)=> {
                                                
                                                
                                                const stepFormCopy = JSON.parse(JSON.stringify(formData))
                                                stepFormCopy.stages[stageIndex].steps[stepIndex].purpose = e.target.value;
                                                // console.log(stepFormCopy, formData)
                                                setFormData(stepFormCopy)
                                                // console.log(formData)


                                                }}>

                                    </input>

                                    <label>Channel:</label>
                                    <input type="text"
                                            name="channel"
                                            value={formData.stages[stageIndex].steps[stepIndex].channel}
                                            onChange={(e)=> {
                                                
                                                
                                                const stepFormCopy = JSON.parse(JSON.stringify(formData))
                                                stepFormCopy.stages[stageIndex].steps[stepIndex].channel = e.target.value;
                                                // console.log(stepFormCopy, formData)
                                                setFormData(stepFormCopy)
                                                // console.log(formData)


                                                }}>

                                    </input>

                                    <label>Tool:</label>
                                    <input type="text"
                                            name="tool"
                                            value={formData.stages[stageIndex].steps[stepIndex].tool}
                                            onChange={(e)=> {
                                                
                                                
                                                const stepFormCopy = JSON.parse(JSON.stringify(formData))
                                                stepFormCopy.stages[stageIndex].steps[stepIndex].tool = e.target.value;
                                                // console.log(stepFormCopy, formData)
                                                setFormData(stepFormCopy)
                                                // console.log(formData)


                                                }}>

                                    </input>

                                </div>)

                        })}
                            
                        </div>)    
                        
                        
                    })} 

                    <button type="submit"> Edit Process information </button>
                    </Form>    

            </div>

                
        
        </div>
    );
}

export default Edit