import AnimateText from "../animateText";
import Anime from "react-anime";
import React from "react";

const Profile=()=> (
    <div className="page-profile has-text-centered">
        <h2>Profile</h2>
        <p className="med-width">
            "I am a professional full-stack developer that primarily builds websites on PHP based open source CMS and moving towards node.js. My variety of work involvement has grown my skills over to web design,
            accessibility and basic server administration."
        </p>
        <h4> What have I done on my experience so far? </h4>
        <ul className="has-text-left">
            <li>Build &amp; design sites from scratch for different devices. These can be for small businesses to large enterprises within teams or myself.</li>
            <li>Building small to large complex forms with custom validation checking, and integrate them to payment systems / micro-services and have user details into database SQL tables within teams or myself.</li>
            <li>Build a simple query form to fetch user details and display them on the page.</li>
            <li>Build technical solutions that require little knowledge for non-technical personnel for updates and maintenance.</li>
            <li>Rewrite urls with htaccess on apache servers (for both security and SEO purposes).</li>
            <li>Setting up site accounts, email and hosting through Apache cpanel and rewrite URLS through DNS.</li>
            <li>More to come &hellip;</li>
        </ul>
    </div>
);

export default Profile;