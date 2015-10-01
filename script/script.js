(function() {
  
   var n = $('#one article')
   var N = $('#two article')
   var c = n.length
   var C = N.length
   var i = 0
   var v = 0
   
   for(i = 0; i <= c; i++) {
     if(i%2==0){
       $('#one article:nth-child('+ i +')').addClass('rotate')
       $('#one article .box:nth-child('+ i +')').addClass('rotate')
     }
   }   
  
  for(v = 0; v <= C; v++){
     if(v%2==0){
       $('#two article:nth-child('+ v +')').addClass('rotate')
       $('#two article .box:nth-child('+ v +')').addClass('rotate')
     }     
   }
  
  $('#menu').click(function(){$('menu ul').toggleClass('visivility')})
  setTimeout(function() {$('section > article').addClass('fadeIn')}, 300)
  
  
})()

jQuery(function($) {
  $('article').waypoint(function() {$('.box').toggleClass( 'animated zoomIn' )}, {offset: '40%', triggerOnce: true})
  //$('.box').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething)
})
