$(document).ready(function() {
   
    var $veriCode = $('#vericode');
    var $firstName = $('#firstname');
    var $lastName = $('#lastname');
    var $password = $('#password');
    var $mobileNo = $('#mobilenumber');
  
   
    
    $('#regsuccess').click(function() {
       alert(sessionStorage.getItem("userId"));
      $.ajax({
          
        type: 'POST',
        url: 'http://18.222.80.196:8080/services-api-web/verifyotp.json',
          
        data: JSON.stringify({
    	"requestHeader":{
        	"messageCode": "1004",
        	"clientId": "MYL",
        	"clientTxnID": "IN156635841118",
        	"requestDateTime": "040612171400",
        	"portalID": "1000"
    	},
        	"requestTrailer": {
        	"secureCode": "AfYtlO5kqdySIjXyNmGg3F",
        	"checkSum": "En4voSLRVsh8VcEp3mYVltJoY+0="
    	},
    	"otpRequest":{
            	"userId": sessionStorage.getItem("userId"),
            	"mobileNo": $mobileNo.val(),
            	"veriCode": $veriCode.val(),
            	"otpType" : "1"
            	
        	}
}),
        dataType: "json",
        contentType: "application/json",
        success: function(response) {
           if(response.responseBody.responseCode == "00"){

                setTimeout(function() {
       window.location.href = "registration-success.html"
      }, 5000);
                $('#responseMsg').text(`${response.responseBody.responseMessage}`);
            }else{
                $('#responseMsg').text(`${response.responseBody.responseMessage}`);
            }
          },
          error: function() {
            $('#responseMsg').text(`${response.responseBody.responseMessage}`);
          },
          
          });
      });
    });

          
    