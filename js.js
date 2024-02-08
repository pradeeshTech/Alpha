
$(document).ready(() => {
      
//       $(".gk-bubble").mouseenter(function(){
//     $('.gk-bubble').addClass("active");
//   });

  $( ".gk-bubble" ).mouseenter(function(e) {
    $(this).addClass("active");
      var tooltipName = $(this).attr("name");
  $(this).append("<span class='bubble-tooltip'>" + tooltipName + "</span>");
   });

  $(".gk-bubble").mouseleave(function(){
    $('.gk-bubble').removeClass("active");
    $('.bubble-tooltip').remove();
  });
  let tooltipName ='' ;
  $(".gk-bubble").click(function(){
    let val = '';

    // let tooltipName = $(this).attr("name");

    console.log( $(this).attr("name"),tooltipName);
    $(".gk-bubble").removeClass("trans");

    if(tooltipName !== $(this).attr("name")){
      tooltipName = $(this).attr("name");
      if (!this) {
        console.log('false');
        tooltipName =''
        // If $(this) doesn't exist, do something else
        $(".gk-bubble").removeClass("trans");
      }
      else {
        console.log('true');
        $(this).addClass("trans");
      } 

      console.log(tooltipName);
      $(".gk-bubble").mouseenter(function(){
        $('.bubble-tooltip').remove();
      });
    }else{
      tooltipName =''
      console.log(tooltipName,'asd');
      $(!this).css("transform","scale(1)");
      $(".gk-bubble").css("transform","scale(1)");
      $('.bubble-tooltip').remove();

    }
   
  });

  // function asd(e){
  //   return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
  // }



});