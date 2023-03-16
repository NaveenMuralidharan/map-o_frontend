
import { Link } from "react-router-dom";
import Step from "../components/Step"

const Stage = ({stage}) => {

    const { steps } = stage;
    console.log("DEBUG ", { stage, steps })


    return (
        <div>      
            <h3>{stage.name}</h3>
            <h4>Owner: {stage.processOwner}</h4>
            <button>Edit</button>

                {steps.map((step) =>{
                  return <Step step={step} key={steps[step]} />
             
                })}
            {/* <Step step={steps[0]} /> */}
            

         
          
        </div>
      );


}


export default Stage