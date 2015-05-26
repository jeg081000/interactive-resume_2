var bio = {
	"name" : "Jeff George",
	"role" : "Web Developer",
	"welcomeMessage" : "Welcome to my interactive resume! This work is designed to show off my skills learned in the Udacity Front-End Nanodegree Program. I seek to obtain a challenging and responsible position within the engineering community utilizing strong communicational, organizational and analytical skills along with education and experience.",
	"contacts" : {
		"mobile" : "972-800-4469",
		"email" : "jeffery.george@yahoo.com",
		"github" : "jeg081000",
		//"twitter" : "N/A",
		"location" : "Fort Worth, Texas"
		},
	"skills" : ["Leadership",  "Management", "Highly Motivated", "Organized"],
	"bioPic" : "images/me.jpg",
	display : function (){
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#letsConnect").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#letsConnect").append(formattedEmail);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGitHub);
		$("#letsConnect").append(formattedGitHub);
		var formattedLocale = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocale);
		$("#letsConnect").append(formattedLocale);
		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedPic);

		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);

		if(bio.skills.length>0){
			$("#header").append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
		}
	}
};

var work =
{
	"jobs" :
	[
		{
			"employer" : "AT&T",
			"title" : "Manager Network OPS",
			"location" : "Fort Worth, Texas",
			"dates" : "2011-current",
			"description" : "Supervise daily activities of 15+ technicians to include DMS translations and Routing. Monitor daily workloads, manage attendance and conduct performance reviews. Maintain direct customer support, both internally and externally, to ensure network quality and reliability."
		},
		{
			"employer" : "Simmons Corporation",
			"title" : "Project Manager",
			"location" : "Richardson, Texas",
			"dates" : "2008-2009",
			"description" : "Control all aspects of the Tank Manager division. Perform cost analysis and assist with product pricing. Monitor manufacturing to include purchasing and assembly of products. Perform and monitor all maintenance of tank manager equipment to include providing customer service and assistance with field related issues."
		},
		{
			"employer" : "United States Army",
			"title" : "Communication Specialists",
			"location" : "Fort Hood, Texas",
			"dates" : "2003-2008",
			"description" : "Direct all aspects of daily operations to include training, leadership and mentoring of 12 technicians. Implemented successful strategies to maintain efficient job repair of all types of electrical equipment. Worked and coordinated with civilian contractors for assistance in training and repair of all sections of maintenance to ensure equipment is functioning within factory standards. Managed over $8 million in supplies and equipment."
		}
	],

	display : function () {
		for(var job in work.jobs){
			if(work.jobs.hasOwnProperty(job)){
				$("#workExperience").append(HTMLworkStart);
				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(formattedEmployerTitle);
				var formattedworkLocale = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				$(".work-entry:last").append(formattedworkLocale);
				var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedworkDates);
				var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
				$(".work-entry:last").append(formattedworkDescription);
			}
		}
	}
};

var education =
{
	"schools" :
	[
		{
			"name" : "University of Texas at Dallas",
			"location" : "Dallas, Texas",
			"degree" : "Bachelors of Science",
			"majors" : "Electrical Engineering",
			"dates" : "2011",
			"url" : "www.utdallas.edu/"
		},
		{
			"name" : "West Texas A&M University",
			"location" : "Canyon, Texas",
			"degree" : "Bachelors of Science",
			"majors" : "Mathematics",
			"dates" : "2001",
			"url" : "www.wtamu.edu/"
		}
	],
	"onlineCourse" :
	[
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "www.udacity.com/"
		}
	],
	display : function () {
		for(var school in education.schools) {
			if(education.schools.hasOwnProperty(school)){
				$("#education").append(HTMLschoolStart);
				var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
				$(".education-entry:last").append(formattedschoolName);
				var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				$(".education-entry:last").append(formattedschoolDegree);
				var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				$(".education-entry:last").append(formattedschoolDates);
				var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedschoolLocation);
				var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedschoolMajor);
			}
		}
			$("#education").append(HTMLonlineClasses);
		for(var online in education.onlineCourse) {
			if(education.onlineCourse.hasOwnProperty(online)){
				$("#education").append(HTMLschoolStart);
				var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[online].title);
				$(".education-entry:last").append(formattedonlineTitle);
				var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[online].school);
				$(".education-entry:last").append(formattedonlineSchool);
				var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[online].dates);
				$(".education-entry:last").append(formattedonlineDates);
				var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourse[online].url);
				$(".education-entry:last").append(formattedonlineURL);
			}
		}
	}
};

var projects =
{
	"projects" :
	[
		{
			"title" : "Project 1",
			"dates" : "2015",
			"description" : "This if my first project at Udacity. The scope of this project was to learn HTML and CSS by designing a web page from a mock up. Although this was a simple page, it allowed me to learn the foundation of HTML/CSS.",
			"images" :
				[
				"images/page-mock.png",
				]
		}/*,
		{
			"title" : "Project 2",
			"dates" : "2015",
			"description" : "This is my second project.",
			"images" :
				[
				"www.something1.com",
				"www.something2.com",
				"www.something3.com"
				]
		},
		{
			"title" : "Project 3",
			"dates" : "2015",
			"description" : "This is my third project.",
			"images" :
				[
				"www.something1.com",
				"www.something2.com",
				"www.something3.com"
				]
		}*/
	],
	"display" : function displayprojects() {
		for(var project in projects.projects) {
			if(projects.projects.hasOwnProperty(project)){
				$("#projects").append(HTMLprojectStart);
				var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				$(".project-entry:last").append(formattedprojectTitle);
				var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedprojectDates);
				var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(formattedprojectDescription);

			if (projects.projects[project].images.length > 0) {
				for (var image in projects.projects[project].images){
					if(projects.projects.hasOwnProperty(image)){
						var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
						$(".project-entry:last").append(formattedprojectImage);
					}
				}
			}
			}
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();

//Internationalize function to change the name
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];

}

//This adds a button to Internationalize the name on demand
$('#main').append(internationalizeButton);

//This adds a map to show locations of work and life
$('#mapDiv').append(googleMap);