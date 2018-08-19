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

    w3.removeClass('#bodyID', 'w3-dark-gray');
    w3.addClass('#bodyID','w3-light-gray');

    w3.removeClass('#mySidebar', 'w3-teal');

    //browse change theme
    w3.removeClass('#browse', 'w3-text-white');
    w3.addClass('#browse','w3-text-blue');
    w3.removeClass('#browse','w3-hover-white');
    w3.addClass('#browse', 'w3-hover-blue');
    w3.removeClass('#browse','w3-hover-text-teal');
    w3.addClass('#browse', 'w3-hover-text-white');

    //shot change theme
    w3.removeClass('#shot', 'w3-text-white');
    w3.addClass('#shot','w3-text-blue');
    w3.removeClass('#shot','w3-hover-white');
    w3.addClass('#shot', 'w3-hover-blue');
    w3.removeClass('#shot','w3-hover-text-teal');
    w3.addClass('#shot', 'w3-hover-text-white');

    //zoomIn change theme
    w3.removeClass('#zoomIn', 'w3-text-white');
    w3.addClass('#zoomIn','w3-text-blue');
    w3.removeClass('#zoomIn','w3-hover-white');
    w3.addClass('#zoomIn', 'w3-hover-blue');
    w3.removeClass('#zoomIn','w3-hover-text-teal');
    w3.addClass('#zoomIn', 'w3-hover-text-white');

    //zoomOut change theme
    w3.removeClass('#zoomOut', 'w3-text-white');
    w3.addClass('#zoomOut','w3-text-blue');
    w3.removeClass('#zoomOut','w3-hover-white');
    w3.addClass('#zoomOut', 'w3-hover-blue');
    w3.removeClass('#zoomOut','w3-hover-text-teal');
    w3.addClass('#zoomOut', 'w3-hover-text-white');
}
function darkTheme() {
    w3.removeClass('#darkTheme','w3-light-gray');
    w3.addClass('#darkTheme','w3-blue');
    w3.removeClass('#lightTheme','w3-blue');
    w3.addClass('#lightTheme','w3-light-gray');

    w3.removeClass('#bodyID','w3-light-gray');
    w3.addClass('#bodyID', 'w3-dark-gray');
    
    w3.addClass('#mySidebar', 'w3-teal');

    //browse change theme
    w3.removeClass('#browse','w3-text-blue');
    w3.addClass('#browse', 'w3-text-white');
    w3.removeClass('#browse','w3-hover-blue');
    w3.addClass('#browse', 'w3-hover-white');
    w3.removeClass('#browse','w3-hover-text-white');
    w3.addClass('#browse', 'w3-hover-text-teal');

    //shot change theme
    w3.removeClass('#shot','w3-text-blue');
    w3.addClass('#shot', 'w3-text-white');
    w3.removeClass('#shot','w3-hover-blue');
    w3.addClass('#shot', 'w3-hover-white');
    w3.removeClass('#shot','w3-hover-text-white');
    w3.addClass('#shot', 'w3-hover-text-teal');
    
    //zoomIn change theme
    w3.removeClass('#zoomIn','w3-text-blue');
    w3.addClass('#zoomIn', 'w3-text-white');
    w3.removeClass('#zoomIn','w3-hover-blue');
    w3.addClass('#zoomIn', 'w3-hover-white');
    w3.removeClass('#zoomIn','w3-hover-text-white');
    w3.addClass('#zoomIn', 'w3-hover-text-teal');

    //zoozoomOutmIn change theme
    w3.removeClass('#zoomOut','w3-text-blue');
    w3.addClass('#zoomOut', 'w3-text-white');
    w3.removeClass('#zoomOut','w3-hover-blue');
    w3.addClass('#zoomOut', 'w3-hover-white');
    w3.removeClass('#zoomOut','w3-hover-text-white');
    w3.addClass('#zoomOut', 'w3-hover-text-teal');
}

// function leftSideButtonsChangeTheme(nameID) {
//     w3.removeClass('#browse', 'w3-text-white');
//     w3.addClass('#browse','w3-text-blue');
//     w3.removeClass('#browse','w3-hover-white');
//     w3.addClass('#browse', 'w3-hover-blue');
//     w3.removeClass('#browse','w3-hover-text-teal');
//     w3.addClass('#browse', 'w3-hover-text-white');
// }

 