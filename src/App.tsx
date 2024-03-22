import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import Consultancy from "./pages/consultancy";
import DataAnalysis from "./pages/dataAnalysis";
import Support from "./pages/support";
import Development from "./pages/development";
import Blog from "./pages/blog";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="bottom-right"
        theme="colored"
        hideProgressBar
        autoClose={3000}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/politica-privacidade" Component={Privacy} />
          <Route path="/consultoria-tecnologica" Component={Consultancy} />
          <Route path="/analise-de-dados" Component={DataAnalysis} />
          <Route path="/suporte-tecnico" Component={Support} />
          <Route path="/desenvolvimento" Component={Development} />
          <Route path="/blog" Component={Blog} />
          <Route path="*" Component={Home} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
