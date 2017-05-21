function sorting(number,searchNumber) {
	var number = number.sort();
	recursiveserarch(number,0,number.length-1,searchNumber);
}

function recursiveserarch(number,startindex,endindex,searchNumber) {
	console.log('startindex',startindex);
	console.log(endindex);
	if (startindex > endindex ) {
		console.log('Not Found');
		return -1;
	}
    var mid = parseInt(startindex + ((endindex- startindex)/2));

    // If the element is present at the middle itself
    if (number[mid] == searchNumber) {
    	console.log('found');
    	return mid;
    }  
    // If element is smaller than mid, then it can only be present
    // in left subarray
    if (number[mid] > searchNumber) {
    	return recursiveserarch(number, startindex, mid-1, searchNumber);	
    }

    // Else the element can only be present in right subarray
    return recursiveserarch(number, mid+1, endindex, searchNumber);
}

var fruits = [21, 10, 1, 33];
sorting(fruits,1);