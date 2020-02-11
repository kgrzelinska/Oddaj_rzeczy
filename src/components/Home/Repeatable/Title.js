import React from "react";

function Title(props) {
    return (
        <div className="title container flex">
            <span className="titleText">{props.title}</span>
            <span className="titleDecoration"></span>
        </div>
    )
};

export default Title;