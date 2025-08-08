import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your main page and error page
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout"; // Add this import

// CORRECTED: The import path now matches the actual filename's capitalization.
// This assumes your file is named 'About.tsx'.
import AboutPage from "@/pages/About.tsx"; 
import Blog from "@/pages/Blog.tsx";
import BrandingPage from "@/pages/Br.tsx"; // Add this import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* This route is for your main homepage */}
            <Route index element={<Index />} />

            {/* This route is for the standalone About page */}
            <Route path="/about" element={<AboutPage />} />

            {/* This route is for the standalone Blog page */}
            <Route path="/blog" element={<Blog />} />

            {/* This route is for the standalone Branding page */}
            <Route path="/branding" element={<BrandingPage />} />

            {/* This is the catch-all "Not Found" route, it must be last */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
