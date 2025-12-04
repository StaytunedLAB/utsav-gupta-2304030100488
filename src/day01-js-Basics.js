

console.log(`JavaScript programs can be inserted almost anywhere into an HTML document using the <script> tag.
For instance:

       <!DOCTYPE HTML>
       <html>

        <body>

         <p>Before the script...</p>

          <script>
         alert( 'Hello, world!' );
         </script>

       <p>...After the script.</p>

        </body>

        </html>
The <script> tag contains JavaScript code which is automatically executed when the browser processes the tag.`)

//2. Code Structure :-
console.log("2. Code Structure :-")

console.log(`Statements :-
Statements are syntax constructs and commands that perform actions.

     alert('Hello'); 
     alert('World');
Semicolons
A semicolon may be omitted in most cases when a line break exists.
alert('Hello')
alert('World')
Comments
Comments can be put into any place of a script. They don’t affect its execution because the engine simply ignores them.`)


//3."use strict" :-

console.log("3. use strict")

console.log(`The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.
For example:

  "use strict";

   // this code works the modern way
    ...`)

    //4.variables
console.log("4.variables :-")

console.log(`-A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

1 .let – is a modern variable declaration.

var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.

const – is like let, but the value of the variable can’t be changed.

5. Data types :-

-A value in JavaScript is always of a certain type. For example, a string or a number.

-There are eight basic data types in JavaScript. Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.

There are 8 basic data types in JavaScript.

Seven primitive data types:

number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
3 .string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
5 .null for unknown values – a standalone type that has a single value null.
6 .undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.
And one non-primitive data type:
object for more complex data structures.`)

//6. Interaction: alert, prompt, confirm:-
console.log("Interaction: alert, prompt, confirm:-")
console.log(`alert
This one we’ve seen already. It shows a message and waits for the user to press “OK”.
For example:

   alert("Hello");
prompt
The function prompt accepts two arguments:

 result = prompt(title, [default]);
3.confirm

he function confirm shows a modal window with a question and two buttons: OK and Cancel.

The result is true if OK is pressed and false otherwise.

For example:

let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed`)

//7. Type conversions:-
console.log("7. Type conversions:-")

console.log(`1.String Conversion

String conversion happens when we need the string form of a value.
Ex:-
let value = true;
alert(typeof value); // boolean

  value = String(value); // now value is a string "true"
  alert(typeof value); // string
Numeric Conversion
Numeric conversion in mathematical functions and expressions happens automatically.
Ex:-
let str = "123";
alert(typeof str); // string

      let num = Number(str); // becomes a number 123

      alert(typeof num); // number
Boolean Conversion
The conversion rule:
Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.

For instance:

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false`)

//8. Basic operators,maths:-
console.log("Basic operators,maths:-")

console.log(`1.Terms: “unary”, “binary”, “operand”

Operand → The value the operator works on.
Example: in 5 + 3, operands = 5 and 3.

Unary operator → Works with one operand.
Example: -x, +x.

Binary operator → Works with two operands.
Example: x + y.

Arithmetic Operators
JavaScript supports standard math operators:

addition
subtraction
multiplication
/ division

% remainder

** exponentiation

Remainder Operator % :-
Returns the leftover after division.
Example: 5 % 2 → 1 (because 5 = 2×2 + 1)
Exponentiation **
Used for power (a raised to b).
Example: 2 ** 3 → 8.
String Concatenation :-
If any operand is a string, + joins (concatenates) them:

"hello" + " world" → "hello world"

"1" + 2 → "12"

1 + "2" → "12"

6.Unary Plus + (Numeric Conversion) :-

Unary + converts a value to a number:

+"2" → 2

+"" → 0

+"3.5" → 3.5

7.Operator Precedence

Some operators execute earlier than others:

is done before +
Example: 2 + 3 * 4 → 2 + 12 = 14
Use parentheses to control order:

(2 + 3) * 4 → 20
Assignment Operator =
= assigns a value and returns it:

 let a = 5;
 let b = a = 10; // b = 10
Increment and Decrement (++, --)
Used only with variables.

Increment:
x++ increases by 1

Decrement:
x-- decreases by 1

Bitwise Operators :-
Work on numbers at the binary level:

& AND

| OR

^ XOR

~ NOT

<< left shift

right shift

unsigned right shift

Comma Operator :-
Evaluates multiple expressions but returns only the last one:
Example:

     let result = (1 + 2, 3 + 4);`)

//9 .Comparisons:-
console.log(`9 .Comparisons:-

1.Comparison operators return a Boolean:-

Any comparison (like >, <, ==, etc.) results in either true or false.

alert( 2 > 1 ); // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

String Comparison :-
-To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
Ex :-
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

Comparison of different types:-
When comparing values of different types, JavaScript converts the values to numbers.
For example:

   alert( '2' > 1 ); // true, string '2' becomes a number 2
   alert( '01' == 1 ); // true, string '01' becomes a number 1
Comparison with null and undefined:-
For a strict equality check ===
These values are different, because each of them is a different type.

 alert( null === undefined ); // false`)

//10. Conditional Branching :-
console.log(`Conditional Branching :-

if statement:-
The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
For example:

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );
else :-
he if statement may contain an optional else block. It executes when the condition is falsy.
For example:

  let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

  if (year == 2015) {
  alert( 'You guessed it right!' );
   } else {
  alert( 'How can you be so wrong?' ); // any value except 2015
   }
else if:-
Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.
For example:

  let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

   if (year < 2015) {
   alert( 'Too early...' );
    } else if (year > 2015) {
   alert( 'Too late' );
   } else {
   alert( 'Exactly!' );
   }`)
//11. Logical operators :-
console.log(`11. Logical operators :-
|| (OR) :-
Works as a logical OR. With boolean values: returns true if at least one operand is true; else returns false.

In JavaScript, OR returns the first truthy value (not just true/false). If none are truthy, returns the last operand.

Useful for fallback/default value patterns. Example: let name = inputName || "Guest"; returns "Guest" if inputName is falsy.

OR uses “short-circuit evaluation”: if first operand is truthy, second operand is not even evaluated.

&& (AND) :-
Logical AND: with boolean values, returns true only if both operands are true, otherwise returns false.

In JS, AND returns the first falsy value when evaluating from left to right; if all are truthy, returns the last value.

Can be used to chain multiple conditions or to run code only if left side is truthy (as short-form for if). Example: isLoggedIn && showDashboard();

Precedence of && is higher than ||, so in mixed expressions && runs before ||.

! (NOT) :-
Logical NOT — unary operator that inverts truthiness: converts value to boolean, then returns its negation.
Example: !true → false, !0 → true, !!value is often used to convert any value to plain boolean.

Precedence of NOT is highest among logical operators (evaluates before && or ||)`)

//12.nullish-coalescing-operator:-
console.log(`12.nullish-coalescing-operator:-
The nullish coalescing operator is written as two question marks ??.

As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

The result of a ?? b is:

if a is defined, then a,
if a isn’t defined, then b.
We can rewrite result = a ?? b using the operators that we already know, like this:

          result = (a !== null && a !== undefined) ? a : b;
Comaprison with || :-
The OR || operator can be used in the same way as ??, as it was described in the previous chapter
For example, in the code above we could replace ?? with || and still get the same result:

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

2.Precendence :-

The precedence of the ?? operator is the same as ||. They both equal 3 in the MDN table
That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, *.
So we may need to add parentheses in expressions like this:

   let height = null;
   let width = null;

   // important: use parentheses
   let area = (height ?? 100) * (width ?? 50);

   alert(area); // 5000`)

//13 .Loop,while & for :-
console.log(`.Loop,while & for :-
The "while" Loop :-
While the condition is truthy, the code from the loop body is executed.
For instance, the loop below outputs i while i < 3:

   let i = 0;
   while (i < 3) { // shows 0, then 1, then 2
   alert( i );
   i++;
    }
2.The "do...while" Loop :-

The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
For example:

  let i = 0;
  do {
  alert( i );
   i++;
  } while (i < 3);
The "for" Loop :-
-The for loop is more complex, but it’s also the most commonly used loop.

  for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
   alert(i);
   }`)

//14. The "switch" statement:-
console.log(`The "switch" statement:-
A switch statement can replace multiple if checks.

It gives a more descriptive way to compare a value with multiple variants.

The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.

If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).

If no case is matched then the default code is executed (if it exists).

Ex:-

  let a = 2 + 2;

  switch (a) {
  case 3:
  alert( 'Too small' );
  break;
  case 4:
  alert( 'Exactly!' );
  break;
  case 5:
  alert( 'Too big' );
  break;
 default:
  alert( "I don't know such values" );
 }`)

//15. Functions:-
console.log(`15. Functions:-

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

1.function Declaration :-

To create a function we can use a function declaration.
It looks like this:

function showMessage() {
alert( 'Hello everyone!' );
 }
Local Variables:-
A variable declared inside a function is only visible inside that function.
For example:

  function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
  }

 showMessage(); // Hello, I'm JavaScript!

 alert( message ); // <-- Error! The variable is local to the function
Outer Variables:-
A function can access an outer variable as well, for example:

       let userName = 'John';

        function showMessage() {
        let message = 'Hello, ' + userName;
        alert(message);
        }

    showMessage(); // Hello, John
Parameters & Arguments
Parameters are named variables in the function declaration — placeholders.

Arguments are the actual values passed to the function when calling it.

Example:

function say(from, text) {
alert(from + ": " + text);
}
say("Alice", "Hello"); // from = "Alice", text = "Hello"




When you pass a variable as argument, the function gets a copy of its value — modification inside function does not change original (for primitive types).

Default Parameter Values
If a parameter isn’t provided (or is passed as undefined), you can assign a default value:

    function showMessage(from, text = "no text given") { ... }
So calling showMessage("Bob") would use "no text given" for text.

Useful to avoid undefined and to make function robust when some arguments are optional.

Return Values
Functions can return a value using the return keyword.

Once return executes, function stops running and returns that value.

If no return is used (or return without value), function returns undefined.

Example:

function sum(a, b) {
return a + b;
}
let result = sum(2, 3); // result = 5


Function Naming & Good Practices
Function names should be verbs (actions), describing what the function does.
Example: showMessage, getData, calculateSum, checkPermission.

A function should do exactly one job. Avoid combining unrelated tasks in a single function.

Small, focused functions make code easier to understand, test, and maintain.`)

//16. function expression :-
console.log(`function expression :-

In JavaScript, a function is not a “magical language structure”, but a special kind of value.

The syntax that we used before is called a Function Declaration:

function sayHi() {
alert( "Hello" );
}

There is another syntax for creating a function that is called a Function Expression.

It allows us to create a new function in the middle of any expression.

We can even print out that value using alert:

function sayHi() {
alert( "Hello" );
}

alert( "Hello" );
}

Function Declaration: a function, declared as a separate statement, in the main code flow:

// Function Declaration
function sum(a, b) {
return a + b;
}

Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:

// Function Expression
let sum = function(a, b) {
return a + b;
};

The more subtle difference is when a function is created by the JavaScript engine.

A Function Expression is created when the execution reaches it and is usable only from that moment.

Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

Function Declarations are different.
A Function Declaration can be called earlier than it is defined.

For example, a global Function Declaration is visible in the whole script, no matter where it is.

That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

And after all Function Declarations are processed, the code is executed. So it has access to these functions.

For example, this works:

     sayHi("John"); // Hello, John

   function sayHi(name) {
   alert( "Hello, ${name}" );
   }
sayHi("John"); // error!

let sayHi = function(name) { // (*) no magic any more
alert( Hello, ${name} );
};`)

//17.arrow functions,basics:-
console.log(`17.arrow functions,basics:-

There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
-It’s called “arrow functions”, because it looks like this:

   let func = (arg1, arg2, ..., argN) => expression;
multi arrow function :-
Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).
Like this:

  let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
   };

 alert( sum(1, 2) ); // 3`)

//18 .Javascript Specials:-
console.log(`18 .Javascript Specials:-
Semicolons & Code Structure:-
JS often inserts ; automatically, but not always → can create errors.

Better to use semicolons manually.

Strict Mode:-
"use strict" enables modern, safer JavaScript rules.

Variables & Types:-
Use let, const, var (old).

JavaScript is dynamic — variables can change type.

Main types: number, string, boolean, null, undefined, object, bigint, symbol.

Interaction Functions:-
alert() → show message

prompt() → take input

confirm() → true/false confirmation

Operators :-
Arithmetic: + - * / % **

also joins strings.
Comparison: == (loose), === (strict).

Logical: &&, ||, !

Nullish: ?? (use default when value is null/undefined)

Conditions & Loops:-
if…else, switch.

Loops: for, while, do…while.

break & continue to control loops.

Functions:-
3 ways: Function Declaration, Function Expression, Arrow Function.

Functions are values → can be stored in variables, passed as arguments.`)