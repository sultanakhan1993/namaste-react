import React from "react";
import  ReactDOM  from "react-dom/client";

//React Element
const heading = React.createElement("div",{id:'parent'},
[React.createElement("div",{id:"child"},
[React.createElement('h2',{id:'heading'},"hello i am h2"),
React.createElement('h3',{id:'heading'},"I am h3")])]);

//JSX

const Heading2 = () =>{
    return(
        <>
        <h1>hello</h1>
        <h2>hello new</h2>
        </>
    )
}
const jsx ='hi Everyone';

const Fnforjsx = () => <h5>Inside JSX {jsx}</h5>

const Heading1 = () => (<div className="parent">
<div className="child">
    <Heading2/>
    <p id='heading'>Hello I am {Fnforjsx()}</p>
    <h3>Hello I am h3</h3>
</div>

</div>)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Heading1/>)