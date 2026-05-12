import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllMovie from "../Pages/AllMovie";
import MovieDetails from "../Pages/MovieDetails";
import MyCollection from "../Pages/MyCollection";
import PrivateRouter from "../Contexts/PrivateRouter";
import AddMovie from "../Pages/AddMovie";
import UpdateMovie from "../Pages/UpdateMovie";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/top-rated"),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/allMovie",
        Component: AllMovie,
        loader: () => fetch("http://localhost:3000/movie"),
      },
      {
        path: "/movieDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/movie/${params.id}`),
        Component: MovieDetails,
      },
      {
        path: "/myCollection",
        element: (
          <PrivateRouter>
            <MyCollection></MyCollection>
          </PrivateRouter>
        ),
      },
      {
        path: "/addMovie",
        element: (
          <PrivateRouter>
            <AddMovie></AddMovie>
          </PrivateRouter>
        ),
      },
      {
        path: "/updateMovie/:id",
        element: (
          <PrivateRouter>
            <UpdateMovie></UpdateMovie>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/movie/${params.id}`),
      },
    ],
  },
]);

export default router;
