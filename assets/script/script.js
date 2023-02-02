

getActivities = function () {
    fetch('./assets/script/activities.json')
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data)
                    let table = "<table><tr><th>Activity</th><th>Season</th><th>Location</th></tr>";
            data.forEach(row => {
              table += "<tr><td>" + row.Activity + "</td><td>" + row.Season + "</td></td><td>" + row.Location + "</td></tr>";
            });
            table += "</table>";
            document.getElementById("tableContainer").innerHTML = table;
          });
}
            else {
    console.log(response.status);
}
        });
};
getActivities();
