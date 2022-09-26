import React from 'react';
import Info from './Info(Footer)';
import CopyRight from './CopyRight(Footer)';
const Footer=()=>{
    return(<div>
        <Info/>
        <hr className='w-1024px mt-4'/>
        <CopyRight/>
        </div>
    )
}
export default Footer;