console.log("App.js running");

// Limit Function | https://www.mediacollege.com/internet/javascript/form/limit-characters.html

function limitText(limitField, limitCount, limitNum) {
	if (limitField.value.length > limitNum) {
		limitField.value = limitField.value.substring(0, limitNum);
	} else {
		limitCount.value = limitNum - limitField.value.length;
	}
}


// Short Web Descriptions

function copyShortWebDescription() {
	/* Get the text field */
	var copyText = document.getElementById("shortWebDescription");

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	document.execCommand("copy");

	// Use tooltips
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copied Short Web Description!"

}

function tooltipOut() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy to clipboard";
}

// Medium Web Descriptions

function copyMediumWebDescription() {
	/* Get the text field */
	var copyText = document.getElementById("mediumWebDescription");

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	document.execCommand("copy");

	// Use tooltips
	var tooltip = document.getElementById("myMediumTooltip");
	tooltip.innerHTML = "Copied Medium Web Description!"

}

function mediumTooltipOut() {
	var tooltip = document.getElementById("myMediumTooltip");
	tooltip.innerHTML = "Copy to clipboard";
}

// Long Web Descriptions

function copyLongWebDescription() {
	/* Get the text field */
	var copyText = document.getElementById("longWebDescription");

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	document.execCommand("copy");

	// Use tooltips
	var tooltip = document.getElementById("myLongTooltip");
	tooltip.innerHTML = "Copied Long Web Description!"

}

function longTooltipOut() {
	var tooltip = document.getElementById("myLongTooltip");
	tooltip.innerHTML = "Copy to clipboard";
}

// Story Title Descriptions

function copyStoryTitle() {
	/* Get the text field */
	var copyText = document.getElementById("storyTitle");

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	document.execCommand("copy");

	// Use tooltips
	var tooltip = document.getElementById("myStoryTitleTooltip");
	tooltip.innerHTML = "Copied Story Title!"

}

function storyTitleTooltipOut() {
	var tooltip = document.getElementById("myStoryTitleTooltip");
	tooltip.innerHTML = "Copy to clipboard";
}

// Story Descriptions

function copyStoryDescription() {
	/* Get the text field */
	var copyText = document.getElementById("storyDescription");

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */1
	/* Copy the text inside the text field */
	document.execCommand("copy");

	// Use tooltips
	var tooltip = document.getElementById("myStoryDescriptionTooltip");
	tooltip.innerHTML = "Copied Story Description!"

}

function storyDescriptionTooltipOut() {
	var tooltip = document.getElementById("myStoryDescriptionTooltip");
	tooltip.innerHTML = "Copy to clipboard";
}