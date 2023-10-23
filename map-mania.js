
var gMap;
  
function initMap() {
gMap = new google.maps.Map(document.getElementById('myMapID'),{
    center: {lat: 41.878, lng:10}, zoom: 3});

var marker = new google.maps.Marker({position:{lat:38.7223,lng:-9.1393}, map:gMap});

var marker = new google.maps.Marker({position:{lat:41.9028,lng:12.4964}, map:gMap});

var marker = new google.maps.Marker({position:{lat:42.5063,lng:1.5218}, map:gMap});

var marker = new google.maps.Marker({position:{lat:48.8566,lng:2.3522}, map:gMap});

var marker = new google.maps.Marker({position:{lat:51.5072,lng:0.1276}, map:gMap});

var marker = new google.maps.Marker({position:{lat:21.1619,lng:-86.8515}, map:gMap});

var marker = new google.maps.Marker({position:{lat:22.8948,lng:-109.9152}, map:gMap});


}

google.maps.event.addListener(gMap, 'idle', function(){
    updateGame()
    console.log('function updateGame()!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    if (gMap.getBounds().contains({lat:38.7223,lng:-9.1393}))
    inBounds = true;
});

console.log("inBounds:"+inBoubds+"zoomLevel:"+zoolLevel);


function initApplication(){
    console.log('Map Mania Lite - Starting!');
}