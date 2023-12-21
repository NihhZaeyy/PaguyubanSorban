import React from "react";
import news from "../../data/news.json";

const NewsSection = () => {
  return (
    <div className="px-6 flex flex-col my-16 lg:px-20 gap-3 lg:grid lg:grid-cols-2">
      {news.map((item) => (
        <div
          key={item.id}
          className="flex gap-2 lg:px-2 lg:border-r-2 lg:border-gray-400"
        >
          <img
            className="w-[125px] md:w-1/3 h-full"
            src={item.url}
            alt={item.name}
          />
          <p className="line-clamp-3 text-[12px] md:text-base">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
