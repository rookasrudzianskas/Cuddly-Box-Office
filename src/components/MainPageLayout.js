import React from "react";
import Navs from "./Navs";
import Title from "./Title";


const MainPageLayout = ({ children }) => {
    return (
        <div>
            <Title title="Box office" subtitle="Are you looking fpr a movie or an actor?"/>
            <Navs/>
            {children}
        </div>
    )
}

export default MainPageLayout;