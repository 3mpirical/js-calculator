import { elements } from "./elements";
import { MDL } from "./model";
import { VIEW } from "./view";


///// Controller
const CTRL = (function(MDL, VIEW) {

    class Item {
        constructor(type, value) {
            this.type = type;
            this.value = value;
        }
    }

    const handleEquals = () => {
        const items = MDL.parseExpression();
        let totalValue;
        switch(items.operator) {
            case("+"):
                totalValue = items.numOne + items.numTwo;
                break;
            case("-"):
                totalValue = items.numOne - items.numTwo;
                break;
            case("x"):
                totalValue = items.numOne * items.numTwo; 
                break;
            case("/"):
                if(items.numTwo === 0) {
                    MDL.clearExpression();
                    VIEW.clearDisplay();
                    VIEW.cannotBeZero();
                    return;
                } else {
                    totalValue = items.numOne / items.numTwo;
                }
                break;
        }
        const newItem = new Item("number", totalValue);
        MDL.clearExpression();
        MDL.pushItem(newItem);
        VIEW.appendDisplay();
    };

    const handleClear = () => {
        MDL.clearExpression();
        VIEW.clearDisplay();
    };

    const handleNumber = (event) => {
        const value = event.target.getAttribute("number");
        const number = new Item("number", value);
        MDL.pushItem(number);
        VIEW.appendDisplay();
    };
    
    const handleOperator = (event) => {
        const value = event.target.getAttribute("operator");
        const operator = new Item("operator", value);
        MDL.pushItem(operator);
        VIEW.appendDisplay();
    };

    return {
        handleEquals,
        handleClear,
        handleNumber,
        handleOperator,
    };
} (MDL, VIEW) );



///// Execution and Listeners
elements.calcContainer.addEventListener("click", (event) => {
    if(event.target.matches(".equals")) { 
        if(MDL.getExpression().length > 0) {
            CTRL.handleEquals();
        }
    } else if(event.target.matches(".clear")) { 
        CTRL.handleClear();

    } else if(event.target.matches(".num")) {
        CTRL.handleNumber(event);

    } else if(event.target.matches(".operator")) {
        if(MDL.getExpression().length > 0) {
            CTRL.handleOperator(event);
        }
    }
});