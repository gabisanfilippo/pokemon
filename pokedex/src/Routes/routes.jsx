import { Route, Routes } from "react-router-dom";

import Home from "../views/Home";

const RoutesApp = () => {
   return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
   )
}

export default RoutesApp;