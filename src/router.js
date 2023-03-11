import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App";
import Show from "./pages/Show";
import { showLoader } from "./loaders";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
           
            <Route path=":123" element={<Show/>} loader={showLoader}/>
           
        </Route>
    </>
))

export default router
