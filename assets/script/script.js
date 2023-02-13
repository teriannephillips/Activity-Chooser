
const btn = document.querySelector('#btn');
const radioButtons = document.querySelectorAll("input");

btn.addEventListener("click", () => {
  let selectedSeason;
  let selectedLocation;
  for (const radioButton of radioButtons) {
    if (radioButton.checked && radioButton.name == "season") {
      selectedSeason = radioButton.value;
    }
    else if (radioButton.checked) {
      selectedLocation = radioButton.value;
    }
  }
  getActivities(selectedSeason, selectedLocation);
  // show the output:
  let output = selectedSeason ? `You selected ${selectedSeason}` : `You haven't selected any Season`;
  let output2 = selectedLocation ? `You selected ${selectedLocation}` : `You haven't selected any Location`;

  console.log(output);
  console.log(output2);
});

getActivities = function (season, location) {
  fetch('./assets/script/activities.json')
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          let table = "<table><tr><th>Activity</th><th>Season</th><th>Location</th></tr>";
          for (i = 0; i < data.length; i++) {
            
            if (season == "Both"){
              console.log(data[i].Location);
              table += "<tr><td>" + data[i].Activity + "</td><td>" + data[i].Season + "</td></td><td>" + data[i].Location + "</td></tr>";
            }
            else if (data[i].Season == season ||  data[i].Season == "Both"){
              table += "<tr><td>" + data[i].Activity + "</td><td>" + data[i].Season + "</td></td><td>" + data[i].Location + "</td></tr>";
            }
          }
          table += "</table>";
          document.getElementById("tableContainer").innerHTML = table;
        });
      }
      else {
    console.log(response.status);
  }
});
};

