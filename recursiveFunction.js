// Recursive Function এমন এক function যে নিজেই নিজেকে call করে পারে। আর এর call করা যাতে infinity না হয় সেজন্য আমাদেরকে একটা নির্দিষ্ট point set করে দিতে হয়, যেখানে hit করলে আমাদের program বা recursive call টা stop হয়ে যাবে।


function recursive(n) {
   if (n === 0) {
      return
   }
   console.log("I am recursive function")
   return recursive(n - 1)
}
recursive(5)


// make factorial from an array
function recursive2(arr, lastIndex) {
   if (lastIndex < 0) {
      return 0
   }
   return arr[lastIndex] + recursive2(arr, lastIndex - 1)
}
const array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(recursive2(array, array.length - 1))
