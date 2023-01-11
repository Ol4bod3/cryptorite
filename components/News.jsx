import React from "react";
import moment from "moment";
import Link from "next/link";

const NewsComp = ({ data, slice }) => {
  var items = data.slice(0);

  if (slice) {
    items = data.slice(0, 10);
  } else {
    items;
  }

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  return (
    <div className="flex flex-wrap md:flex-row flex-col justify-center transition-all">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-gray-100 m-3  md:w-[20%] rounded-xl hover:shadow-xl hover:p-1"
        >
          <Link href={item.url}>
            <img src={item.urlToImage} className="rounded-t-xl w-fit h-40" />

            <div className="p-3 space-y-3 ">
              <div className="text-sm text-blue-500 flex justify-between">
                <p>{moment(item.publishedAt).format(`DD MMMM YYYY`)} </p>
                <p>{item.source.name}</p>
              </div>
              <h1 className="font-bold"> {item.title} </h1>
              <p>{truncateString(item.description, 100)}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewsComp;
