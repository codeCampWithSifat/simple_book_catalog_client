import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import BookDetail from "../pages/BookDetail";
import EditBook from "../components/EditBook";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./privateRoute";
import WishList from "../pages/WishList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
      {
        path: "/addbook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookdetail",
        element: (
          <PrivateRoute>
            <BookDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/editbook/:id",
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
