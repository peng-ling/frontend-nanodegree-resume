var bio = {
  "Name": "Paul Engling",
  "Role": "Dipl. Ing.",
  "contacts": {
    "mobile": "650-555-555",
    "email": "no@realemail.com",
    "github": "peng-ling",
    "twitter": "paul.engling",
    "location": "Wiesbaden"
  },
  "bioPic": "images/paul.jpg",
  "welcomeMessage": "Hello World, here I am",
  "Skills": ["MIG21", "PL/SQL", "DMS", "XML / XSLT", "VBA", "C# code snippets", "KAG- und Depotbankprozesse", "Wertpapierkenntnisse inkl. Termin- und Devisengeschäfte", "SWIFT", "FundsXML", "FundDesigner"]
};

bio.displaycontacts = function() {
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.Name));
  $("#header").append(HTMLbioPic.replace(/%data%/g, bio.bioPic));
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.Role));
  if (bio.contacts !== undefined) {
    for (var contact in bio.contacts) {
      var formatedHTMLcontactGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
      formatedHTMLcontactGeneric = formatedHTMLcontactGeneric.replace("%contact%", contact);
      $("#topContacts").prepend(formatedHTMLcontactGeneric);
      $("#footerContacts").prepend(formatedHTMLcontactGeneric);
    }
  }
};

bio.displayskills = function() {
  if (bio.Skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.Skills) {
      $("#skills").append(HTMLskills.replace("%data%", bio.Skills[skill]));
    }
  }
};

var work = {
  "jobs": [{
    "jobposition": "Consultant",
    "employer": "Averroes Concept Lounge GmbH",
    "years": "09/2014 - today",
    "location": "Frankfurt am Main",
    "Description": "Averroes Concept Lounge GmbH has been working as an independent " +
      "consultancy firm of economists and IT experts since 2001. Averroes Concept Lounge GmbH " +
      "consults asset management companies, asset managers, custodian banks / global custodians, " +
      "insourcing and outsourcing companies, sell-side and buy-side analysts and software manufacturers." +
      "Averroes Concept Lounge GmbH is also vendor of the FundDesigner a Software which helps with the " +
      "organisation of contractual and operational requirements for the fund administration. Standardised " +
      "and individual requirements for the fund administration are clearly visible to all parties. " +
      "This creates transparency of fund administration costs, degree of automatic processing in the " +
      "fund administration systems and operational risks."
  }, {
    "jobposition": "Consultant",
    "employer": "Princeton Financial Systems GmbH",
    "years": "09/2011 – 09/2014",
    "location": "Frankfurt am Main",
    "Description": "Princeton Financial Systems, a part of State Street Corporation’s " +
      "(NYSE: STT) Global Exchange, is a leading provider of comprehensive, front to back " +
      "office solutions to several of the top asset managers, insurance companies, custodians, " +
      "pension funds, and banks spanning the world. Princeton’s software solutions provide " +
      "clients with the technology and services they need to reduce risk, improve efficiency, " +
      "and provide transparency throughout the investment lifecycle."
  }, {
    "jobposition": "Consultant",
    "employer": "Commit GmbH",
    "years": "09/2011 – 09/2014",
    "location": "Frankfurt am Main",
    "Description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
      "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At " +
      "vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, " +
      "no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, " +
      "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et " +
      "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo " +
      "dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem " +
      "ipsum dolor sit amet."
  }]
};

work.display = function() {
  if (work.jobs.length > 0) {
    for (var job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job]
        .employer) + HTMLworkTitle.replace("%data%", work.jobs[job].jobposition));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].years));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].Description));
    }
  }
};

var projects = {
  "project": [{
    "name": "First project",
    "description": "Migration of investment guideline compliance rules from Charles River to BRS Aladdin Compliance Workbench.",
    "year": 2014,
    "projectImage": "images/197x148.gif"
  }, {
    "name": "Second project",
    "description": "Projekte zur Implementierung von MIG21 7.4 " +
      "Projekte zur Migration von MIG21 6.1 zu 7.4" +
      "Implementierung verschiedener MIG21 UCITS IV Lawcards (Deutschland, Frankreich, Italien). " +
      "Entwicklung einer PL/SQL-Lösung zur Berechnung von Dachfondsbeständen. " +
      "Entwicklung diverser Reports mit MIG21 Report Center",
    "year": 2014,
    "projectImage": "images/197x148.gif"
  }, {
    "name": "Third project",
    "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
      "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At " +
      "vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, " +
      "no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, " +
      "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et " +
      "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo " +
      "dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem " +
      "ipsum dolor sit amet.",
    "year": 2014,
    "projectImage": "images/197x148.gif"
  }],
  "display": function() {
    if (projects.project.length > 0) {
      for (var project in projects.project) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[project].name));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.project[project].year));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.project[project].description));
        $(".project-entry:last").append(HTMLprojectImage.replace(/%data%/g, projects.project[project].projectImage));
      }
    }
  }
};

var education = {
  "schools": [{
    "name": "Fachhochschule Wiesbaden",
    "dates": 2002,
    "location": "Wiesbaden",
    "degree": "Bauingenieur",
    "major": "Diplom Bauingenieur (FH)"
  }, {
    "name": "Friedrich-Ebert-Schule Wiesbaden",
    "city": "Wiesbaden",
    "dates": 1993,
    "location": "Wiesbaden",
    "degree": "Fachhochschulreife",
    "major": "Maschinenbau"
  }],
  "onlineCourses": [{
    "school": "Udacity",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
    "date": 2015,
    "title": "Nano Degree Web Frontend Developer"
  }]
};

education.display = function() {
  if (education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
      $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name));
      $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
    }
  }
  if (education.onlineCourses.length > 0) {
    //$("#education").append(HTMLschoolStart);
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (var course in education.onlineCourses) {
      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) +
        HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.onlineCourses[course].date));
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
    }
  }
};

bio.displaycontacts();
bio.displayskills();
education.display();
projects.display();
work.display();

$(document).click(function(loc) {
  console.log("x: " + loc.pageX + " y: " + loc.pageY);
});

$("#mapDiv").append(googleMap);

$("#main").append(internationalizeButton);

var Name = bio.Name;

function inName(Name) {
  Name = Name.split(" ");
  Name[1] = Name[1].toUpperCase();
  return Name[0].slice(0, 1).toUpperCase() + Name[0].slice(1, Name[0].length).toLowerCase() + " " + Name[1];
}
