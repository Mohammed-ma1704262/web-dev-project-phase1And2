fetch('session.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
        console.log(item);
      // Parse the date string and convert it to the ISO 8601 format
      let dateString = item.Date.replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})(AM|PM)/, "$3-$2-$1T$4:$5:00$6");
      let date = new Date(dateString);
      let day = date.getDay(); // 0 for Sunday, 1 for Monday, etc.
      let hour = date.getHours();
      let minute = date.getMinutes();
      let timeSlot = document.getElementById(`${day}-1`);
      console.log(timeSlot); 
      timeSlot.innerHTML = `${item.title}<br>${item.Location}<br>${hour}:${minute}`;
    });
  });
