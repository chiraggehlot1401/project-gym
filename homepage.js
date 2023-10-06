// navbar code:-

const replaceClass = (oldClass, newClass) => {
    var elem = $("#iconNav");
    if (elem.hasClass(oldClass)) {
        elem.removeClass(oldClass);
    }
    elem.addClass(newClass);
    if (newClass === "fa-times") {
        elem.click(function() {
            replaceClass("fa-times", "fa-bars");
        });
    } else if (newClass === "fa-bars") {
        elem.click(function() {
            replaceClass("fa-bars", "fa-times");
        });
    }
};

$(".fa-bars").click(function() {
    replaceClass("fa-bars", "fa-times");
    $("nav").toggleClass("nav-toggle");
});

$(".head").click(function(){
    replaceClass("fa-times", "fa-bars"); 
    $("nav").removeClass("nav-toggle");
});

// header code:- 

$(window).scroll(function(){
   if($(window).scrollTop() >= 30){
    $("header").addClass("active");
   } else {
    $("header").removeClass("active");
   }
});

// gallery code:-

$("#btn1").click(function(){
     $("#myModel").css("display","block");
     $("#img0").attr("src","./assets/pic1.jpg");
     $("#caption").html("equipments");
});

$("#btn2").click(function(){
    $("#myModel").css("display","block");
    $("#img0").attr("src","./assets/pic2.jpg");
    $("#caption").html("dumbells area and stand");
});

$("#btn3").click(function(){
    $("#myModel").css("display","block");
    $("#img0").attr("src","./assets/pic3.jpg");
    $("#caption").html("plates");
});

$("#btn4").click(function(){
    $("#myModel").css("display","block");
    $("#img0").attr("src","./assets/pic4.jpg");
    $("#caption").html("tredmill");
});

$("#btn5").click(function(){
    $("#myModel").css("display","block");
    $("#img0").attr("src","./assets/pic5.jpg");
    $("#caption").html("barbells");
});

$("#btn6").click(function(){
    $("#myModel").css("display","block");
    $("#img0").attr("src","./assets/pic6.jpg");
    $("#caption").html("machines");
});

$(".fa-times").click(function(){
    $("#myModel").css("display","none");
})

// tools:-

function openTab(evt , tools){
    $(".tab-content").css("display","none");
    $(".tablinks").removeClass("active");
    $("#"+ tools ).css("display","block");
    $(evt.currentTarget).addClass("active");
}

$("#tab1").click(function(event){
    openTab(event , "BMICalc");
});

$("#tab2").click(function(event){
    openTab(event , "CalorieCalc");
});

$("#tab3").click(function(event){
    openTab(event , "BMRCalc");
});

$("#tab1").click();  // to kept one tab open always

// scroll events:-

$(".home").click(function(){
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
});
$(".feature").click(function(){
    document.getElementById("features").scrollIntoView({behavior:"smooth"});
});
$(".about").click(function(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
});
$(".gallery").click(function(){
    document.getElementById("gallery").scrollIntoView({behavior:"smooth"});
});
$(".tools").click(function(){
    document.getElementById("tools").scrollIntoView({behavior:"smooth"});
});
$(".contact").click(function(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
});

// calorie calculator

$("#calculate").click(function(){

    let bmr;
    let Caloriemultiplier;
    const weight = parseFloat($("#weight").val());
    const height = parseFloat($("#height").val());
    const age = parseInt($("#age").val());
    const activity= $("#activity").val();
    const gender= $("input[name='gender']:checked").val();

    if(gender === 'male' ){
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } 
    else if(gender === 'female' ){
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    switch (activity) {
        case "sedentary":
            Caloriemultiplier = 1.2;
            break;
        case "lightlyActive":
            Caloriemultiplier = 1.375;
            break;
        case "moderatelyActive":
            Caloriemultiplier = 1.55;
            break;
        case "veryActive":
            Caloriemultiplier = 1.725;
            break;
        case "extraActive":
            Caloriemultiplier = 1.9;
            break;
    }

    var estCal = ( bmr * Caloriemultiplier).toFixed(2);
    $("#result").text(estCal);

});

// bmr calculator

$("#calculatebmr").click(function(){
    let bmr1;
    const weight1=parseFloat($("#weight1").val());
    const height1 = parseFloat($("#height1").val());
    const age1 = parseInt($("#age1").val());
    const gender1= $("input[name='gender1']:checked").val();

    if(gender1 === 'male' ){
        bmr1 = 10 * weight1 + 6.25 * height1 - 5 * age1 + 5;
    } 
    else if(gender1 === 'female' ){
        bmr1 = 10 * weight1 + 6.25 * height1 - 5 * age1 - 161;
    }

    var estbmr= (bmr1).toFixed(2);
    $("#result1").text(estbmr);
});

$("#calculatebmi").click(function(){
    let bmi;
    const weight2=parseFloat($("#weight2").val());
    const height2 = parseFloat($("#height2").val());

    bmi = weight2 / (height2*height2);

    var estbmi =(bmi).toFixed(2);
    $("#result2").text(estbmi);

});

