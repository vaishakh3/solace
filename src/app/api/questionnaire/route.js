import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Check for the presence of the Google API key
if (!process.env.GOOGLE_API_KEY) {
  throw new Error("Google API key is required");
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY); // Use environment variable for API key

const basePromptPrefix = `
You are a personalized music therapy assistant, and you are trying to help the user find a song that suits their current mood and preferences:
DO NOT include the prompt in response,
DO NOT include "assistant:" or "user:" in ALL response,
`;

const generateAction = async (chats) => {
  let prompt = basePromptPrefix;

  // Build the prompt from chat messages
  chats.forEach((chat) => {
    const role = chat.from === "bot" ? "assistant" : "user";
    prompt += `\n${role}: ${chat.message};`; // Use backticks for template literals
  });

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = result.response; // Correct way to access response
    const basePromptOutput = response.text; // Use text property, not method

    return basePromptOutput; // Return plain text output
  } catch (error) {
    console.error("Error generating response:", error);
    throw error; // Re-throw to be handled in the POST method
  }
};

export async function POST(request) {
  try {
    const chats = await request.json(); // Parse incoming JSON

    // Validate incoming chats data
    if (!Array.isArray(chats) || chats.length === 0) {
      return NextResponse.json({ error: "Invalid input format. Expected an array of chat messages." }, { status: 400 });
    }

    const response = await generateAction(chats); // Generate response
    return NextResponse.json({ response }); // Return JSON response wrapped in an object
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json({ error: error.message }, { status: 500 }); // Handle errors
  }
}
