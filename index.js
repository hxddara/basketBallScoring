const homeScore = document.getElementById("homeScore")
// Home Score
function addOneHome() {
    homeScore.innerText = parseInt(homeScore.innerText) + 1;
}

function addTwoHome() {
    homeScore.innerText = parseInt(homeScore.innerText) + 2;
}

function addThreeHome() {
    homeScore.innerText = parseInt(homeScore.innerText) + 3;
}
// Guest Score
function addOneGuest() {
    guestScore.innerText = parseInt(guestScore.innerText) + 1;
}

function addTwoGuest() {
    guestScore.innerText = parseInt(guestScore.innerText) + 2;
}

function addThreeGuest() {
    guestScore.innerText = parseInt(guestScore.innerText) + 3;
}