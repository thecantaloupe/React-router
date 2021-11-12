import React from "react";
import { Link } from "react-router-dom";

function Dashboard(props) {
  console.log(props);
  let stonks = props.stoinks.map((name, index) => {
    const change = Math.round(name.change * name.lastPrice * 100) / 100;
    const operator = name.change > 0 ? "+" : "";
    const percentChange = operator + Math.round(name.change * 100) / 100;
    const finalChange = `${change} (${percentChange}%)`;
    return (
      <tr>
        <td>
          <Link key={index} to={`/stocks/${name.symbol}`}>
            {name.name}
          </Link>
        </td>
        <td>{name.lastPrice}</td>
        <td>{finalChange}</td>
      </tr>
    );
  });
  return (
      <div>
      <h1>Most Active Stocks</h1>
    <table>
      <tr>
        <th>Company Name</th>
        <th>Price</th>
        <th>Change</th>
      </tr>
      {stonks}
    </table>
    </div>
  );
}

export default Dashboard;
