//Works when amount is invested in lumpsum at the begining of the year
var calculateCompoundInterest = function(currentInvestment, annualInvestment, rateOfInterest, timePeriod) {
	let compoundedValue = currentInvestment;
  let currentYearInterest = 0;
	for(i=0; i<timePeriod; i++) {
  	compoundedValue = compoundedValue + annualInvestment;
  	currentYearInterest = compoundedValue*(Math.pow((1+rateOfInterest/12*12),12));
    compoundedValue =  currentYearInterest;
  	console.log(`Year:${i+1} total amount: ${compoundedValue}`);
  }
}
