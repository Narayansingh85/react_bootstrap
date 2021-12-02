import React from "react";
import HomeScreen from "../screens/HomeScreen";
import Registration from "../screens/Registration";
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";
import ProtectScreen from "../components/ProtectScreen";
import { BrowserRouter as Switch, Route } from "react-router-dom";

function Routes() {
  const [auth, setAuth] = React.useState(false);

  // const getCookie = ()=>{
  //   const user = Cookies.get("New")
  //   if(user){
  //     setAuth(true)
  //   }
  // }
  
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={HomeScreen} />
        <Route path="/registration" exact={true} component={Registration} />
        <Route
          path="/login"
          exact={true}
          component={()=>(<LoginScreen setAuth={setAuth}/>)}
          // setSave={setSave}
        />
        {/* <Route
          path="/main"
          exact={true}
          component={MainScreen}
        /> */}
        <Route path="/main" exact={true}  component={()=>(<ProtectScreen component={MainScreen}/>)}  />
      </Switch>
    </div>
  );
}
// component={()=>(<ProtectScreen auth={auth} Component={MainScreen}
export default Routes;
