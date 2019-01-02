localStorage.setItem("bootstrap-grid", "off");

document.addEventListener("keydown", function (zEvent) {
  if (zEvent.ctrlKey && zEvent.code === "KeyB") {

    if(localStorage.getItem("bootstrap-grid") == "on"){
      document.getElementById("forh-bs-grid").style.display = "none";
      localStorage.setItem("bootstrap-grid", "off");
      document.getElementById("bootstrap-grid").checked = false;
    }
    else {
      document.getElementById("forh-bs-grid").style.display = "block";
      localStorage.setItem("bootstrap-grid", "on");
      document.getElementById("bootstrap-grid").checked = true;
    }
  }

});

function TurnOnOff() {
  if (document.getElementById("bootstrap-grid").checked) {
    document.getElementById("forh-bs-grid").style.display = "block";
    localStorage.setItem("bootstrap-grid", "on");
  }
  else {
    document.getElementById("forh-bs-grid").style.display = "none";
    localStorage.setItem("bootstrap-grid", "off");
  }
}
