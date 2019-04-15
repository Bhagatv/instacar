var urlParams = new URLSearchParams(window.location.search);
var rentParm = urlParams.get('id');

rent();

function rent() {
	$.ajax({
    url: 'https://34.212.86.167:80/rent',
    type: 'GET',
    data: 
    {
    	"id": rentParm,
    	"email": localStorage.getItem('user')
    },
    dataType: 'json',
    success: function(response) {

    	if(response.status != "Success")
    	{
    		alert("error");
    	}


}

});


		setTimeout(function(){ window.location.replace('/dashboard.html'); }, 4000);

}