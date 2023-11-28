import OpenAI from "openai";
import { openAiKey } from "../Constants/apiConstants";

const openai = new OpenAI({
    apiKey:openAiKey,
    dangerouslyAllowBrowser:true
});

export const searchGpt = async (searchText) =>{
    const gptQuery = "Act as a movie recommendation system and suggest me movies for the query :"+searchText+
    "Only give me names of 5 movies, comma separated like the example result given. Example Movie1,Movie2,Movie3";

    try{
        const gptResults = await openai.chat.completions.create({
            messages:[{role:"user",content:gptQuery}],
            model:"gpt-3.5-turbo"
        })
        return gptResults?.choices?.[0]?.message.content
    }
    catch(err){
        return err
    }
}