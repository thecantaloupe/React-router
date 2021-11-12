import React from "react";
import stock from "./public/data.js";
//Import route and our components
import Header from "./components/Header.js";
import Main from "./pages/Main.js";

function App(props) {
    return (
        <div className="App">
            <Header />
            <Main stockData={stock} />
        </div>
    );
}

export default App;