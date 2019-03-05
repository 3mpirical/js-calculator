

///// Model
const MDL = (function() {

    let expressionArr = [];


    const pushItem = (item) => {
        expressionArr.push(item);
    };

    return {
        pushItem,
    };
} () );


export { MDL };