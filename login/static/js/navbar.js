$(document).ready(function(){
	if(logoLink != null && logoLink.length > 0){
		$(".navbar-logo").attr('src', logoLink);
	}else if(logoLink != null){
		$(".navbar-logo").hide();
	}

	if(slackLink != null && slackLink.length > 0){
		$("#navbar-slack-link").attr('href',slackLink);
	}else if(slackLink != null){
		$("#navbar-slack-link").hide();
	}

	if(fbGroupLink != null && fbGroupLink.length > 0){
		$("#navbar-fb-group-link").attr('href',fbGroupLink);
	}else if(fbGroupLink != null){
		$("#navbar-fb-group-link").hide();
	}

	if(devPostLink != null && devPostLink.length > 0){
		$("#navbar-devpost-link").attr('href',devPostLink);
	}else if(devPostLink != null){
		$("#navbar-devpost-link").hide();
	}

	if(helpqLink != null && helpqLink.length > 0){
		$("#navbar-helpq-link").attr('href',helpqLink);
	}else if(fbGroupLink != null){
		$("#navbar-helpq-link").hide();
	}
});
