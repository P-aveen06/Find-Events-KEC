import React from "react";
import PastEventsGif from "./PastEvents.gif";
const PastEvents = () => {
  return (
    <div>
      <div>
        <p >Past Events 2021-2022</p>
        <input type="image" img src = {PastEventsGif} alt="photo" width='100px' height='100px'/>
      </div>
      <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 p-3 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">Sensonics</span>
                  <div className="text-900 font-medium text-xl">March-2022</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-calendar text-blue-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">EIE </span>
              <span className="text-500">Department</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 p-3 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">E-HariZon</span>
                  <div className="text-900 font-medium text-xl">April-2022</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-orange-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-calendar text-orange-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">ECE </span>
              <span className="text-500">Department</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 p-3 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">Enthusia</span>
                  <div className="text-900 font-medium text-xl">June-2022</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-calendar text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">All-Dep </span>
              <span className="text-500">Cultural Event</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-card shadow-2 p-3 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">Sciensia</span>
                  <div class="text-900 font-medium text-xl">August</div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-purple-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-calendar text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">CSE </span>
              <span className="text-500">Department</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PastEvents;
