import React, { useState, useRef } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import img from "./Aboutme.jpg";
import { ToggleButton } from "primereact/togglebutton";
import { Toast } from "primereact/toast";
const Info = () => {
  const [checked, setChecked] = useState(false);
  const [value1, setValue1] = useState("");
  const toastBR = useRef(null);
  const showBottomRight = () => {
    toastBR.current.show({
      severity: "success",
      summary: "Thank You",
      detail: "Message Send",
      life: 3000,
    });
  };
  return (
    <div className="m-auto w-1024px flex justify-content-around">
      <Toast ref={toastBR} position="bottom-right" />
      <div className="Card">
        <img alt="Card" src={img} width="250px" height="300px" />
        <Card
          title="About Me"
          subTitle="Paveen Kumar"
          style={{ width: "25em" }}
        >
          <p className="m-0" style={{ lineHeight: "1.5" }}>
            I'm Paveen Kumar 20-Year old Software Engineer,My Native is
            Coimbatore, I completed My schoolling in Kongu Vellalar
            Matriculation Higher Secondary School, Now I'm Doing My B.E in Kongu
            Engineering College-Erode
          </p>
          <span>
            <ToggleButton
              className="mt-2"
              checked={checked}
              onChange={(e) => setChecked(e.value)}
              onLabel="Awesome !"
              offLabel="Good !"
              onIcon="pi pi-thumbs-up-fill"
              offIcon="pi pi-thumbs-up"
              style={{ width: "10em" }}
              aria-label="Confirmation"
            />
          </span>
        </Card>
      </div>
      <div>
        <div className="flex align-items-center justify-content-center w-700px">
          <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div className="text-center mb-5">
              <i className="pi pi-phone " id="i-nav"></i>
              <div className="text-900 text-3xl font-medium mb-3">
                Contact !!
              </div>
              <span className="text-600 font-medium line-height-3">
                Keep in Touch !
              </span>
              <a
                className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
                href="paveenpradeep2@gmail.com"
              >
                paveenpradeep2@gmail.com
              </a>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-900 font-medium mb-2"
              >
                Email
              </label>
              <InputText
                id="email"
                type="text"
                className="w-full mb-3"
                required
              />
              <label
                htmlFor="Comment"
                className="block text-900 font-medium mb-2"
              >
                Comments
              </label>
              <InputTextarea
                className="w-full"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                rows={5}
                cols={30}
                required
              />
              <Button
                label="Send"
                className="p-button-success mt-3"
                onClick={showBottomRight}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
