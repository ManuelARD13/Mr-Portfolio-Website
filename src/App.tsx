import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import NotFound from "./pages/NotFound";
import Main from "./layout/Main";

//TODO: Review loaders

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Main>
        <Home />
      </Main>
    ),
  },
  {
    path: "/academics",
    element: (
      <Main>
        <Academics />
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
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
