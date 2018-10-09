var formDate, formNumberCar, formTypeService, formWorker, formTime, formNewService;

var main = function(){
    newServiceHide();
    deleteRecord();
    appendToRecord();
    appendToFinish();
}; 

//    Odkryci formularza po liknięciu przycisku DODAJ ZLECENE
    $(".btn-start").click(addRecordTodo);
    function addRecordTodo() {        
        $(".form-client").toggle();        
    }; 

//    Ukrywanie pola do dodania nowej usługi po kliknięciu przycisku DODAJ ZLECENIE
    var newServiceHide = function() {
    $(".add-new-servis-hide").hide();
}

//    Odkrycie pola input i przycisku dodaj do wstawiania nowych rodzajów usług po kliknięciu przycisku DOdaj nową usługę do bazy
    $("#add-service").click(AddNewServiceHide);
        function AddNewServiceHide(){        
        $(".add-new-servis-hide").toggle();
    };   

//    Dodanie nowej usługi do listy wszystkich rodzajów usług    
    $(".add-new-service-btn").click(addNewService);
        function addNewService(){
        var formNewService = $("#new-device-input").val();         
        $("#service-car").append("<option>" + formNewService + "</option>");
        $("#new-device-input").val("");
        $(".add-new-servis-hide").toggle();
    };
    
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

//    Usuwanie wiersza z tabeli
    var deleteRecord = function(){
        $("body").on("click", ".fa-trash-alt", function(){        
            $(this).closest("tr").remove();                                
            $('#table-todo-tbody > tr').each(function(i){            
                $(this).find('td:first-child').text(i);
            });
            $('#table-in-progress-tbody > tr').each(function(i){            
                $(this).find('td:first-child').text(i);
            });
            $('#table-finish-tbody > tr').each(function(i){            
                $(this).find('td:first-child').text(i);
            });
        });
    };

//    Przeniesienie wiersza z tabeli "Przyjęte zlecenia" do tabeli "zlecenia w trakcie realizacji"
var appendToRecord = function(){
    $("body").on("click", ".fa-wrench", function(){        
        $(this).closest("tr").appendTo("#table-in-progress-tbody");    
        var lengthInProgressTbody = $("#table-in-progress-tbody tr").length-1;        
        $("#table-in-progress-tbody tr:last td:first").text(lengthInProgressTbody);
        $("#table-in-progress-tbody tr:last td:last").html("<i title='Zrobione' class='fas fa-check-circle'></i><i title='Kasuj' class='fas fa-trash-alt'></i>");        
        
        var dateFinish = new Date();
        function addZero(i) {
            return (i < 10)? '0'+i : i;
        }
        
        var dateF = dateFinish.getFullYear() + "-" + addZero((dateFinish.getMonth()+1)) + "-" + addZero(dateFinish.getDate());                
        $("#table-in-progress-tbody tr:last td:eq(1)").text(dateF);       
        
        
        var datawykonania = function(){
            if ($("#table-in-progress-tbody tr:last td:eq(5)").val() == "1 dzień"){
                dateF = (dateF) + 1;
            } else{
                "dupa"
            }
        }
        $("#table-in-progress-tbody tr:last td:eq(5)").text(datawykonania);
        
        console.log(datawykonania);
        
        
        
        $('#table-todo-tbody > tr').each(function(i){            
            $(this).find('td:first-child').text(i);
        });
    });
};


//    Przeniesienie wiersza z tabeli "zlecenia w trakcie realizacji" do tabeli "zlecenia zlealizowane"
var appendToFinish = function(){
    $("body").on("click", ".fa-check-circle", function(){        
        $(this).closest("tr").appendTo("#table-finish-tbody");    
        var lengthInProgressTbody = $("#table-finish-tbody tr").length-1;        
        $("#table-finish-tbody tr:last td:first").text(lengthInProgressTbody);
        $("#table-finish-tbody tr:last td:eq(6)").remove();
        
        var dateFinish = new Date();
        function addZero(i) {
            return (i < 10)? '0'+i : i;
        }
        var dateF = dateFinish.getFullYear() + "-" + addZero((dateFinish.getMonth()+1)) + "-" + addZero(dateFinish.getDate());                
        $("#table-finish-tbody tr:last td:eq(1)").text(dateF);        
        
        $('#table-in-progress-tbody > tr').each(function(i){            
            $(this).find('td:first-child').text(i);
        });
        $("#table-finish-tbody tr:last td:last").html("<i title='Kasuj' class='fas fa-trash-alt'></i>");
    });
};






document.addEventListener('DOMContentLoaded', main);