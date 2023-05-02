// import { render } from "@testing-library/react";
// import React from "react";
// import { createRoot } from "react-dom/client";

// let div = React.createElement("div", null, "hello TYSS");
// createRoot(document.getElementById("root"), render(div));

//? without jsx
// let section = React.createElement(
//   "section",
//   {
//     id: "mainSection",
//   },
//   React.createElement("h1", null, "welcome to TYSS"),
//   React.createElement(
//     "p",
//     { className: "para" },
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker ,including versions of Lorem Ipsum."
//   ),
//   React.createElement(
//     "button",
//     { id: "btn" },
//     React.createElement("span", null, "know more")
//   )
// );
// createRoot(document.getElementById("root")).render(section);

// let section = (<section id="mainSection">
//     <h1>hello Tyss</h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero, delectus ipsa suscipit sunt aut voluptas. Explicabo iusto facilis quam modi magni quo doloribus. Repellat aliquid nemo repellendus. Nemo suscipit, reprehenderit deleniti amet aperiam non, in nobis cum, accusantium unde rerum aspernatur modi. Reiciendis, et id ab nisi odio dolores asperiores quod officia, eius obcaecati ducimus saepe numquam itaque fuga possimus nulla porro dolor, velit totam. Esse, iusto. Dicta veritatis obcaecati, consequuntur sequi voluptatem esse nesciunt delectus! Obcaecati fugit blanditiis corrupti odit, officia aut molestias placeat sint esse provident eius modi mollitia neque quisquam? Aperiam autem recusandae vero veritatis architecto.</p>
//     <button className="btn">
//         <span>
//             learn more
//         </span>
//     </button>
// </section>)
// createRoot(document.getElementById("root")).render(section)

// import React from "react";
// import { createRoot } from "react-dom/client";

// let form = document.createElement(
//   "form",
//   {
//     id: "form",
//   },
//   React.createElement(
//     "div",
//     { className: "form-group" },
//     React.createElement(
//       "label",
//       {
//         htmlFor: "username",
//       },
//       "username"
//     ),
//     React.createElement(
//       "input",
//       {
//         type: "text",
//         placeholder: "enter username"
//       }

//     )
//   ),
//   React.createElement(
//     "div",
//     { className: "form-group" },
//     React.createElement(
//       "label",
//       {
//         htmlFor: "password",
//       },
//       "password"
//     ),
//     React.createElement(
//       "input",
//       {
//         type: "password",
//         placeholder: "enter password"
//       },

//     )
//   ),
//   React.createElement(
//     "div",
//     { className: "form-group" },
//     React.createElement(
//       "button",
//       {
//         className: "btn",
//       },
//       React.createElement("span", null, "submit")
//     )
//   ),

// );
// createRoot(document.getElementById("root")).render(form);

// import React from "react";
// import { createRoot } from "react-dom/client";
// console.log(React)

// //creating class based component
// class App extends React.Component{
//     render() {
//         return <h1>Finally understood</h1>
//     }
// }
// createRoot(document.getElementById("root")).render(<App/>)

//!components

import React from "react";
import { createRoot } from "react-dom/client";

//import globalCss and root component

import App from "./App";
import "./global.css";

createRoot(document.getElementById("root")).render(<App />);
