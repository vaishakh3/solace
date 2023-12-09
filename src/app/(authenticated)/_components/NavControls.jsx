"use client";
import UserPreference from "@/components/userPreference";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";

function NavControls() {
  const { data: session } = useSession();
  return (
    <div className="text-white min-h-[3rem] flex justify-between">
      <div className="flex gap-3">
        <button className="w-8 h-8 rounded-full bg-[#393939] flex justify-center items-center">
          <ArrowLeft strokeWidth={0.75} />
        </button>
        <button className="w-8 h-8 rounded-full bg-[#393939] flex justify-center items-center">
          <ArrowRight strokeWidth={0.75} />
        </button>
      </div>
      <div>
        <UserPreference />
      </div>
    </div>
  );
}

export default NavControls;
