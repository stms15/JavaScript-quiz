var leaderboardList = document.getElementById('leaderboard');

leaders = JSON.parse(localStorage.getItem("leadersList"));
console.log(leaders);

for (let i=0; i<leaderboardList.children.length; i++){
    leaderboardList.removeChild(leaderboardList.children[i]);
}
for (let j=0; j<leaders.length; j++){
    var newLiEl = document.createElement("li");
    newLiEl.textContent = leaders[j].user + " - " + leaders[j].score;
    leaderboardList.appendChild(newLiEl);
}