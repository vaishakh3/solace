import { getSession } from "@/app/api/auth/[...nextauth]/route";
import AiChatbot from "./_components/AiChatbot";
import Quiz from "./_components/Quiz";

export default async function Home() {
  const session = await getSession();
  return (
    <main className="w-full h-full p-7 flex flex-col">
      <div className="text-white min-h-[3rem">controls</div>
      <div className="flex flex-grow gap-7">
        <div className="flex-grow"></div>
        <div className="quiz-border w-[21.75rem] flex flex-col">
          {/* <AiChatbot /> */}
          <Quiz />
        </div>
      </div>
    </main>
  );
}
