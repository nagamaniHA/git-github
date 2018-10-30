$(document).ready(function() {
   

    var $mobileNo = $('#mobilenumber');
    var loginType;

    $('#reset').click(function validateEmail(){ 
                var email = document.getElementById('mobilenumber');
                var emailvalid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(email.value.match(emailvalid)) {
                    loginType = 1;
                }
                else{
                    loginType = 2;
                }
       alert("hello");
         if(loginType == "2"){
      $.ajax({
          
        type: 'POST',
        url: 'http://18.222.80.196:8080/services-api-web/resetpassword.json',
          
        data: JSON.stringify({
		"requestHeader":{
			"messageCode": "1006",
			"clientId": "MYL",
			"clientTxnID": "IN156635841118",
			"requestDateTime": "040612171400",
			"portalID": "1000"
		},
		"requestTrailer": {
			"secureCode": "AfYtlO5kqdySIjXyNmGg3F",
			"checkSum": "2Wcar61IZfUyD4pRUPsWtZ05ed0="
		},
		"userResetPasswordRequest":{
				"emailId": "",
				"loginType": "2",
            	"mobileNo" : $mobileNo.val()
			}
}),
        dataType: "json",
        contentType: "application/json",
        success: function(response) {
           if(response.responseBody.responseCode == "00"){
                  sessionStorage.setItem("mobile",`${response.userResetPasswordResponse.mobileNo}`);
                setTimeout(function() {
       window.location.href = "reset-pass-code.html"
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
      }

       else{
		$.ajax({
          
        type: 'POST',
        url: 'http://18.222.80.196:8080/services-api-web/resetpassword.json',
          
        data: JSON.stringify({
		"requestHeader":{
			"messageCode": "1006",
			"clientId": "MYL",
			"clientTxnID": "IN156635841118",
			"requestDateTime": "040612171400",
			"portalID": "1000"
		},
		"requestTrailer": {
			"secureCode": "AfYtlO5kqdySIjXyNmGg3F",
			"checkSum": "2Wcar61IZfUyD4pRUPsWtZ05ed0="
		},
		"userResetPasswordRequest":{
				"emailId": $mobileNo.val(),
				"loginType": "1",
                "mobileNo" : ""
			}
}),
        dataType: "json",
        contentType: "application/json",
        success: function(response) {
           if(response.responseBody.responseCode == "00"){
               sessionStorage.setItem("email",`${response.userResetPasswordResponse.emailId}`);
             
               
                $('#responseMsg').text(`${response.responseBody.responseMessage}`);
            }else{
                $('#responseMsg').text(`${response.responseBody.responseMessage}`);
            }
          },
          error: function() {
            $('#responseMsg').text(`${response.responseBody.responseMessage}`);
          },
         
          });
      }
  });
                      });
          

         
    