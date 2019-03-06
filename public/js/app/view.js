import { elements } from "./elements";
import { MDL } from "./model";


///// View
const VIEW = (function(MDL) {

    const clearDisplay = () => {
        elements.display.innerHTML = "";
    };

    const appendDisplay = () => {
        clearDisplay();

        const items = MDL.parseExpression();
        const expression = `${items.numOne || items.numOne === 0? items.numOne : ""} ${items.operator? items.operator : ""} ${items.numTwo || items.numTwo === 0? items.numTwo : ""}`;

        let node = document.createElement("div");
        node.classList.add("expression");
        node.innerHTML = expression;
        elements.display.appendChild(node);
    };

    const cannotBeZero = () => {
        let node = document.createElement("div");
        node.classList.add("expression");
        node.classList.add("divide-by-zero");
        node.innerHTML = `<span>Silly Human. Dividing By Zero Is An Impossibility. Try Again.</span>`;
        elements.display.appendChild(node);
    };  

    return {
        clearDisplay,
        appendDisplay,
        cannotBeZero,
    };
} (MDL) );


export { VIEW };