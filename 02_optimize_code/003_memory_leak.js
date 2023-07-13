// global variables
// Result: var variables take place in memory all the time in the app
// It's better to use const or let to clear space after we done with the variable in a scope
var a = 1,
  b = 2,
  c = 3;
console.log(a, b, c);

// infinite loop
// Result: crash the app after fill the memory.
const arr = [];
for (let index = 10; index > 1; index++) {
  console.log(index);
  arr.push(index);

  if (index === 20) break;
}
console.log(arr);

// event listners
// Result: the more you add the more it takes from the memory as it work from the background
// It's better to remove event listener after you done using it.
/*
removeEventListener(type, listener)
removeEventListener(type, listener, options)
removeEventListener(type, listener, useCapture)

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
*/
if (typeof document !== "undefined") {
  var element = document.getElementById("submitBtn");
  element.addEventListener("click", () => console.log("submitBtn clicked!."));
  element.removeEventListener("click", () =>
    console.log("submitBtn eventlistner click removed!.")
  );
}

// Set interval
// Result: keeps working in the background and fill the memory
// It's better to assign setInterval to variable and after you done clearInterval()
let i = 0;
const intervalID = setInterval(() => {
  i++;
  console.log(`Interval ${i}`);

  if (i > 3) {
    delete i;
    clearInterval(intervalID);
    delete intervalID;
  }
}, 1000);
