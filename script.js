window.onload = function () {
  var scr = document.getElementById("para");
  var buttons = document.querySelectorAll("button");
  scr.innerHTML.length != "20";
  for (item of buttons) {
    item.addEventListener("click", (e) => {
      var buttonText = e.target.innerText;
      console.log("Button text is ", buttonText);

      if (buttonText == "1") {
        scr.innerHTML += buttonText;
      } else if (buttonText == "2") {
        scr.innerHTML += buttonText;
      } else if (buttonText == "3") {
        scr.innerHTML += buttonText;
      } else if (buttonText == "4") {
        scr.innerHTML += buttonText;
      } else if (buttonText == "5") {
        scr.innerHTML += buttonText;
      } else if (buttonText == "6") {
        scr.innerHTML += buttonText;
      } else if (buttonText == "7") {
        scr.innerHTML += buttonText;
      } else if (buttonText == "8") {
        scr.innerHTML += buttonText;
      } else if (buttonText == "9") {
        scr.innerHTML += buttonText;
      } else if (buttonText == "*") {
        scr.innerHTML += buttonText;
      } else if (buttonText == "0") {
        scr.innerHTML += buttonText;
      } else if (buttonText == "#") {
        scr.innerHTML += buttonText;
      } else if (buttonText == "→") {
        scr.innerHTML = scr.innerHTML.slice(0, -1);
      }
    });
  }
};
