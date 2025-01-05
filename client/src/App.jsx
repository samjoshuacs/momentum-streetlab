import { useState, useEffect } from "react";
import axios from "axios";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// styles
import "./assets/css/index.css";

// layouts
import LandingLayout from "./layouts/LandingLayout";
import UserLayout from "./layouts/UserLayout";

// pages
import LandingPage from "./pages/LandingPage";
import ListPage from "./pages/ListPage";
import TaskPage from "./pages/TaskPage";

// request functions

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="register" element={<LandingPage />} />
          <Route path="reset" element={<LandingPage />} />
        </Route>
        <Route path="/:id/" element={<UserLayout />}>
          <Route index element={<ListPage />} />
          <Route path="dashboard" element={<ListPage />} />
          <Route path="dashboard/:id" element={<TaskPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
