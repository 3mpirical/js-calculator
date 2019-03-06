

///// Model
const MDL = (function() {

    let expressionArr = [];


    const clearExpression = () => {
        expressionArr = [];
    };

    const pushItem = (item) => {
        expressionArr.push(item);
    };

    const getExpression = () => {
        return expressionArr;
    };

    const parseExpression = () => {
        let numOne = "";
        let operator;
        let numTwo = "";
        
        expressionArr.forEach((item) => {
            if(item.type === "number" && !operator) {
                numOne += item.value;
            } else if(item.type === "number" && operator) {
                numTwo += item.value;
            } else {
                operator = item.value;
            }
        });

        return {
            numOne: parseInt(numOne),
            numTwo: parseInt(numTwo),
            operator,
        };
    };

    return {
        clearExpression,
        pushItem,
        getExpression,
        parseExpression,
    };
} () );


export { MDL };