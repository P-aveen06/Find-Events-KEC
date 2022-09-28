import React from 'react';
import image from './admin.png';
const Admin=()=>{
    return(
        <div
      className=" m-auto mt-8 w-1024px h-30rem"
    >
      <div className="w-600px m-auto pt-8">
        <input
          type="image"
          img
          src={image}
          alt="photo"
          width="100px"
          height="100px"
        />
        <h1
          style={{
            fontFamily: "Barlow Condensed,sans-serif",
            fontStyle: "italic",
          }}
        >
          503 Error!
        </h1>
        <p>Page under Maintenance !</p>
        <p>Please  login After Some Time </p>
      </div>
      </div>
    )
}
export default Admin;