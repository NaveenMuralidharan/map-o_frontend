import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App";
import Show from "./pages/Show";
import Index from "./pages/Index";
import { indexLoader, showLoader, showLoader2 } from "./loaders";
import { createAction } from "./actions";
const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="process" element={<Index/>} loader={indexLoader} />
            {/* <Route path="process/:id" element={<Show/>} loader={showLoader}/> */}
            <Route path="process/:id" element={<Show/>} loader={showLoader2}/>
            <Route path="process/create" action={createAction}/>
        </Route>
    </>
))

export default router
