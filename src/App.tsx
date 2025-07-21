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
      <main className="w-full min-h-screen px-4 py-6">
        <SidebarTrigger />
        <AppHeader />
      </main>
    </SidebarProvider>
  );
}

export default App;
