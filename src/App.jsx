import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import Login from "./Login";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Cart";
import Register from "./Register";

import Order from "./Order";

function App() {
  const [namee, setName] = useState();

  useEffect(() => {
    const student = {
      name: "Sameer",
    };

    setName(student.name);
  });

  return (
    <Provider store={appStore}>
      <>
        <UserContext.Provider value={{ loggedInUser: `${namee}` }}>
          <Header></Header>
          <Outlet></Outlet>
        </UserContext.Provider>
      </>
    </Provider>
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

      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/cart/order",
        element: <Order></Order>,
      },
    ],
    errorElement: <Error></Error>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Register></Register>,
  },
]);

export default App;
