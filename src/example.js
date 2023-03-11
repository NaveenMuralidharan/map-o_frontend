// const diagType = `sequenceDiagram`
// const diagram = {
//     type: "sequenceDiagram",
//     orgUnit: "Complaints and Investigations",
//     processName: "Complaints Processing",
//     // WHO
//     processOwner: "John Smith",

//     stages: [
//     {
//         name: "Receive Complaint",
//         orgUnit: "",
//         processOwner: "",
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
//         processOwner: "",
//         contactDetails: "",
//         steps: [ 
//             {order: 2.1,
//             // WHO
//             stakeholder: "Dir-Investigations", 
//             // WHAT
//             action:"Submit complaint",
//             pass_to: "Investigator",
//             // WHY
//             purpose: "",
//             // WHERE
//             channel: "",
//             // WHEN
//             frequency: "",
//             // HOW:
//             tool: "Email",
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
// // Function that takes a diagram object as an argument
//     // and returns an aray of strings
// const newmermaidCodeGen = (diagObj)=>{

//     let text=""

//     text = text +"\n"+ diagObj.type+"\n"

//     diagObj.stages.forEach((stage) => {
//         text = text + "box EXAMPLE JS - " + stage.name+"\n"
//         let lastindex = stage.steps.length - 1

//         stage.steps.forEach((step,i)=>{
//             text = text + "participant " + step.stakeholder+"\n"
//             if(lastindex == i){ 
//                 text = text + "end" + "\n"
//             }
//         })
        
//         stage.steps.forEach((step)=>{
//             text = text + "activate " + step.stakeholder + "\n"
//             text = text + "Note over " + step.stakeholder +": " + step.stakeholder+ " - <br/>" +  step.action + "<br/>" + "Doc: " + step.docType+ "\n"
//             // text = text + "Note over " + step.stakeholder +": Channel: " + "" +step.channel + "<br/> Tool: " + step.tool + "<br/>" + "\n"
//             // text = text + step.stakeholder + "-->" + step.pass_to + ":" + step.desc + "\n"
//             text = text + step.stakeholder + "->>" + step.pass_to + ":" + "Channel: "+ "" + step.channel + "<br/> Tool: " + step.tool + "<br/>"+"\n"
            
//         })
        
//     })
//     // console.log(text)
//     return text
// }




// const mermaidCodeGen = ()=> {
//     return `

//     ${diagType}
    
//     box EXMPLE JS - Receive complaint
//     participant B as Broker/Firm 
//     participant P as Public 
//     participant C as Complaint Officer
//     end
    
//     box transparent Triage
//     participant D as Dir-Investigations
//     participant I as Investigator
    
//     end 
    
//     activate P
//     P-->C: 
//     Note over P: Fill complaint web form
//     P->>C: Submit Complaint
//     deactivate P
    
//     activate C
//     Note over C: Evaluate Complaint
//     alt is NOT valid
//     C-->>P: Reject complaint
//     deactivate C
//     end
    
//     activate C
    
//     alt is valid
//     C-->>P: Notify Complaint received
//     deactivate C
//     end
    
//     activate C
//     Note over C: Need info <br/> from complainant
//     C-->>P: Notify 
//     deactivate C
    
//     activate C
//     Note over C: Need info <br/> from Broker/Firm
//     C-->>B: Notify 
//     deactivate C
    
//     activate C
//     Note over C: Need info <br/> from complainant
//     C-->>P: Notify 
//     deactivate C
    
    
//     activate C
//     Note over C: Refer to <br/> Director of Investigations
//     C-->>D: Request
//     deactivate C
//         `;
// }
// // const mermaidCode = mermaidCodeGen()

// const mermaidCode = newmermaidCodeGen(diagram)
// // console.log(mermaidCode)

// export default mermaidCode
