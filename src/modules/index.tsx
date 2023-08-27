import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/reducer";
import AuthHomeScreen from "./auth/authHome";

const MainScreen=()=>{

    return(
        <div>
          <AuthHomeScreen/>
        </div>
    )
}
export default MainScreen