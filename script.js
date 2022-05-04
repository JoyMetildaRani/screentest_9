
  //Get the button
  var mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
 
    if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
     
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
  }
 
  function openCity(evt, cityName) {
  var i, tab_onecontent, tab_onelinks;
  tab_onecontent = document.getElementsByClassName("tab_onecontent");
  for (i = 0; i < tab_onecontent.length; i++) {
    tab_onecontent[i].style.display = "none";
  }
  tab_onelinks = document.getElementsByClassName("tab_onelinks");
  for (i = 0; i < tab_onelinks.length; i++) {
    tab_onelinks[i].className = tab_onelinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

  var slideindex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideindex++;
    if (slideindex > slides.length) {slideindex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideindex-1].style.display = "block";  
    dots[slideindex-1].className += " active";
    setTimeout(showSlides, 10000); // Change image every 2 seconds
  }

var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }
 
  
  function showfit(){
 // console.log(document.getElementById("sit").id);
  if(document.getElementById("fit").id="fit"){
   
   // console.log(document.getElementById("sample"));
    document.getElementById("sample_fit").style.display = 'block';
  }
  }

  function closefit(){
    
    if(document.getElementById("closed").id = "closed"){
    
      document.getElementById("sample_fit").style.display = 'none';
    }
  }


  function showkids(){
    if(document.getElementById("kids").id="kids"){
   
       document.getElementById("sample_yoga").style.display = 'block';
  }
  }


  function closekids(){
   
    if(document.getElementById("closedkids").id = "closedkids"){
    
      document.getElementById("sample_yoga").style.display = 'none';
    }
  }

  function showmusic(){
    if(document.getElementById("music").id="music"){
   
   document.getElementById("sample_music").style.display = 'block';
}
  }


  function closemusic(){
   
   if(document.getElementById("closedmusic").id = "closedmusic"){
   
     document.getElementById("sample_music").style.display = 'none';
   }
 }


 function showmind(){
    if(document.getElementById("mind").id="mind"){
   
   document.getElementById("sample_mind").style.display = 'block';
}
  }

  function closemind(){
   
   if(document.getElementById("closedmind").id = "closedmind"){
   
     document.getElementById("sample_mind").style.display = 'none';
   }
 }

 function showeuph(){
    if(document.getElementById("euph").id="euph"){
   
   document.getElementById("sample_euph").style.display = 'block';
}
  }

  function closeeuph(){
   
   if(document.getElementById("closedeuph").id = "closedeuph"){
   
     document.getElementById("sample_euph").style.display = 'none';
   }
 }
 function showmath(){
    if(document.getElementById("math").id="math"){
   
   document.getElementById("sample_math").style.display = 'block';
}
  }

  function closemath(){
   
   if(document.getElementById("closedmath").id = "closedmath"){
   
     document.getElementById("sample_math").style.display = 'none';
   }
 }

 function showsci(){
    if(document.getElementById("sci").id="sci"){
   
   document.getElementById("sample_sci").style.display = 'block';
}
  }

  function closesci(){
   
   if(document.getElementById("closedsci").id = "closedsci"){
   
     document.getElementById("sample_sci").style.display = 'none';
   }
 }

  function tabevents(evt, Name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " active";
  }


  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
}







  function openClass(evt, forclasses) {
    var i, tabcontentforclasses, tablinksforclasses;
    tabcontentforclasses = document.getElementsByClassName("tabcontentforclasses");
    for (i = 0; i < tabcontentforclasses.length; i++) {
      tabcontentforclasses[i].style.display = "none";
    }
    tablinksforclasses = document.getElementsByClassName("tablinksforclasses");
    for (i = 0; i < tablinksforclasses.length; i++) {
      tablinksforclasses[i].className = tablinksforclasses[i].className.replace(" active", "");
    }
    document.getElementById(forclasses).style.display = "block";
    evt.currentTarget.className += " active";
  }

