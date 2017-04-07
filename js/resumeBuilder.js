var bio = {
	"name": "Cheryl Court",
	"role": "Software Developer",
	"contacts": {
		"email": "cheryl.court@gmail.com",
		"github": "cherylcourt",
		"twitter": "@cherylcourt",
		"location": "Edmonton, Alberta, Canada"
	},
	"picture": "images/me.png",
	"welcomeMessage": "I'm currently working as a Software Developer in the Edmonton, Alberta area. I love solving problems and providing "+
			  "solutions that save people time and money and help their day to day lives. Thanks for stopping by!",
	"skills": ["Ruby on Rails", "Java", "python", "Software Development", "Test Driven Development"]
};

var work = {
	"jobs": [
		{
			"employer": "The Luxus Group",
			"title": "Senior Software Developer",
			"location": "Sherwood Park, Alberta, Canada",
			"datesWorked": "January 2016 - Present",
			"description": "I was specifically hired to help deliver the new online reservation system for Luxus Vacation Properties. This involved quickly "+
				"getting up to speed on a number of technologies, including Ruby On Rails, Ember, and Ember Data to name a few as well as "+
				"quickly becoming familiar with business needs. I "+
				"collaborated closely with the business and other team members to ensure project success. "+
				"We successfully delivered the site in April 2017 and continue to make iterative improvements and add features as "+
				"needed."
		},
		{
			"employer": "Localize",
			"title": "Senior Software Developer",
			"location": "Edmonton, Alberta, Canada",
			"datesWorked": "March 2015 - December 2015",
			"description": "I was hired to work on Localize's online system, which involved knowledge in C# development, jQuery, knockoutJS, "+
				"SQL Server, Razor templates and Wordpress. I had limited experience with some of these so I learned quickly to become "+
				"productive as soon as possible.  I also lead discussions around better communication between the development team and "+
				"the business as well as definiing the company vision.  I enjoyed my time at Localize and learned a tremendous amount "+
				"from everyone I worked with there."
		},
		{
			"employer": "Enbridge",
			"title": "Software Developer",
			"location": "Edmonton, Alberta, Canada",
			"datesWorked": "September 2008 - March 2015",
			"description": "My primary responsibilities involve all aspects of developing and supporting critical software " +
				"applications in a variety of languages including Java, python, C++ and Perl in both greenfield and " +
				"legacy systems.  This work includes, but is not limited to, database design, software architecture design, high level and " +
				"detailed estimates as well as peer review of submitted work. I am also very involved in encouraging " +
			"communication and collaboration within the team and have experience giving technical presentations as well " +
			"as facilitating project retrospective discussions."
		},
		{
			"employer": "Epcor",
			"title": "Systems Analyst",
			"location": "Edmonton, Alberta, Canada",
			"datesWorked": "September 2003 - April 2006",
			"description": "I worked in a few different capacities here from internal application support of " +
			"internal users using third party customized applications to working on internal software applications " +
			"built using Oracle PL/SQL.  I also learned and used PHP to develop an internal web site to facilitate " +
			"communication between the quality control and development teams by tracking builds, releases and issues."
		},
		{
			"employer": "Matrikon",
			"title": "Programmer",
			"location": "Edmonton, Alberta, Canada",
			"datesWorked": "March 2002 - September 2003",
			"description": "I developed software for external clients in a variety of languages including C#.  This " +
			"included design, development and deployment of back end systems as well as front end graphical user interfaces."
		},
		{
			"employer": "University of Windsor",
			"title": "Teaching Assisstant / Computer Centre Support / Computer Science Tutor",
			"location": "Windsor, Ontario, Canada",
			"datesWorked": "September 1998 - April 2001",
			"description": "I supervised labs for the second year advanced programming class in C as a teaching " +
			"assisstant.  At the University Computer Centre I helped students with use of the computing resources " +
			"available.  As a computer science tutor I aided students with class work and helped them through problems."
		},
		{
			"employer": "ABB",
			"title": "Praktikant",
			"location": "Baden, Switzerland",
			"datesWorked": "May 2000 - August 2000",
			"description": "This was my final four month co-op placement through the University Co-op program.  I " +
			"designed and implemented a prototype software application using JES (Java Embedded Server) and JMS (Java " +
			"Messaging System) for communication with a European train system.  I was also involved in a collaborative " +
			"effort of co-authoring a software patent with my colleagues involving JMS technology."
		},
		{
			"employer": "Ontario Power Generation",
			"title": "Programmer",
			"location": "Kincardine, Ontario, Canada",
			"datesWorked": "September 1999 - December 1999",
			"description": "This was my third four month co-op placement through the University Co-op program. I " +
			"developed virtual control room displays for operator training at the Kincardine Nuclear Power Plant."
		},
		{
			"employer": "Cornerstone Technology",
			"title": "Software Developer",
			"location": "Windsor, Ontario, Canada",
			"datesWorked": "May 1998 - April 1999",
			"description": "I spent my first and second four month co-op placements here.  During my first placement I " +
			"completed my given duties in less than half the time expected so I was able to work on developing a " +
			"prototype of an expert system to design CAD drawings of injection moulds using CLIPS, a rules-based " +
			"language.  I also had the opportunity to create a database management system using Delphi."
		}
	]
};

var education = {
	"schools": [
		{ "name": "University of Windsor",
			"datesAttended": "1996 - 2001",
			"location": "Windsor, Ontario, Canada",
			"degree": "B.Sc.(Hon) Software Engineering",
			"major": "Computer Science",
			"minor": "Germanic Studies",
			"url": "www.uwindsor.ca"
		}		
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Object-Oriented Javascript",
			"completed": "November 2014",
			"url": "https://www.udacity.com/course/ud015"
		},
		{ "school": "Udacity",
			"title": "HTML5 Canvas",
			"completed": "November 2014",
			"url": "https://www.udacity.com/course/ud292"
		},
		{ "school": "Udacity",
			"title": "Javascript Basics",
			"completed": "October 2014",
			"url": "https://www.udacity.com/course/ud804"
		},
		{ "school": "Udacity",
			"title": "Intro to HTML and CSS",
			"completed": "October 2014",
			"url": "https://www.udacity.com/course/ud304"
		},	
		{ "school": "Udacity",
			"title": "Web Development",
			"completed": "August 2014",
			"url": "https://www.udacity.com/course/cs253"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "HTML5 Canvas Game",
			"datesWorked": "December 2014 - January 2015",
			"description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/frogger.jpg"],
			"url": "http://www.cherylcourt.ca/frogger"
		},
		{
			"title": "Online Portfolio",
			"datesWorked": "October 2014",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/portfolio.jpg"],
			"url": "http://www.cherylcourt.ca/"
		},
		{
			"title": "Web Development Wiki",
			"datesWorked": "June 2014 - August 2014",
			"description": "Created an online wiki for Udacity's Web Development Course.",
			"images": ["images/web.jpg"],
			"url": "http://helpful-kit-572.appspot.com/"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();

/**
 * Skills Chart
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
		series: [{
				name: 'Ruby',
				color: 'rgba(255, 0, 0, .5)',
				data: [[2017, 4], [2016, 12]]
			},
			{
				name: 'Javascript',
				color: 'rgba(204, 0, 0, .5)',
				data: [[2017, 4], [2016, 12], [2015, 8], [2014, 1]]
			},
			{
				name: 'HTML/CSS',
				color: 'rgba(153, 51, 0, .5)',
				data: [[2017, 4], [2016, 12], [2015, 8], [2014, 5], [2002, 3], [2008, 4], [2005, 2]]
			},
			{
				name: 'Web Development',
				color: 'rgba(0, 153, 102, .5)',
				data: [[2017, 4], [2016, 12], [2015, 8], [2014, 2]]
			},
			{
				name: 'TDD',
				color: 'rgba(0, 102, 51, .5)',
				data: [[2016, 12], [2014, 12], [2013, 12], [2012, 12], [2011, 4]]
			},
			{
				name: 'Java',
				color: 'rgba(223, 83, 83, .5)',
				data: [[2014, 11], [2013, 11], [2012, 11], [2011, 8], [2010, 4], [2009, 12], [1998, 8], [1999, 8], [2000, 4]]
			},
			{
				name: 'python',
				color: 'rgba(119, 152, 191, .5)',
				data: [[2014, 1], [2013, 1], [2012, 1], [2011, 1]]
			},
			{
				name: 'SQL',
				color: 'rgba(119, 152, 80, .5)',
				data: [[2016, 12], [2013, 2]]
			},
			{
				name: 'PL/SQL',
				color: 'rgba(170, 162, 30, .5)',
				data: [[2010, 2], [2006, 4]]
			},
			{
				name: 'C++',
				color: 'rgba(0, 102, 0, .5)',
				data: [[2004, 12], [2003, 6]]
			},
			{
				name: 'C',
				color: 'rgba(0, 102, 0, .5)',
				data: [[1997, 8], [2004, 2], [2008, 4]]
			},
			{
				name: 'Django',
				color: 'rgba(204, 102, 0, .5)',
				data: [[2013, 2.5]]
			},
			{
				name: 'Perl',
				color: 'rgba(210, 200, 0, .5)',
				data: [[2011, 3], [2013, 1], [2012, 1], [2014, 1]]
			}]
	});
});


$("#mapDiv").append(googleMap);


