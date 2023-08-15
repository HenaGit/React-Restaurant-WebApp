import React from "react";
import { MenuItemList } from "../Components/Page/Home";
import { Banner } from "../Components/Page/Common";

function Home() {
  return (
    <div>
      <Banner />
      <a
        href="https://www.linkedin.com/in/henok-gebrehiwot-a9001024b/"
        target="_blank"
      >
        <div className="btn btn-danger form-control text-center text-white h4">
          This is a demo application developed by Henok using{" "}
          <span className="text-warning"> ReactJS for Front-End and .Net Web API for Back-End!</span>{" "}
          To visit my LinkedIn Profile click on me!
        </div>
      </a>
      <div className="container p-2">
        <MenuItemList />
      </div>
    </div>
  );
}

export default Home;