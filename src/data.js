const processes = [
    {
        id: 1,
        processName: "Complaints Processing",
        type: "sequenceDiagram",
        orgUnit: "Complaints and Investigations",
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
    },
    {
        id: 2,
        processName: "Level 1 Licensing",
        type: "sequenceDiagram",
        orgUnit: "Policy, Licensing and Standards",
        processOwner: "John Doe",
    
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
                ]

export default processes