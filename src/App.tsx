import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import Home from "@pages/Home";
import Academics from "@pages/Academics";
import NotFound from "@pages/NotFound";
import Main from "@layout/Main";
import { AppProvider } from "@context/AppContext";

//TODO: Review loaders

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Main>
        <Home />
        <ScrollRestoration />
      </Main>
    ),
  },
  {
    path: "/academics",
    element: (
      <Main>
        <Academics />
        <ScrollRestoration />
      </Main>
    ),
  },
  {
    path: "*",
    element: (
      <Main>
        <NotFound />
      </Main>
    ),
  },
]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
