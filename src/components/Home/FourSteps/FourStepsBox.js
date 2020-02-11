import React from "react";
import OneStepBox from './OneStepBox';

function FourStepBox() {
    return (
        <div className="fourStepsBox flex">
            <OneStepBox title="Wybierz rzeczy" description="ubrania, zabawki, sprzęt i inne"/>
            <OneStepBox title="Spakuj je" description="skorzystaj z worków na śmieci"/>
            <OneStepBox title="Zdecyduj komu chcesz pomóc" description="wybierz zaufane miejsce"/>
            <OneStepBox title="Zamów kuriera" description="kurier przyjedzie w dogodnym terminie"/>
        </div>
    )
};

export default FourStepBox;