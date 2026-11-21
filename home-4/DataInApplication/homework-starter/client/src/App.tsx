import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Account } from "./components/Account/Account";
import { queryClient } from "./api/queryClient";

function App() {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Account />
      </QueryClientProvider>
    </div>
  );
}

export default App;
