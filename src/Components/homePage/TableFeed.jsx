import React from "react";

export default function TableFeed({ feedData }) {
  const coins = ["USD", "JPY", "CNY", "IDR", "RUB"];
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Majors</th>
          <th scope="col">Base</th>
          <th scope="col">Change</th>
          <th scope="col">Currency</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((item, i) => {
          return (
            <tr key={i}>
              <th scope="row">{feedData?.base}</th>
              <td>1€</td>
              <td>{feedData?.rates[item]}</td>
              <td>{item}</td>
              <td>{feedData?.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
