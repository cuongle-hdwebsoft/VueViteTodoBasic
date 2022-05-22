import { sum } from "./utils/sum";

console.log(sum(5, 10));

import buttonStyle from "./assets/css/button.module.css";
import "./assets/css/style.css";

console.log(buttonStyle);

const button = document.createElement("button");
button.classList.add(buttonStyle["button"]);
button.innerText = "Click me";

document.querySelector("body").appendChild(button);
