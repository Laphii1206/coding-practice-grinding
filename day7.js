var isPalindrome = x => {
  setX = x.toString()
  set = setX.split("")
  let j = set.length - 1
  for (let i = 0; i < set.length - 1; i++) {
    if (set[i] === set[j]) {
      j--
    } else return false
  }
  return true

}
let num = -121;

console.log(isPalindrome(num))