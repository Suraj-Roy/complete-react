{/* <div id="container">
    <h1>i am heading 1</h1>
    <h1>i am heading 2</h1>

</div> */}


const containerdiv = React.createElement("div",{id:"container"},[
    React.createElement("h1",null,["i am heading 1"]),
        React.createElement("h1",null,["i am heading 2"]),
])

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(containerdiv)