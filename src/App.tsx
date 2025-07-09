
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import ThreatsPage from "./pages/ThreatsPage";
import ThreatDetailPage from "./pages/ThreatDetailPage";
import VideosPage from "./pages/VideosPage";
import PostersPage from "./pages/PostersPage";
import QuizPage from "./pages/QuizPage";
import QuizDetailPage from "./pages/QuizDetailPage";
import ThreatDashboardPage from "./pages/ThreatDashboardPage";
import LinkCheckerPage from "./pages/LinkCheckerPage";
import SecurityProfilePage from "./pages/SecurityProfilePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
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
            <Route path="/threat-dashboard" element={<ThreatDashboardPage />} />
            <Route path="/link-checker" element={<LinkCheckerPage />} />
            <Route path="/security-profile" element={<SecurityProfilePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
