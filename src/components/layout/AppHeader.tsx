import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { ChevronDown, Plus } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";

export default function AppHeader() {
  return (
    <header>
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center justify-between">
        <div className="flex items-center space-x-4 self-baseline">
          <SidebarTrigger className="cursor-pointer" />
          <h1 className="text-2xl font-semibold">Transaction</h1>
        </div>
        <div className="flex  items-center space-x-3 self-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 bg-transparent"
              >
                Other section
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                Request reimbursement
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="gap-2 bg-emerald-500 hover:bg-emerald-600">
            <Plus className="h-4 w-4" />
            Create New
          </Button>
        </div>
      </div>
    </header>
  );
}
