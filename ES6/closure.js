function stopWatch(){
    let counter=0;
    return function(){
        counter++;
        return counter;
    }
}
// undefined
// const w
// VM417:1 Uncaught SyntaxError: Missing initializer in const declarationUnderstand this error

// In console--------------------------------------

// const watch1=stopWatch()
// undefined
// const watch1=stopWatch();
// undefined
// stopWatch()
// ƒ (){
//         counter++;
//         return counter;
//     }
// watch1()
// 1
// watch1()
// 2