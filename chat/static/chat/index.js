console.log("Sanity check from index.js.");

// focus 'room-input' when user opens the page
document.querySelector("#room-input").focus();

// submit if the user presses the enter key
document.querySelector("#room-input").onkeyup = function(e) {
    if (e.keyCode === 13) {  // enter key
        document.querySelector("#room-connect").click();
    }
};

// redirect to '/room/<room-input>/'
document.querySelector("#room-connect").onclick = function() {
    let roomName = document.querySelector("#room-input").value;
    window.location.pathname = "chat/" + roomName + "/";
}

// redirect to '/room/<room-select>/'
document.querySelector("#room-select").onchange = function() {
    let roomName = document.querySelector("#room-select").value.split(" (")[0];
    window.location.pathname = "chat/" + roomName + "/";
}