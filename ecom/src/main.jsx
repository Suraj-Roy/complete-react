import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Kid from "./custom-components/Kid";
import Men from "./custom-components/Men";
import Error from "./custom-components/Error";

import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ProductDetails from './custom-components/ProductDetails.jsx';

const appRouter = createBrowserRouter([
  {path:"/",
    element:<App/>,
    errorElement:<Error/>
  },
  {
    path:"/kids",
    element:<Kid/>
  },
  {
    path:"/men",
    element:<Men/>
  },
  {
    path:"/product/:productId",
    element:<ProductDetails />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={appRouter} />
  </StrictMode>,
)
