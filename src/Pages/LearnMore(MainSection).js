import React from "react";
import { Button } from "primereact/button";
import image from './event.jpg'
const LearnMore = () => {
  return (
    <div className="flex m-auto mt-3 justify-content-between" >
      <div className="border-outline m-auto w-624px">
        <p className="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Button label="Learn More" id="learn" />
      </div>
      <div>
      <input type="image" img src = {image} alt="photo" width='300px' height='300px'/>
      </div>
    </div>
  );
};
export default LearnMore;
