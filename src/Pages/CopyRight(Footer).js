import React from "react";
import "primeicons/primeicons.css"; 
const Footer=()=>{
    return(
        <div className="flex m-auto justify-content-around">
            <div className="flex w-332px justify-content-evenly m-auto">
            <i className="pi pi-twitter" id="i-nav"></i>
            <i className="pi pi-github" id="i-nav"></i>
            <i className="pi pi-linkedin" id="i-nav"></i>
            </div>
            <div >
                <p>© All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Footer;