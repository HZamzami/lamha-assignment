import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./components/layout/AppSidebar";
import AppHeader from "./components/layout/AppHeader";
import { DataTable } from "./components/transaction/data-table";
import { columns } from "./components/transaction/columns";
import { mockTransactions } from "./lib/data";

function App() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <main className="w-full min-h-screen px-4 py-6 space-y-10 overflow-hidden">
          <AppHeader />
          <DataTable columns={columns} data={mockTransactions} />
        </main>
      </div>
    </SidebarProvider>
  );
}

export default App;
