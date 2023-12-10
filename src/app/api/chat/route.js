import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI();
const basePromptPrefix =
  `
  You are a music personized music therapy assitant, and you are trying to help the user find a song that suits their current mood and preferences:
  DO NOT include the prompt in response,
  DO NOT include "assistant:" or "user:" in ALL response,
  `;
const generateAction = async (req) => {


  let prompt = basePromptPrefix;
  try{
  await req.map((chat) => {
    if(chat.from === "bot"){
        prompt += `
        assistant: ${chat.message}
        `
    }else{
        prompt += `
        user: ${chat.message}
        `
    }
  })
 
 
    const completion = await openai.completions.create({
        // model: 'gpt-3.5-turbo-instruct-0914',
        model: 'text-davinci-003',
        prompt: `${prompt}`,
        temperature: 0.8,
        max_tokens: 1400
      });
 
  const basePromptOutput = completion.choices[0].text;
  return basePromptOutput;
}catch(e){
    console.log(e);
 }

};



export async function POST(request) {

//   await dbConnect();
  try{
    const chats = await request.json();

    const response = await generateAction(chats);
    return NextResponse.json(response);
  }catch(e){
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
  

}