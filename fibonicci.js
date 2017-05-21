var current = 0;
var result = new Array();
var NumbertoCheck = 30;
function fib(n,callback){
	if(n == 0) {
		callback('Zero Value is invalid')
	}  else {
		var n = 0;
		result.push(0,1);
		while ((result[n]+ result[n+1])<NumbertoCheck) {
			current = result[n]+ result[n+1];
			result.push(current);
			n++;
		}
		callback('',result);	
	}
};

fib(NumbertoCheck, function (err,arr) {
	if(err) {
		throw err;
	} else {
		//todo
		console.log("result is" , arr);
	}

});