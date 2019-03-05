import { elements } from "./elements";
import { MDL } from "./model";
import { VIEW } from "./view";


///// Controller
const CTRL = (function(MDL, VIEW) {


    

    const handleNumber = (event) => {
        const item = event.target.getAttribute("number");
        console.log(item);
    };

    const handleOperator = (event) => {
        const item = event.target.getAttribute("operator");
        console.log(item);
    };

    return {
        handleNumber,
        handleOperator,
    };
} (MDL, VIEW) );


///// Execution and Listeners

elements.calcContainer.addEventListener("click", (event) => {
    if(event.target.matches(".num")) {
        CTRL.handleNumber(event);
        
    } else if(event.target.matches(".operator")) {
        CTRL.handleOperator(event);

    }
});