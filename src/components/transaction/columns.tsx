import type { Transaction } from "@/types/transaction";
import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// custom filter for date
const dateRangeFilter = (
  row: any,
  columnId: string,
  filterValue: any
) => {
  const [startDate, endDate] = filterValue || [];
  if (!startDate) return true;

  const cellValue = row.getValue(columnId) as string;

  // force dd/mm/yyyy
  const [day, month, year] = cellValue.split("/");
  const cellDate = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day)
  );

  if (isNaN(cellDate.getTime())) return false;
  if (startDate && cellDate < startDate) return false;
  if (endDate && cellDate > endDate) return false;

  return true;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "date",
    header: "Date",
    filterFn: dateRangeFilter,
  },
  {
    accessorKey: "member",
    header: "Member",
  },
  {
    accessorKey: "budget",
    header: "Budget",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "vendor",
    header: "Vendor",
  },
  {
    accessorKey: "invoiceNumber",
    header: "Invoice #",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ getValue }) => {
      const amount = getValue<number>();
      const formattedAmount = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount);

      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/new_sar_symbol.svg"
            alt="New Saudi Riyal Symbol"
            style={{ height: "1em", marginRight: "0.2em" }}
          />
          <span>{formattedAmount}</span>
        </div>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(payment.id)
              }
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
