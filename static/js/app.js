console.log("App.js running");

// Limit Function | https://www.mediacollege.com/internet/javascript/form/limit-characters.html

function limitText(limitField, limitCount, limitNum) {
	if (limitField.value.length > limitNum) {
		limitField.value = limitField.value.substring(0, limitNum);
	} else {
		limitCount.value = limitNum - limitField.value.length;
	}
}