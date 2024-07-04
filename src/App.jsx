//rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Layout
import MainLayout from "./layout/MainLayout";
//Pages
import { Home, About, Contact, Login, Register, ErrorPage } from "./pages";

//actions
import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useGlobalContext } from "./hooks/useGlobalContext";

function App() {
  const { user } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      childer: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "login",
      element: user ? <Navigate /> : <Login />,
      errorElement: <ErrorPage />,
      action: LoginAction,
    },
    {
      path: "register",
      element: user ? <Navigate /> : <Register />,
      errorElement: <ErrorPage />,
      action: RegisterAction,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
