import quizQuestions from "./const";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dbConnect from '@/lib/database';
import { NextResponse } from "next/server";

const apiKey = process.env.GOOGLE_API_KEY;
if (!apiKey) {
  throw new Error("Google API key is required");
}

const genAI = new GoogleGenerativeAI(apiKey); 

const basePromptPrefix = `
You are a personalized music therapy assistant. Based on the user's quiz responses, generate a list of 10 music recommendations tailored to their current mood and preferences. Provide the recommendations clearly without any additional commentary.
`;

const generateAction = async (req) => {
  let prompt = basePromptPrefix;

  req.forEach((answer) => {
    prompt += `
      ${answer.questionText}
      Answer: ${answer.answerText}
      Response Time: ${answer.responseTime} ms
      Hover Count: ${answer.hoverCount}
      Select Count: ${answer.selectCount}
    `;
  });

  prompt += `
Based on these responses, generate a personalized music recommendation.
`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    
    // Log the entire result to inspect its structure
    console.log("AI Model Result:", result);
    
    const basePromptOutput = result.response.text; 
    const songList = basePromptOutput.trim().split("\n").filter(Boolean); // Remove any empty lines
    console.log("Generated Recommendations:", songList);
    return songList; // Return the list directly
  } catch (error) {
    console.error("Error generating music recommendations:", error);
    throw error;
  }
};

export async function GET(request) {
  await dbConnect();
  return NextResponse.json(quizQuestions);
}

export async function POST(request) {
  await dbConnect();
  const answers = await request.json();
  
  if (!Array.isArray(answers) || answers.length === 0) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const withFullText = answers.map((x, index) => {
    const question = quizQuestions[index].question;
    const answer = quizQuestions[index].options[x.answer];
    return { ...x, questionText: question, answerText: answer };
  });

  try {
    const recommendations = await generateAction(withFullText);
    return NextResponse.json({ recommendations }); // Return as an object
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}