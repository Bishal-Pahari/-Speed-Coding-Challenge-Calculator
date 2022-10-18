let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "←") {
      // for deleting
      let input = document.querySelector(".inputUser");
      input.value = input.value.substring(0, input.value.length - 1);
      string = input.value;
    } else if (e.target.value === "=") {
      if (document.querySelector(".inputUser").value == "") {
        //removing "unclear" when no output on field
        document.querySelector(".outputUser").value = "";
      } else if (document.querySelector(".inputUser").value == "") {
        // displaying output
        string = eval(string);
        document.querySelector(".outputUser").value = string;
      } else {
        //clearing screen for new screen
        string = eval(string);
        document.querySelector(".outputUser").value = string;
        string = "";
      }
    } else if (e.target.innerHTML === "C") {
      string = "";
      document.querySelector(".outputUser").value = string;
      document.querySelector(".inputUser").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector(".inputUser").value = string;
    }
  });
});
