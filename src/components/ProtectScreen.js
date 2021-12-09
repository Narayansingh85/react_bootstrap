import Cookies from "js-cookie";
import React from "react";
import { Redirect } from "react-router";
import { Route } from "react-router-dom";

function ProtectScreen({  component: Component,path, ...rest }) {
    const auth = Cookies.get('Token')
    
    return (
      <Route to="/main"
        {...rest}
        render={(props)=>{
          if (auth) {
            return <Component/>
          }
          else {
           return <Redirect to="/login"/>
        }
        }}

      />
    );
  } 


export default ProtectScreen;
