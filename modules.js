/*
Given a JavaScript module, give examples of how to use the module.
*/

import {add,sub} from './Modules/Utilities.js';
import * as utilities from './Modules/Utilities.js';

console.log(add(3,5));
console.log(utilities.sub(3,5));

/*
There are two types of export
1. Named Exports:When using named exports, each feature or item is referred to by its name upon export, 
which is also used to refer to it upon import.
2. Default Exports: Default export is used to export a default feature or item provided by a module. 
It requires using the ‘export default’ syntax. There can only be one default export per module.
*/

/*
Dynamic module importing is possible in js by calling import as a function,
passing the path to the module as a parameter, then the function returns a promise.
*/
//using then
import('./Modules/Utilities.js')
.then((module) => {
    console.log(module.add(10,20));
    console.log(module.sub(10,20));
})

//using await
let module = await import('./Modules/Utilities.js');
console.log(module.sub(50,10));