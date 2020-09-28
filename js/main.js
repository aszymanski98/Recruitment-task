const getCurrentRotation = (el) => {
  var st = window.getComputedStyle(el, null);
  var tm = st.getPropertyValue("-webkit-transform") || st.getPropertyValue("-moz-transform") || st.getPropertyValue("-ms-transform") || st.getPropertyValue("-o-transform") || st.getPropertyValue("transform") || "none";
  if (tm != "none") {
    let values = tm.split("(")[1].split(")")[0].split(",");
    let angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
    return angle < 0 ? angle + 360 : angle;
  }
  return 0;
};

let buttonRight90 = document.getElementById("rotate-right90").addEventListener("click", () => {
  let dog = document.querySelector(".dog-img");
  let deg = getCurrentRotation(document.querySelector(".dog-img"));
  dog.style.transform = `rotate(${deg + 90}deg)`;
});

let buttonLeft90 = document.getElementById("rotate-left90").addEventListener("click", () => {
  let dog = document.querySelector(".dog-img");
  let deg = getCurrentRotation(document.querySelector(".dog-img"));
  dog.style.transform = `rotate(${deg - 90}deg)`;
});

let buttonReset = document.getElementById("rotate-reset").addEventListener("click", () => {
  let dog = document.querySelector(".dog-img");
  dog.style.transform = "rotate(0deg)";
});

let buttonRight = document.getElementById("rotate-right-custom").addEventListener("click", () => {
  let dog = document.querySelector(".dog-img");
  let input = document.querySelector(".degs");
  let deg = getCurrentRotation(document.querySelector(".dog-img"));
  let degFromInput = input.value;
  console.log(deg);
  console.log(degFromInput);
  dog.style.transform = `rotate(${deg + Number(degFromInput)}deg)`;
});

let buttonLeft = document.getElementById("rotate-left-custom").addEventListener("click", () => {
  let dog = document.querySelector(".dog-img");
  let input = document.querySelector(".degs");
  let deg = getCurrentRotation(document.querySelector(".dog-img"));
  let degFromInput = input.value;
  dog.style.transform = `rotate(${deg - degFromInput}deg)`;
});
