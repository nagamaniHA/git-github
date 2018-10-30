$(document).ready(function() {
   
    var $password = $('#password');
    var $mobileNo = $('#mob');
    var $emailid = $('#mob');
    var loginType;
    
    
    $('#login').click(function validateEmail(){ 
                var email = document.getElementById('mob');
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
        url: 'http://18.222.80.196:8080/services-api-web/userlogin.json',
          
        data: JSON.stringify({
    	"requestHeader":{
        	"messageCode": "1002",
        	"clientId": "MYL",
        	"clientTxnID": "IN156635841118",
        	"requestDateTime": "040612171400",
        	"portalID": "1000"
    	},
    	"requestTrailer": {
        	"secureCode": "AfYtlO5kqdySIjXyNmGg3F",
        	"checkSum": "JNTwoIqce0LpS08zGL5NHHInVN8="
    	},
    	"userLoginRequest":{
            	"emailId": "",
            	"password": $password.val(),
            	"userRole":"0",
            	"loginType": "2",
            	"mobileNo" :$mobileNo.val()
        	}
}),
        dataType: "json",
        contentType: "application/json",
        success: function(response) {
         
           if(response.responseBody.responseCode == "00"){
                
                 setTimeout(function() {
       window.location.href = "side.html"
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
        url: 'http://18.222.80.196:8080/services-api-web/userlogin.json',
          
        data: JSON.stringify({
    	"requestHeader":{
        	"messageCode": "1002",
        	"clientId": "MYL",
        	"clientTxnID": "IN156635841118",
        	"requestDateTime": "040612171400",
        	"portalID": "1000"
    	},
    	"requestTrailer": {
        	"secureCode": "AfYtlO5kqdySIjXyNmGg3F",
        	"checkSum": "JNTwoIqce0LpS08zGL5NHHInVN8="
    	},
    	"userLoginRequest":{
            	"emailId": $emailid.val(),
            	"password": $password.val(),
            	"userRole":"0",
            	"loginType": "1",
            	"mobileNo" :""
        	}
}),
        dataType: "json",
        contentType: "application/json",
        success: function(response) {
           if(response.responseBody.responseCode == "00"){  
                setTimeout(function() {
       window.location.href = "side.html"
      }, 5000);
                $('#responseMsg').text(`${response.responseBody.responseMessage}`);
            }else{
                $('#responseMsg').text(`${response.responseBody.responseMessage}`);
            }
               window.location.href="side.html";
          },
          error: function() {
            $('#responseMsg').text(`${response.responseBody.responseMessage}`);
          },
         
          });
      }
  });
                      });
          