$(document).ready(function(){
	var html = rulesContent;
	if(linkToHardware != null && linkToHardware.length > 0){
		html += '<p>Info about hardware can be found here: <a href="' + linkToHardware + '" target="_blank">' + linkToHardware + '</a></p>';
	}
	if(linkToChallenges != null && linkToChallenges.length > 0){
		html += '<p>Info about challenges can be found here: <a href="' + linkToChallenges + '" target="_blank">' + linkToChallenges + '</a></p>';
	}
	$("#rules-area").html(html);
});