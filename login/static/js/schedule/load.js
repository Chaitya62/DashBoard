$(document).ready(function(){

	var pastEventsHTML = '';
	var upcomingEventsHTML = '';
	for(var i = 0;i < schedule.length;i++){
		var scheduleItem = schedule[i];

		if(s < scheduleItem['eventEndTime']){
			//upcoming events
			upcomingEventsHTML += '<tr><td>' + scheduleItem['name'] + '</td><td>' + scheduleItem['location'] + '</td><td>' + scheduleItem['dateDisplayed'] + '</td><td>' + scheduleItem['timeDisplayed'] + '</td></tr>';
		}else{
			//past events
			pastEventsHTML += '<tr><td>' + scheduleItem['name'] + '</td><td>' + scheduleItem['location'] + '</td><td>' + scheduleItem['dateDisplayed'] + '</td><td>' + scheduleItem['timeDisplayed'] + '</td></tr>';
		}
	}

	if(upcomingEventsHTML != ""){
		upcomingEventsHTML = '<div class="row upcoming-row"><div class="col-sm-10 col-sm-offset-1"><h2 class="schedule-title">Upcoming Events</h2></div><div class="col-sm-10 col-sm-offset-1"><table class="table table-bordered schedule-table"><tr><th>Event</th><th>Location</th><th>Date</th><th>Time</th></tr>' + upcomingEventsHTML + '</table></div></div>';
	}
	if(pastEventsHTML != ""){
		pastEventsHTML = '<div class="row upcoming-row"><div class="col-sm-10 col-sm-offset-1"><h2 class="schedule-title">Past Events</h2></div><div class="col-sm-10 col-sm-offset-1"><table class="table table-bordered schedule-table"><tr><th>Event</th><th>Location</th><th>Date</th><th>Time</th></tr>' + pastEventsHTML + '</table></div></div>';
	}

	$("#upcoming-content").html(upcomingEventsHTML);
	$("#past-content").html(pastEventsHTML);
});