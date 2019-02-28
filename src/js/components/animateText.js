import React, {Component} from "react";
import Anime from "react-anime";
import {spanLettering} from "./utils/spanLettering";

export default class animateText extends Component{
    constructor(props){
        super(props);
        this.title = "Front End Engineer";
        this.title2 = "Fullstack Developer";
        this.description = "For the simplicity of things my profession involves in making things dance on the screen.";
        this.aniOpacity = [0,1];
        this.scaleX = [4,1];
    }
    render(){
        let fsd ={};
        fsd.scaleIn = [0,1];
        fsd.duration =[800];
        fsd.durationOut= [600];
        return(
            <div className="block__relative has-text-centered">
                <h3 className="fed">
                    <Anime  key={2+Date.now()} loop={true} scaleX={this.scaleX} opacity={this.aniOpacity} easing={"easeOutExpo"} duration={950} direction="alternate" delay={(el, index) => index * 80} >
                        {spanLettering(this.title)}
                    </Anime>
                </h3>
                <h3 className="fsd">
                    <Anime  key={3+Date.now()} loop={true} scale={fsd.scaleIn} elasticity={600} duration={fsd.duration} direction="alternate" delay={(el, index) => {return 45 * (index+ 1)}}>
                        {spanLettering(this.title2)}
                    </Anime>
                 </h3>
                <p className="description">
                    <Anime  key={4+Date.now()} loop={true} translateX={[40,0]} opacity={[0,1]} easing={"easeOutExpo"} duration={1400} delay={(el, index) => {return 500  + (30 * index)}}>
                        {spanLettering(this.description)}
                    </Anime>
                </p>
            </div>
        )
    }
}