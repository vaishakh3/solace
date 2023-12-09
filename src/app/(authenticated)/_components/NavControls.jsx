"use client";
import HistoryButtons from "@/components/HistoryButtons";
import UserPreference from "@/components/userPreference";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";

function NavControls() {
  const { data: session } = useSession();
  return (
    <div className="text-white min-h-[3rem] flex justify-between">
      <HistoryButtons />
      <div>
        <UserPreference />
      </div>
    </div>
  );
}

export default NavControls;
