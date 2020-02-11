import React from "react";

function OneStepBox(props) {
    return (
        <div className="oneStepBox flex">
            <div className="stepIcon"></div>
            <div className="stepTitle"> {props.title}</div>
            <div className="stepLine"></div>
            <div className="stepDescription">{props.description}</div>
        </div>
    )
};

export default OneStepBox;
