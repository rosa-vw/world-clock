function setClock() {
  let amsterdam = document.querySelector("#amsterdam");
  let amsterdamTime = amsterdam.querySelector(".time");
  amsterdamTime.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("HH:mm[<span>]:ss[</span>]");
  let amsterdamDate = amsterdam.querySelector(".date");
  amsterdamDate.innerHTML = moment().tz("Europe/Amsterdam").format("LL");

  let buenosAires = document.querySelector("#buenos-aires");
  let buenosAiresTime = buenosAires.querySelector(".time");
  buenosAiresTime.innerHTML = moment()
    .tz("America/Argentina/Buenos_Aires")
    .format("HH:mm[<span>]:ss[</span>]");
  let buenosAiresDate = buenosAires.querySelector(".date");
  buenosAiresDate.innerHTML = moment()
    .tz("America/Argentina/Buenos_Aires")
    .format("LL");

  let vancouver = document.querySelector("#vancouver");
  let vancouverTime = vancouver.querySelector(".time");
  vancouverTime.innerHTML = moment()
    .tz("America/Vancouver")
    .format("HH:mm[<span>]:ss[</span>]");
  let vancouverDate = vancouver.querySelector(".date");
  vancouverDate.innerHTML = moment().tz("America/Vancouver").format("LL");
}

setClock();
setInterval(setClock, 1000);

function updateCity(event) {
  let timezone = event.target.value;
  if (timezone === "Current") {
    timezone = moment.tz.guess();
  }
  let city = timezone.split("/").pop().replace("_", " ");
  let cityTime = moment().tz(timezone);
  let clocks = document.querySelector("main");
  clocks.innerHTML = ` <div class="clock">
        <div class="city">${city}</div>
        <div class="time">${cityTime.format("HH:mm")}</div>
        <div class="date">${cityTime.format("LL")}</div>
      </div>`;
  let home = document.querySelector("section");
  home.classList.remove("hide");
}

let dropDownSelection = document.querySelector("#drop-down");
dropDownSelection.addEventListener("change", updateCity);
