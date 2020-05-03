

      $(document).ready(function(){

        $(".col-md-4").hover(

          function(){

            $(this).animate({
              marginTop:"-=1%",
            },200);
          },

            function(){

              $(this).animate({

                marginTop:"0%"
              },200);
            }
        );


        $(".footer-icon").hover(

          function(){

            $(this).animate({

              marginTop:"-=1%",
            },200);
          },

            function(){
              $(this).animate({
                marginTop:"0%"
              },200);
            }
        );  
        


    });

    

