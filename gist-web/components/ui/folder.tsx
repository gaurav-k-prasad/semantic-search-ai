import { ChevronRight, Folder as FolderIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { FolderStructure } from "@/types/folder";

export function Folder({ item }: { item: FolderStructure }) {
  return (
    <Collapsible key={item.name} asChild className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild className="pr-0">
          <SidebarMenuButton tooltip={item.name}>
            <FolderIcon />
            <span>{item.name}</span>
            <ChevronRight className="ml-auto mr-2 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.folders?.map((subItem) => (
              <Folder item={subItem} key={subItem.name} />
            ))}
          </SidebarMenuSub>
          <SidebarMenuSub>
            {item.files?.map((subItem) => (
              <SidebarMenuSubItem key={subItem}>
                <SidebarMenuSubButton asChild>
                  <a href={subItem.url}>
                    <span>{subItem}</span>
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
