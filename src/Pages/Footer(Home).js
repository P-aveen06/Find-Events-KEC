import React from 'react';
import Info from './Info(Footer)';
import CopyRight from './CopyRight(Footer)';
const Footer=()=>{
    return(<div className='w-1024px m-auto mt-8 mb-3' style={{backgroundColor: 'rgb(239, 243, 248)'}}>
        <Info />
        <hr className='w-700px mt-4'/>
        <CopyRight className='mt-8'/>
        </div>
    )
}
export default Footer;