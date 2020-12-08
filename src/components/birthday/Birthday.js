import React from "react";
import "./Birthday.css";
const shortid = require("shortid");

const Birthday = ({ list }) => {
  const arrMonth = list.map((elem) => new Date(elem.dob).getMonth());
  let unique = arrMonth.filter((v, i, a) => a.indexOf(v) === i);
  const month = [
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
  ];
  return (
    <div className="block-birthday">
      <h1>Employees birthday</h1>
      {list.length !== 0 ? (
        <ul>
          {unique.map((elem) => {
            return (
              <li key={shortid()}>
                <span>
                  <b>{month.find((el, idx) => idx === elem)}</b>
                </span>
                <ul>
                  {list.map((item) => {
                    return (
                      elem === new Date(item.dob).getMonth() && (
                        <li key={shortid()}>
                          <span>
                            {item.lastName} {item.firstName}
                          </span>
                        </li>
                      )
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>No selected employees</div>
      )}
    </div>
  );
};

export default Birthday;
