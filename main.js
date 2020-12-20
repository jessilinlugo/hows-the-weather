//this ensures the HTML doc is ready for any JS
$(document).ready(function () {


    //this makes the search button clickable
    $(".searchBtn").on("click", function () {
        var cityName = $(".city-input").val();
        console.log("click");
        $(".city-input").val("Enter a city here")

    })

    //this makes the city name buttons clickable
    $(".cityButton").on("click", function () {
        console.log("click");

    })

})