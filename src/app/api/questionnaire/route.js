import quizQuestions from "./const";
import { Configuration, OpenAIApi } from 'openai';
import Response from '../../../models/Response';
import Questions from '../../../models/Questions';

import dbConnect from '@/lib/database';
import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI();
const basePromptPrefix =
  `
  Generate a music recommendation based on the user's quiz responses:
  `;
const generateAction = async (req) => {


  let prompt = basePromptPrefix;
  await req.map((answer) => {
    prompt += `
      ${answer.questionText}
      Answer : ${answer.answerText}
      Response Time : ${answer.responseTime} ms
      Hover Count : ${answer.hoverCount}
      Select Count : ${answer.selectCount}

  `
  })
  prompt += `
 Based on these responses, generate a personalized music recommendation that suits the user's current mood and preferences.
 Generate a list of 10 music
 `
  const completion = await openai.completions.create({
    // model: 'gpt-3.5-turbo-instruct-0914',
    model: 'text-davinci-003',
    prompt: `${prompt}`,
    temperature: 0.8,
    max_tokens: 1400
  });
  const basePromptOutput = completion.choices[0].text;
  const  songList = basePromptOutput.trim().split("\n");
  console.log(songList)
  return basePromptOutput;

};


export async function GET(request) {
  await dbConnect();
  return NextResponse.json(quizQuestions);
}



export async function POST(request) {

  await dbConnect();
  const answers = await request.json();
  const answersJS = answers;




  const withFullText = await answersJS.map((x, index) => {
    const question = quizQuestions[index].question;
    const answer = quizQuestions[index].options[x.answer];
    return { ...answersJS, questionText: question, answerText: answer };
  })

  const response = await generateAction(withFullText);
  return NextResponse.json(response);
  

}