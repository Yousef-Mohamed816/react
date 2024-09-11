// import "./App.css"
import React from "react"
import Banner from "./Banner"
import Homecategory from "./Homecategory"
import CategoryShowCase from "./CategoryShowCase"
import Register from "./Register"
import LocaitconSprade from "./LocaitconSprade"
import AboatUS from "./AboatUS"
import AppSection from "./AppSection"
import Sponso from "./Sponso"







const Home = () => {
    return (
        <div>
            <Banner/>
    
           
            <Homecategory/>
            <CategoryShowCase/>
            <Register/>
            <LocaitconSprade/>
            <AboatUS/>
            <AppSection/>
            <Sponso/>
        </div>
    )
}

export  default Home


