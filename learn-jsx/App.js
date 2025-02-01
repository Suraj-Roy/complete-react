{/* <div id="container">
    <h1>i am heading 1</h1>
    <h1>i am heading 2</h1>

</div> */}
import React from "react";
import ReactDOM from "react-dom/client";


// const h1 = React.createElement("h1",{id:"test"},"I am heading");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1);

// babel => jsx => transpilation -> react element
// curently babel is not installed

const jsxheading = (<h1>I am heading from JSX</h1>);

console.log(jsxheading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
