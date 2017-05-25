(function appinstance(){
    var navBtn, navTop, navMiddle, navBottom;
    document.addEventListener('DOMContentLoaded',function(){
        loadElements();
        addEventListeners();
        
    });
    
    function navClicked(){
        navTop.classList.toggle("activetop");
        navMiddle.classList.toggle("activemiddle");
        navBottom.classList.toggle("activebottom")
    }
    
    function addEventListeners(){
        navBtn.addEventListener('click', navClicked);
    }
    
    function loadElements(){
           navBtn = document.getElementById('nav_button');
           navTop = document.getElementById('nav_top'),
           navMiddle = document.getElementById('nav_middle'),
           navBottom = document.getElementById('nav_bottom');
    }
})();


