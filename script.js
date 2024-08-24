// #1 variables => basically Variable at type K container jo ki data ko contain Karte He.
// types =>
// 1) var name = "ram" => Ye Global Hote Hain inka uśe hhi bhi iiya jasstta he
// 2) let email = "r123@gmail.com" => Ye block variables Hain
// 3) const roll_no = 13124   =>inko badla nhi ja skta

// var name = "ram";
// let email = "r123@gmail.com";
// const roll_no = 13124;

// console.table([name, email, roll_no]);

// name = "deepak";
// email = "deepak@gmail.com";
// // roll_no = 99999; isko badale pr error aaegi
// console.table([name, email, roll_no]);

// sammryy =>  js me var ko avodie kr skte H, isli jagah let or const ka uśe kar skte He

// ***********************************************************************8


// #2 data convertion

// let score = "thirty three"
// console.log( score); 
// console.log( typeof score); 

// let converted_score = Number(score)
// console.log(converted_score);
// console.log( typeof converted_score); 

// "33" => number => 33
// "33abc" => number =>NaN 
// true/false => number => 1/0

// now trying to convert value from strig to boolean

// let isTrue = ""
// let boolean_string = Boolean(isTrue)
// console.log(boolean_string);

// console.log( typeof boolean_string);  


// ek khali string ko boolean me convert karne par uski value 0 ho jatiii he, Or jab string me value hotiii tab us string ko convert karne par uski value 1 hotii he jo ki true or false ko indicate kartii he

//******************************************************************
// string convertion


// let hey = 3            
// console.log(hey);
// let neg_hey = -hey
// console.log(neg_hey);

// let str1 = "hello"
// let str2 = " swastik"
// console.log(str1 + str2);


// console.log(1+2+3);      
// console.log("1"+2);      
// 
//  => jaha pr bhi operations me first element string hota he vaha rest elements ko string ki tarah hi  he vaha treat kiya jata he

// console.log("1"+"2"+3);
// console.log(1+2+"3"); 

// or jaha operations me suru ke elkements number or bich ka ya last ka element string hota he uske suru ke elements ko nmbr ki trh hi treat kiya jata he orjaha string hotii he use string ki trh treat kiya jata he 

// let x = 3;
// const y = x++;
// console.log(x);
// console.log(y);
// // x is 4; y is 3

// let x2 = 3n;
// const y2 = x2++;
// // x2 is 4n; y2 is 3n

// ************************************************************

// Data Types in JavaScript

// JavaScript as a language provides the following eight basic data types:

// Number
// String
// Boolean
// Null
// Undefined
// BigInt
// Symbol
// Object
// Here is a brief description of each of the eight basic JavaScript data types:

// JavaScript Number
// Number in JavaScript represents integer numbers or a floating-point number. A number type could also be +Infinity, -Infinity, and NaN (not a number).

// JavaScript Strings
// The string type is used to represent textual data.

// JavaScript Boolean
// The boolean data type represents logical entities. Boolean values represent truth values: true or false.

// JavaScript Null
// Null in JavaScript represents an unknown or empty value.

// JavaScript Undefined
// The undefined data type represents a variable that has not been assigned a value.

// JavaScript BigInt
// BigInt can represent integers with arbitrary precision, allowing you to store and operate on larger numbers beyond the integer limit.

// JavaScript Symbol
// If a value has the symbol data type, it is an immutable and unique primitive value.

// JavaScript Object
// The non-primitive, complex data type object allows you to store multiple data collections. Arrays are a type of object whose keys are integers. Arrays are a key building block for complex data structures.



