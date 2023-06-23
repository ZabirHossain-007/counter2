// jquery code will goes here

$(document).ready(function(){
    $('#demo').counto(12345, 5000);
   
    $('#my-number').counto(12345, 5000,function(){
        
          alert('Done!');
        
        });
        $('#my-number').counto(12345, 5000);
        $('#my-number1').counto(12345, 5000);
        $('#my-number2').counto(12345, 5000);

  });