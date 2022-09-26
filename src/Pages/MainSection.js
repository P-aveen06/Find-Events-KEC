import React from 'react';
import Accreditation from './Accreditation(MainSection)';
import LearnMore from './LearnMore(MainSection)';
import PastEvents from './PastEvents(MainSection)';
import Programmes from './Programmes(MainSection)';
const Mainsection=()=>{
    return (
        <div className="m-auto w-1024px">
            <LearnMore/>
            <PastEvents/>
            <Programmes/>
            <Accreditation/>
        </div>
    );
}
export default Mainsection;