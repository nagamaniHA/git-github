$(document).ready(function() {
   
    var $firstName = $('#firstname');
    var $lastName = $('#lastname');
    var $password = $('#password');
    var $repeatPassword = $('#retypepassword');
    var $mobileNo = $('#emailid');
    var registrationtype;
    
    
    
      $('#apitry').click(function validateEmail(){ 
          alert("hello");
        
                var email = document.getElementById('emailid');
                var emailvalid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               
          if(email.value.match(emailvalid)) {
                    registrationtype = 1;
                }
                else{
                    registrationtype = 2;
                }
        
        
               
    if(registrationtype == "1"){
      $.ajax({
          
        type: 'POST',
        url: 'http://18.222.80.196:8080/services-api-web/users.json',
          
        data: JSON.stringify({
        "requestHeader":{
            "messageCode": "1001",
            "clientId": "MYL",
            "clientTxnID": "IN156635841118",
            "requestDateTime": "040612171400",
            "portalID": "1000"
        },
        "requestTrailer": {
            "secureCode": "AfYtlO5kqdySIjXyNmGg3F",
            "checkSum": "AfLXVuPcr4V4wZ+/HAfk+OyT2ck="
        },
    
        "userRegistrationRequest":{
                "firstName": $firstName.val(),
                "lastName" : $lastName.val(),
                "emailId": $mobileNo.val(),
                "password": $password.val(),
                "repeatPassword":$repeatPassword.val(),
                "userRole":"0",
                "registrationType": "1",
                "mobileNo":""
        }
}),
        dataType: "json",
        contentType: "application/json",
        success: function(response) {
           if(response.responseBody.responseCode == "00"){
             sessionStorage.setItem("userId",`${response.userRegistrationResponse.userID}`);
                sessionStorage.setItem("mobileNo",`${response.userRegistrationResponse.emailId}`);
              setTimeout(function() {
       window.location.href = "verification-code.html"
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
else {
    $.ajax({
          
        type: 'POST',
        url: 'http://18.222.80.196:8080/services-api-web/users.json',
        data: JSON.stringify({
        "requestHeader":{
            "messageCode": "1001",
            "clientId": "MYL",
            "clientTxnID": "IN156635841118",
            "requestDateTime": "040612171400",
            "portalID": "1000"
        },
        "requestTrailer": {
            "secureCode": "AfYtlO5kqdySIjXyNmGg3F",
            "checkSum": "AfLXVuPcr4V4wZ+/HAfk+OyT2ck="
        },
        "userRegistrationRequest":{
                "firstName": $firstName.val(),
                "lastName" : $lastName.val(),
                "password": $password.val(),
                "repeatPassword":$repeatPassword.val(),
                "userRole":"0",
                "registrationType": "2",
                "mobileNo":$mobileNo.val()
        }
}),
        dataType: "json",
        contentType: "application/json",
        success: function(response) {
     
           if(response.responseBody.responseCode == "00"){
         sessionStorage.setItem("userId",`${response.userRegistrationResponse.userID}`);
            sessionStorage.setItem("mobileNo",`${response.userRegistrationResponse.mobileNo}`);
                setTimeout(function() {
       window.location.href = "verification-code.html"
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
    });
    });



          
    