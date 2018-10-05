var formDate, formNumberCar, formTypeService, formWorker, formTime, formNewService;

var main = function(){
    formHide();
    newServiceHide();
};

//    Ukrywanie formularza przy uruchomieniu strony
var formHide = function() {
    $(".form-client").hide(); 
};

//    Odkryci formularza po liknięciu przycisku DODAJ ZLECENE
    $(".btn-start").click(function(){        
        $(".form-client").toggle();        
    }); 

//    Ukrywanie pola do dodania nowej usługi po kliknięciu przycisku DODAJ ZLECENIE
var newServiceHide = function() {
    $(".add-new-servis-hide").hide();
}

//    Odkrycie pola input i przycisku dodaj do wstawiania nowych rodzajów usług po kliknięciu przycisku DOdaj nową usługę do bazy
    $("#add-service").click(function(){        
        $(".add-new-servis-hide").toggle();
    });   

//    Dodanie nowej usługi do lsty wszystkich rodzajów usług    
    $("#add-new-service-btn").click(function(){
//      1. Pobieramy wartość inputa i wstawiamy do zmiennej formNewService
        var formNewService = $(".new-device-input").val();         
        
    });
    











//
//var formTypeService = $("#service-car").val();
//
//    $("#btn-add-record").click(function(){        
//        $("#pole-testowe").append("formTypeService.val()");
//    });



   


//$(document).ready(function(){    
    
//    $("#add-new-service-btn").click(function(){        
//        $(".add-new-servis-hide").hide();        
//    });         
//    
//    var testy = $("#btn-add-record").click(function(event){        
//        var formDate = $("#date-input").val();        
//        var formNumberCar = $("#number-car").val();
//        var formTypeService = $("#service-car").val();
//        var formWorker = $("#worker-car").val();
//        var formTime = $("#time-service-car").val();
//        return formDate;       
//    });         
   
            
//});


document.addEventListener('DOMContentLoaded', main);