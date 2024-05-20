import "./App.css";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import myStore2 from "./ReduxToolkit/store";
import CartItems from "./Components/CartItems";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: '/addeditems',
      element: <CartItems />
    }
  ]
  )
  return (
    <>
      <Provider store={myStore2}>
{/* <Home /> */}
{/* <ChecK /> */}
      <RouterProvider router={route}></RouterProvider>

      </Provider>
    </>
  );
}

export default App;
