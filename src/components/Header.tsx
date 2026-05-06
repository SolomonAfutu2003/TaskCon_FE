import { User } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="bg-white p-3">
      <section className="flex justify-end ">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-300 flex justify-center items-center">
            <User />
          </div>
          <span>User_Name</span>
        </div>
      </section>
    </div>
  );
};

export default Header;
