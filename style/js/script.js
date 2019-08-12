$(document).ready(function(){

  //this attaches localscroll to the navigation ID
  //in addition to the html, this is all we need to have a scrolling page!
  $('#navigation').localScroll({ hash: true });








  //however...if you want something neat to happen while the page is scrolling read on!
  //this makes the green box follow the screen (and become transparent) as it scrolls
  $('#navigation').localScroll({
    hash: true,
    onBefore: function(el) {
      // this gets the value from the link you just clicked
      // basically this tells us where the screen is moving
      link = $(el.srcElement).attr('href');

      // this finds the position we are moving to
      position = $(link).offset().top;

      //this animates the box the first part tells it to animate the top attribute (+ 60 so it will be below the navigaiton)
      //the second part sets the speed of the animation
      $(".box1").animate({top: position+60, opacity: "-=0.2"}, 1500);

      //also every time you click the box becomes slightly more transparent from this part.... opacity: "-=0.1"
    }
  });














  //another bonus....if you are feeling ambitious
  // basically this makes the box move left and right when you click on it
  $(".box1").click(function(event){
    if (parseInt($(this).css("left")) < 500 ) {
      leftVal = "+=450px";
    } else {
      leftVal = "-=450px";
    }

    $(this).animate({left: leftVal});
  });

});