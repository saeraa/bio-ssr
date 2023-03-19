const upcomingScreeningsList = document.querySelector(".upcoming-screenings");

const url = window.location.href;
const urlParts = url.split("/");
const urlId = urlParts.pop();

fetch(`http://localhost:5080/movies/${urlId}/screenings`)
  .then((response) => response.json())
  .then((data) => {
   
    for (let i = 0; i < data.length; i++) {
    
     const screeningTime = data[i].start_time;
      const [datePart, timePart] = screeningTime.split("T");

      const date = `${datePart.substring(0, 10)}`;
      const time = `${timePart.substring(0, 5)}`;

      //Create elements
      const li = document.createElement("li");
      const titlestartTime = document.createElement("label");
      const startTime = document.createElement("span");
      const br = document.createElement("br");
      const titleroom = document.createElement("label");
      const room = document.createElement("span");

      //Adding class
      li.classList.add("screening-li");
      titlestartTime.classList.add("screening-starttime-title");
      startTime.classList.add("screening-startTime");
      titleroom.classList.add("screening-titleroom-title");
      room.classList.add("screening-room");

      titlestartTime.textContent = "Klockan: ";
      startTime.textContent = date + " " + time;
      titleroom.textContent = "Salong: ";
      room.textContent = data[i].room;

      li.appendChild(titlestartTime);
      li.appendChild(startTime);
      li.appendChild(br);
      li.appendChild(titleroom);
      li.appendChild(room);
      upcomingScreeningsList.appendChild(li);
    }
  });
