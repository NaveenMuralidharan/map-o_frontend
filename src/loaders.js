import processes from "./data"
const URL = "http://localhost:4000"

// const processes = [
//     {
//         id: 1,
//         processName: "Complaints Processing",
//         type: "sequenceDiagram",
//         orgUnit: "Complaints and Investigations",
//         processOwner: "John Smith",
    
//         stages: [
//         {
//             name: "Receive Complaint",
//             orgUnit: "",
//             processOwner: "Complaints Officer",
//             contactDetails: "",
//             steps: [ 
//                         {
//                         order: 1.1,
//                         // WHO
//                         stakeholder: "Public", 
//                         // WHAT
//                         action: "Submit complaints form",
//                         pass_to: "Complaint Officer",
//                         // WHY
//                         purpose: 'To lodge a complaint against actions of a broker / brokerage',        
//                         // WHERE
//                         channel: "website",
//                         // WHEN
//                         frequency: "",
//                         //HOW
//                         tool:"Web Form",
//                         docType: "Complaints Guidance",
//                         docLink: "",
//                         },
    
//                         {
//                         order: 1.2,
//                         // WHO
//                         stakeholder: "Complaint Officer", 
//                         // WHAT
//                         action: "Request information", 
//                         pass_to: "Broker",
//                         // WHY
//                         purpose: "Gather information to validate complaint.",
//                         // WHERE
//                         channel: "MS Office",
//                         // WHEN
//                         frequency: "",                    
//                         // HOW
//                         tool:"Email",
//                         docType: "SOP",
//                         docLink: "",
//                         },
    
//                         { order: 1.3,
//                         // WHO
//                         stakeholder: "Broker", 
//                         // WHAT
//                         action: "Respond to complaint",
//                         pass_to: "Complaint Officer",
//                         // WHY
//                         purpose: "Fullfill RIBOs query",
//                         // WHERE
//                         channel: "External",
//                         // WHEN
//                         frequency: "",                    
//                         // HOW
//                         tool:"Email",
//                         docType: "Response guidelines",
//                         docLink: ""
//                         },
    
//                         { order: 1.4,
//                         // WHO
//                         stakeholder: "Complaint Officer",
//                         // WHAT 
//                         action: "Review complaint", 
//                         pass_to: "Complaint Officer",
//                         // WHY
//                         purpose: 'Triage complaint to evaluate risk',
//                         // WHERE
//                         channel: 'SharePoint',
//                         // WHEN
//                         frequency: '',
//                         // HOW
//                         tool: 'SP- Complaints workbench',
//                         docType: "Review guidelines",
//                         docLink: "",
//                         },
//                         { order: 1.5,
//                         // WHO
//                         stakeholder: "Complaint Officer", 
//                         // WHAT
//                         action: "Escalate complaint", 
//                         pass_to: "Dir-Investigations",
//                         // WHY
//                         purpose: 'So Director can decide if Investigation is warranted for high risk complaints',
//                         // WHERE
//                         channel: "MS Office",
//                         // WHEN
//                         frequency: '',
//                         // HOW
//                         tool: "Email",
//                         docType: "Escalation guidelines",
//                         docLink: "",
                        
//                         },
    
//                     ] 
//         },
//         {
//             name: "Triage",
//             orgUnit: "",
//             processOwner: "Director of Investigations",
//             contactDetails: "",
//             steps: [ 
//                 {order: 2.1,
//                 // WHO
//                 stakeholder: "Dir-Investigations", 
//                 // WHAT
//                 action:"Investigation Decision",
//                 pass_to: "Investigator",
//                 // WHY
//                 purpose: "",
//                 // WHERE
//                 channel: "SharePoint",
//                 // WHEN
//                 frequency: "",
//                 // HOW:
//                 tool: "SP- Complaints Workbench",
//                 docName:"Decide on Investigation",
//                 docType: "Regulatory Guidelines",
//                 docLink: "", 
//                 },
    
//                 {stakeholder: "Investigator", 
//                 desc:"Evaluate complaint", 
//                 docName:"Complaint review",
//                 documentType: "Process Document",
//                 docLink: "",
//                 pass_to: "Broker"},
    
//             ] 
//         }
//         ]
//     },
//     {
//         id: 2,
//         processName: "Level 1 Licensing",
//         type: "sequenceDiagram",
//         orgUnit: "Policy, Licensing and Standards",
//         processOwner: "John Doe",
    
//         stages: [
//         {
//             name: "Receive Complaint",
//             orgUnit: "",
//             processOwner: "Complaints Officer",
//             contactDetails: "",
//             steps: [ 
//                         {
//                         order: 1.1,
//                         // WHO
//                         stakeholder: "Public", 
//                         // WHAT
//                         action: "Submit complaints form",
//                         pass_to: "Complaint Officer",
//                         // WHY
//                         purpose: 'To lodge a complaint against actions of a broker / brokerage',        
//                         // WHERE
//                         channel: "website",
//                         // WHEN
//                         frequency: "",
//                         //HOW
//                         tool:"Web Form",
//                         docType: "Complaints Guidance",
//                         docLink: "",
//                         },
    
//                         {
//                         order: 1.2,
//                         // WHO
//                         stakeholder: "Complaint Officer", 
//                         // WHAT
//                         action: "Request information", 
//                         pass_to: "Broker",
//                         // WHY
//                         purpose: "Gather information to validate complaint.",
//                         // WHERE
//                         channel: "MS Office",
//                         // WHEN
//                         frequency: "",                    
//                         // HOW
//                         tool:"Email",
//                         docType: "SOP",
//                         docLink: "",
//                         },
    
//                         { order: 1.3,
//                         // WHO
//                         stakeholder: "Broker", 
//                         // WHAT
//                         action: "Respond to complaint",
//                         pass_to: "Complaint Officer",
//                         // WHY
//                         purpose: "Fullfill RIBOs query",
//                         // WHERE
//                         channel: "External",
//                         // WHEN
//                         frequency: "",                    
//                         // HOW
//                         tool:"Email",
//                         docType: "Response guidelines",
//                         docLink: ""
//                         },
    
//                         { order: 1.4,
//                         // WHO
//                         stakeholder: "Complaint Officer",
//                         // WHAT 
//                         action: "Review complaint", 
//                         pass_to: "Complaint Officer",
//                         // WHY
//                         purpose: 'Triage complaint to evaluate risk',
//                         // WHERE
//                         channel: 'SharePoint',
//                         // WHEN
//                         frequency: '',
//                         // HOW
//                         tool: 'SP- Complaints workbench',
//                         docType: "Review guidelines",
//                         docLink: "",
//                         },
//                         { order: 1.5,
//                         // WHO
//                         stakeholder: "Complaint Officer", 
//                         // WHAT
//                         action: "Escalate complaint", 
//                         pass_to: "Dir-Investigations",
//                         // WHY
//                         purpose: 'So Director can decide if Investigation is warranted for high risk complaints',
//                         // WHERE
//                         channel: "MS Office",
//                         // WHEN
//                         frequency: '',
//                         // HOW
//                         tool: "Email",
//                         docType: "Escalation guidelines",
//                         docLink: "",
                        
//                         },
    
//                     ] 
//         },
//         {
//             name: "Triage",
//             orgUnit: "",
//             processOwner: "Director of Investigations",
//             contactDetails: "",
//             steps: [ 
//                 {order: 2.1,
//                 // WHO
//                 stakeholder: "Dir-Investigations", 
//                 // WHAT
//                 action:"Investigation Decision",
//                 pass_to: "Investigator",
//                 // WHY
//                 purpose: "",
//                 // WHERE
//                 channel: "SharePoint",
//                 // WHEN
//                 frequency: "",
//                 // HOW:
//                 tool: "SP- Complaints Workbench",
//                 docName:"Decide on Investigation",
//                 docType: "Regulatory Guidelines",
//                 docLink: "", 
//                 },
    
//                 {stakeholder: "Investigator", 
//                 desc:"Evaluate complaint", 
//                 docName:"Complaint review",
//                 documentType: "Process Document",
//                 docLink: "",
//                 pass_to: "Broker"},
    
//             ] 
//         }
//         ]
//     }
//                 ]


const process = {
    id: 123,
    type: "sequenceDiagram",
    orgUnit: "Complaints and Investigations",
    processName: "Complaints Processing",
    // WHO
    processOwner: "John Smith",

    stages: [
    {
        name: "Receive Complaint",
        orgUnit: "",
        processOwner: "Complaints Officer",
        contactDetails: "",
        steps: [ 
                    {
                    order: 1.1,
                    // WHO
                    stakeholder: "Public", 
                    // WHAT
                    action: "Submit complaints form",
                    pass_to: "Complaint Officer",
                    // WHY
                    purpose: 'To lodge a complaint against actions of a broker / brokerage',        
                    // WHERE
                    channel: "website",
                    // WHEN
                    frequency: "",
                    //HOW
                    tool:"Web Form",
                    docType: "Complaints Guidance",
                    docLink: "",
                    },

                    {
                    order: 1.2,
                    // WHO
                    stakeholder: "Complaint Officer", 
                    // WHAT
                    action: "Request information", 
                    pass_to: "Broker",
                    // WHY
                    purpose: "Gather information to validate complaint.",
                    // WHERE
                    channel: "MS Office",
                    // WHEN
                    frequency: "",                    
                    // HOW
                    tool:"Email",
                    docType: "SOP",
                    docLink: "",
                    },

                    { order: 1.3,
                    // WHO
                    stakeholder: "Broker", 
                    // WHAT
                    action: "Respond to complaint",
                    pass_to: "Complaint Officer",
                    // WHY
                    purpose: "Fullfill RIBOs query",
                    // WHERE
                    channel: "External",
                    // WHEN
                    frequency: "",                    
                    // HOW
                    tool:"Email",
                    docType: "Response guidelines",
                    docLink: ""
                    },

                    { order: 1.4,
                    // WHO
                    stakeholder: "Complaint Officer",
                    // WHAT 
                    action: "Review complaint", 
                    pass_to: "Complaint Officer",
                    // WHY
                    purpose: 'Triage complaint to evaluate risk',
                    // WHERE
                    channel: 'SharePoint',
                    // WHEN
                    frequency: '',
                    // HOW
                    tool: 'SP- Complaints workbench',
                    docType: "Review guidelines",
                    docLink: "",
                    },
                    { order: 1.5,
                    // WHO
                    stakeholder: "Complaint Officer", 
                    // WHAT
                    action: "Escalate complaint", 
                    pass_to: "Dir-Investigations",
                    // WHY
                    purpose: 'So Director can decide if Investigation is warranted for high risk complaints',
                    // WHERE
                    channel: "MS Office",
                    // WHEN
                    frequency: '',
                    // HOW
                    tool: "Email",
                    docType: "Escalation guidelines",
                    docLink: "",
                    
                    },

                ] 
    },
    {
        name: "Triage",
        orgUnit: "",
        processOwner: "Director of Investigations",
        contactDetails: "",
        steps: [ 
            {order: 2.1,
            // WHO
            stakeholder: "Dir-Investigations", 
            // WHAT
            action:"Investigation Decision",
            pass_to: "Investigator",
            // WHY
            purpose: "",
            // WHERE
            channel: "SharePoint",
            // WHEN
            frequency: "",
            // HOW:
            tool: "SP- Complaints Workbench",
            docName:"Decide on Investigation",
            docType: "Regulatory Guidelines",
            docLink: "", 
            },

            {stakeholder: "Investigator", 
            desc:"Evaluate complaint", 
            docName:"Complaint review",
            documentType: "Process Document",
            docLink: "",
            pass_to: "Broker"},

        ] 
    }
    ]
}

//indexloader
export const indexLoader = async () => {
    const response = await fetch(URL + "/process");
    const processes = await response.json();
   console.log(processes)
    return processes;
}



//showLoader => get process obj, create mermaid code, display
export const showLoader = async ({params}) => {
    console.log("param for showLoader is "+ params.id)
    const id = params.id;

//hardcoaded diagram code    
// const process = {
//     id: 123,
//     type: "sequenceDiagram",
//     orgUnit: "Complaints and Investigations",
//     processName: "Complaints Processing",
//     // WHO
//     processOwner: "John Smith",

//     stages: [
//     {
//         name: "Receive Complaint",
//         orgUnit: "",
//         processOwner: "Complaints Officer",
//         contactDetails: "",
//         steps: [ 
//                     {
//                     order: 1.1,
//                     // WHO
//                     stakeholder: "Public", 
//                     // WHAT
//                     action: "Submit complaints form",
//                     pass_to: "Complaint Officer",
//                     // WHY
//                     purpose: 'To lodge a complaint against actions of a broker / brokerage',        
//                     // WHERE
//                     channel: "website",
//                     // WHEN
//                     frequency: "",
//                     //HOW
//                     tool:"Web Form",
//                     docType: "Complaints Guidance",
//                     docLink: "",
//                     },

//                     {
//                     order: 1.2,
//                     // WHO
//                     stakeholder: "Complaint Officer", 
//                     // WHAT
//                     action: "Request information", 
//                     pass_to: "Broker",
//                     // WHY
//                     purpose: "Gather information to validate complaint.",
//                     // WHERE
//                     channel: "MS Office",
//                     // WHEN
//                     frequency: "",                    
//                     // HOW
//                     tool:"Email",
//                     docType: "SOP",
//                     docLink: "",
//                     },

//                     { order: 1.3,
//                     // WHO
//                     stakeholder: "Broker", 
//                     // WHAT
//                     action: "Respond to complaint",
//                     pass_to: "Complaint Officer",
//                     // WHY
//                     purpose: "Fullfill RIBOs query",
//                     // WHERE
//                     channel: "External",
//                     // WHEN
//                     frequency: "",                    
//                     // HOW
//                     tool:"Email",
//                     docType: "Response guidelines",
//                     docLink: ""
//                     },

//                     { order: 1.4,
//                     // WHO
//                     stakeholder: "Complaint Officer",
//                     // WHAT 
//                     action: "Review complaint", 
//                     pass_to: "Complaint Officer",
//                     // WHY
//                     purpose: 'Triage complaint to evaluate risk',
//                     // WHERE
//                     channel: 'SharePoint',
//                     // WHEN
//                     frequency: '',
//                     // HOW
//                     tool: 'SP- Complaints workbench',
//                     docType: "Review guidelines",
//                     docLink: "",
//                     },
//                     { order: 1.5,
//                     // WHO
//                     stakeholder: "Complaint Officer", 
//                     // WHAT
//                     action: "Escalate complaint", 
//                     pass_to: "Dir-Investigations",
//                     // WHY
//                     purpose: 'So Director can decide if Investigation is warranted for high risk complaints',
//                     // WHERE
//                     channel: "MS Office",
//                     // WHEN
//                     frequency: '',
//                     // HOW
//                     tool: "Email",
//                     docType: "Escalation guidelines",
//                     docLink: "",
                    
//                     },

//                 ] 
//     },
//     {
//         name: "Triage",
//         orgUnit: "",
//         processOwner: "Director of Investigations",
//         contactDetails: "",
//         steps: [ 
//             {order: 2.1,
//             // WHO
//             stakeholder: "Dir-Investigations", 
//             // WHAT
//             action:"Investigation Decision",
//             pass_to: "Investigator",
//             // WHY
//             purpose: "",
//             // WHERE
//             channel: "SharePoint",
//             // WHEN
//             frequency: "",
//             // HOW:
//             tool: "SP- Complaints Workbench",
//             docName:"Decide on Investigation",
//             docType: "Regulatory Guidelines",
//             docLink: "", 
//             },

//             {stakeholder: "Investigator", 
//             desc:"Evaluate complaint", 
//             docName:"Complaint review",
//             documentType: "Process Document",
//             docLink: "",
//             pass_to: "Broker"},

//         ] 
//     }
//     ]
// }
// Function that takes a diagram object as an argument
    // and returns an aray of strings
const newmermaidCodeGen = (diagObj)=>{

    let text=""

    text = text +"\n"+ diagObj.type+"\n"

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

const mermaidCode = newmermaidCodeGen(process)

// Trial: create an obj with mermaid code AND meta details of process

const trialCode = {
                    // process: process,
                    // TRIAL
                    process: processes[id], 
                    mermaidCode: mermaidCode}
    // return mermaidCode
    return trialCode
}


export const showLoader2 = async ({params}) => {
    console.log("show loader 2 ")
    const response = await fetch(URL+"/process/" + params.id);
    const process = await response.json();
    
    //Func to generate mermaid code from a process obj
    const newmermaidCodeGen = (diagObj)=>{

        let text=""
    
        text = text +"\n"+ diagObj.type+"\n"
    
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
    //Generate mermaid code from process obj
    const mermaidCode = newmermaidCodeGen(process)
    console.log("---DEBUG mermaid code gen in in showloader2 is ",
                mermaidCode)
    //Create process obj "data" with process obj and mermaid code
    const data = {  
                    process: process,
                    mermaidCode: mermaidCode
                }

    console.log("DEBUG showloader 2 data output is ", data)

    return data

}