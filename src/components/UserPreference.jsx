"use client";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Bell } from "lucide-react";
import { clsx } from "clsx";
import React, { ReactNode, useState } from "react";
import { signOut } from "next-auth/react";
// import Button from "./shared/button";

const generalMenuItems = [
  {
    label: "New File",
    icon: <Bell className="mr-2 h-3.5 w-3.5" />,
    shortcut: "⌘+N",
  },
  {
    label: "Settings",
    icon: <Bell className="mr-2 h-3.5 w-3.5" />,
    shortcut: "⌘+,",
  },
];

const regionToolMenuItems = [
  {
    label: "Frame",
    icon: <Bell className="mr-2 h-3.5 w-3.5" />,
    shortcut: "⌘+F",
  },
  {
    label: "Crop",
    icon: <Bell className="mr-2 h-3.5 w-3.5" />,
    shortcut: "⌘+S",
  },
];

const users = [
  {
    name: "Adam",
    url: "https://github.com/adamwathan.png",
  },
  {
    name: "Steve",
    url: "https://github.com/steveschoger.png",
  },
  {
    name: "Robin",
    url: "https://github.com/robinmalfait.png",
  },
];

const UserPreference = () => {

  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <button className="h-8 w-8 rounded-full">
            <img className="h-full w-full" src="/images/cover.png" alt="" />
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
            <DropdownMenuPrimitive.Separator className="my-1 h-px bg-[#393939] dark:bg-[#393939]" />
            <DropdownMenuPrimitive.Item
              key={`signout`}
              asChild
            >
              <button className={clsx(
                "flex cursor-default select-none items-center rounded-md p-4 text-xs outline-none",
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
