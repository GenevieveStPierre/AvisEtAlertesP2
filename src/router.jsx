import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageAlertDetails from "./pageAlertDetails";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/alert/:id", element: <PageAlertDetails /> },
]);
