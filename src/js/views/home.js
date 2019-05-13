import React from "react";
import AnimateText from "../components/animateText";
import DrawPolygon from "../components/drawPolygon";


const Home = props => {
    return(
     <div className="page-home">
       <AnimateText/>
       <DrawPolygon />
     </div>);
};

export default Home;