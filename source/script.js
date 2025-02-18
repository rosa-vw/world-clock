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
        <div class="time">${cityTime.format("HH:mm")}<span>${cityTime.format(
    ":ss"
  )}</span></div>
        <div class="date">${cityTime.format("LL")}</div>
      </div>`;
}

let dropDownSelection = document.querySelector("#drop-down");
dropDownSelection.addEventListener("change", updateCity);
