import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Contact } from "./components/Contact.jsx";
import { About } from "./components/About.jsx";
import { Country } from "./components/Country.jsx";
import { ErrorPage } from "./components/ErrorPage.jsx";
import { CountryDetails } from "./components/CountryDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/country", element: <Country /> },
      { path: "/country/:id", element: <CountryDetails /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
