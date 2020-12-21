// First Class Function Rules

// 1. A Function Can Be Store in a Variable
function func (a, b) {
   return a+b
}
const funcVariable = func(5, 7)
console.log(funcVariable)

// 2. A Function Can Be Store in an Array
const func2 = [function (a, b) {    
   return a * b
}]
func2.push(func)
console.log(func2[0](4, 6), func2[1](5, 5))

// 3. A Function Can Be Store in an Object
const func3 = {
   objFunc: function (a, b) {
      return a - b
   },
   objFunc2: func
}
console.log(func3.objFunc(7, 6), func3.objFunc2(10, 10))

// 4. We can create a function as our need at anywhere
setTimeout( () => {
   console.log('Im am first class function created at any where.')
}, 2000)
