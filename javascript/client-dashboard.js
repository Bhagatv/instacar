


var rented_vehicles;


function unlock(vehicle_id){
    console.log(vehicle_id);
    $.ajax({
        url: 'https://34.212.86.167:80/unlock',
        type: 'POST',
        data:{
            "email" : localStorage.getItem('user'),
            "vehicle_id" : vehicle_id
        },
        dataType: 'json',
        success: function(response){
            console.log(response);
        }
    });
}

function lock(vehicle_id){
    console.log(vehicle_id);
    $.ajax({
        url: 'https://34.212.86.167:80/lock',
        type: 'POST',
        data: {
            "email" : localStorage.getItem('user'),
            "vehicle_id" : vehicle_id
        },
        dataType: 'json',
        success: function(response){
            console.log(response);
        }
    });
}

function return_car(vehicle_id){
    console.log(vehicle_id);
    $.ajax({
        url : 'https://34.212.86.167:80/return_car',
        type: 'GET',
        data: {
            "email" : localStorage.getItem('user'),
            "id" : vehicle_id
        },
        dataType: 'json',
        success: function(response){
            console.log(response);
            location.reload();
        }

    });
}
function get_rented_vehicles()
{
$.ajax({
    url: 'https://34.212.86.167:80/rented_vehicles',
    type: 'GET',
    data: 
    {
    	"email": localStorage.getItem('user')
    },
    dataType: 'json',
    success: function(response) {
    	rented_vehicles = response;

        var divCol  = "<div class='profile col-md-4'>";
        
        var divClose= "</div>";
       

        for(var prop in response) {
        
            var make = `
                       <div class = 'container-fluid veh-cont'> 
                            <img src = '../images/${response[prop].info.make.toLowerCase()}.jpg' class = 'img-fluid car-pic' /> 
                            <p class = 'vehicle_title'> ${response[prop].info.make} ${response[prop].info.model} ${response[prop].info.year} </p>
                            <p class = 'vehicle_title'> ${Math.round(response[prop].odometer.data.distance).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} kilometers driven. </p>
                            <div class = 'controls-cont'>
                                <div class = 'controls'> 
                                    <div onclick = "unlock('${prop}');" class = 'col-md-4 btn btn-controls btn-dark'> Unlock </div>
                                    <div onclick = "lock('${prop}');" class = 'col-md-4 btn btn-controls btn-dark'> Lock </div>
                                </div>
                                <div class = 'controls'>
                                    <div onclick = "return_car('${prop}');" class = 'col-md-4 btn btn-controls btn-dark'> Return Car</div>
                                    
                                </div>
                            </div>
                            
                        </div>



                       `;
              $('.container').append(make); // insert the div you've just created

        }
    

    },
    error: function(){
            alert("You have no registered vehicles");
            window.location.replace('/dashboard.html');
        }

});


}

get_rented_vehicles();