import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { DataTable } from "./DataTable";
import { Columns } from "./Columns";
import type { Transaction } from "@/types/transaction";

const testData: Transaction[] = [
  {
    id: "1",
    status: "approved",
    date: "10/07/2025",
    member: "Hamza",
    budget: "Marketing",
    type: "Expense",
    vendor: "Vendor A",
    invoiceNumber: "INV-001",
    amount: 1234.56,
  },
  {
    id: "2",
    status: "pending",
    date: "12/07/2025",
    member: "Ali",
    budget: "Sales",
    type: "Expense",
    vendor: "Vendor B",
    invoiceNumber: "INV-002",
    amount: 789.0,
  },
];

describe("DataTable", () => {
  it("renders table rows and allows member filtering", async () => {
    render(<DataTable data={testData} columns={Columns} />);
    const user = userEvent.setup();

    // Both rows should be visible initially
    expect(screen.getByText("Hamza")).toBeInTheDocument();
    expect(screen.getByText("Ali")).toBeInTheDocument();

    // Type a name that matches only one row
    const input = screen.getByPlaceholderText(/search members/i);
    await user.clear(input);
    await user.type(input, "Hamza");

    // Should show only Hamza
    expect(screen.getByText("Hamza")).toBeInTheDocument();
    expect(screen.queryByText("Ali")).not.toBeInTheDocument();

    // Type a name that matches no one
    await user.clear(input);
    await user.type(input, "Ahmed");

    expect(screen.getByText("No results.")).toBeInTheDocument();
  });
});
