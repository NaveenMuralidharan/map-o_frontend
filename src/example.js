const diagType = `sequenceDiagram`
const diagram = {
    type: "sequenceDiagram",
    stages: [
    {
        name: "Receive Complaint",
        steps: [ 
                    {stakeholder: "Public", 
                    desc:"Submit complaint",
                    action: "Submit complaints form",
                    docType: "Web Form",
                    docLink: "",
                    pass_to: "Complaint Officer"},

                    {stakeholder: "Complaint Officer", 
                    desc:"Evaluate complaint",
                    action: "Request Information", 
                    documentType: "Process Document",
                    docLink: "",
                    pass_to: "Broker"},

                    {stakeholder: "Broker", 
                    desc:"Provide Info",
                    action: "Respond to complaint", 
                    docType: "Web Form",
                    docLink: "",
                    pass_to: "Complaint Officer"},

                ] 
    },
    {
        name: "Triage",
        steps: [ 
            {stakeholder: "Dir-Investigations", 
            desc:"Submit complaint",
            docName:"Complaint form",
            docType: "Web Form",
            docLink: "", 
            pass_to: "Complaint Officer"},

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
            text = text + step.stakeholder + "-->" + step.pass_to + ":" + step.desc + "\n"
            text = text + "Note over " + step.stakeholder +": " + step.action + "\n"
        })
        
    })
    console.log(text)
    return text
}




// function when given array of words, joins them into one 
//  giant string


// const mermaidCode = `

// ${diagType}

// box ${stages[0].name}
// participant B as Broker/Firm
// participant P as Public 
// participant C as Complaint Officer
// end

// box transparent Triage
// participant D as Dir-Investigations
// participant I as Investigator

// end 

// activate P
// P-->C: 
// Note over P: Fill complaint web form
// P->>C: Submit Complaint
// deactivate P

// activate C
// Note over C: Evaluate Complaint
// alt is NOT valid
// C-->>P: Reject complaint
// deactivate C
// end

// activate C

// alt is valid
// C-->>P: Notify Complaint received
// deactivate C
// end

// activate C
// Note over C: Need info <br/> from complainant
// C-->>P: Notify 
// deactivate C

// activate C
// Note over C: Need info <br/> from Broker/Firm
// C-->>B: Notify 
// deactivate C

// activate C
// Note over C: Need info <br/> from complainant
// C-->>P: Notify 
// deactivate C


// activate C
// Note over C: Refer to <br/> Director of Investigations
// C-->>D: Request
// deactivate C
//     `;

const mermaidCodeGen = ()=> {
    return `

    ${diagType}
    
    box Receive complaint
    participant B as Broker/Firm 
    participant P as Public 
    participant C as Complaint Officer
    end
    
    box transparent Triage
    participant D as Dir-Investigations
    participant I as Investigator
    
    end 
    
    activate P
    P-->C: 
    Note over P: Fill complaint web form
    P->>C: Submit Complaint
    deactivate P
    
    activate C
    Note over C: Evaluate Complaint
    alt is NOT valid
    C-->>P: Reject complaint
    deactivate C
    end
    
    activate C
    
    alt is valid
    C-->>P: Notify Complaint received
    deactivate C
    end
    
    activate C
    Note over C: Need info <br/> from complainant
    C-->>P: Notify 
    deactivate C
    
    activate C
    Note over C: Need info <br/> from Broker/Firm
    C-->>B: Notify 
    deactivate C
    
    activate C
    Note over C: Need info <br/> from complainant
    C-->>P: Notify 
    deactivate C
    
    
    activate C
    Note over C: Refer to <br/> Director of Investigations
    C-->>D: Request
    deactivate C
        `;
}
// const mermaidCode = mermaidCodeGen()

const mermaidCode = newmermaidCodeGen(diagram)
console.log(mermaidCode)

export default mermaidCode
