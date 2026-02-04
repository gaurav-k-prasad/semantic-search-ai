"use client";

import { Folder } from "@/components/ui/folder";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { FolderStructure } from "@/types/folder";

export function NavMain({ items }: { items: FolderStructure }) {
  return (
    <SidebarGroup className="m-0 p-0">
      <SidebarGroupLabel>Folders</SidebarGroupLabel>
      <SidebarMenu>
        <Folder item={items} />
      </SidebarMenu>
    </SidebarGroup>
  );
}
