

const Step = ({step}) => {
    console.log("STEP ", step.order, step.action);

    return (
      
        <div>      
            
            <h5>{step.order} - {step.action}</h5>
            <p>Purpose: {step.purpose}</p>
            <p>{step.stepOwner} - {step.tool}({step.channel})</p>
            <hr></hr>
        </div>
        
      );


}


export default Step