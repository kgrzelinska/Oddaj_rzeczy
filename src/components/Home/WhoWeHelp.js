import React from "react";
import SectionTitle from "./Repeatable/Title";


class WhoWeHelp extends React.Component {
    state = {
        currentOrganization: 1,
        activePage: 1,
        thingsToShow: 3,
        items: ["a", "b", "c", "d"]
    }

    handleClick = (number) => {
        this.setState({currentOrganisation: number})
    }

    get fundations() {
        const { activePage, thingsToShow, items } = this.state;
        return items.slice(activePage * thingsToShow, activePage * thingsToShow + thingsToShow)
    }

    render() {
        console.log(this.fundations)
        return (
            <div>
                <div name="help" className="helpContainer flex">
                    <SectionTitle title="Komu pomagamy?"/>


                </div>
            </div>

        )
    }
}



export default WhoWeHelp;