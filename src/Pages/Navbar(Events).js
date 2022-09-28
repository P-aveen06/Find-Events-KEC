import React from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { HashLink as Hash } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div className="m-auto  mt-2 w-1024px flex justify-content-between">
      <div className="w-2 mt-11px mb-11px align-item-center">
        <Link to="/" className="Link-bt">
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
      <Hash to="/users" className="Link-bt">
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
      </Hash>
    </div>
  );
};
export default Navbar;
