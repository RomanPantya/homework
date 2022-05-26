function cutIt(arr) {
    //coding here...
    let a = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < a) {
            a = arr[i].length;
        }
    }
    return a;
}
console.log(cutIt());
console.log(cutIt(["codewars","javascript","java"]));
  /*      arr[i] = arr[i].slice(0, a);
    return arr;  

console.log(cutIt(["codewars","javascript","java"]))
*/