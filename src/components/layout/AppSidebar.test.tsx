import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import AppSidebar from "./AppSidebar";
import "@testing-library/jest-dom/vitest";
import { SidebarProvider } from "@/components/ui/sidebar";
vi.mock("@/lib/data", () => ({
  menuItems: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: () => <svg data-testid="dashboard-icon" />,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: () => <svg data-testid="settings-icon" />,
      hasDropdown: true,
      subItems: [
        { title: "Profile", url: "/settings/profile" },
        { title: "Security", url: "/settings/security" },
      ],
    },
  ],
}));

function renderWithProvider(ui: React.ReactNode) {
  return render(<SidebarProvider>{ui}</SidebarProvider>);
}

describe("AppSidebar", () => {
  it("renders the logo and app name", () => {
    renderWithProvider(<AppSidebar />);
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByText("Lamha App")).toBeInTheDocument();
  });

  it("renders menu items", () => {
    renderWithProvider(<AppSidebar />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Security")).toBeInTheDocument();
  });

  it("opens the user dropdown menu", async () => {
    renderWithProvider(<AppSidebar />);
    const user = userEvent.setup();
    await user.click(screen.getByText("Username"));
    expect(screen.getByText("Sign out")).toBeInTheDocument();
  });
});
