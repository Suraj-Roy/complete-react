{/* <div id="container">
    <h1>i am heading 1</h1>
    <h1>i am heading 2</h1>

</div> */}
import React from "react";
import ReactDOM from "react-dom/client";


const containerdiv = React.createElement("div",{id:"container"},[
    React.createElement("h1",{key:"1"},["i am heading 1"]),
        React.createElement("h1",{key:"2"},["i am heading 2"]),
        React.createElement("h1",{key:"3"},["i am heading 3"]),
])

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(containerdiv)