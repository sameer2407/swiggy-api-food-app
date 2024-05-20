import { useState } from "react";

import "./App.css";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}
export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu></RestaurantMenu>,
      },
    ],
    errorElement: <Error></Error>,
  },
]);

export default App;
