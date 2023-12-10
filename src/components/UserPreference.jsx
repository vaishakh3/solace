"use client";
// TODO: Add user preference component

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useSession } from "next-auth/react";

function UserPreference() {
  const { data: session } = useSession();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="rounded-full w-8 h-8" aria-label="user preference">
          <img src={session?.user?.image ?? "/images/cover.png"} alt="username" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Label />
          <DropdownMenu.Item />

          <DropdownMenu.Group>
            <DropdownMenu.Item />
          </DropdownMenu.Group>

          <DropdownMenu.CheckboxItem>
            <DropdownMenu.ItemIndicator />
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.RadioGroup>
            <DropdownMenu.RadioItem>
              <DropdownMenu.ItemIndicator />
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger />
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent />
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default UserPreference;
