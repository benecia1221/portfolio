$(document).ready(function(){
  var lastScroll = 0;
     $(window).scroll(function(event){
          var scroll = $(this).scrollTop();
          if (scroll > 500){
               $("#sec1").addClass("on");
          }
          else {
               $("#sec1").removeClass("on");
          }
          lastScroll = scroll;
   });
   $(window).scroll(function(event){
        var scroll = $(this).scrollTop();
        if (scroll > 1300){
             $("#sec2").addClass("on");
        }
        else {
             $("#sec2").removeClass("on");
        }
        lastScroll = scroll;
    });

    $(window).scroll(function(event){
         var scroll = $(this).scrollTop();
         if (scroll > 2700){
              $("#sec3").addClass("on");
         }
         else {
              $("#sec3").removeClass("on");
         }
         lastScroll = scroll;
     });

   $(".bottom_btn a, .menu a, a[href='#pageTop']").click(function(e){
     e.preventDefault();//e:임의의 a태그 변수지정
     var targetPos = $($(this).attr('href')).offset().top
     $('body,html').animate({'scrollTop':targetPos});
   });
   $(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
  });
  $(".bottom_btn a, .menu a, a[href='#pageTop']").click(function(e){
    e.preventDefault();//e:임의의 a태그 변수지정
    var targetPos = $($(this).attr('href')).offset().top
    $('body,html').animate({'scrollTop':targetPos});
  });

  $(".planning_back .noteLink1").click(function(){
    $(".planning_note").fadeIn();
    $(".planning_noteImg.note1").fadeIn();
    return false;
  });
  $(".planning_back .noteLink2").click(function(){
    $(".planning_note").fadeIn();
    $(".planning_noteImg.note2").fadeIn();
    return false;
  });
  $(".planning_back .noteLink3").click(function(){
    $(".planning_note").fadeIn();
    $(".planning_noteImg.note3").fadeIn();
    return false;
  });
  $(".planning_back .noteLink4").click(function(){
    $(".planning_note").fadeIn();
    $(".planning_noteImg.note4").fadeIn();
    return false;
  });
  $(".planning_back .noteLink2").click(function(){
    $(".planning_note").fadeIn();
    $(".planning_noteImg.note2").fadeIn();
    return false;
  });
  $(".planning_back .noteLink5").click(function(){
    $(".planning_note").fadeIn();
    $(".planning_noteImg.note5").fadeIn();
    return false;
  });
  $(".planning_back .noteLink6").click(function(){
    $(".planning_note").fadeIn();
    $(".planning_noteImg.note6").fadeIn();
    return false;
  });




  $(".planning_note .close_button").click(function(){
    $(".planning_note").fadeOut();
    $(".planning_noteImg").fadeOut();
  });

  $("#slider").slick({
    slide:'div',
    infinite:true,
    slidesToShow : 4, 
    slidesToScroll:1,
    speed:100,
    arrows:true,
    autoplay : true,
  })


});
