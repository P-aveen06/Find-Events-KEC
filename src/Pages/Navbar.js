import React from "react";
import { Button } from "primereact/button";
import "primeicons/primeicons.css"; 

const Navbar = () => {
  return (
    <div className="m-auto  mt-2 w-1024 flex justify-content-between">
        <div className="w-2 mt-11px mb-11px align-item-center"><i className="pi pi-home " id="i-nav" ></i></div>
      <div className="w-332 flex justify-content-around">
        <div className="m-auto"><Button label="Events" className="p-button-secondary p-button-outlined p-button-sm " id="nav"/></div>
        <div className="m-auto"><Button label="Contact" className="p-button-secondary p-button-outlined p-button-sm" id="nav"/></div>
        <div className="m-auto"><Button label="About" className="p-button-secondary p-button-outlined p-button-sm" id="nav"/></div>
        <Button icon="pi pi-user" className="p-button-rounded p-button-secondary p-button-text" aria-label="Bookmark" id="nav"/></div>
    </div>
  );
};
export default Navbar;
