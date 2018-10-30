$(document).ready(function() {
  
    var $password = $('#password');
   
    
    $('#save').click(function() {
       alert("hello");
        var pas= document.getElementById("password").value;
        var repas= document.getElementById("repassword").value;
        if( pas != repas){
            $('#responseMsg').text('password is not matching');
        }
        else{
      $.ajax({
          
        type: 'POST',
        url: 'http://18.222.80.196:8080/services-api-web/savepassword.json',
          
        data: JSON.stringify({
		"requestHeader":{
			"messageCode": "1007",
			"clientId": "MYL",
			"clientTxnID": "IN156635841118",
			"requestDateTime": "040612171400",
			"portalID": "1000"
		},
		"requestTrailer": {
			"secureCode": "AfYtlO5kqdySIjXyNmGg3F",
			"checkSum": "GXd0X+AlKMWeYVCOHiD8+2u7n1w="
		},
		"saveUserPasswordRequest":{
				"tokenId":sessionStorage.getItem("verify-code"),
				"password":$password.val(),
				"emailId":"",
				"mobileNo":sessionStorage.getItem("mobile")
			}
}),
        dataType: "json",
        contentType: "application/json",
        success: function(response) {
      
           if(response.responseBody.responseCode == "00"){
              
              
                setTimeout(function() {
       window.location.href = "save-password.html"
      }, 5000);
                $('#responseMsg').text(`${response.responseBody.responseMessage}`);
            }else{
                $('#responseMsg').text(`${response.responseBody.responseMessage}`);
            }
          },
          error: function() {
            $('#responseMsg').text(`${response.responseBody.responseMessage}`);
          }
          
          });
        }
      });
    });

          
    