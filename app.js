
const math = window.math;
(function () {
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");
  

    buttons.forEach(function(button) {
        button.addEventListener('click',function(e) {
        
          let value = e.target.dataset.num;
          screen.value += value;
        })
      });
      
     
    equal.addEventListener("click", function (e) {
      if (screen.value === "") {
        screen.value = "0";
      } else {
        try {
            let answer = math.evaluate(screen.value.replace(/[^0-9+\-*/().]/g, ''));

          screen.value = answer;
        } catch (error) {
          screen.value = "Invalid Expression";
        }
      }
    });
  
    clear.addEventListener("click", function (e) {
      screen.value = "";
    });
  })();
  





