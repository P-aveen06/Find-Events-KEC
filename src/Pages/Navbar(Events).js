import React from "react";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css"; 
const Navbar = () => {
  return (
    <div className="m-auto  mt-2 w-1024px flex justify-content-between">
      <div className="w-2 mt-11px mb-11px align-item-center">
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
      </div>
      <div className="w-400px flex justify-content-around">
        <div className="m-auto">
          <Button
            label="Contact"
            className="p-button-raised p-button-secondary p-button-text"
          />
        </div>
        <div className="m-auto">
          <Button
            label="About"
            className="p-button-raised p-button-secondary p-button-text"
          />
        </div>
        <Button
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
        />
      </div>
    </div>
  );
};
export default Navbar;
