import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Relojes from "../Pages/Relojes";
import Rebajas from "../Pages/Rebajas";
import Root from "../Routes/Root";
import AuthForm from "../Pages/AuthForm";
import Categories from "../Pages/Categories";
import ProductDetail from "../Pages/ProductDetail";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root /> ,
        
        children: [
            {
                path: "/HC/Home",
                element: <Home />
            },
            {
                path: "/HC/Relojes",
                element: <Relojes />
                
            },

            {
                path: "/HC/Rebajas",
                element: <Rebajas />
            },
            {
                path: "/HC/AuthForm",
                element: <AuthForm />
              
            },
            {
                path: "/HC/Categorias",
                element: <Categories />
            },

            {
                path: "/HC/Productos/:productById", 
                element: <ProductDetail />
            }
        ]

    },

]);

export default router