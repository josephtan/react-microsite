import AnimateText from "../animateText";
import DrawPolygon from "../drawPolygon";


const Home=()=> (
     <div className="page-home">
       <AnimateText/>
       <DrawPolygon />
         <div className="has-text-centered">
         <p>Web activities and external links:</p>
             <ul className="no-liststyle list-inline white-link font-smaller">
                 <li><a href="https://github.com/josephtan" target="_blank"><span className="font-fa-brands fa-github"></span></a></li>
                 <li><a href="https://codepen.io/josephtan/"  target="_blank"><span className="font-fa-brands fa-codepen"></span></a></li>
                 <li><a href="https://www.meetup.com/" target="_blank"><span className="font-fa-brands fa-meetup"></span></a></li>
                 <li><a href="https://www.slack.com/" target="_blank"><span className="font-fa-brands fa-slack"></span></a></li>
                 <li><a href="https://jsfiddle.net/user/JosephTan/fiddles/" target="_blank"><span className="font-fa-brands fa-fiddle"></span></a></li>
                 <li><a href="https://www.linkedin.com/in/joetan83/" target="_blank"><span className="font-fa-brands fa-linkedin"></span></a></li>
             </ul>
         </div>
     </div>
);

export default Home;