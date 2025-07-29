import { Outlet } from "react-router-dom";
import React from "react";
const SideBar = () => {
  return (
    <div className="drawer lg:drawer-open z-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col items-end justify-start pt-30 fixed">
        <label
          htmlFor="my-drawer"
          className="btn drawer-button lg:hidden m-4 size-5"
        >
          ☰
        </label>
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content pt-30">
          <label htmlFor="my-drawer" className="btn btn-error size-5 ml-45 lg:hidden">
            ✖
          </label>
          <li>
            <a href="/my-courses">📚 My Courses</a>
          </li>
          <li>
            <a href="/resume-tool">📄 Resume Tool</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
