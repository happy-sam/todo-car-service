$(".form-client").hide();
$(".add-new-servis-hide").hide();

var formDate, formNumberCar, formTypeService, formWorker, formTime;
var testy;


$(document).ready(function(){    
    
    $(".btn-start").click(function(){        
        $(".form-client").toggle();        
    });         
    
    $("#add-service").click(function(){        
        $("#add-new-servis-input").toggle();
        $("#add-new-servis-button").toggle();                
    });         
    
    
    $("#add-new-service-btn").click(function(){        
        $(".add-new-servis-hide").hide();        
    });         
    
    var testy = $("#btn-add-record").click(function(){        
        var formDate = $("#date-input").val();        
        var formNumberCar = $("#number-car").val();
        var formTypeService = $("#service-car").val();
        var formWorker = $("#worker-car").val();
        var formTime = $("#time-service-car").val();
//        return console.log(formDate + ", " + formNumberCar + ", " + formTypeService)
        return console.log(formDate + ", " + formTypeService + ", " + formWorker + ", " + formTime);
        
    });         
    
    console.log(testy);
    
    
    
    
});