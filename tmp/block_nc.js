//to redirect to another webpage:
// location.replace("URL of 404 page");

const blockText = "This News Corp page has been blocked by News Corpse.";

//replace all elements with <text> 
function blockPage(text) {
	document.body.textContent = "";
	var newText = document.createElement('h1');
	newText.textContent = text;
	document.body.appendChild(newText);
};

// remove stylesheets
function clearStyles(){
	document.querySelectorAll('[style]')
		.forEach(el => el.removeAttribute('style'));

	document.querySelectorAll('link[rel="stylesheet"]')
		.forEach(el => el.parentNode.removeChild(el));

	document.querySelectorAll('style')
		.forEach(el => el.parentNode.removeChild(el));
};

// main logic
clearStyles();
blockPage(blockText);


