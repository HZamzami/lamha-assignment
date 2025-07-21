import {
  Home,
  TrendingUp,
  PieChart,
  ArrowLeftRight,
  FileText,
  CreditCard,
  FileBarChart,
  Users,
  ChevronDown,
  type LucideIcon,
  User2,
  ChevronUp,
} from "lucide-react";

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
} from "@/components/ui/sidebar";

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
} from "../ui/dropdown-menu";

type MenuItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  hasDropdown?: boolean;
  subItems?: { title: string; url: string }[];
};

const menuItems: MenuItem[] = [
  { title: "Home", url: "#", icon: Home },
  { title: "Cash Flow", url: "#", icon: TrendingUp },
  { title: "Budget", url: "#", icon: PieChart },
  { title: "Transaction", url: "#", icon: ArrowLeftRight },
  { title: "Invoice", url: "#", icon: FileText },
  { title: "Bill Pay", url: "#", icon: CreditCard },
  {
    title: "Tax Report",
    url: "#",
    icon: FileBarChart,
    hasDropdown: true,
    subItems: [
      { title: "VAT", url: "#" },
      { title: "Withholding", url: "#" },
    ],
  },
  { title: "Card", url: "#", icon: CreditCard },
  { title: "Team", url: "#", icon: Users },
];

export default function AppSidebar() {
  return (
    <Sidebar className="border-r " collapsible="icon">
      <SidebarHeader className="pt-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/">
                <img
                  src="/lamha-logo.svg"
                  alt="Logo"
                  className="w-8 h-8"
                />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4 md:space-y-6">
              {menuItems.map(renderMenuItem)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="pb-4">
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
            <SidebarMenuButton className=" cursor-pointer">
              <item.icon className="!w-5 !h-5" />
              <span className="text-base ">{item.title}</span>
              <ChevronDown className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180 w-5 h-5 ml-auto" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.subItems.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild>
                    <a href={subItem.url}>
                      <span className="text-sm">{subItem.title}</span>
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
        <SidebarMenuButton asChild className="flex gap-2">
          <a href={item.url}>
            <item.icon className="!w-5 !h-5" />
            <span className="text-base">{item.title}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }
}
