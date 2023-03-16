import {Link, useLoaderData, Form} from "react-router-dom";
import Stage from "../components/Stage"

const CreateStage = (props)=> {
    const stage = props.stage
    return (
        <div>
            <h2>Create Stage: {stage}</h2>    
        </div>
    );
}

export default CreateStage