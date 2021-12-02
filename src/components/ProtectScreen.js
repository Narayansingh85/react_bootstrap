import React from "react";
import { Redirect} from "react-router";
import { BrowserRouter as Route } from "react-router-dom";

function ProtectScreen({ auth, Component: Component, ...rest }) {

  return (
    <div>
      {
      
        <Route
        {...rest}
          path="/main"
          render={() => {
            <Component/>;
          }}
        />
        }
    </div>
  );
}

export default ProtectScreen;
