import React from "react";
import { Redirect } from "react-router";
import { Route } from "react-router-dom";
import {useSelector} from 'react-redux'

function ProtectScreen({  component: Component,path, ...rest }) {
    const state = useSelector(state => state.login)
    console.log(state)
    return (
      <Route to="/main"
        {...rest}
        render={(props)=>{
          if (state) {
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
