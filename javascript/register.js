$(".submit").click(function(){
  console.log("Submitted");

var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;
console.log(user);

 $.ajax({
    url: 'https://34.212.86.167:80/register',
    type: 'POST',
    data: 
    {
    	"user": user,
    	"password": pass
    },
    dataType: 'json',
    success: function(response) {
			console.log("Successful");
			window.location.replace('/login.html');
}

});

});