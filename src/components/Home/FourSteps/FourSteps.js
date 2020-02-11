import React from "react";
import FourStepBox from "./FourStepsBox"
import Title from "../Repeatable/Title";
import FourStepsBtn from "./FourStepsBtn";

function FourSteps() {
    return (
        <>
            <Title className="steps" title="Wystarczą 4 proste kroki"/>
            <FourStepBox/>
            <div className="stepContainer flex">
                <FourStepsBtn/>
            </div>
        </>
    )
};

export default FourSteps;


