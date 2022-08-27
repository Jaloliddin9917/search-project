
import { Route, Switch } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

import Layout from "./Components/Layout";
import Application from "./pages/Applications/Applications";
import Borrower from "./pages/Borrower/Borrower";
import Agreement from "./pages/Agreement/Agreement";
import List from "./pages/list/List";
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <QueryClientProvider client={queryClient}>
     
          <Switch>
            <Route path={"/"} exact component={Borrower} />
            <Route path={"/borrower"} component={Borrower} />
            <Route path={"/applications"} component={Application} />
            <Route path={"/agreement"} component={Agreement} />
            <Route path={"/list"} component={List} />
          </Switch>
     
      </QueryClientProvider>
    </div>  
  );
}

export default App;
