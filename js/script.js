$(".add-new-servis-hide").hide();

$(document).ready(function(){       
    $("#add-service").click(function(){        
        $("#add-new-servis-input").toggle();
        $("#add-new-servis-button").toggle();                
    });         
});