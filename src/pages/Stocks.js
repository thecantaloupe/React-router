import React from "react";

const Stocks = (props) => {
    //filter to symbol match and grab first index in case there are multiple matches
    const stock = props.stoinks.filter(stoink => stoink.symbol === props.match.params.symbol)[0]
    return (
        <div>
            <h3>Stock Name: {stock.name}</h3>
            <h3>Price: {stock.lastPrice}</h3>
        </div>
    );
}

export default Stocks