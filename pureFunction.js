// Pure Function.
// ১। এটা একি argument এর উপর ভিত্তি করে সব সময় একটি result return করে 
// ১। এটা আমাদের অন্ন কোনো code বা program এর সাথে observable কোনো side effect করে না।

function pureFunction(n) {
   return n*n
}
console.log(pureFunction(4))
console.log(pureFunction(4))
console.log(pureFunction(4))