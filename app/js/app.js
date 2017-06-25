(function appinstance(){
    var navBtn, navTop, navMiddle, navBottom, sidebar,w,bannerOverlay;
    document.addEventListener('DOMContentLoaded',function(){
        loadElements();
        addEventListeners();
        
    });
    function noscroll() {
        window.scrollTo( 0, 0 );
    }
    
    function navClicked(){
        navTop.classList.toggle("activetop");
        navMiddle.classList.toggle("activemiddle");
        navBottom.classList.toggle("activebottom");
        
        sidebar.classList.toggle("hiddenSidebar");
//        window.addEventListener('scroll', noscroll);
        
        w = window.innerWidth;
        if(sidebar.classList.contains("hiddenSidebar") || w > 1309){
          window.removeEventListener('scroll', noscroll);
        }
        innerMainContent.classList.toggle('blur');
        console.log(w);
    }
    
    function addEventListeners(){
        navBtn.addEventListener('click', navClicked);
    }
    
    function loadElements(){
           navBtn = document.getElementById('nav_button');
           navTop = document.getElementById('nav_top'),
           navMiddle = document.getElementById('nav_middle'),
           navBottom = document.getElementById('nav_bottom');
           sidebar = document.getElementById('sidebar');
           feed = document.getElementById('feeds');
           innerMainContent = document.getElementById('mainContent');
           
    }
})();

