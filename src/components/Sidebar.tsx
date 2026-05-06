import { LayoutDashboard, SquarePen, User } from "lucide-react";
import { NavLink } from "react-router";

// import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 border-r-gray-200 border-r-2 h-screen w-50 sticky top-0 py-5">
      <nav className="space-y-10">
        <div>
          <h1 className="text-4xl text-center">TaskCon</h1>
        </div>
        <ul className="space-y-3">
          {tabs.map((tab) => (
            <li className="hover:border-r-4 hover:border-r-blue-400 px-3" key={tab.route}>
              <NavLink to={tab.route} className="flex items-center space-x-2 hover:text-blue-400">
                {tab.icon}
                <span>{tab.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

const tabs = [
  {
    name: "Dashboard",
    route: "/",
    icon: <LayoutDashboard />,
  },
  {
    name: "Create Task",
    route: "/create-task",
    icon: <SquarePen />,
  },
  {
    name: "User Profile",
    route: "/user-profile",
    icon: <User />,
  },
];
