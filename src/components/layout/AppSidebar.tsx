import { ChevronDown, User2, ChevronUp } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { menuItems } from "@/lib/data";
import type { MenuItem } from "@/types/menu";

export default function AppSidebar() {
  return (
    <Sidebar className="border-r " collapsible="icon">
      <SidebarHeader className="py-4 border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/" className="flex gap-3 items-center">
                <img
                  src="/lamha-logo.svg"
                  alt="Logo"
                  className="w-8 h-8"
                />
                <span className="text-lg font-semibold">
                  Lamha App
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map(renderMenuItem)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="py-4 border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

function renderMenuItem(item: MenuItem) {
  if (item.hasDropdown && item.subItems?.length) {
    return (
      <Collapsible
        key={item.title}
        defaultOpen
        className="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className=" cursor-pointer flex gap-3">
              <item.icon className="" />
              <span className="">{item.title}</span>
              <ChevronDown className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180 w-4 h-4 ml-auto" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.subItems.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild className="pl-3">
                    <a href={subItem.url}>
                      <span className="">{subItem.title}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    );
  } else {
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild className="flex gap-3">
          <a href={item.url}>
            <item.icon className="" />
            <span className="">{item.title}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }
}
