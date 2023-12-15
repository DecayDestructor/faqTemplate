let accardion = document.querySelectorAll(".question");
let answerToggler = document.querySelectorAll(".answer");
console.log(answerToggler);
for (let i = 0; i < accardion.length; i++) {
  accardion[i].addEventListener("click", function () {
    answerToggler[i].classList.toggle("active");
    for (let j = 0; j < accardion.length; j++) {
      if (answerToggler[j].classList.contains("active") && j != i) {
        answerToggler[j].classList.toggle("active");
      }
    }
  });
}
