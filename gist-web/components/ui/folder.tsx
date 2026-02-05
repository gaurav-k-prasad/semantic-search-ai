"use client";
import { ChevronRight, FileIcon, Folder as FolderIcon } from "lucide-react";

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
import { FileStructure, FolderStructure } from "@/types/folder-files";
import { useRef, useState } from "react";

export function Folder({ item }: { item: FolderStructure }) {
  const [folders, setFolders] = useState<FolderStructure[]>([]);
  const [files, setFiles] = useState<FileStructure[]>([]);

  // Defines if the folder was open once
  const [isFolderOpen, setIsFolderOpen] = useState<boolean>(false);
  const s = useRef(item.path);

  return (
    <Collapsible
      key={item.name}
      asChild
      className="group/collapsible"
      onOpenChange={(open) => {
        if (open) {
          const params = new URLSearchParams({
            path: s.current,
          });
          fetch(`/api/folders?${params.toString()}`)
            .then((data) => data.json())
            .then((data) => {
              if (data?.folders) setFolders(data.folders);
              if (data?.files) setFiles(data.files);
            });
        }
        setIsFolderOpen(!isFolderOpen);
      }}
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild className="pr-0">
          <SidebarMenuButton>
            <FolderIcon className="ml-[-0.2rem]" />
            <span>{item.name}</span>
            <ChevronRight
              className={`ml-auto mr-2 transition-transform duration-200 ${isFolderOpen && "rotate-90"}`}
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub>
            {folders.map((subItem) => {
              return <Folder item={subItem} key={subItem.name} />;
            })}
          </SidebarMenuSub>
          <SidebarMenuSub>
            {files.map((subItem) => (
              <SidebarMenuSubItem key={subItem.name}>
                <SidebarMenuSubButton asChild>
                  <a href={subItem.path}>
                    <FileIcon className="ml-[-0.2rem]" />
                    <span>{subItem.name}</span>
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
