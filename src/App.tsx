import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import Consultancy from "./pages/consultancy";
import DataAnalysis from "./pages/dataAnalysis";
import Support from "./pages/support";
import Development from "./pages/development";
import Blog from "./pages/blog";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/politica-privacidade",
    element: <Privacy />,
  },
  {
    path: "/consultoria-tecnologica",
    element: <Consultancy />,
  },
  {
    path: "/analise-de-dados",
    element: <DataAnalysis />,
  },
  {
    path: "/suporte-tecnico",
    element: <Support />,
  },
  {
    path: "/desenvolvimento",
    element: <Development />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="bottom-right"
        theme="colored"
        hideProgressBar
        autoClose={3000}
      />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
