import React from "react";
import "./Empoyees.css";
const shortid = require("shortid");

const Employees = ({ onUsers, onHandleChange }) => {
  const { users } = onUsers;

  const uppercaseAlphabet = new Array(26)
    .fill(1)
    .map((_, index) => String.fromCharCode(65 + index));
  return (
    <div>
      <h1>Employees</h1>
      <ul className="block-users">
        {uppercaseAlphabet.map((elem) => {
          return (
            <li key={shortid()} className="block-users__item">
              <span>
                <b>{elem}</b>
              </span>
              {users.some((el) => el.lastName.startsWith(elem)) ? (
                <ul className="users">
                  {users.map((_elem, idx) => {
                    return (
                      _elem.lastName.startsWith(elem) && (
                        <li key={_elem.id} className="users-item">
                          <span>
                            {_elem.firstName} {_elem.lastName}
                          </span>
                          <input
                            type="checkbox"
                            id={_elem.id}
                            name={`selected${idx}`}
                            checked={_elem.selected}
                            onChange={onHandleChange}
                          />
                        </li>
                      )
                    );
                  })}
                </ul>
              ) : (
                <ul>
                  <li>
                    <span>----</span>
                  </li>
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Employees;
