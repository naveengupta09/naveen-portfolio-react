import React, { useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { TooltipProvider } from "./components/ui/tooltip";
import { useGithubStore } from "./stores/useGithubStore";

const App = () => {
  const {fetchContributions} = useGithubStore();
  useEffect(()=>{
    fetchContributions("naveengupta09");
  }, [fetchContributions])
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
