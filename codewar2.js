/*The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) 
of size sz (ignore the last chunk if its size is less than sz).


If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, 
reverse that chunk; otherwise rotate it to the left by one position. 
Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".*/

Array.prototype.leftRotate = function () {
	this[this.length]	=	this['0'];
	this.splice(0, 1);
	return this.toString();
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

//Starting of the function 
function revrot(str, sz) {
    // your code
    if(validateString(str,sz)) {
    	var chunks = split(str,sz);
    	var result = operate(chunks);
    	return result.toString().replaceAll(",","");	
    } else {
    	return "";
    }
}

function validateString(str,sz) {
	if(sz <= 0 || str.length <= 0 || (sz > str.length) ) {
		return false;
	} else {
		return true;
	}
}
//Operational handling
function operate (chunks) {
	var result = new Array();
    for (var key in chunks) {
    	if(isInteger(chunks[key])) {
    		if(isReverse(chunks[key])) {
    			var check1 = chunks[key].split('').reverse().join('');
    			result.push(check1);	
    		} else {   		
    			var kukkar = chunks[key].split('').leftRotate();
    			result.push(kukkar);
    		}
    	}	
    }
    return result;
}

function split (str,sz) {
	var chunks = [];
	for (var i = 0, charsLength = str.length; i < charsLength; i += sz) {
    	if (str.substring(i, i + sz).length < sz ) {
    		continue;
    	}
     	chunks.push(str.substring(i, i + sz));
	}
	return chunks;
}

function isInteger(x) {
    return x % 1 === 0;
}

function isReverse(x) {
	var xy = x.split('');
	var result1 = 0;
	
	for(var key = 0; key < xy.length; key++) {
		result1 = result1 + Math.pow(parseInt(xy[key]),3);	
	}	
	if(result1%2 === 0) {
		return true;
	} else {
		return false;
	}

}

//callings
console.log(revrot("123456987654", 6))// --> "234561876549"
console.log(revrot("123456987653", 6)) //--> "234561356789"
console.log(revrot("66443875", 4)); //--> "44668753"
console.log(revrot("66443875", 8))// --> "64438756"
console.log(revrot("664438769", 8))// --> "67834466"
console.log(revrot("123456779", 8))// --> "23456771"
console.log(revrot("", 8))// --> ""
console.log(revrot("123456779", 0))// --> "" 
console.log(revrot("563000655734469485", 4))// --> "0365065073456944"
console.log(revrot("612468447318252021847434500170119851273717679762770591061709369875544661611546488303988510313573108431834676440170161138852685726248027651259324078550424184540077541891040636108356509337176278339703951292448993007229281326353008521444825037688376835969447380789042637158264993193338737217873713832555924258962125548940124714272094062371880568398021228968573246256522853356528125376512409673173247729799298067184260471938544752826830218212357583693634560067271327465658351506793473926291538212488843484326942500447484694646014559437284337639474765019550479012894456351784029104706973460381589737188962187724333711225270144998276094344504990863795940441382636814344532828798340758126375571403123422515720084409313105786300968236713560432199916230779814705703000248495610390389378576646867507037339724774982139267098038096020460481578100787695237782494576276586629051923212874313502191252158320825906621372827480183087751135892194263588049900866955344350071841251518170586150450813531639730030577494566637520764668848475297366127761910659762477234964909157369400753886205", 4))// 
