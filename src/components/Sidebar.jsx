import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
    AOS.refresh();
  }, [expanded]);

  return (
    <>
      <div
        className={`${expanded === true ? "leftbars" : " "} ${"bars"}`}
        onClick={() => setExpaned(!expanded)}
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <UilBars />
      </div>
      <motion.div
        className={`${
          expanded === true ? "displayBlockSidebar" : " "
        } ${"sidebar"}`}
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
