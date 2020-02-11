import React from "react";
import HomeOneColumn from './HomeOneColumn';

function HomeThreeColumns() {
    return (
        <div className="columns">
            <div className="container flex">
                <HomeOneColumn number='10' title='ODDANYCH WORKÓW'
                               description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500'/>
                <HomeOneColumn number='5' title='WSPARTYCH ORGANIZACJI'
                               description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500'/>
                <HomeOneColumn number='7' title='ZORGANIZOWANYCH ZBIÓREK'
                               description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500'/>
            </div>
        </div>
    )
};


export default HomeThreeColumns;