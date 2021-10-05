import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function Router(){
    return(
        <BrowserRouter>
        <ProtectedRoute exact path="/" component={App}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        </BrowserRouter>
    )
}
export default Router;