// Your code here

  function moveDodgerLeft() {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
    
      if (left > 0) {
        dodger.style.left = `${left - 1}px`;
      }
    }

  document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        moveDodgerLeft();
      }
      if (e.key === "ArrowRight") {
          moveDodgerRight()
      }
    });

    function moveDodgerRight() {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);

      // Move right only if within the right boundary
      //Parent element - Child element. 400 - 40
      if (left < 360) {
        dodger.style.left = `${left + 1}px`;
      }
    }
