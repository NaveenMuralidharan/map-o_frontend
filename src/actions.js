import { redirect } from "react-router-dom"

// const URL = "http://localhost:4000"
const URL="https://process-mapper.onrender.com"


// export const createAction = async ({request}) => {
//     // get form data
//     const formData = await request.formData()
//     console.log("Create action from data is "+formData)
//     // construct request body
//     const newProcess = {
        
//         orgUnit: formData.get("orgUnit"),
//         processName: formData.get("processName"),
//         processOwner: formData.get("processOwner")
//     }
    
//     console.log("new process is "+ newProcess.orgUnit)
//     // redirect back to index page
//     return redirect("/")
// }

export const createAction2 = async({request}) => {

    console.log("DEBUG createAction2 request ",request )
    //get Form data from request 
    const formData = await request.formData()
    console.log("createAction2 form data is ", formData);
    
    //Create new process obj
    const newProcess = {
                        processName: formData.get("processName"),
                        orgUnit: formData.get("orgUnit"),
                        processOwner: formData.get("processOwner"),    
                        type: "sequenceDiagram",
                        stages: [
                            //setup first stage to invite user to edit 
                                    {
                                        order: 1,
                                        name: "Stage name",
                                        orgUnit: "Organization / vendor / client responsible",
                                        stageOwner: "Stakeholder owning this stage",
                                        contactDetails: "Email: ", 
                                        steps: [
                                            {
                                                order: 1.1,
                                                stepOwner: "Stakeholder owning this step",
                                                action: "Describe what is done in this step",
                                                purpose: "Describe why this step is performed, keeping in mind the value for the stakeholders",
                                                pass_to: "Indicate the stakeholder in the next step",
                                                channel: "",
                                                tool: "",
                                                frequency: "",
                                                docType: "",
                                                docLink: ""
                                            }
                                        ] 
                   
                                    }
                        ]
                    }
    console.log("New process obj in createaction2 is ", newProcess)                
    
    //Create mermaid code from newprocess,
    // const newmermaidCodeGen = (diagObj)=>{

    //     let text=""
    //     const diagType="sequenceDiagram"
    //     // text = text +"\n"+ diagObj.type+"\n"
    //     text = text + "\n" + diagType + "\n"
    //     diagObj.stages.forEach((stage) => {
    //         text = text + "box " + stage.name+"\n"
    //         let lastindex = stage.steps.length - 1
    
    //         stage.steps.forEach((step,i)=>{
    //             text = text + "participant " + step.stepOwner+"\n"
    //             if(lastindex == i){ 
    //                 text = text + "end" + "\n"
    //             }
    //         })
            
    //         stage.steps.forEach((step)=>{
    //             text = text + "activate " + step.stepOwner + "\n"
    //             text = text + "Note over " + step.stepOwner +": " + step.stepOwner+ " - <br/>" +  step.action + "<br/>" + "Doc: " + step.docType+ "\n"
    //             // text = text + "Note over " + step.stakeholder +": Channel: " + "" +step.channel + "<br/> Tool: " + step.tool + "<br/>" + "\n"
    //             // text = text + step.stakeholder + "-->" + step.pass_to + ":" + step.desc + "\n"
    //             text = text + step.stepOwner + "->>" + step.pass_to + ":" + "Channel: "+ "" + step.channel + "<br/> Tool: " + step.tool + "<br/>"+"\n"
                
    //         })
            
    //     })
    //     // console.log(text)
    //     return text
    // }

    //TRIAL-mermaid code gen without br's
    const trialmermaidCodeGen = (diagObj)=>{

        let text=""
        const diagType="sequenceDiagram"
        // text = text +"\n"+ diagObj.type+"\n"
        text = text + "\n" + diagType + "\n"
        diagObj.stages.forEach((stage) => {
            text = text + "box " + stage.name+"\n"
            let lastindex = stage.steps.length - 1
    
            stage.steps.forEach((step,i)=>{
                text = text + "participant " + step.stepOwner+"\n"
                if(lastindex === i){ 
                    text = text + "end" + "\n";
                }
            })
            
            stage.steps.forEach((step)=>{
                text = text + "activate " + step.stepOwner + "\n"
                text = text + "Note over " + step.stepOwner +": " + step.stepOwner+ " - " +  step.action + "" + "Doc: " + step.docType+ "\n"
                // text = text + "Note over " + step.stakeholder +": Channel: " + "" +step.channel + "<br/> Tool: " + step.tool + "<br/>" + "\n"
                // text = text + step.stakeholder + "-->" + step.pass_to + ":" + step.desc + "\n"
                text = text + step.stepOwner + "->>" + step.pass_to + ":" + "Channel: "+ "" + step.channel + " Tool: " + step.tool + ""+"\n"
                
            })
            
        })
        // console.log(text)
        return text
    }

    //GENERATE MERMAID CODE
    // const newMermaidCode = newmermaidCodeGen(newProcess)

    const newMermaidCode = trialmermaidCodeGen(newProcess)

    newProcess.mermaidCode = newMermaidCode;                 
    console.log("New process obj AFTER adding mermaidcode ", newProcess)  

    //DEBUG
    console.log("Striggified JSOn of process is ",JSON.stringify(newProcess))                

    //Send post request to create process
    await fetch(URL + "/process", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        // body: newProcess
        body: JSON.stringify(newProcess),
    }).then(res=> console.log(res.json())).catch(err=> console.log(err));

        
    //Redirect to show page
    return redirect("/process");
}

    export const createStageAction = async({request, params}) => {

    console.log("DEBUG updateAction request ",request )
    //get Form data from request 
    const formData = await request.formData()
    console.log("updateAction form data is ", formData);

    console.log("DEBUG createstage params is ", params)
    
    const response = await fetch(URL+"/process/" + params.id);
    const process = await response.json();
    console.log("DEBUG createstage json response is", process)

    const stage = {
        order: process.stages.length,
        name: formData.get("name"),
        orgUnit: formData.get("orgUnit"),
        processOwner: formData.get("processOwner"),   
          }

    console.log("DEBUG createstage stage is", stage)

    const updatedProcess = process.stages.push(stage)                
    console.log("DEBUG createstage updated process is", updatedProcess)

    await fetch(URL + "/process/"+params.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        // body: newProcess
        body: JSON.stringify(updatedProcess),
    });
   
        
    //Redirect to show page
    return redirect(`/process`);
    }

    export const updateAction = async(process) =>{

    //TRIAL - recreate mermaidcode inside process
    // const newmermaidCodeGen = (diagObj)=>{

    //     let text=""
    //     const diagType="sequenceDiagram"
    //     // text = text +"\n"+ diagObj.type+"\n"
    //     text = text + "\n" + diagType + "\n"
    //     diagObj.stages.forEach((stage) => {
    //         text = text + "box " + stage.name+"\n"
    //         let lastindex = stage.steps.length - 1
    
    //         stage.steps.forEach((step,i)=>{
    //             text = text + "participant " + step.stepOwner+"\n"
    //             if(lastindex == i){ 
    //                 text = text + "end" + "\n"
    //             }
    //         })
            
    //         stage.steps.forEach((step)=>{
    //             text = text + "activate " + step.stepOwner + "\n"
    //             text = text + "Note over " + step.stepOwner +": " + step.stepOwner+ " - <br/>" +  step.action + "<br/>" + "Doc: " + step.docType+ "\n"
    //             // text = text + "Note over " + step.stakeholder +": Channel: " + "" +step.channel + "<br/> Tool: " + step.tool + "<br/>" + "\n"
    //             // text = text + step.stakeholder + "-->" + step.pass_to + ":" + step.desc + "\n"
    //             text = text + step.stepOwner + "->>" + step.pass_to + ":" + "Channel: "+ "" + step.channel + "<br/> Tool: " + step.tool + "<br/>"+"\n"
                
    //         })
            
    //     })
    //     // console.log(text)
    //     return text
    // }

    //TRIAL-mermaid code gen without br's
    const trialmermaidCodeGen = (diagObj)=>{

            let text=""
            const diagType="sequenceDiagram"
            // text = text +"\n"+ diagObj.type+"\n"
            text = text + "\n" + diagType + "\n"
            diagObj.stages.forEach((stage) => {
                text = text + "box " + stage.name+"\n"
                let lastindex = stage.steps.length - 1
        
                stage.steps.forEach((step,i)=>{
                    text = text + "participant " + step.stepOwner+"\n"
                    if(lastindex === i){ 
                        text = text + "end" + "\n"
                    }
                })
                
                stage.steps.forEach((step)=>{
                    text = text + "activate " + step.stepOwner + "\n"
                    text = text + "Note over " + step.stepOwner +": " + step.stepOwner+ " - " +  step.action + "" + "Doc: " + step.docType+ "\n"
                    // text = text + "Note over " + step.stakeholder +": Channel: " + "" +step.channel + "<br/> Tool: " + step.tool + "<br/>" + "\n"
                    // text = text + step.stakeholder + "-->" + step.pass_to + ":" + step.desc + "\n"
                    text = text + step.stepOwner + "->>" + step.pass_to + ":" + "Channel: "+ "" + step.channel + " Tool: " + step.tool + ""+"\n"
                    
                })
                
            })
            // console.log(text)
            return text
        }

     //GENERATE MERMAID CODE
    // const updatedMermaidCode = newmermaidCodeGen(process)
    const updatedMermaidCode = trialmermaidCodeGen(process)
    process.mermaidCode = updatedMermaidCode;


    console.log("TEST - updateAction req is ", process)

    //Send PUT request to update process
    const response = await fetch(URL + "/process/"+ process._id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        // body: newProcess
        body: JSON.stringify(process),
    })
    //TRIAL - retreive updated process obj and send to show page to update state     
    const updatedProcess = await response.json();
    console.log("updated process in Updateaction is ",updatedProcess)
    return updatedProcess

    //Redirect to show page
    // return redirect("/process/"+process._id);

}

export const deleteAction = async({params})=>{
    console.log("delete action func", params.id)
    const id = params.id;
    await fetch(URL+`/process/${id}/`, {
        method: "delete"

    })
    return redirect("/process")

}

//create a seeddata file, save processes arr there, 
//import into loader and action JS
//modify process array
