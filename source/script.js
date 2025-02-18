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
