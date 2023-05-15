// import { writeFileSync } from 'fs';

// function submitData(event) {
//     event.preventDefault();
  
//     const form = document.getElementById('submission-form');
//     const title = form.title.value;
//     const abstract = form.abstract.value;
//     const name = form.name.value;
//     const email = form.email.value;
//     const affiliation = form.affiliation.value;
//     const presenter = form.presenter.checked;
  
//     const data = {
//       title,
//       abstract,
//       authors: [{
//         name,
//         email,
//         affiliation
//       }],
//       presenter
//     };
  
//     try {
//       const jsonData = JSON.stringify(data);
//       writeFileSync('./papers.json', jsonData);
//       console.log('Data saved successfully');
//     } catch (err) {
//       console.error(err);
//     }
//   }

// const submitButton = document.getElementById('form-btn');
// submitButton.addEventListener('click', submitData);
  
//the code above may work ONLY for api's

let papers = [];
  
const addPaper = (e) =>{
  e.preventDefault();
  let paper = {
    title: document.getElementById('title').value,
    abstract: document.getElementById('abstract').value,
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    affiliation: document.getElementById('affiliation').value,
    presenter: document.getElementById('presenter').value
  }
  papers.push(paper)
  document.forms[0].reset()
  localStorage.setItem('Papers', JSON.stringify(papers) );
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('form-btn').addEventListener('click', addPaper);
});