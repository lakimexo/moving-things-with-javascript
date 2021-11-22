const app = "I don't do much."
const dodger = document.getElementById("dodger"); 
console.log(dodger);
document.addEventListener('keydown', function(e) {
    console.log(e.which)
  })




function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); 

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(leftNumbers, 10);
  
    if (right < 360) {
      dodger.style.left = `${right + 1}px`;
    }
  } 

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight" ) {
      moveDodgerRight();
    }
  });
