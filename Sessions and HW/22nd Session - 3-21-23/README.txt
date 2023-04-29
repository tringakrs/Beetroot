45. Which keywords are used to handle exceptions?
Try… Catch—finally is used to handle exceptions in the JavaScript

Try{
    Code
}
Catch(exp){
    Code to throw an exception.
}
Finally{
    Code runs either it finishes successfully or after catch
}

try: This keyword is used to enclose the block of code that might generate an exception.

catch: This keyword is used in some programming languages to handle exceptions.

except: This keyword is used to specify what happens when an exception is raised.

finally: This keyword is used to specify a block of code that will always be executed, regardless of whether an exception is raised or not.

46. Which keyword is used to print the text on the screen?
Document. Write (“Welcome”) is used to print the text–Welcome on the screen.

Syntax: console.log() is a method in JavaScript and uses dot notation, while write() is a function or method used in other programming languages and 
has different syntax depending on the language.

Usage: console.log() is mainly used for debugging and informational purposes in web development, while write() is used for general text output to the 
console or terminal.

Formatting: console.log() allows you to format the output with different colors, font styles, and other features, while write() usually outputs plain text.

Compatibility: console.log() is specific to JavaScript and is not supported in all environments, while write() is a common method in many programming 
languages and is widely supported.

47. What is the use of the blur function?
Blur function is used to remove the focus from the specified object.

48. What is variable typing?
Variable typing assigns a number to a variable and then assigns a string to the same variable. An example is as follows:

i= 8;
i="john";

49. How to find an operating system in the client machine using JavaScript?
The ‘Navigator. the app version is used to find the operating system’s name in the client machine.

// get the operating system name
const OSName = navigator.appVersion;

// log the operating system name to the console
console.log(OSName);

50. What are the different types of errors in JavaScript?
There are three types of errors:
Load time errors: Errors that come up when loading a web page, like improper syntax errors, are known as Load time errors and generate the errors dynamically.
Runtime errors: Errors that come due to misuse of the command inside the HTML language.
Logical errors: These are the errors that occur due to the bad logic performed on a function with a different operation.

51. What is the use of the Push method in JavaScript?
The push method is used to add or append one or more elements to an Array end. Using this method, we can append multiple elements by passing multiple arguments.

52. What is the unshift method in JavaScript?
Unshift method is like the push method, which works at the beginning of the array. This method is used to prepend one or more elements to the beginning of the array.

53. What is the difference between JavaScript and Jscript?
Name and History: JavaScript is a scripting language developed by Netscape Communications in the mid-1990s, while JScript is Microsoft's 
implementation of the language. Microsoft created JScript to compete with JavaScript and released it as part of Internet Explorer 3.0 in 1996.

Syntax: While the syntax of JavaScript and JScript is largely the same, there are some minor differences in the way the two languages handle 
certain constructs. For example, in JavaScript, a semicolon is optional at the end of a statement, while in JScript, it is required.

Features: JavaScript and JScript have similar features, but there are some differences in the way they are implemented. For example, 
JavaScript has the let and const keywords for declaring variables, while JScript does not support these keywords. On the other hand, 
JScript has some features that are not present in JavaScript, such as the try...catch...finally statement for exception handling.

Support: JavaScript is supported by all major web browsers, while JScript is only supported by Internet Explorer. 
This means that websites that use JScript may not work correctly in other browsers.

54. How are object properties assigned?
Properties are assigned to objects in the following way –

obj ["class"] = 12;
or
obj.class = 12;

55. What is the ‘Strict Mode in JavaScript, and how can it be enabled?
Under the strict Mode, JavaScript shows errors for a piece of code, which did not show an error before, but might be problematic and potentially unsafe. 
Strict Mode also solves some mistakes that hamper the JavaScript engines from working efficiently.

Strict mode can be enabled by adding the string literal “use strict” above the file. This can be illustrated by the given example:
function myfunction() {
    "use strict;"
    var v = "This is a strict mode function";
}

56. What is the way to get the status of a CheckBox?
alert(document.getElementById('checkbox1').checked); 
this alert will return TRUE.

57. How can the OS of the client machine be detected?
The navigator. 

58. What is a window.onload and onDocumentReady?
The onload function is not run until all the information on the page is loaded. This leads to a substantial delay before any code is executed.

onDocumentReady loads the code just after the DOM is loaded. This allows early manipulation of the code.

59. How closures work in JavaScript?
A closure in JavaScript is created when a function is defined inside another function, 
and the inner function has access to the outer function's variables and parameters, even after the outer function has returned. 
Here's an example:

function outerFunction() {
  const outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); l// Output: "I am from the outer function"

Closures are powerful because they allow inner functions to access and manipulate variables from outer functions, 
which can be useful for creating private variables and functions, among other things. However, they can also cause memory leaks 
if not used carefully, because the variables and functions from the outer function remain in memory even after the outer function has returned.

60. How can a value be appended to an array?
A value can be appended to an array in the given manner –

arr[arr.length] = value; 

