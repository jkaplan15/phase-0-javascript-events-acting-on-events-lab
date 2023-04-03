// Your code here
const dodger = document.getElementById("dodger");
console.log("This is the current position of the dodger: ", dodger.style.left)
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    console.log("This is the value of leftNumbers: ", leftNumbers)
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    console.log("This is the value of rightNumbers: ", rightNumbers)
    const right = parseInt(rightNumbers, 10);

    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
    }
  }
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
})