import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Biluthyrning from "@/pages/biluthyrning";
import Flytt from "@/pages/flytt";
import Transport from "@/pages/transport";
import Priser from "@/pages/priser";
import Kontakt from "@/pages/kontakt";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/biluthyrning" component={Biluthyrning} />
        <Route path="/flytt" component={Flytt} />
        <Route path="/transport" component={Transport} />
        <Route path="/priser" component={Priser} />
        <Route path="/kontakt" component={Kontakt} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  const [location] = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header currentPath={location} />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
