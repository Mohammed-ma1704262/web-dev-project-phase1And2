
const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
  
  event.preventDefault();

  
  const overallEvaluation = document.querySelector('input[name="overall-evaluation"]:checked').value;
  const paperContribution = document.querySelector('input[name="paper-contribution"]:checked').value;
  const paperStrengths = document.querySelector('#paper-strengths').value;
  const paperWeaknesses = document.querySelector('#paper-weaknesses').value;

  
  const review = {
    overallEvaluation,
    paperContribution,
    paperStrengths,
    paperWeaknesses,
  };

  
  localStorage.setItem('review', JSON.stringify(review));
});
var textarea1 = document.getElementById("paper-strengths");
textarea1.value = "Please Write here";

var textarea2 = document.getElementById("paper-weaknesses");
textarea2.value = "Please Write here";