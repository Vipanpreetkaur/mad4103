
                          /*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        document.getElementById("btnweather").addEventListener("click",getweather);
       /* document.getElementById("btnmainweather").addEventListener("click",getmainweather);
document.getElementById("btnwind").addEventListener("click",getwindspeed);
 document.getElementById("btnmintemp").addEventListener("click",gettemp);*/
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
/*function getweather(){
if(navigator.geolocation)
{

    navigator. geolocation.getCurrentPosition(function(position)
    {
        $("#geoLoc").html("latitude:"+position.coords.latitude + "<br>longitude:"+position.coords.longitude);

        var lat=position.coords.latitude;
        var lon=position.coords.longitude;
        var weatherURL="http://api.openweathermap.org/data/2.5/weather? lat="+lat+"&lon ="+lon+" &APPID=522af0c7cd70baceb2d410f24269ed5d";
        $.getJSON(weatherURL).done(function(data)
        {
            $("#currTemp").html("current temp:"+ data.main.temp);

        });},
                          function(er)
                          {
                            alert(er.message);

                          });

    }
}
function getmainweather(){
if(navigator.geolocation)
{

    navigator. geolocation.getCurrentPosition(function(position)
    {
        $("#mainwea").html("temprature:"+position.coords.temp +"<br> pressure:"+position.coords.pressure );

        var temp=position.coords.temperature;
        
        var weatherURL="http://api.openweathermap.org/data/2.5/weather? temp="+temp+ " &APPID=522af0c7cd70baceb2d410f24269ed5d";
        $.getJSON(weatherURL).done(function(data)
        {
            $("#mainweather").html("main temp:"+ data.main.temp);

        });},
                          function(er)
                          {
                            alert(er.message);

                          });

    }
}
function getwindspeed(){
if(navigator.geolocation)
{

    navigator. geolocation.getCurrentPosition(function(position)
    {
        $("#speed").html("speed:"+position.coords.speed + "<br>direction:"+position.coords.deg);

        var speed=position.coords.speed;
        var deg=position.coords.deg;
        var weatherURL="http://api.openweathermap.org/data/2.5/weather? speed="+speed+"&deg ="+deg+" &APPID=522af0c7cd70baceb2d410f24269ed5d";
        $.getJSON(weatherURL).done(function(data)
        {
            $("#winds").html("wind speed:"+ data.coords.speed);

        });},
                          function(er)
                          {
                            alert(er.message);

                          });

    }
}

function gettemp(){
if(navigator.geolocation)
{

    navigator. geolocation.getCurrentPosition(function(position)
    {
        $("#mintemp").html("mintemp:"+position.coords.temp_min  );

        var temp_min=position.coords.temp_min;
        //var lon=position.coords.longitude;
        var weatherURL="http://api.openweathermap.org/data/2.5/weather? temp_min="+temp_min+" &APPID=522af0c7cd70baceb2d410f24269ed5d";
        $.getJSON(weatherURL).done(function(data)
        {
            $("#currTemp").html("current temp:"+ data.main.temp_min);

        });},
                          function(er)
                          {
                            alert(er.message);

                          });

    }
}*/
function getweather(){
    alert("heloo");
    
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(function(position)
        {
            $("#geoLoc").html("latitude:" + position.coords.latitude + "<br> longitude:" + position.coords.longitude);
            
            var lat=position.coords.latitude;
            var long1 = position.coords.longitude;
            var weatherURL="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long1+"&APPID=522af0c7cd70baceb2d410f24269ed5d";
            
            $.getJSON(weatherURL).done(function(data)
            {
                //$("#currTemp").html("current temp:" + data.main.temp);
                
                 var CurrentTemp = data.main.temp - 273.15;
             $("#currTemp").html("Current Temp:" + CurrentTemp + "°C");
             $("#des").html("description:" + data.weather[0].description);
                $("#main").html("main weather:" + data.weather[0].main);
                
             var Max = data.main.temp_max - 273.15;
             $("#maxTemp").html("maximum Temp:" + Max + "°C");

             var Min = data.main.temp_min - 273.15;
             $("#minTemp").html("minimum Temp:" + Min + "°C");
                
                
                
               
                
                
                var Wind=data.wind.speed*(18/5);
                $("#wind").html("wind speed:" + Wind);
                
           
                $("#windD").html("wind direction:" + data.wind.deg);
                 $("#hum").html("humidity:" + data.main.humidity);
                $("#pre").html("pressure:" + data.main.pressure);
                
            var Sunrise=new Date(data.sys.sunrise * 1000);  
                $("#sunrise").html("sunrise:" + Sunrise);
                
                var Sunset=new Date(data.sys.sunset * 1000);
                $("#sunset").html("sunset:" + Sunset);
            });
        },function(er){
            alert(er.message);
        });
}
}
