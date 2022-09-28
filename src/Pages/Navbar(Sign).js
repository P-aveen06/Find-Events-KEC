import React from "react";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="m-auto  mt-2 w-1024px flex justify-content-between">
      <div className="w-2 mt-11px mb-11px align-item-center">
        <Link to='/' className="Link-bt"><Button
          icon="pi pi-home"
          className="p-button-rounded p-button-secondary p-button-text"
          aria-label="Bookmark"
          id="nav"
          tooltip="Home"
          tooltipOptions={{
            position: "bottom",
            mouseTrack: true,
            mouseTrackTop: 15,
          }}
        /></Link>
      </div>
      <div className="w-400px flex justify-content-around">
        <div className="m-auto">
          <Link to='/events' className="Link-bt"><Button
            label="Events"
            className="p-button-raised p-button-secondary p-button-text"
          /></Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
