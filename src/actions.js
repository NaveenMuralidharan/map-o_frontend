import { redirect } from "react-router-dom"
import processes from "./data"
const URL = "http://localhost:4000"

export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()
    console.log("Create action from data is "+formData)
    // construct request body
    const newProcess = {
        
        orgUnit: formData.get("orgUnit"),
        processName: formData.get("processName"),
        processOwner: formData.get("processOwner")
    }
    
    console.log("new process is "+ newProcess.orgUnit)
    // redirect back to index page
    return redirect("/")
}

export const createAction2 = async({request}) => {

    console.log("DEBUG createAction2 request ",request )
    //get Form data from request 
    const formData = await request.formData()
    console.log("createAction2 form data is ", formData);
    
    //Create new process obj
    const newProcess = {
                        type: "sequenceDiagram",
                        orgUnit: formData.get("orgUnit"),
                        processOwner: formData.get("processOwner"),    
                        processName: formData.get("processName"),
                        stages: [
                            //setup first stage to invite user to edit 
                                    {
                                        name: "Processes are made of multiple stages. Name the First stage of your process. Each stage is comprised of multiple steps, model them in chronological order",
                                        orgUnit: "Name the organization / vendor / client responsible for this stage of the process",
                                        processOwner: "Name the stakeholder who owns this stage",
                                        contactDetails: "Contact details of process owner", 
                                        steps: [
                                            {
                                                order: 1.1,
                                                stakeholder: "Each step can only involve one stakeholder performing it",
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


//create a seeddata file, save processes arr there, 
//import into loader and action JS
//modify process array
