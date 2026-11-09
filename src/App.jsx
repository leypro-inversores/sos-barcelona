
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageNotFound from "./lib/PageNotFound";
import Home from "./pages/Home";
import Calendario from "./pages/Calendario";
import Cursos from "./pages/Cursos";
import Pastores from "./pages/Pastores";
import Colaboradores from "./pages/Colaboradores";
import Ninos from "./pages/Ninos";
import PoliticaDePrivacidad from "./pages/PoliticaDePrivacidad";
import Navbar from "./components/landing/Navbar";

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/pastores" element={<Pastores />} />
          <Route path="/colaboradores" element={<Colaboradores />} />
          <Route path="/ninos" element={<Ninos />} />
          <Route
            path="/politica-de-privacidad"
            element={<PoliticaDePrivacidad />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>

      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
