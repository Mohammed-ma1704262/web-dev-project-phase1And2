let papers = JSON.parse(localStorage.getItem('Papers'));


let container = document.getElementById('paper-list');


papers.forEach((paper) => {
  
  let paperDiv = document.createElement('div');
  paperDiv.classList.add('researchPaper');

  
  let titleElement = document.createElement('h3');
  titleElement.innerText = paper.title;

  
  let affiliationElement = document.createElement('p');
  affiliationElement.innerText = `${paper.affiliation}\n${paper.title}`;

  
  let reviewButton = document.createElement('button');
  reviewButton.innerText = 'Review';

  
  reviewButton.addEventListener('click', () => {
    
    window.location.href = 'reviewPaper.html';
  });

 
  paperDiv.appendChild(titleElement);
  paperDiv.appendChild(affiliationElement);
  paperDiv.appendChild(reviewButton);

  
  container.appendChild(paperDiv);
});
