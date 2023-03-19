import { Link } from "react-router-dom";


const Step = ({step}) => {
    console.log("STEP ", step.order, step.action);

    return (
      
        <div>      
            
            <h5>{step.order} - {step.action}</h5>
            <p>{step.stepOwner} - {step.tool}({step.channel})</p>
           
        </div>
      );


}


export default Step