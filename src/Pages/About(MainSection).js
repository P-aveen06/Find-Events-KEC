import React, { useState} from "react";
import { Card } from "primereact/card";
import img from "./Aboutme.jpg";
import { ToggleButton } from "primereact/togglebutton";
const About= () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="m-auto w-1024px flex justify-content-around" id="about">
      <div className="Card">
        <img alt="Card" src={img} width="300px" height="300px" />
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
              style={{ width: "12em" }}
              aria-label="Confirmation"
            />
          </span>
        </Card>
      </div>
    </div>
  );
};
export default About;
