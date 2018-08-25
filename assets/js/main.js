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
    w3.removeClass('#bodyID', 'w3-black');
    w3.addClass('#bodyID','w3-light-gray');

    //left sideBar icon change theme
    w3.removeClass('#leftSideBarIcon','w3-hover-teal');
    w3.addClass('#leftSideBarIcon', 'w3-hover-blue');
    w3.removeClass('#leftSideBarIcon','w3-text-teal');
    w3.addClass('#leftSideBarIcon', 'w3-text-blue');
    w3.removeClass('#leftSideBarIcon','w3-hover-text-dark-gray');
    w3.addClass('#leftSideBarIcon', 'w3-hover-text-white');

    //left sideBar change theme
    w3.removeClass('#mySidebar', 'w3-dark-gray');

    //browse button change theme
    w3.removeClass('#browse', 'w3-text-white');
    w3.addClass('#browse','w3-text-blue');
    w3.removeClass('#browse','w3-hover-teal');
    w3.addClass('#browse', 'w3-hover-blue');
    w3.removeClass('#browse','w3-hover-text-dark-gray');
    w3.addClass('#browse', 'w3-hover-text-white');

    //shot button change theme
    w3.removeClass('#shot', 'w3-text-white');
    w3.addClass('#shot','w3-text-blue');
    w3.removeClass('#shot','w3-hover-teal');
    w3.addClass('#shot', 'w3-hover-blue');
    w3.removeClass('#shot','w3-hover-text-dark-gray');
    w3.addClass('#shot', 'w3-hover-text-white');

    //zoomIn button change theme
    w3.removeClass('#zoomIn', 'w3-text-white');
    w3.addClass('#zoomIn','w3-text-blue');
    w3.removeClass('#zoomIn','w3-hover-teal');
    w3.addClass('#zoomIn', 'w3-hover-blue');
    w3.removeClass('#zoomIn','w3-hover-text-dark-gray');
    w3.addClass('#zoomIn', 'w3-hover-text-white');

    //zoomOut button change theme
    w3.removeClass('#zoomOut', 'w3-text-white');
    w3.addClass('#zoomOut','w3-text-blue');
    w3.removeClass('#zoomOut','w3-hover-teal');
    w3.addClass('#zoomOut', 'w3-hover-blue');
    w3.removeClass('#zoomOut','w3-hover-text-dark-gray');
    w3.addClass('#zoomOut', 'w3-hover-text-white');


    //setting button change theme
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
    w3.removeClass('#settingConfirmButton','w3-hover-text-teal');
    w3.addClass('#settingConfirmButton', 'w3-hover-text-blue');

    w3.removeClass('#lightTheme','w3-light-gray');
    w3.addClass('#lightTheme','w3-blue');

    w3.removeClass('#darkTheme','w3-blue');
    w3.addClass('#darkTheme','w3-light-gray');

    w3.removeClass('#lightTheme','w3-hover-teal');
    w3.addClass('#lightTheme','w3-hover-blue');
    w3.removeClass('#darkTheme','w3-hover-teal');
    w3.addClass('#darkTheme','w3-hover-blue');


    //search button change theme
    w3.removeClass('#search', 'w3-text-white');
    w3.addClass('#search','w3-text-blue');
    w3.removeClass('#search','w3-hover-teal');
    w3.addClass('#search', 'w3-hover-blue');
    w3.removeClass('#search','w3-hover-text-dark-gray');
    w3.addClass('#search', 'w3-hover-text-white');
    
    //closeLeftSideBar button change theme
    w3.removeClass('#closeLeftSideBar', 'w3-text-white');
    w3.addClass('#closeLeftSideBar','w3-text-blue');
    w3.removeClass('#closeLeftSideBar','w3-hover-teal');
    w3.addClass('#closeLeftSideBar', 'w3-hover-blue');
    w3.removeClass('#closeLeftSideBar','w3-hover-text-dark-gray');
    w3.addClass('#closeLeftSideBar', 'w3-hover-text-white');

    //right sideBar icon change theme
    w3.removeClass('#rightSideBarIcon','w3-hover-teal');
    w3.addClass('#rightSideBarIcon', 'w3-hover-blue');
    w3.removeClass('#rightSideBarIcon','w3-hover-text-dark-gray');
    w3.addClass('#rightSideBarIcon', 'w3-hover-text-white');
    w3.removeClass('#rightSideBarIcon','w3-text-teal');
    w3.addClass('#rightSideBarIcon', 'w3-text-blue');

    //right sideBar change theme
    w3.removeClass('#myInfoBar','w3-teal');
    w3.addClass('#myInfoBar', 'w3-blue');

    //closeRightSideBar button change theme
    w3.removeClass('#closeRightSideBar','w3-hover-teal');
    w3.addClass('#closeRightSideBar', 'w3-hover-blue');
    w3.removeClass('#closeRightSideBar','w3-hover-text-dark-gray');
    w3.addClass('#closeRightSideBar', 'w3-hover-text-white');
}
function darkTheme() {
    w3.removeClass('#bodyID','w3-light-gray');
    w3.addClass('#bodyID', 'w3-black');

    //left sideBar icon change theme
    w3.removeClass('#leftSideBarIcon','w3-hover-blue');
    w3.addClass('#leftSideBarIcon', 'w3-hover-teal');
    w3.removeClass('#leftSideBarIcon','w3-text-blue');
    w3.addClass('#leftSideBarIcon', 'w3-text-teal');
    w3.removeClass('#leftSideBarIcon','w3-hover-text-white');
    w3.addClass('#leftSideBarIcon', 'w3-hover-text-dark-gray');

    //left sideBar change theme
    w3.addClass('#mySidebar', 'w3-dark-gray');

    //browse button change theme
    w3.removeClass('#browse','w3-text-blue');
    w3.addClass('#browse', 'w3-text-white');
    w3.removeClass('#browse','w3-hover-blue');
    w3.addClass('#browse', 'w3-hover-teal');
    w3.removeClass('#browse','w3-hover-text-white');
    w3.addClass('#browse', 'w3-hover-text-dark-gray');

    //shot button change theme
    w3.removeClass('#shot','w3-text-blue');
    w3.addClass('#shot', 'w3-text-white');
    w3.removeClass('#shot','w3-hover-blue');
    w3.addClass('#shot', 'w3-hover-teal');
    w3.removeClass('#shot','w3-hover-text-white');
    w3.addClass('#shot', 'w3-hover-text-dark-gray');
    
    //zoomIn button change theme
    w3.removeClass('#zoomIn','w3-text-blue');
    w3.addClass('#zoomIn', 'w3-text-white');
    w3.removeClass('#zoomIn','w3-hover-blue');
    w3.addClass('#zoomIn', 'w3-hover-teal');
    w3.removeClass('#zoomIn','w3-hover-text-white');
    w3.addClass('#zoomIn', 'w3-hover-text-dark-gray');

    //zoomOut button change theme
    w3.removeClass('#zoomOut','w3-text-blue');
    w3.addClass('#zoomOut', 'w3-text-white');
    w3.removeClass('#zoomOut','w3-hover-blue');
    w3.addClass('#zoomOut', 'w3-hover-teal');
    w3.removeClass('#zoomOut','w3-hover-text-white');
    w3.addClass('#zoomOut', 'w3-hover-text-dark-gray');

    //setting button change theme
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
    w3.removeClass('#settingConfirmButton','w3-hover-text-blue');
    w3.addClass('#settingConfirmButton', 'w3-hover-text-teal');

    w3.removeClass('#darkTheme','w3-light-gray');
    w3.addClass('#darkTheme','w3-teal');

    w3.removeClass('#lightTheme','w3-blue');
    w3.addClass('#lightTheme','w3-light-gray');

    w3.removeClass('#lightTheme','w3-hover-blue');
    w3.addClass('#lightTheme','w3-hover-teal');
    w3.removeClass('#darkTheme','w3-hover-blue');
    w3.addClass('#darkTheme','w3-hover-teal');


    //search button change theme
    w3.removeClass('#search','w3-text-blue');
    w3.addClass('#search', 'w3-text-white');
    w3.removeClass('#search','w3-hover-blue');
    w3.addClass('#search', 'w3-hover-teal');
    w3.removeClass('#search','w3-hover-text-white');
    w3.addClass('#search', 'w3-hover-text-dark-gray');

    //closeLeftSideBar button change theme
    w3.removeClass('#closeLeftSideBar','w3-text-blue');
    w3.addClass('#closeLeftSideBar', 'w3-text-white');
    w3.removeClass('#closeLeftSideBar','w3-hover-blue');
    w3.addClass('#closeLeftSideBar', 'w3-hover-teal');
    w3.removeClass('#closeLeftSideBar','w3-hover-text-white');
    w3.addClass('#closeLeftSideBar', 'w3-hover-text-dark-gray');

    //right sideBar icon change theme
    w3.removeClass('#rightSideBarIcon','w3-hover-blue');
    w3.addClass('#rightSideBarIcon', 'w3-hover-teal');
    w3.removeClass('#rightSideBarIcon','w3-text-blue');
    w3.addClass('#rightSideBarIcon', 'w3-text-teal');
    w3.removeClass('#rightSideBarIcon','w3-hover-text-white');
    w3.addClass('#rightSideBarIcon', 'w3-hover-text-dark-gray');

    //right sideBar change theme
    w3.removeClass('#myInfoBar','w3-blue');
    w3.addClass('#myInfoBar', 'w3-teal');

    //closeRightSideBar button change theme
    w3.removeClass('#closeRightSideBar','w3-hover-blue');
    w3.addClass('#closeRightSideBar', 'w3-hover-teal');
    w3.removeClass('#closeRightSideBar','w3-hover-text-white');
    w3.addClass('#closeRightSideBar', 'w3-hover-text-dark-gray');
}

function persian() {

}
function english() {
    
}