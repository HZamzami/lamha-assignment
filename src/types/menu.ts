import type { LucideIcon } from "lucide-react";

export type MenuItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  hasDropdown?: boolean;
  subItems?: { title: string; url: string }[];
};
