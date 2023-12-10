"use client";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Bell } from "lucide-react";
import { clsx } from "clsx";
import React, { ReactNode, useState } from "react";
import { signOut, useSession } from "next-auth/react";


const UserPreference = () => {
  const { data: session } = useSession();

  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <button className="h-8 w-8 rounded-full">
            <img className="h-full w-full" src={session?.user?.image ?? "/images/cover.png"} alt={session?.user?.name ?? "cover image"} />
          </button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className={clsx(
              "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
              "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
              "bg-[#262626] dark:bg-[#262626]"
            )}
          >
            <DropdownMenuPrimitive.Item
              key={`account`}
              className={clsx(
                "flex cursor-default select-none items-center rounded-md p-4 text-xs outline-none",
                "text-gray-400 focus:bg-[#262626] dark:text-white dark:focus:bg-[#262626]"
              )}
            >
              Account
            </DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Item
              key={`settings`}
              className={clsx(
                "flex cursor-default select-none items-center rounded-md p-4 text-xs outline-none",
                "text-gray-400 focus:bg-[#262626] dark:text-white dark:focus:bg-[#262626]"
              )}
            >
              Settings
            </DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Separator className="my-1 h-px bg-[#393939] dark:bg-[#393939] hover:bg-gray-900 dark:hover:bg-gray-900" />
            <DropdownMenuPrimitive.Item
              key={`signout`}
              asChild
            >
              <button className={clsx(
                "flex cursor-pointer w-full select-none items-center rounded-md p-4 text-xs outline-none",
                "text-gray-400 focus:bg-[#262626] dark:text-white dark:focus:bg-[#262626]"
              )} onClick={() => signOut()}>Log Out</button>
            </DropdownMenuPrimitive.Item>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export default UserPreference;
