import { generatePrompts } from "../utils/generatePrompts";

// const prompts = await generatePrompts('text-davinci-002', 'Write a short story about a robot that goes on an adventure.')


const Doc = ()=>{

    const prompts = generatePrompts('text-davinci-002', 'Write a short story about a robot that goes on an adventure.')

    return (

        <div>

            <h2> Document:</h2>

          

        </div>


    )


}

export default Doc