var switchElement = document.getElementById("mySwitch");

switchElement.addEventListener("change", function() {
  if (this.checked) {
    // Ação quando o switch estiver ativado
    console.log("Switch ativado");
  } else {
    // Ação quando o switch estiver desativado
    console.log("Switch desativado");
  }
});


function changeBackground() {
    var switchElement = document.getElementById("mySwitch");
    var bodyElement = document.body;
  
    if (switchElement.checked) {
      bodyElement.classList.remove("day-mode");
      bodyElement.classList.add("night-mode");
    } else {
      bodyElement.classList.remove("night-mode");
      bodyElement.classList.add("day-mode");
    }
  }
  