var eventName = "KJSCE-HACK";
var endDateTime = { year:2017,month:10,day:7, hour:15,minute:0};
var introductionText = 'Welcome to the KJSCE-HACK dashboard! We hope you\'ll have fantastic coiple of days of hacking here at KJ Somaiya College Of Engineering! We have added a bunch of information on this page. We will also continue to update this page with relevant information and links throughut the event.<br/><br/>Follow our community on Skillenza<a href="https://beta.skillenza.com/communities/hackkjsce" target="_blank"> here</a>';
/*
 * Navbar links
 *
 * If the variable link is blank, it wont show up in the navbar.
 */
var logoLink = "https://imgur.com/TmW50im.png";
var slackLink = "";
var fbGroupLink = "";
var devPostLink = "";
var helpqLink = "";


var linkToHardware = "";
var linkToChallenges = "";


var rulesContent = '<p>We expect all hackers to abide by the Code of Conduct and maintain discpline in the premises</p><p>There will be a maximum of 5 members on each team.</p><br/>Rest of the rules and guidlines';

var wifiInfo = {
	"networkName" : "Somaiya",
	"username" : "confgues",
	"password" : "VbXt2%xp44"
}

var campusSecurityInfo = [
	{
		"preText" : "Chaitya: ",
		"contactNumberOrEmail" : "9029168990"
	},
	{
		"preText" : "Vinitra: ",
		"contactNumberOrEmail" : "9920581109"
	}
];

var quickLinks = [
	{
		"name" : "KJSCE-HACK",
		"about" : "Main Website Of Hackathon",
		"link" : "http://kjsce-hackathon.tech/"
	},
	{
		"name" : "KJSCE-abhiyantriki",
		"about" : "Official Fest Page",
		"link" : "http://kjsce-abhiyantriki.org/"
	},
	{
		"name" : "KJSCE-Codecell",
		"about" : "Council Page",
		"link" : "http://kjscecodecell.com/"
	},
];

var schedule = [
	{
		"name" : "Checkin",
		"location" : "KJSCE B building",
		"eventEndTime" : "10-06-2017 10:00:00",
		"timeDisplayed" : "9:00 AM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Kick-Off",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-06-2017 10:30:00",
		"timeDisplayed" : "9:30 AM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Hacking Begins!",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-06-2017 12:00:00",
		"timeDisplayed" : "10:30 AM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Lunch Time!",
		"location" : "Canteen",
		"eventEndTime" : "10-06-2017 01:00:00",
		"timeDisplayed" : "12:00 PM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Hacking Period 2",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-06-2017 17:00:00",
		"timeDisplayed" : "1:00 PM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Evening Snack Time",
		"location" : "Canteen",
		"eventEndTime" : "10-06-2017 18:00:00",
		"timeDisplayed" : "5:00 PM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Hacking Period 3",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-06-2017 20:30:00",
		"timeDisplayed" : "6:00 PM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Dinner Time",
		"location" : "Canteen",
		"eventEndTime" : "10-06-2017 21:30:00",
		"timeDisplayed" : "8:30 PM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Hacking Period 4 / Checkout",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-07-2017 09:00:00",
		"timeDisplayed" : "9:00 AM",
		"dateDisplayed" : "Friday Oct 7"
	},
	{
		"name" : "Breakfast",
		"location" : "Canteen",
		"eventEndTime" : "10-07-2017 09:30:00",
		"timeDisplayed" : "9:00 AM",
		"dateDisplayed" : "Saturday Oct 8"
	},
	{
		"name" : "Hacking Period 5",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-07-2017 11:30:00",
		"timeDisplayed" : "9:30 AM",
		"dateDisplayed" : "Saturday Oct 8"
	},
	{
		"name" : "Hacking Period Ends",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-07-2017 11:45:00",
		"timeDisplayed" : "11:30 AM",
		"dateDisplayed" : "Saturday Oct 8"
	},
	{
		"name" : "Lunch",
		"location" : "Canteen",
		"eventEndTime" : "10-07-2017 13:00:00",
		"timeDisplayed" : "12:00 PM",
		"dateDisplayed" : "Saturday Oct 8"
	},
	{
		"name" : "Hack Presentation Submission",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-07-2017 15:30:00",
		"timeDisplayed" : "3:00 PM",
		"dateDisplayed" : "Saturday Oct 8"
	},
	{
		"name" : "Hack Presentation Judging",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-07-2017 18:00:00",
		"timeDisplayed" : "3:30 PM",
		"dateDisplayed" : "Saturday Oct 8"
	},
	{
		"name" : "Result Declaration",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-07-2017 18:30:00",
		"timeDisplayed" : "6:00 PM",
		"dateDisplayed" : "Saturday Oct 8"
	}
];
var qhacksExecSlack = [
	{
		"name" : "Chaitya",
		"link" : "https://kjsce-hackathon.tech"
	},
	{
		"name" : "Vinitra",
		"link" : "https://http://kjscecodecell.com"
	},
	{
		"name" : "Shaundarya",
		"link" : "https://http://kjsce-abhiyantriki.org"
	},
];
