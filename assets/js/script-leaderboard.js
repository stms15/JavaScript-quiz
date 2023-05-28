var leaderboardList = document.getElementById('leaderboard');
var clearBttn = document.getElementById('clear-board');

leaders = JSON.parse(localStorage.getItem("leadersList"));

for (let i=0; i<leaderboardList.children.length; i++){
    leaderboardList.removeChild(leaderboardList.children[i]);
}
for (let j=0; j<leaders.length; j++){
    var newLiEl = document.createElement("li");
    newLiEl.textContent = leaders[j].user + " - " + leaders[j].score;
    leaderboardList.appendChild(newLiEl);
}

clearBttn.addEventListener("click", function() {
    leaderboardList.innerHTML = "";
    localStorage.setItem("leadersList", null);
})