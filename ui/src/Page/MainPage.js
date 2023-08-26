import React from "react";
import MainSlide from "../MainSlide/MainSlide";
import NavComponent from "../Nav/NavComponent";

function MainPage(){
    return(
        <div>
        <NavComponent />
        <MainSlide/>
        </div>
    );
}

export default MainPage;