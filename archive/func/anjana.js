// Example non functional

var name = "Matthew";

var greeting = "Hi, I'm";

console.log(greeting + name);

=> "Hi, I'm Matthew"

// Example Functional
function greet(name) {
  return "Hi, I'm " + name;
}

greet ("Matthew");
=> "Hi, I'm Matthew"

// Side Effects- avoid them, use pure functions
// Pure function: does nothing but take it's input, use that (and only that) to compute an output and return it

var name = "Matthew";
function greet() {
  console.log("Hi, I'm " + name);
}
/* This is an impure function:
 * 1) There is no input (name is not an argument) it is reading it from global state and therefore not a pure function
 * 2) The return value isn't what we care about, we care about changing the world in some way other than printing to the console
 */

// Pure function
function greet(name) {
  return "Hi, I'm "+ name;
}
/* This is pure function
 * 1) It has an input (parameter)
 * 2) Only thing it does is return its output
 */

/* Higher Order Functions
 * 1) Functions that can take, as inputs, other functions
 * 2) Function that can return a function as its output
 */

function makeAdjectifier(adjective){
  return function (string) {
    return adjective + " " + string;
  };
}

var coolifier = makeAdjectifier("cool");
coolifier("conference");
=> "cool conference"






