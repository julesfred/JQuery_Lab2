$(document).ready(function() {
  
  var ogText;
  var name;
  var container;
  var usersName;
  var usersPhone;
  var usersParty;


  $(".available").on("click", function(event) {
    container = $(this);
    $(".formContainer").fadeIn(500);
    $("body").css("background-color", "rgba(0, 0, 0, 0.7)");
});

  $("#reserve-btn").on("click", function(event) {
    usersName = $("#name-id").val();
    // $("#name-id").val("");
    container.attr("name", usersName);
    console.log(usersName);

    usersPhone = $("#phone-id").val();
    // $("#phone-id").val("");
    container.attr("phoneNum", usersPhone);
    console.log(usersPhone);

    usersParty = $("#party-id").val();
    // $("#party-id").val("");
    container.attr("partyNum", usersParty);
    console.log(usersParty);

    container.removeClass("available").addClass("reserved");
    $(".formContainer").fadeOut(500);
    $("body").css("background-color", "#E8DCD9");

    $("form input").val("");
    
    // $(".userInfo").append("<div>" + usersName + usersParty + "</div>");

    });
  
    $("div").on("mouseenter", function(){
        if ($(this).hasClass("reserved")){
            ogText = $(this).text();
            name = $(this).attr("name");
            usersParty =$(this).attr("partyNum");
            $(this).off("click", "");
            
            $(this).html("<div style='line-height:15px;text-align:left;position:relative;height:50px;width:120px;background-color:rgba(238, 238, 238, 0.8);border: 3px solid #ADAAAA;border-radius: 3%;font-size: 12px;z-index:50;'> Name: "+ name + "<br/>Party Number: " + usersParty + "</div>");

        }
    });

    $("div").on("mouseleave", function(){
        if ($(this).hasClass("reserved")){
            $(this).text(ogText); 
        }
    })

    $("i").on("click", function() {
        $(".formContainer").css("display", "none");
        $("body").css("background-color", "#E8DCD9");
    });

});