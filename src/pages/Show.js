import { Link, useLoaderData, Form } from "react-router-dom";
import { showLoader } from "../loaders";
import CreateStage from "./CreateStage"
import Mermaid from "../Mermaid";
import Stage from "../components/Stage"
import Step from "../components/Step"


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

export default Show;

