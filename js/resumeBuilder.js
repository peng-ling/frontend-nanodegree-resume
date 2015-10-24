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

var work = {
  "jobs":[
    {
"jobposition" : "Consultant",
"employer" : "ACL",
"years" : "09/2014 - heute",
"location": "Frankfurt am Main"
},
{
"jobposition" : "Consultant",
"employer" : "Princeton Financial systems GmbH",
"years" : "09/2011 – 09/2014",
"location": "Frankfurt am Main"
}
]
}

var projects = {
  "projects":[
    {
      "name":"Bla",
      "description":"Bla",
      "year":2014
    },
    {
      "name":"Bla 2",
      "description":"Bla",
      "year":2014
    }
  ]
};

var education = {
  "schools":[
  {
      "name":"Fachhochschule Wiesbaden",
      "dates":2002,
      "city":"Wiesbaden",
      "degree":"Bauingenieur",
      "major":"Diplom Bauingenieur (FH)"
  },
  {
      "name":"Friedrich-Ebert-Schule Wiesbaden",
      "city":"Wiesbaden",
      "dates":1993,
      "degree":"Fachhochschulreife",
      "major":"Maschinenbau"
  }
],
"online courses":[
  {
  "name":"Udacity",
  "city":"world wide web",
  "dates": 2015,
  "degree":"Nano Degree Web Frontend Developer",
  "major":"Web Frontend Developer"
}
]
};

/*
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
*/
