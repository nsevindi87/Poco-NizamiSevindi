document.querySelector("#colorPicker").addEventListener("change", function (e) {
  document.querySelector(".box").style.backgroundColor = e.target.value;
  if (!document.querySelector(".box").style.backgroundColor) {
    document.querySelector(".box").innerText =
      e.target.value + "is not a valid color";
    document.querySelector(".box").style.backgroundColor = "initial";
  } else {
    document.querySelector(".box").innerText = e.target.value;
  }
});
