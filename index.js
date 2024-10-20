function fetchJSONData() {
  fetch("https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Arsenal")
      .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then((data) => {
       
        if (data.teams && data.teams.length > 0) {
          const team = data.teams[0];
          const description = team.strDescriptionEN;
          const league = team.strLeague;
          const name = team.strTeamAlternate;

          const descriptionElement = document.getElementById("description");
          descriptionElement.innerHTML = description.replace(/\r\n/g, "<br>");

          const leagueElement = document.getElementById("league");
          leagueElement.innerHTML = league.replace(/\r\n/g, "<br>");

          const nameElement = document.getElementById("name");
          nameElement.innerHTML = name.replace(/\r\n/g, "<br>");
        } else {
          console.error("No team data found!")
        }
      })
      .catch((error) => {
        console.error("Unable to fetch data:", error);
      });
    }
fetchJSONData();
