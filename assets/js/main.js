function openSideBar() {
    document.getElementById("mySidebar").style.width = "120px";
}
function closeSideBar() {
    document.getElementById("mySidebar").style.width = "0";
}

function openInfoBar() {
    document.getElementById("myInfoBar").style.width = "300px";
}
function closeInfoBar() {
    document.getElementById("myInfoBar").style.width = "0";
}

function closeSetting() {
    document.getElementById('settingModal').style.display= "none";
}
function openSetting() {
    document.getElementById('settingModal').style.display="block";
}

function lightTheme() {
    document.getElementById('lightTheme').classList.add("w3-blue w3-hover-blue");
    document.getElementById('lightTheme').classList.add("w3-gray w3-hover-blue");
}
function darkTheme() {
    document.getElementById('darkTheme').classList.add("w3-blue w3-hover-blue");
    document.getElementById('darkTheme').classList.add("w3-gray w3-hover-blue");
    document.getElementById("darkTheme").style.color = "blue";
}