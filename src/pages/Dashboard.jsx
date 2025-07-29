import React from "react";
import SideBar from "../component/SideBar.jsx";
import TopBar from "../component/TopBar.jsx";
const Dashboard = () => {
  return (
    <div>
      <TopBar />
      <div className="flex flex-row">
        <SideBar/>
        <div className="flex flex-col p-4 ml-100 max-sm:ml-10 w-screen h-screen fixed itmes-center justify-center pt-20 max-sm:pr-20">
            <h1 className="bold lg:text-4xl max-sm:text-2xl italic">Welcome to the Dashboard!</h1>
            <p className="lg:text-xl max-sm:text-sm mt-4">Here you can find all the tools and resources you need to enhance your learning experience.</p><br></br>
            <p className="text-lg max-sm:text-sm mt-2">Use the sidebar to navigate through different
sections of the portal.</p><br></br>
            <p className="text-lg max-sm:text-sm mt-2">Feel free to explore and make the most of the available features.</p><br />
            <p className="text-lg max-sm:text-sm mt-2">If you have any questions or need assistance, don't hesitate to reach out to our support team.</p>
            <p className="text-lg max-sm:text-sm mt-2">Happy learning!</p>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
