var input = 50;
var result = new Array();
findPermutationCombi(input);

function findPermutationCombi(input) {
	for(var i=0;i<=2;i++) {
		calculate(input,i,input);
	}
	console.log(result);
}

function calculate (input,i,actual) {
	while(input>=0) {
		if(i==0) {
			if(input>=0) {
				if((actual - input)%2 === 0) {
					result.push(input + "," + (actual-input)/2 + "," + (actual-input)/2);	
				} else {
					for(var k = 0;k<=1;k++) {
						var value = parseInt((actual-input)/2);
						if(k==0) {
							var value1 = value+1;
							result.push(input+","+value+","+value1);	
						} else {
							var value1 = value+1;
							result.push(input+","+value1+","+value);	
						}
					}
				}
				console.log(input);
				input = input-1;

			} else {
				return ;
			}
		} else if(i ==1) {
			if(input>=0) {
				if((actual - input)%2 === 0) {
					result.push((actual-input)/2 + "," + input + "," +  (actual-input)/2);	
				} else {
					for(var k = 0;k<=1;k++) {
						var value = parseInt((actual-input)/2);
						if(k==0) {
							var value1 = value+1;
							result.push(value + "," + input + "," + value1);	
						} else {
							var value1 = value+1;
							result.push(value1 + "," + input + "," + value);	
						}
					}
				}
				input = input-1;

			} else {
				return ;
			}

		} else {
			if(input>=0) {
				if((actual - input)%2 === 0) {
					result.push(((actual-input)/2) + "," + ((actual-input)/2) + "," + input);	 
				} else {
					for(var k = 0;k<=1;k++) {
						var value = parseInt((actual-input)/2);
						if(k==0) {
							var value1 = value+1;
							result.push(value + "," + value1 + "," + input);	
						} else {
							var value1 = value+1;
							result.push(value1 + "," + value + "," + input);	
						}
					}
				}
				input = input-1;

			} else {
				return ;
			}

		}

	}
}