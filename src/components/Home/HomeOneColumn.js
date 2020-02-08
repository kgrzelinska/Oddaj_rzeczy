import React from "react";

function HomeOneColumn(props) {
    return (
        <div className="column flex">
            <div className="columnNumber">{props.number}</div>
            <div className="columnTitle">{props.title}</div>
            <div className="columnDescription">{props.description}</div>
        </div>
    )
}

export default HomeOneColumn;