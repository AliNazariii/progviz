function openSideBar() {
    document.getElementById("mySidebar").style.width = "85px";
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
    document.getElementById('browseText').style.backgroundColor= "#2196f3";

    //shot button change theme
    w3.removeClass('#shot', 'w3-text-white');
    w3.addClass('#shot','w3-text-blue');
    w3.removeClass('#shot','w3-hover-teal');
    w3.addClass('#shot', 'w3-hover-blue');
    w3.removeClass('#shot','w3-hover-text-dark-gray');
    w3.addClass('#shot', 'w3-hover-text-white');
    document.getElementById('shotText').style.backgroundColor= "#2196f3";

    //zoomIn button change theme
    w3.removeClass('#zoomIn', 'w3-text-white');
    w3.addClass('#zoomIn','w3-text-blue');
    w3.removeClass('#zoomIn','w3-hover-teal');
    w3.addClass('#zoomIn', 'w3-hover-blue');
    w3.removeClass('#zoomIn','w3-hover-text-dark-gray');
    w3.addClass('#zoomIn', 'w3-hover-text-white');
    document.getElementById('zoomInText').style.backgroundColor= "#2196f3";

    //zoomOut button change theme
    w3.removeClass('#zoomOut', 'w3-text-white');
    w3.addClass('#zoomOut','w3-text-blue');
    w3.removeClass('#zoomOut','w3-hover-teal');
    w3.addClass('#zoomOut', 'w3-hover-blue');
    w3.removeClass('#zoomOut','w3-hover-text-dark-gray');
    w3.addClass('#zoomOut', 'w3-hover-text-white');
    document.getElementById('zoomOutText').style.backgroundColor= "#2196f3";

    //setting button change theme
    w3.removeClass('#setting', 'w3-text-white');
    w3.addClass('#setting','w3-text-blue');
    w3.removeClass('#setting','w3-hover-teal');
    w3.addClass('#setting', 'w3-hover-blue');
    w3.removeClass('#setting','w3-hover-text-dark-gray');
    w3.addClass('#setting', 'w3-hover-text-white');
    document.getElementById('settingText').style.backgroundColor= "#2196f3";


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
    document.getElementById('searchText').style.backgroundColor= "#2196f3";

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
    document.getElementById('browseText').style.backgroundColor= "#009688";

    //shot button change theme
    w3.removeClass('#shot','w3-text-blue');
    w3.addClass('#shot', 'w3-text-white');
    w3.removeClass('#shot','w3-hover-blue');
    w3.addClass('#shot', 'w3-hover-teal');
    w3.removeClass('#shot','w3-hover-text-white');
    w3.addClass('#shot', 'w3-hover-text-dark-gray');
    document.getElementById('shotText').style.backgroundColor= "#009688";
    
    //zoomIn button change theme
    w3.removeClass('#zoomIn','w3-text-blue');
    w3.addClass('#zoomIn', 'w3-text-white');
    w3.removeClass('#zoomIn','w3-hover-blue');
    w3.addClass('#zoomIn', 'w3-hover-teal');
    w3.removeClass('#zoomIn','w3-hover-text-white');
    w3.addClass('#zoomIn', 'w3-hover-text-dark-gray');
    document.getElementById('zoomInText').style.backgroundColor= "#009688";

    //zoomOut button change theme
    w3.removeClass('#zoomOut','w3-text-blue');
    w3.addClass('#zoomOut', 'w3-text-white');
    w3.removeClass('#zoomOut','w3-hover-blue');
    w3.addClass('#zoomOut', 'w3-hover-teal');
    w3.removeClass('#zoomOut','w3-hover-text-white');
    w3.addClass('#zoomOut', 'w3-hover-text-dark-gray');
    document.getElementById('zoomOutText').style.backgroundColor= "#009688";

    //setting button change theme
    w3.removeClass('#setting','w3-text-blue');
    w3.addClass('#setting', 'w3-text-white');
    w3.removeClass('#setting','w3-hover-blue');
    w3.addClass('#setting', 'w3-hover-teal');
    w3.removeClass('#setting','w3-hover-text-white');
    w3.addClass('#setting', 'w3-hover-text-dark-gray');
    document.getElementById('settingText').style.backgroundColor= "#009688";


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
    document.getElementById('searchText').style.backgroundColor= "#009688";

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
    document.getElementById('browseText').innerText= "انتخاب";
    document.getElementById('shotText').innerText= "عکس گرفتن";
    document.getElementById('zoomInText').innerText= "زوم بیشتر";
    document.getElementById('zoomOutText').innerText= "زوم کمتر";
    document.getElementById('settingText').innerText= "تنظیمات";
    document.getElementById('searchText').innerText= "جستجو";    

    //setting modal section change color 
    w3.removeClass('#englishLanguage','w3-blue');
    w3.addClass('#englishLanguage','w3-light-gray');

    w3.removeClass('#persianLanguage','w3-light-gray');
    w3.addClass('#persianLanguage','w3-blue');
}
function english() {
    document.getElementById('browseText').innerText= "Browse";
    document.getElementById('shotText').innerText= "Shot";
    document.getElementById('zoomInText').innerText= "ZoomIn";
    document.getElementById('zoomOutText').innerText= "ZoomOut";
    document.getElementById('settingText').innerText= "Setting";
    document.getElementById('searchText').innerText= "Search";    
    
    //setting modal section change color 
    w3.removeClass('#persianLanguage','w3-blue');
    w3.addClass('#persianLanguage','w3-light-gray');

    w3.removeClass('#englishLanguage','w3-light-gray');
    w3.addClass('#englishLanguage','w3-blue');
}