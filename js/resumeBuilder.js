//var Name = "Paul Engling";
//var Role = "Dipl. Ing.";

var bio = {
  "Name": "Paul Engling",
  "Role": "Dipl. Ing.",
  "Contacts": {
    "mobile": "650-555-555",
    "email": "no@realemail.com",
    "github": "peng-ling",
    "twitter": "pengling",
    "location": "Germany"
  },
  "bioPic": "images/fry.jpg",
  "welcomeMessage": "Hello World, here I am",
  "Skills": ["A","B","C"]
}

var work = {};
work.jobposition = "Consultant";
work.employer = "ACL";
work.years = "2014 - now";
work.location= "Frankfurt am Main";

var education = {};
education["School"] = "Fachhochschule Wiesbaden";

var formattedName = HTMLheaderName.replace("%data%", bio.Name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.Role);
var formatedMobile = HTMLcontactGeneric.replace("%data%", bio.Contacts.mobile);
formatedMobile = formatedMobile.replace("%contact%", "mobile");
var formatedpicurl = HTMLbioPic.replace("%data%", bio.bioPic);
var formatedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formatedSkills = HTMLskills.replace("%data%", bio.Skills[1]);
var formatedEmployer = HTMLworkEmployer.replace("%data%",work.employer);
var formatedYears = HTMLworkDates.replace("%data%",work.years);
var formatedWorkLocation = HTMLworkLocation.replace("%data%",work.location);
var formatedSchoolName = HTMLschoolName.replace("%data%",education["School"]);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").prepend(formatedMobile);
$("#header").append(formatedpicurl);
$("#header").append(formatedwelcomeMessage);
$("#header").append(HTMLskillsStart);
$("#skills").append(formatedSkills);
$("#header").append(HTMLworkStart);
$("#workExperience").append(formatedEmployer);
$("#workExperience").append(formatedYears);
$("#workExperience").append(formatedWorkLocation);
$("#header").append(HTMLschoolStart);
$("#education").append(formatedSchoolName);
