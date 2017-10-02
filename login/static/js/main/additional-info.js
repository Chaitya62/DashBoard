$(document).ready(function(){
	/*
	 * Title
	 */
	if(eventName != null && eventName.length > 0){
		$("#main-title").html("Welcome to " + eventName + "!");
	}else{
		$("#main-title").html("Welcome to the Hacker Dashboard!");
	}

	/*
	 * Introduction text
	 */
	if(introductionText != "" && introductionText.length > 0){
		$("#main-intro-text").html(introductionText);
	}else{
		$("#main-intro-text").hide();
	}

	/*
	 * Wifi
	 */
	if(wifiInfo != null && wifiInfo.networkName != null && wifiInfo.networkName.length > 0){
		$("#network-name").html(wifiInfo.networkName);
	}
	if(wifiInfo != null && wifiInfo.username != null && wifiInfo.username.length > 0){
		$("#network-username").html(wifiInfo.username);
	}
	if(wifiInfo != null && wifiInfo.password != null && wifiInfo.password.length > 0){
		$("#network-password").html(wifiInfo.password);
	}

	/*
	 * Quick Links
	 */
	var quickLinksHTML = '<h2>Quick Links</h2>';
	for(var i = 0;i < quickLinks.length;i++){
		var q = quickLinks[i];

		if(q.link != null && q.link.length > 0){
			quickLinksHTML += '<a href="' + q.link + '" target="_blank" class="quick-link">';
		}else{
			quickLinksHTML += '<a href="#" target="_blank" class="quick-link">';
		}
			quickLinksHTML += '<div class="quick-link-wrapper">';
				if(q.name != null && q.name.length > 0){
					quickLinksHTML += '<p class="quick-link-text-title">' + q.name + '</p>';
				}
				if(q.about != null && q.about.length > 0){
					quickLinksHTML += '<p class="quick-link-text-about">' + q.about + '</p>';
				}
			quickLinksHTML += '</div>';
		quickLinksHTML += '</a>';

	}
	quickLinksHTML += '<br/>';
	$("#quick-links-area").html(quickLinksHTML);

	/*
	 * Campus Security
	 */
	var campusSecurityHTML = '<h2 class="wifi-title">Contacting Us:</h2>';
	for(var i = 0;i < campusSecurityInfo.length;i++){
		var cs = campusSecurityInfo[i];
		if(cs != null && cs.preText != null && cs.preText.length > 0 && cs.contactNumberOrEmail != null && cs.contactNumberOrEmail.length > 0){
			campusSecurityHTML += '<p class="wifi-text">' + cs.preText + '<code>' + cs.contactNumberOrEmail + '</code></p>';
		}
	}
	campusSecurityHTML += '<br/>';
	$("#campus-security-area").html(campusSecurityHTML);

	/*
	 * Contacting Exec
	 */
	var qhacksHTML = '<h2 class="wifi-title" id="contacting-title">Contacting QHacks Exec</h2><p class="wifi-text" >';
	for(var i = 0;i < qhacksExecSlack.length;i++){
		var currentExec = qhacksExecSlack[i];
		if(i > 0){
			qhacksHTML += ", ";
		}
		qhacksHTML += '<a href="' + currentExec['link'] + '" target="_blank">' + currentExec['name'] + '</a>';
	}
	qhacksHTML += '</p>';
	$("#contacting-qhacks-exec").html(qhacksHTML);
});
