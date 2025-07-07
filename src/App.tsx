
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ThreatsPage from "./pages/ThreatsPage";
import ThreatDetailPage from "./pages/ThreatDetailPage";
import VideosPage from "./pages/VideosPage";
import PostersPage from "./pages/PostersPage";
import QuizPage from "./pages/QuizPage";
import QuizDetailPage from "./pages/QuizDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/threats" element={<ThreatsPage />} />
          <Route path="/threats/:id" element={<ThreatDetailPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/posters" element={<PostersPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz/:id" element={<QuizDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
