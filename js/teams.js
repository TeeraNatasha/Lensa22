


script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
<script>
$(document).ready(function(){
  $(".overlay6").click(function(){
     $(".overlay6").animate({height: "-300px"});
     $(".overlay106").animate({height: "368px"});
    });
     
  $(".overlay106").click(function(){
      $(".overlay6").animate({height: "60px"});
     $(".overlay106").animate({height: "-368px"});
  	});
});
</script> /// JavaScript Document