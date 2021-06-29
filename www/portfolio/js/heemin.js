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

  $(".planning_note .close_button").click(function(){
    $(".planning_note").fadeOut();
  });
});
