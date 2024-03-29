import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App";
import Show3 from "./pages/Show";
import Index from "./pages/Index";
import Edit from "./pages/Edit";
// import Map from "./pages/Map";

import { indexLoader, showLoader2 } from "./loaders";
import { createAction2, createStageAction, deleteAction, updateAction } from "./actions";
// import { updateAction2 } from "./actions";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={indexLoader} />
            {/* <Route path="process/:id" element={<Show/>} loader={showLoader}/> */}
            <Route path="process/:id" element={<Show3/>} loader={showLoader2}/>
            {/* <Route path="process/:id/map" element={<Map/>} loader={showLoader2}/> */}
  

            <Route path="process/create" action={createAction2}/>
            <Route path="process/stage/:id" action={createStageAction}/>
            <Route path="process/:id/update" element={<Edit/>} loader={showLoader2} action={updateAction} />
            {/* <Route path="process/:id/edit" action={updateAction2} /> */}
            <Route path="process/:id/delete" action={deleteAction} />
        </Route>
    </>
))

export default router
