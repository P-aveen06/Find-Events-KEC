import React from 'react';
import Info from './Info(Footer)';
import CopyRight from './CopyRight(Footer)';
const Footer=()=>{
    return(<div className='w-1024px m-auto mt-5' style={{backgroundColor: 'rgb(239, 243, 248)'}}>
        <Info/>
        <hr className='w-1024px mt-4'/>
        <CopyRight/>
        </div>
    )
}
export default Footer;