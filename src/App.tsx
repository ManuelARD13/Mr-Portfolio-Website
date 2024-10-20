import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  HashRouter as Router,
} from "react-router-dom";
import Home from "@pages/Home";
import Academics from "@pages/Academics";
import NotFound from "@pages/NotFound";
import Main from "@layout/Main";
import { AppProvider } from "@context/AppContext";
import Projects from "@pages/Projects";

//TODO: Review loaders

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Main videoBackground>
        <Home />
        <ScrollRestoration />
      </Main>
    ),
  },
  {
    path: "/academics/:certification?",
    element: (
      <Main videoBackground>
        <Academics />
        <ScrollRestoration />
      </Main>
    ),
  },
  {
    path: "/projects/:projectTitle?",
    element: (
      <Main>
        <Projects />
        <ScrollRestoration />
      </Main>
    ),
  },
  {
    path: "*",
    element: (
      <Main videoBackground>
        <NotFound />
      </Main>
    ),
  },
]);

function App() {
  return (
    // <Router>
    //   <AppProvider>
    //     <RouterProvider router={router} />
    //   </AppProvider>
    // </Router>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
