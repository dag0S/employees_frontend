import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./app/store.ts";
import { Paths } from "./paths.ts";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <div>Employees</div>,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
