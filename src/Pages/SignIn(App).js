import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import {Link} from 'react-router-dom';
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Navbar from "./Navbar(Sign)";
import img from './SignIn.png';
import CopyRight from "./CopyRight(Footer)";
const SignIn = () => {
  const [checked1, setChecked1] = useState("");
  return (
    <div>
      <Navbar />
      <hr className="w-1024px" />
      <div className="flex w-1024px m-auto justify-content-around">
        <div><input
          type="image"
          img
          src={img}
          alt="photo"
          width="300px"
          height="300px"
          className="mt-8"
        /></div>
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 m-auto align-center">
          <div className="text-center mb-5">
            <i className="pi pi-sign-in" id="i"></i>
            <div className="text-900 text-3xl font-medium mb-3">
              OOPs! Sign In
            </div>
            <span className="text-600 font-medium line-height-3">
              Don't have an account?
            </span>
            <Link to='/signup'>
              Create today!
            </Link>
          </div>

          <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">
              Email
            </label>
            <InputText type="text" className="w-full mb-3" />

            <label
              htmlFor="password"
              className="block text-900 font-medium mb-2"
            >
              Password
            </label>
            <InputText type="password" className="w-full mb-3" />

            <div className="flex align-items-center justify-content-between mb-6">
              <div className="flex align-items-center">
                <Checkbox
                  id="rememberme"
                  className="mr-2"
                  checked={checked1}
                  onChange={(e) => setChecked1(e.checked)}
                />
                <label htmlFor="rememberme">Remember me</label>
              </div>
              <a
                className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
                href="*"
              >
                Forgot your password?
              </a>
            </div>
            <Button label="Sign In" icon="pi pi-user" className="w-full" />
          </div>
          <hr />
        </div>
        {/* here */}
      </div>
      <hr className="w-1024px"/>
      <CopyRight/>
    </div>
  );
};
export default SignIn;
