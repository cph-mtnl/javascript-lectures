// Setup
const text = document.querySelector(".intro");
const strText =
  "Hej med dig, så du vil gerne lave regnbue muffins? Mit navn er Berta og det kan jeg hjælpe dig med. Sørg for at du har alle ingredienserne. Du kan tjekke firkanten af når du har fundet det du skal bruge. Du kan også spørge om en voksen vil printe opskriften ud for dig. Når du har fundet det hele frem så kan vi gå i gang! Klik på videoen nedenunder";
const splitText = strText.split("");
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

//Fade in
function startFancyAnimation() {
  let char = 0;
  let timer = setInterval(onTick, 50);
  function onTick() {
    const span = text.querySelectorAll(".intro span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return;
    }
  }
  function complete() {
    clearInterval(timer);
    timer = null;
  }
}
