import React from "react";
import { Button } from "primereact/button";
import {Link} from "react-router-dom";
import "primeicons/primeicons.css";
import { HashLink as Hash } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div className="m-auto  mt-2 w-1024px flex justify-content-between">
      <div className="w-2 mt-11px mb-11px align-item-center">
        <Link to='/' className="Link-bt">
          <Button
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
        />
        </Link>
      </div>
      <div className="w-400px flex justify-content-around">
        <div className="m-auto">
          <Link to='/events' className="Link-bt"><Button
            label="Events"
            className="p-button-raised p-button-secondary p-button-text"
          /></Link>
        </div>
        <div className="m-auto">
        <Hash to='#contact' smooth className="Link-bt"><Button
            label="Contact"
            className="p-button-raised p-button-secondary p-button-text"
          /></Hash>
        </div>
        <div className="m-auto">
          <Hash to='#about' smooth className="Link-bt"><Button
            label="About"
            className="p-button-raised p-button-secondary p-button-text"
          /></Hash>
        </div>
        <Link to='/users' className="Link-bt"><Button
          icon="pi pi-user"
          className="m-auto p-button-rounded p-button-secondary p-button-text"
          aria-label="user"
          id="nav"
          tooltip="User"
          tooltipOptions={{
            position: "bottom",
            mouseTrack: true,
            mouseTrackTop: 15,
          }}
        /></Link>
      </div>
    </div>
  );
};
export default Navbar;
