const secsArr = document.querySelectorAll(".sec");
console.log(secsArr);
let activeExpand = null;

document.body.addEventListener("click", function (ev) {
  const triggered = ev.target;
  if (triggered.classList.contains("toCopy")) {
    navigator.clipboard.writeText(triggered.textContent);
    triggered.classList.add("copied");
    setTimeout(function () {
      triggered.classList.remove("copied");
    }, 1000);
  } else if (triggered.classList.contains("expand")) {
    if (triggered.classList.contains("active")) triggered.textContent = "👇🏻";
    else {
      triggered.textContent = "👆🏻";
      if (activeExpand && activeExpand !== triggered) {
        activeExpand.textContent = "👇🏻";
        activeExpand.classList.remove("active");
        let par = activeExpand.closest("section");
        let toExpand = par.querySelector(".extra");
        toExpand.classList.remove("active");
      }
      activeExpand = triggered;
    }
    triggered.classList.toggle("active");
    let par = triggered.closest("section");
    let toExpand = par.querySelector(".extra");
    toExpand.classList.toggle("active");
  }
});


const blockArr = document.querySelectorAll(".block");
const blockDetailsArr = document.querySelectorAll(".blockDetails");

let activeBlock = null;
for(let i=0; i<3; i++){
    blockArr[i].addEventListener("click", function(){
        blockDetailsArr[i].classList.add("active");
        blockDetailsArr[i].classList.add("cursorDefault");
        if(activeBlock && activeBlock !== blockDetailsArr[i]){
            activeBlock.classList.remove("active");
            activeBlock.classList.remove("cursorDefault");
        }
        activeBlock = blockDetailsArr[i];
    })
}