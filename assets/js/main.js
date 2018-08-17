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
    w3.removeClass('#lightTheme','w3-light-gray');
    w3.addClass('#lightTheme','w3-blue');
    w3.removeClass('#darkTheme','w3-blue');
    w3.addClass('#darkTheme','w3-light-gray');
}
function darkTheme() {
    w3.removeClass('#darkTheme','w3-light-gray');
    w3.addClass('#darkTheme','w3-blue');
    w3.removeClass('#lightTheme','w3-blue');
    w3.addClass('#lightTheme','w3-light-gray');
}

