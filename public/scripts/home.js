var slideShowIds = ['#proficient', '#audio-amplifier', '#idk-yet'];


let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
   console.log(scroll_pos);
  if (scroll_pos > 350){
   $('#done-so-far .item').addClass('show-done');
  }
  if (scroll_pos > 800){
      for(var i =0; i<$('#projects-page .item').length; i++){
         $('#projects-page .item').addClass('show', i+3, 'swing,');
      }
      
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

$("#learn-more").click(function() {
    document.getElementById("experience-page").scrollIntoView({behavior: "smooth"});
});



var ct =-1;
slideShowIds.forEach(function(id){
   ct++;
   var index =1;
   setInterval(function(){ 
      for(var i =0; i < $(id + ' .slides img').length; i++){
         $(id + ' .slides img').slice(i, i+1).removeClass('display');   
      }

      $(id + ' .slides img').slice(index, index+1).addClass('display');
      index++;
      
      if(index > $(id + ' .slides img').length-1){
         index = 0;
      }
   }, 5000);
});
