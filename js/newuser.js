$(document).ready(function() {
   
    var $firstName = $('#firstname');
    var $lastName = $('#lastname');
    var $password = $('#password');
    var $repeatPassword = $('#retypepassword');
    var $mobileNo = $('#mobilenumber');
    var userId;
    

    $('#apitry').click(function() {
       alert("hello");
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

          
    