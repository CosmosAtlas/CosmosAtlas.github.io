"use strict";(function(){var mobileQuery=getComputedStyle(document.body).getPropertyValue("--phoneWidth");var isMobile=function isMobile(){return window.matchMedia(mobileQuery).matches};if(!isMobile()){var languageSelector=document.querySelector(".language-selector-current");var moreLanguagesContainer=document.querySelector(".language-selector__more");document.body.addEventListener("click",function(){if(moreLanguagesContainer&&!moreLanguagesContainer.classList.contains("hidden")){moreLanguagesContainer.classList.add("hidden")}});languageSelector&&languageSelector.addEventListener("click",function(e){e.stopPropagation();moreLanguagesContainer.classList.toggle("hidden")})}})();

