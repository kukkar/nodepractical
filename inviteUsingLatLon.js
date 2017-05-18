var jsondata = require('./userData');
var R = 6371e3; // Earth Radius In meters
var CircleToInvite = 100; //In KM
var result = new Array();
var lat2 = 28.521134;
var lon2 = 77.206567;

for (var key in jsondata) {
   var diff = diffInKM(jsondata[key].latitude,jsondata[key].longitude)	
   if(diff <= CircleToInvite) {
		result.push(jsondata[key]);
	} else {
		console.log(diff);
	}
}
console.log("congrats all you all are invited " + JSON.stringify(result));

function diffInKM (lat1,lon1) {
	var φ1 = toRadians(lat1);
	var φ2 = toRadians(lat2);
	var Δφ = toRadians(lat2-lat1);
	var Δλ = toRadians(lon2-lon1);

	var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
	        Math.cos(φ1) * Math.cos(φ2) *
	        Math.sin(Δλ/2) * Math.sin(Δλ/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	return (R * c)/1000; //distance in KM
}

function toRadians(Value) {
    /** Converts numeric degrees to radians */
    return Value * Math.PI / 180;
}
