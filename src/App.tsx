import { Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DarkModeProvider } from "./Contexts/DarkModeContext";
import { ToggleProvider } from "./Contexts/ToggleContext";

// Authentication Pages
import Auth from "./Pages/Authentication/Auth";
import CompleteProfile from "./Pages/Authentication/CompleteProfile";

// Other Pages
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import NotAccess from "./Pages/NotAccess";
import ProtectedRoute from "./UI/ProtectedRoute";

// Owner Pages and Layout
import OwnerLayout from "./Features/Owner/OwnerLayout";
import OwnerDashboard from "./Pages/Owner/OwnerDashboard";
import OwnerProjects from "./Pages/Owner/OwnerProjects";
import OwnerProject from "./Pages/Owner/OwnerProject";

// Freelancer Pages and Layout
import FreelancerLayout from "./Features/Freelancer/FreelancerLayout";
import FreelancerDashboard from "./Pages/Freelancer/FreelancerDashboard";
import SubmittedProjects from "./Pages/Freelancer/SubmittedProjects";
import FreelancerProposals from "./Pages/FreelancerProposals";

// Admin Pages and Layout
import AdminLayout from "./Features/Admin/AdminLayout";
import AdminDashboard from "./Pages/AdminDashboard";
import Users from "./Pages/Users";
import Projects from "./Pages/Projects";
import Proposals from "./Pages/Proposals";
import Categories from "./Pages/Categories";

const queryClient = new QueryClient();

function App() {
  return (
    <ToggleProvider>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          <Toaster />

          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />

            <Route
              path="/owner"
              element={
                <ProtectedRoute>
                  <OwnerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<OwnerProjects />} />
              <Route path="projects/:id" element={<OwnerProject />} />
            </Route>

            <Route
              path="/freelancer"
              element={
                <ProtectedRoute>
                  <FreelancerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<FreelancerDashboard />} />
              <Route path="projects" element={<SubmittedProjects />} />
              <Route path="proposals" element={<FreelancerProposals />} />
            </Route>

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="projects" element={<Projects />} />
              <Route path="proposals" element={<Proposals />} />
              <Route path="categories" element={<Categories />} />
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/not-access" element={<NotAccess />} />
          </Routes>
        </QueryClientProvider>
      </DarkModeProvider>
    </ToggleProvider>
  );
}

export default App;
