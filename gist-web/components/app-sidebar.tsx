"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { FolderStructure } from "@/types/folder";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data: {
    user: {
      name: string;
      email: string;
      avatar: string;
    };

    root: FolderStructure;
  };
}

export function AppSidebar({ ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent className="mx-3">
        <NavMain items={props.data.root} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={props.data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
