import React from 'react'
import dashboard from "../assets/images/dashboard_iconblack1.png";
import transaction from "../assets/images/transaction_iconblack2.png";
import schedule from "../assets/images/schedule_iconblack3.png";
import settings from "../assets/images/setting_iconblack5.png";
import users from "../assets/images/user_iconblack4.png";


const Navbar = () => {
    let navItemLinks = [
        { icon: dashboard, title: "Dashboard" },
        { icon: transaction, title: "Transactions" },
        { icon: schedule, title: "Schedule" },
        { icon: users, title: "Users" },
        { icon: settings, title: "Settings" },
      ];
  return (
    <div className="w-full md:w-[250px] h-full md:h-screen bg-black rounded-30 flex flex-col gap-5 md:flex-col md:justify-between text-white p-5 md:p-10">
        <div className="flex flex-col gap-11">
          <h1 className="w-min md:w-full text-4xl font-bold">Board.</h1>
          <ul className="flex flex-row gap-5 text-lg font-normal md:flex-col">
            {navItemLinks.map((e) => (
              <li
                key={e.title}
                className="flex gap-4 items-center hover:font-bold cursor-pointer"
              >
                <img src={e.icon} alt={e.title} className="hidden md:block" />
                {e.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-center gap-5 text-xs md:flex-col">
          <p className="hover:font-bold cursor-pointer">Help</p>
          <p className="hover:font-bold cursor-pointer">Contact Us</p>
        </div>
      </div>
  )
}

export default Navbar