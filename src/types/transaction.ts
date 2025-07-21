import type { LucideIcon } from "lucide-react";

export type MenuItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  hasDropdown?: boolean;
  subItems?: { title: string; url: string }[];
};
export interface Transaction {
  id: string;
  status: "pending" | "approved" | "rejected";
  date: string;
  member: string;
  budget: string;
  type: string;
  vendor: string;
  invoiceNumber: string;
  amount: number;
}
