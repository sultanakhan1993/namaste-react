// const heading = React.createElement("h1", { id: 'heading' }, "Hello From React");
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);
//     console.log(heading);


 const parent =React.createElement("div",{id:'parent'},
 [React.createElement("div",{id:'child'},
 [React.createElement("h1",{},"hello I Am Children"),
 React.createElement("h2",{},"hello I Am h2")]),

 React.createElement("div",{id:'child'},
 [React.createElement("h1",{},"hello I Am Children"),
 React.createElement("h2",{},"hello I Am h2")])
])
 const root = ReactDOM.createRoot(document.getElementById("root"));

 //const root = ReactDom.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent)