import { redirect } from "react-router-dom"
import processes from "./data"

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
//create a seeddata file, save processes arr there, 
//import into loader and action JS
//modify process array
