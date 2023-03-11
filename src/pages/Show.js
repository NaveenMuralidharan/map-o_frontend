import { Link, useLoaderData, Form } from "react-router-dom";
// import { showLoader } from "../loaders";
import Mermaid from "../Mermaid";

const Show = () => {
    const mermaidCode = useLoaderData();
    console.log("From Show component, mermaid code fro loader data is " + mermaidCode);

    return (
        <div>
            <h2>Hello</h2>
            <Mermaid chart={mermaidCode} />
            
            <div>
                <h3>Update Process Map</h3>
            </div>
        </div>

 
    )

}



export default Show;