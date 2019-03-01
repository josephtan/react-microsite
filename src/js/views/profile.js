import React from "react";

const Profile =()=> (
    <div className="page-profile has-text-centered">
        <h2>Profile</h2>
        <p className="med-width">
            "I am a professional full-stack developer that primarily builds websites on PHP based open source CMS and currently have hands on commercial experience in Webpack, yarn npm custom build. My participation outside the confines of my past roles has grown my skills over to web design,
            accessibility and basic server administration."
        </p>
        <h4> What have I done on my experience so far? </h4>
        <ul className="has-text-left">
            <li>Build &amp; design sites from scratch for different devices. These can be for small businesses to large enterprises within teams or myself.</li>
            <li>Building small to large complex forms with custom validation checking, and integrate them to payment systems / micro-services and have form data written into SQL tables.</li>
            <li>Build a simple search query to fetch user details and display them on the page.</li>
            <li>Build technical solutions that require little knowledge for non-technical personnel for updates and maintenance.</li>
            <li>Rewrite urls with htaccess on apache servers (for both security and SEO purposes).</li>
            <li>Setting up site accounts, email and hosting through Apache cpanel and rewrite URLS through DNS.</li>
            <li>Generating up RSA keys on Linux machines, open an EC2 instance, assigning elastic IP's on AWS dashboard.</li>
            <li>More to come &hellip;</li>
        </ul>
    </div>
);

export default Profile;