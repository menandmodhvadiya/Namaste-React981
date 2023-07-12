{/* <div id="parent">
        <div id="chiled">
            <h1>i am h1 tag</h1>
            <h2>i am h2 tag</h2>
        </div>
        <div id="chiled2">
            <h1>i am h1 tag</h1>
            <h2>i am h2 tag</h2>
        </div>
    </div> 
*/}
//Core React 
const parent = React.createElement("div",{id:"parent"},
                [React.createElement("div",{id:"chiled"},
                    [React.createElement("h1",{},"This is H1 tag"),
                    React.createElement("h2",{},"This is H2 tag")]),
                React.createElement("div",{id:"chiled2"},
                    [React.createElement("h1",{},"This is H1 tag"),
                    React.createElement("h2",{},"This is H2 tag")])
                ]);
//jsx
                
console.log(parent); //object end of tge day

const heading =React.createElement("h1",{id:"heading"},"Hello World From React");

const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);