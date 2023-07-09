import React from "react";
import revenue from "../assets/images/Vector.png";
import likes from "../assets/images/Vectorlike.png";
import transactions from "../assets/images/total_transactions_icon.png";
import totuserlist from "../assets/images/Vectorpeople.png";

const Cards = () => {
  let cardActions = [
    {
      icon: revenue,
      title: "Total Revenues",
      number: "$2,129,430",
      color: "green",
    },
    {
      icon: transactions,
      title: "Total Transactions",
      number: "1,520",
      color: "yellow",
    },
    {
      icon: likes,
      title: "Total Likes",
      number: "9,721",
      color: "red",
    },
    {
      icon: totuserlist,
      title: "Total Users",
      number: "892",
      color: "blue",
    },
  ];

  return (
    <div className="w-full h-max flex flex-wrap justify-between gap-5">
      {cardActions.map((e, ind) => (
        <div
          key={ind}
          className={`w-full md:w-[250px] bg-${e.color}-100 rounded-20 px-6 py-6`}
        >
          <img className="flex float-right" src={e.icon} alt="card-icon" />
          <div className="w-full flex flex-col justify-end">
            <p>{e.title}</p>
            <p className="text-3xl font-bold">{e.number}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
