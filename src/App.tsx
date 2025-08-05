import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your main page and error page
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// CORRECTED: The import path now matches the actual filename's capitalization.
// This assumes your files are named 'About.tsx' and 'Contact.tsx'.
import AboutPage from "@/pages/About.tsx"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* This route is for your main homepage */}
          <Route path="/" element={<Index />} />

          {/* This route is for the standalone About page */}
          <Route path="/about" element={<AboutPage />} />

          {/* This is the catch-all "Not Found" route, it must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
