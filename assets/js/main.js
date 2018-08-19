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

    w3.removeClass('#lightTheme','w3-hover-teal');
    w3.addClass('#lightTheme','w3-hover-blue');
    w3.removeClass('#darkTheme','w3-hover-teal');
    w3.addClass('#darkTheme','w3-hover-blue');

    w3.removeClass('#bodyID', 'w3-black');
    w3.addClass('#bodyID','w3-light-gray');

    w3.removeClass('#mySidebar', 'w3-dark-gray');

    //browse change theme
    w3.removeClass('#browse', 'w3-text-white');
    w3.addClass('#browse','w3-text-blue');
    w3.removeClass('#browse','w3-hover-teal');
    w3.addClass('#browse', 'w3-hover-blue');
    w3.removeClass('#browse','w3-hover-text-dark-gray');
    w3.addClass('#browse', 'w3-hover-text-white');

    //shot change theme
    w3.removeClass('#shot', 'w3-text-white');
    w3.addClass('#shot','w3-text-blue');
    w3.removeClass('#shot','w3-hover-teal');
    w3.addClass('#shot', 'w3-hover-blue');
    w3.removeClass('#shot','w3-hover-text-dark-gray');
    w3.addClass('#shot', 'w3-hover-text-white');

    //zoomIn change theme
    w3.removeClass('#zoomIn', 'w3-text-white');
    w3.addClass('#zoomIn','w3-text-blue');
    w3.removeClass('#zoomIn','w3-hover-teal');
    w3.addClass('#zoomIn', 'w3-hover-blue');
    w3.removeClass('#zoomIn','w3-hover-text-dark-gray');
    w3.addClass('#zoomIn', 'w3-hover-text-white');

    //zoomOut change theme
    w3.removeClass('#zoomOut', 'w3-text-white');
    w3.addClass('#zoomOut','w3-text-blue');
    w3.removeClass('#zoomOut','w3-hover-teal');
    w3.addClass('#zoomOut', 'w3-hover-blue');
    w3.removeClass('#zoomOut','w3-hover-text-dark-gray');
    w3.addClass('#zoomOut', 'w3-hover-text-white');


    //setting change theme
    w3.removeClass('#setting', 'w3-text-white');
    w3.addClass('#setting','w3-text-blue');
    w3.removeClass('#setting','w3-hover-teal');
    w3.addClass('#setting', 'w3-hover-blue');
    w3.removeClass('#setting','w3-hover-text-dark-gray');
    w3.addClass('#setting', 'w3-hover-text-white');


    //setting modal change theme 
    w3.removeClass('#settingContent','w3-dark-gray');

    w3.removeClass('#settingHeader','w3-teal');
    w3.addClass('#settingHeader', 'w3-blue');

    w3.removeClass('#settingFooter','w3-teal');
    w3.addClass('#settingFooter', 'w3-blue');

    w3.removeClass('#settingConfirmButton','w3-teal');
    w3.addClass('#settingConfirmButton', 'w3-blue');


    //search change theme
    w3.removeClass('#search', 'w3-text-white');
    w3.addClass('#search','w3-text-blue');
    w3.removeClass('#search','w3-hover-teal');
    w3.addClass('#search', 'w3-hover-blue');
    w3.removeClass('#search','w3-hover-text-dark-gray');
    w3.addClass('#search', 'w3-hover-text-white');
    
    //closeLeftSideBar change theme
    w3.removeClass('#closeLeftSideBar', 'w3-text-white');
    w3.addClass('#closeLeftSideBar','w3-text-blue');
    w3.removeClass('#closeLeftSideBar','w3-hover-teal');
    w3.addClass('#closeLeftSideBar', 'w3-hover-blue');
    w3.removeClass('#closeLeftSideBar','w3-hover-text-dark-gray');
    w3.addClass('#closeLeftSideBar', 'w3-hover-text-white');
}
function darkTheme() {
    w3.removeClass('#darkTheme','w3-light-gray');
    w3.addClass('#darkTheme','w3-teal');

    w3.removeClass('#lightTheme','w3-blue');
    w3.addClass('#lightTheme','w3-light-gray');

    w3.removeClass('#lightTheme','w3-hover-blue');
    w3.addClass('#lightTheme','w3-hover-teal');
    w3.removeClass('#darkTheme','w3-hover-blue');
    w3.addClass('#darkTheme','w3-hover-teal');

    w3.removeClass('#bodyID','w3-light-gray');
    w3.addClass('#bodyID', 'w3-black');
    
    w3.addClass('#mySidebar', 'w3-dark-gray');

    //browse change theme
    w3.removeClass('#browse','w3-text-blue');
    w3.addClass('#browse', 'w3-text-white');
    w3.removeClass('#browse','w3-hover-blue');
    w3.addClass('#browse', 'w3-hover-teal');
    w3.removeClass('#browse','w3-hover-text-white');
    w3.addClass('#browse', 'w3-hover-text-dark-gray');

    //shot change theme
    w3.removeClass('#shot','w3-text-blue');
    w3.addClass('#shot', 'w3-text-white');
    w3.removeClass('#shot','w3-hover-blue');
    w3.addClass('#shot', 'w3-hover-teal');
    w3.removeClass('#shot','w3-hover-text-white');
    w3.addClass('#shot', 'w3-hover-text-dark-gray');
    
    //zoomIn change theme
    w3.removeClass('#zoomIn','w3-text-blue');
    w3.addClass('#zoomIn', 'w3-text-white');
    w3.removeClass('#zoomIn','w3-hover-blue');
    w3.addClass('#zoomIn', 'w3-hover-teal');
    w3.removeClass('#zoomIn','w3-hover-text-white');
    w3.addClass('#zoomIn', 'w3-hover-text-dark-gray');

    //zoomOut change theme
    w3.removeClass('#zoomOut','w3-text-blue');
    w3.addClass('#zoomOut', 'w3-text-white');
    w3.removeClass('#zoomOut','w3-hover-blue');
    w3.addClass('#zoomOut', 'w3-hover-teal');
    w3.removeClass('#zoomOut','w3-hover-text-white');
    w3.addClass('#zoomOut', 'w3-hover-text-dark-gray');

    //setting change theme
    w3.removeClass('#setting','w3-text-blue');
    w3.addClass('#setting', 'w3-text-white');
    w3.removeClass('#setting','w3-hover-blue');
    w3.addClass('#setting', 'w3-hover-teal');
    w3.removeClass('#setting','w3-hover-text-white');
    w3.addClass('#setting', 'w3-hover-text-dark-gray');


    //setting modal change theme 
    w3.addClass('#settingContent','w3-dark-gray');

    w3.removeClass('#settingHeader','w3-blue');
    w3.addClass('#settingHeader', 'w3-teal');

    w3.removeClass('#settingFooter','w3-blue');
    w3.addClass('#settingFooter', 'w3-teal');

    w3.removeClass('#settingConfirmButton','w3-blue');
    w3.addClass('#settingConfirmButton', 'w3-teal');


    //search change theme
    w3.removeClass('#search','w3-text-blue');
    w3.addClass('#search', 'w3-text-white');
    w3.removeClass('#search','w3-hover-blue');
    w3.addClass('#search', 'w3-hover-teal');
    w3.removeClass('#search','w3-hover-text-white');
    w3.addClass('#search', 'w3-hover-text-dark-gray');

    //closeLeftSideBar change theme
    w3.removeClass('#closeLeftSideBar','w3-text-blue');
    w3.addClass('#closeLeftSideBar', 'w3-text-white');
    w3.removeClass('#closeLeftSideBar','w3-hover-blue');
    w3.addClass('#closeLeftSideBar', 'w3-hover-teal');
    w3.removeClass('#closeLeftSideBar','w3-hover-text-white');
    w3.addClass('#closeLeftSideBar', 'w3-hover-text-dark-gray');
}

 