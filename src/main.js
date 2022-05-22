import { sum } from "@/utils/sum";

console.log(sum(5, 10));

import buttonStyle from "@/assets/css/button.module.css";
import "@/assets/css/style.css";

console.log(buttonStyle);

// test load css
const button = document.createElement("button");
button.classList.add(buttonStyle["button"]);
button.innerText = "Click me";
document.querySelector("body").appendChild(button);

// test load images
import helloKity from "@/assets/images/hello-kitty.jpg";
console.log(helloKity);
const image = document.createElement("img");
image.src = helloKity;
image.style.width = "150px";
image.style.height = "100px";
document.querySelector("body").appendChild(image);

// test glob

// export glob
const modules = import.meta.glob("./utils/*.js");
console.log(modules);

// test https://vitejs.dev/guide/assets.html#explicit-url-imports
import randomUrl from "lodash/random.js?url";
import randomRaw from "lodash/random.js?raw";
console.log(randomUrl);
console.log(randomRaw);

// http://localhost:3000/src/assets/images/hello-kitty.jpg
console.log(new URL("./assets/images/hello-kitty.jpg", import.meta.url).href);
