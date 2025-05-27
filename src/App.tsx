import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { DataProvider } from "./contexts/DataContext";
import { GoogleAuthProvider } from "./contexts/GoogleAuthContext";
import Admin from "./pages/Admin";
import CreateList from "./pages/CreateList";
import Jobs from "./pages/Jobs";
import Subscription from "./pages/Subscription";

const queryClient = new QueryClient();

const GOOGLE_CLIENT_ID = "799308494946-k4iqrjkh1b53ou7o1iaamtvc0k11h3pk.apps.googleusercontent.com";

const App = () => (
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <DataProvider>
      <BrowserRouter>
        <GoogleAuthProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/home" element={<Index />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/create-list" element={<CreateList />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/subscription" element={<Subscription />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </TooltipProvider>
          </QueryClientProvider>
        </GoogleAuthProvider>
      </BrowserRouter>
    </DataProvider>
  </GoogleOAuthProvider>
);

export default App;
