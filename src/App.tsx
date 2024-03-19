import { ToastContainer } from "react-toastify";
import Home from "./pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      <Home />
    </QueryClientProvider>
  );
}

export default App;
