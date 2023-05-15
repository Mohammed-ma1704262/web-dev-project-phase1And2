let sessions = [];
  
const addSession = (e) =>{
  e.preventDefault();
  let session = {
    title: document.getElementById('Title').value,
    location: document.getElementById('location').value,
    date: document.getElementById('date').value,
  }
  sessions.push(session)
  document.forms[0].reset()
  localStorage.setItem('Sessions', JSON.stringify(sessions) );
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('form-btn').addEventListener('click', addSession);
});