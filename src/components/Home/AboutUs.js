import React from "react";
import SectionTitle from "./Repeatable/Title";


function AboutUs() {
    return (
        <div name="about" className="about flex">
            <div className="aboutText flex">
                <SectionTitle title="O nas"/>
                <div className="aboutTextDescription">Lorem ipsum dolor sit amet, tempor incididunt. Ut exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate.
                </div>
            </div>
            <div className="aboutImage"></div>
        </div>
    )
};

export default AboutUs;