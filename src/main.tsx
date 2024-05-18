import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { store } from "./app/store.ts";
import { Paths } from "./paths.ts";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import Auth from "./features/auth/Auth.tsx";
import "./index.scss";

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
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
