// Higher Order Function Rules

// 5. We can pass function as an argument
// 6. We can return a function from another function

function add (a, b) {
   return a * b;
}

function multiply (a, b, func) {
   let x = a * b
   let y = a + b

   function action() {
      let anotherFunc = func(a, b)
      return x*y*anotherFunc
   }
   return action
}
const varFunc = multiply(23, 7, add)
console.log(varFunc())

