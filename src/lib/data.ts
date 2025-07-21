import type { MenuItem } from "@/types/transaction";
import {
  Home,
  TrendingUp,
  PieChart,
  ArrowLeftRight,
  FileText,
  CreditCard,
  FileBarChart,
  Users,
} from "lucide-react";

export const menuItems: MenuItem[] = [
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
