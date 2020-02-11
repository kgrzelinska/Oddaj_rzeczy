import React from "react";
import SectionTitle from "./Repeatable/Title";


class WhoWeHelp extends React.Component {
    constructor() {
        super();
        this.state = {
            currentOrganization: 1,
            activePage: 1,
            thingsToShow: 3
        }

        handleClick = (number) =>  { this.setState({currentOrganisation: number})
    }

render () {
        return (
            <div>
                <div name="help" className="helpContainer flex">
                    <SectionTitle title="Komu pomagamy?"/>


                </div>
            </div>

        )
    }



export default WhoWeHelp;