import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./pages/HomePage";

import "../src/style/App.scss";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
          <ToastContainer />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
