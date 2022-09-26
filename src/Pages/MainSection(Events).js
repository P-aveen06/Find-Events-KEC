import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import OnGoingEvents from "./OnGoingEvents(EventsPage)";
import UpComingEvents from "./UpComingEvents(EventsPage) ";
import img from "./eventspage.png";
const MainSection = () => {
  const [activeIndex1, setActiveIndex1] = useState(1);

  return (
    <div className="m-auto">
      <p
        className="text-4xl"
        style={{ fontFamily: "'Permanent Marker',cursive" }}
      >
        Find Events
      </p>
      <div className="flex w-1024px m-auto justify-content-between">
        <div className="w-332px">
          <input
            type="image"
            img
            src={img}
            alt="photo"
            width="200px"
            height="600px"
          />
        </div>
        <div className="card w-700px m-auto">
          <div className="pt-2 pb-4">
            <Button
              onClick={() => setActiveIndex1(0)}
              className="p-button-raised p-button-secondary p-button-text mr-3"
              label="OnGoing"
            />
            <Button
              onClick={() => setActiveIndex1(1)}
              className="p-button-raised p-button-secondary p-button-text ml-3"
              label="UpComing"
            />
          </div>

          <TabView
            activeIndex={activeIndex1}
            onTabChange={(e) => setActiveIndex1(e.index)}
          >
            <TabPanel header="OnGoing">
              <OnGoingEvents />
            </TabPanel>
            <TabPanel header="UpComing">
              <UpComingEvents />
            </TabPanel>
            <TabPanel header="All Events">
              <OnGoingEvents />
              <UpComingEvents />
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
};
export default MainSection;
