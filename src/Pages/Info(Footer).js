import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { ConfirmDialog } from "primereact/confirmdialog";
import image from "./footer.png";
const Info = () => {
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);
  const Accept = () => {
    return toast.current.show({
      severity: "info",
      summary: "Confirmed",
      detail: "You have accepted",
      life: 3000,
    });
  };
  const Reject = () => {
    return toast.current.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
  };

  return (
    <div className="w-1024px m-auto flex justify-content-around" id="contact">
      <div className="w-112px">
        <input
          type="image"
          img
          src={image}
          alt="photo"
          width="120px"
          height="120px"
          className="mt-8"
        />
      </div>
      <div
        className="w-160px mt-5 mb-5"
        style={{ fontFamily: "'Patrick Hand',cursive" }}
      >
        <div>
          <h3>Site Map</h3>
          <ul style={{ listStyle: "none" }}>
            <li>Home</li>
            <li>Events</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
      <div
        className="w-160px mt-5 mb-5"
        style={{ fontFamily: "'Patrick Hand',cursive" }}
      >
        <div>
          <h3>Social</h3>
          <ul style={{ listStyle: "none", textAlign: "center" }}>
            <li>Twitter</li>
            <li>Github</li>
            <li>LinkekIn</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div className="w-600px">
        <div>
          <h3 style={{ fontFamily: "'Patrick Hand',cursive" }}>Address</h3>
          <address>
            Kongu Engineering College,
            <br />
            Perundurai,Erode - 641052,
            <br />
            Tamil Nadu
          </address>
        </div>
        <div className="col-12 md:col-4 m-auto">
          <h3 style={{ fontFamily: "'Patrick Hand',cursive" }} className="mb-0">
            Contact Me
          </h3>
          <a
            href="mailto:paveenpradeep2@gmail.com"
            alt="mail to-paveenpradeep2@gmail.com"
          >
            paveenpradeep2@gmail
          </a>
          <div className="p-inputgroup w-160px mt-3">
            <InputText placeholder="Email Id" />
            <ConfirmDialog
              visible={visible}
              onHide={() => setVisible(false)}
              message="Are you sure you want to proceed?"
              header="Confirmation"
              icon="pi pi-exclamation-triangle"
              accept={<Accept />}
              reject={<Reject />}
            />
            <Button
              onClick={() => setVisible(true)}
              icon="pi pi-envelope "
              className="text-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
