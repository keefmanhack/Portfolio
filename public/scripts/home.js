var slideShowIds = ['#proficient', '#audio-amplifier', '#idk-yet'];

$(".main").onepage_scroll({
   sectionContainer: "section",
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index){ 
      if(index === 3){
         for(var i =0; i<$('#projects-page .item').length; i++){
            $('#projects-page .item').addClass('show', i+3, 'swing,');
         }
      }

      if(index===2){
         $('#done-so-far .item').addClass('show-done');
      }
   },  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});

slideShowIds.forEach(function(id){
   for(var i =1; i < $(id + ' .slides img').length; i++){
         $(id + ' .slides img').slice(i, i+1).css('display', 'none');   
      }
});


slideShowIds.forEach(function(id){
   var index =1;
   setInterval(function(){ 
      for(var i =0; i < $(id + ' .slides img').length; i++){
         $(id + ' .slides img').slice(i, i+1).css('display', 'none');   
      }

      $(id + ' .slides img').slice(index, index+1).css('display', 'block');
      index++;
      
      if(index > $(id + ' .slides img').length-1){
         index = 0;
      }
   }, 1500);
});

