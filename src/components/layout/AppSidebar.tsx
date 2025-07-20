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
    <Sidebar className="border-r">
      <SidebarHeader className="p-4 px-6">
        <div className="flex items-center gap-2">
          <img src="/lamha-logo.svg" alt="Logo" className="w-8 h-8" />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4">
              {menuItems.map(renderMenuItem)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
            AA
          </div>
          <span className="text-sm font-medium text-gray-900">
            Ahmed Abbas
          </span>
        </div>
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
            <SidebarMenuButton className="flex gap-2 items-center justify-between w-full cursor-pointer">
              <div className="flex gap-2 items-center">
                <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-base md:text-lg">
                  {item.title}
                </span>
              </div>
              <ChevronDown className="transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180 w-5 h-5 md:w-6 md:h-6" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.subItems.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild>
                    <a href={subItem.url}>
                      <span className="text-sm md:text-base">
                        {subItem.title}
                      </span>
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
            <div className="flex gap-2 items-center">
              <item.icon className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-base md:text-lg">
                {item.title}
              </span>
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }
}
