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
    $(".add-new-service-btn").click(function(){
        var formNewService = $("#new-device-input").val();         
        $("#service-car").append("<option>" + formNewService + "</option>");
        $("#new-device-input").val("");
        $(".add-new-servis-hide").toggle();
    });
    
//    Pobieranie wszystkich danych z wypełnionego formularza i dodanie do tabeli "Przyjęte zlecenia"
    $("#btn-add-record").click(function(event){        
        var formDate = $("#date-input").val();        
        var formNumberCar = $("#number-car").val();
        var formTypeService = $("#service-car").val();
        var formWorker = $("#worker-car").val();
        var formTime = $("#time-service-car").val();
        
        var lengthTodoTbody = $("#table-todo-tbody tr").length;        
        $("#table-todo-tbody tr:last").after("<tr><td>" + lengthTodoTbody + "</td><td>" + formDate + "</td><td>" + formNumberCar + "</td><td>" + formTypeService + "</td><td>" + formWorker + "</td><td>" + formTime + "</td> <td><i title='Kasuj' class='fas fa-trash-alt'></i><i title='W realizacji' class='fas fa-wrench'></i></td></tr>");        
    });  


  


document.addEventListener('DOMContentLoaded', main);