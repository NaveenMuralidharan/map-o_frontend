import openai from "openai";

openai.apiKey = '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';

export const generatePrompts = async(model, prompt)=>{

    console.log({openai})


    const response = await openai
                            .Completion
                            .create(
                            model= model,
                            prompt = prompt,
                            // max_tokens= 1024,
                            // n=1,
                            // stop=None,
                            // temperature=0.5
                            );
    console.log({response})                        
    return response.choices[0].text;

}