import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/AppSidebar";
import AppHeader from "@/components/layout/AppHeader";
import { DataTable } from "@/components/transaction/data-table";
import { columns } from "@/components/transaction/columns";
import { mockTransactions } from "@/lib/data";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
function App() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <main className="w-full min-h-screen px-4 py-6 space-y-10 overflow-hidden">
          <AppHeader />
          <Tabs defaultValue="transaction">
            <TabsList className="bg-transparent">
              <TabsTrigger value="transaction">
                Transaction
              </TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
            </TabsList>
            <TabsContent value="transaction">
              <DataTable columns={columns} data={mockTransactions} />
            </TabsContent>
            <TabsContent
              value="draft"
              className="mx-auto text-lg mt-4"
            >
              To be implemented.
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default App;
