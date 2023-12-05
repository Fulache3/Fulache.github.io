function navBar_function(){
    const navigationBar =  document.getElementsByClassName("right-nav-bar")[0];
    
    if(window.getComputedStyle(navigationBar).visibility==="hidden"){
      navigationBar.style.visibility ='visible';
    }else if(window.getComputedStyle(navigationBar).visibility==="visible"){
      navigationBar.style.visibility='hidden';
    }
}