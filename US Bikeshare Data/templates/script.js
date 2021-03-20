// FORM
const form = document.querySelector("form");

const citiesdiv = document.querySelector(".cities");
const monthsdiv = document.querySelector(".months");
const daysdiv = document.querySelector(".days");

const city_radios = document.getElementsByName("city");
const month_radios = document.getElementsByName("month");
const day_radios = document.getElementsByName("day")

const cityBtn = document.querySelector(".cityBtn");
const monthBtn = document.querySelector(".monthBtn");
const monthPrevBtn = document.querySelector(".monthPrevBtn");
const dayBtn = document.querySelector(".dayBtn");
const dayPrevBtn = document.querySelector(".dayPrevBtn");


console.log(city_radios, month_radios, day_radios)

function getValue(radio){
    console.log(radio.value);
}

city_radios.forEach(function(city_radio){
    city_radio.addEventListener("change", function(){
        cityBtn.classList.remove("disabled")
        cityBtn.disabled = false;
    });
});

month_radios.forEach(function(month_radio){
    month_radio.addEventListener("change", function(){
        monthBtn.classList.remove("disabled")
        monthBtn.disabled = false;

    });
});

day_radios.forEach(function(day_radio){
    day_radio.addEventListener("change", function(){
        dayBtn.classList.remove("disabled")
        dayBtn.disabled = false;
    });
});

cityBtn.addEventListener("click", function(){

    citiesdiv.classList.toggle("hidden")
    setTimeout(function(){
        citiesdiv.classList.toggle("hiddenafter")
    },350)
    monthsdiv.classList.toggle("hidden")
    setTimeout(function(){
        monthsdiv.classList.toggle("hiddenafter")
    },350)
})

monthBtn.addEventListener("click", function(){

    monthsdiv.classList.toggle("hidden")
    setTimeout(function(){
        monthsdiv.classList.toggle("hiddenafter")
    },350)
    daysdiv.classList.toggle("hidden")
    setTimeout(function(){
        daysdiv.classList.toggle("hiddenafter")
    },350)
})

monthPrevBtn.addEventListener("click", function(){

    monthsdiv.classList.toggle("hidden")
    setTimeout(function(){
        monthsdiv.classList.toggle("hiddenafter")
    },350)
    citiesdiv.classList.toggle("hidden")
    setTimeout(function(){
        citiesdiv.classList.toggle("hiddenafter")
    },350)
})

dayPrevBtn.addEventListener("click", function(){

    daysdiv.classList.toggle("hidden")
    setTimeout(function(){
        daysdiv.classList.toggle("hiddenafter")
    },350)
    monthsdiv.classList.toggle("hidden")
    setTimeout(function(){
        monthsdiv.classList.toggle("hiddenafter")
    },350)
})




// INPUTS
const results = document.querySelector(".results")
if ('{{empty}}' == 0){
    results.innerHTML = '<div class="title">No Data Yet</div>'
}
if ('{{empty}}' == 1){

    var time_stats = []
    {% for stat in time_stats.values()%}
    time_stats.push("{{stat}}")
    {% endfor %}
    document.querySelector(".commonth").innerHTML = (time_stats[0])
    document.querySelector(".comday").innerHTML = (time_stats[1])
    document.querySelector(".comhour").innerHTML = (time_stats[2])
    document.querySelector(".timetime").innerHTML = ((Math.round(time_stats[3] * 1e6)/1e3) + " milliseconds")

    // console.log(time_stats);
    // var time_stats_keys = Object.values(time_stats)
    // console.log(time_stats_keys)
    
    var station_stats = []
    
    {% for stat in station_stats.values() %}
    station_stats.push("{{stat}}")
    {% endfor %}
    
    document.querySelector(".comstart").innerHTML = (station_stats[0])
    document.querySelector(".comend").innerHTML = (station_stats[1])
    document.querySelector(".comcombination").innerHTML = (station_stats[2])
    document.querySelector(".stationtime").innerHTML = ((Math.round(station_stats[3] * 1e6)/1e3) + " milliseconds")

    console.log(station_stats);
    
    var trip_duration_stats = []
    
    {% for stat in trip_duration_stats.values() %}
    trip_duration_stats.push("{{stat}}")
    {% endfor %}
    document.querySelector(".totaltravel").innerHTML = (trip_duration_stats[0])
    document.querySelector(".meantravel").innerHTML = (trip_duration_stats[1])
    document.querySelector(".traveltime").innerHTML = ((Math.round(trip_duration_stats[2] * 1e6)/1e3) + " milliseconds")

    console.log(trip_duration_stats);

    var user_stats = []
    
    {% for stat in user_stats.values() %}
    user_stats.push("{{stat}}")
    {% endfor %}
    
    document.querySelector(".subsc").innerHTML = (user_stats[0])
    document.querySelector(".custom").innerHTML = (user_stats[1])

    if (user_stats.length  != 3){
        document.querySelector(".males").innerHTML = (Math.round(user_stats[2]))
        document.querySelector(".females").innerHTML = (Math.round(user_stats[3]))
        document.querySelector(".early").innerHTML = (Math.round( user_stats[4]))
        document.querySelector(".recent").innerHTML = (Math.round( user_stats[5]))
        document.querySelector(".comyear").innerHTML = (Math.round( user_stats[6]))
        document.querySelector(".usertime").innerHTML = ((Math.round(user_stats[7] * 1e6)/1e3) + " milliseconds")
    }
    if (user_stats.length == 3){
        document.querySelector(".males").innerHTML = (Math.round(user_stats[3]))
        document.querySelector(".females").innerHTML = (Math.round(user_stats[3]))
        document.querySelector(".early").innerHTML = (Math.round( user_stats[3]))
        document.querySelector(".recent").innerHTML = (Math.round( user_stats[3]))
        document.querySelector(".comyear").innerHTML = (Math.round( user_stats[3]))
        document.querySelector(".usertime").innerHTML = ((Math.round(user_stats[7] * 1e6)/1e3) + " milliseconds")
    }
    console.log(user_stats);
}


// Data viewer
const timeStatsBtn = document.querySelector(".timeStats");
const stationStatsBtn = document.querySelector(".stationStats");
const tripStatsBtn = document.querySelector(".tripStats");
const UserStatsBtn = document.querySelector(".userStats");

const timeDiv = document.querySelector(".time_stats");
const stationDiv = document.querySelector(".station_stats");
const tripDiv = document.querySelector(".trip_stats");
const userDiv = document.querySelector(".user_stats");

timeStatsBtn.addEventListener("click",function(){
    timeDiv.classList.remove("hidden")
    setTimeout(function(){
        timeDiv.classList.remove("hiddenafter")
    },350)
    stationDiv.classList.add("hidden")
    setTimeout(function(){
        stationDiv.classList.add("hiddenafter")
    },350)
    tripDiv.classList.add("hidden")
    setTimeout(function(){
        tripDiv.classList.add("hiddenafter")
    },350)
    userDiv.classList.add("hidden")
    setTimeout(function(){
        userDiv.classList.add("hiddenafter")
    },350)
    console.log("timebtn")
});

stationStatsBtn.addEventListener("click",function(){
    timeDiv.classList.add("hidden")
    setTimeout(function(){
        timeDiv.classList.add("hiddenafter")
    },350)
    stationDiv.classList.remove("hidden")
    setTimeout(function(){
        stationDiv.classList.remove("hiddenafter")
    },350)
    tripDiv.classList.add("hidden")
    setTimeout(function(){
        tripDiv.classList.add("hiddenafter")
    },350)
    userDiv.classList.add("hidden")
    setTimeout(function(){
        userDiv.classList.add("hiddenafter")
    },350)
});

tripStatsBtn.addEventListener("click",function(){
    timeDiv.classList.add("hidden")
    setTimeout(function(){
        timeDiv.classList.add("hiddenafter")
    },350)
    stationDiv.classList.add("hidden")
    setTimeout(function(){
        stationDiv.classList.add("hiddenafter")
    },350)
    tripDiv.classList.remove("hidden")
    setTimeout(function(){
        tripDiv.classList.remove("hiddenafter")
    },350)
    userDiv.classList.add("hidden")
    setTimeout(function(){
        userDiv.classList.add("hiddenafter")
    },350)
});

UserStatsBtn.addEventListener("click",function(){
    timeDiv.classList.add("hidden")
    setTimeout(function(){
        timeDiv.classList.add("hiddenafter")
    },350)
    stationDiv.classList.add("hidden")
    setTimeout(function(){
        stationDiv.classList.add("hiddenafter")
    },350)
    tripDiv.classList.add("hidden")
    setTimeout(function(){
        tripDiv.classList.add("hiddenafter")
    },350)
    userDiv.classList.remove("hidden")
    setTimeout(function(){
        userDiv.classList.remove("hiddenafter")
    },350)
});