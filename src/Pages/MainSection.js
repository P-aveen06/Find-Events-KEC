import React from 'react';
import LearnMore from './LearnMore(MainSection)';
import PastEvents from './PastEvents(MainSection)';
const Mainsection=()=>{
    return (
        <div className="m-auto w-1024px">
            <LearnMore/>
            <PastEvents/>
        </div>
    );
}
export default Mainsection;