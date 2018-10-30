$(document).ready(function() {
   
    var $firstName = $('#firstname');
    var $lastName = $('#lastname');
    var $dob = $('#dob');
    var $gender = $('.gender');
    var $mobileNo = $('#mobilenumber');

    

    $('#update').click(function() {
       alert("hello");
      $.ajax({
          
        type: 'POST',
        url: 'http://18.222.80.196:8080/services-api-web/usersprofileconfig.json',
          
        data: JSON.stringify({
    	"requestHeader":{
        	"messageCode": "1011",
        	"clientId": "MYL",
        	"clientTxnID": "IN156635841118",
        	"requestDateTime": "040612171400",
        	"portalID": "1000"
    	},
    	"requestTrailer": {
        	"secureCode": "AfYtlO5kqdySIjXyNmGg3F",
        	"checkSum": "3/7EfaIzx9vAx/pHG3wqwIPXWwc="
    	},
    	"usersProfileConfigRequest":{
            "portalUserDetails": {
            "userId":sessionStorage.getItem("userId"),
        	"firstName":$firstName.val(),
        	"lastName":$lastName.val(),
        	"dob":$dob.val(),
        	"sex":$gender.val(),
        	"mobile":$mobileNo.val(),
        	"pincodeMasterId":7
    	},
    "portalUserAddressDetails":[
      	{
        	"userAddress":"#123 malagala",
        	"addressLandmark":" SBI",
        	"cityLookupId":1,
        	"stateLookupId":1,
        	"countryLookupId":1,
        	"pincodeMasterId":10,
        	"status":1,
		    "portalUserAddressDetailsId": 2890
    	 }
    	]
}
}),
        dataType: "json",
        contentType: "application/json",
        success: function(response) {
           if(response.responseBody.responseCode == "00"){
               sessionStorage.setItem("firstName",$firstName.val());
              
                 setTimeout(function() {
       window.location.href = "update-success.html"
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

          
    