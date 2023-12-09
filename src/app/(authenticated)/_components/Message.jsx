import { cn } from "@/lib/cn";

function Message({ message, from }) {
    return (
      <div className="flex flex-col gap-1.5 rounded-[0.9375rem] border border-[#8D8D8D] p-5 text-[0.69156rem]">
        <div>
          <img className={cn(
              "w-8 h-8 rounded-full",
              from === "bot" && "mr-auto",
              from === "user" && "ml-auto"
          )} src={from === "bot" ? "/logo.png": "cover.png"} alt="" />
        </div>
        <div className={cn(
          "rounded-[1.875rem] flex-grow text-[#A8A8A8] font-poppins",
          from === "bot" && "text-left",
          from === "user" && "text-right"
        )}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nihil
          illo quos, dolore labore ullam laudantium repudiandae cum iste repellat
          harum eveniet fugit reiciendis laborum ab similique, nam quibusdam
          nulla.
        </div>
      </div>
    );
  }

  
  export default Message;