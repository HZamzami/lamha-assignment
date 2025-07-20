import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "./components/layout/AppSidebar";
import AppHeader from "./components/layout/AppHeader";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen">
        <div className="container mx-auto px-4 py-6">
          <AppHeader />
        </div>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  );
}

export default App;
