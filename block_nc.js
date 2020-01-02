//to redirect to another webpage:
//location.replace("URL of 404 page");

// constants
const blockText = "This News Corp Page has been blocked by News Corpse";

//replace all elements with <text> 
function blockPage(text) {
	document.body.textContent = "";
	var newText = document.createElement('h1');
	newText.textContent = text;
	document.body.appendChild(newText);
};

// main logic
blockPage(blockText);
