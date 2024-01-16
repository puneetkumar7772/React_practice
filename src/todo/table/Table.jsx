import React, { useState } from "react";

const Table = () => {
  const data = [
    { id: 1, name: "Puneet", Degignation: "angular", salary: "0000" },
    { id: 1, name: "shahsi", Degignation: "react", salary: "0000" },
    { id: 1, name: "shahsank", Degignation: "react", salary: "0000" },
    { id: 1, name: "harsh", Degignation: "react", salary: "0000" },
  ];
  return (
    <div>
      <table style={{ margin: "auto" }}>
        <thead>
          <th>Name</th>
          <th>Degignation</th>
          <th>Education</th>
          <th>salery</th>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr>
                <td>{e.name}</td>
                <td>{e.Degignation}</td>
                <td>{e.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
