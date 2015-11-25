var data = '%data%';

var bio = {
  "name": "Paul Engling",
  "role": "Dipl. Ing.",
  "contacts": {
    "mobile": "650-555-555",
    "email": "no@realemail.com",
    "github": "peng-ling",
    "twitter": "paul.engling",
    "location": "Wiesbaden"
  },
  "biopic": "images/paul.jpg",
  "welcomeMessage": "Hello World, here I am",
  "skills": ["MIG21", "PL/SQL", "DMS", "XML / XSLT", "VBA", "C# code snippets", "KAG- und Depotbankprozesse", "Wertpapierkenntnisse inkl. Termin- und Devisengeschäfte", "SWIFT", "FundsXML", "FundDesigner"]
};

bio.display = function() {
  $("#header").prepend(HTMLheaderName.replace(data, bio.name));
  $("#header").append(HTMLbioPic.replace(/%data%/g, bio.biopic));
  $("#header").prepend(HTMLheaderRole.replace(data, bio.role));
  if (bio.contacts !== undefined) {
    for (var contact in bio.contacts) {
      if (bio.contacts.hasOwnProperty(contact)) {
        var formatedHTMLcontactGeneric = HTMLcontactGeneric.replace(data, bio.contacts[contact]);
        formatedHTMLcontactGeneric = formatedHTMLcontactGeneric.replace("%contact%", contact);
        $("#topContacts").prepend(formatedHTMLcontactGeneric);
        $("#footerContacts").prepend(formatedHTMLcontactGeneric);
      }
    }
  }
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(val) {
      $("#skills").append(HTMLskills.replace(data, val));
    });
  }
};

var work = {
  "jobs": [{
    "title": "Consultant",
    "employer": "Averroes Concept Lounge GmbH",
    "dates": "09/2014 - today",
    "location": "Frankfurt am Main",
    "description": "Averroes Concept Lounge GmbH has been working as an independent " +
      "consultancy firm of economists and IT experts since 2001. Averroes Concept Lounge GmbH " +
      "consults asset management companies, asset managers, custodian banks / global custodians, " +
      "insourcing and outsourcing companies, sell-side and buy-side analysts and software manufacturers." +
      "Averroes Concept Lounge GmbH is also vendor of the FundDesigner a Software which helps with the " +
      "organisation of contractual and operational requirements for the fund administration. Standardised " +
      "and individual requirements for the fund administration are clearly visible to all parties. " +
      "This creates transparency of fund administration costs, degree of automatic processing in the " +
      "fund administration systems and operational risks."
  }, {
    "title": "Consultant",
    "employer": "Princeton Financial Systems GmbH",
    "dates": "09/2011 – 09/2014",
    "location": "Frankfurt am Main",
    "description": "Princeton Financial Systems, a part of State Street Corporation’s " +
      "(NYSE: STT) Global Exchange, is a leading provider of comprehensive, front to back " +
      "office solutions to several of the top asset managers, insurance companies, custodians, " +
      "pension funds, and banks spanning the world. Princeton’s software solutions provide " +
      "clients with the technology and services they need to reduce risk, improve efficiency, " +
      "and provide transparency throughout the investment lifecycle."
  }, {
    "title": "Consultant",
    "employer": "Commit GmbH",
    "dates": "09/2011 – 09/2014",
    "location": "Frankfurt am Main",
    "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
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
      if (work.jobs.hasOwnProperty(job)) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace(data, work.jobs[job]
          .employer) + HTMLworkTitle.replace(data, work.jobs[job].title));
        $(".work-entry:last").append(HTMLworkLocation.replace(data, work.jobs[job].location));
        $(".work-entry:last").append(HTMLworkDates.replace(data, work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace(data, work.jobs[job].description));
      }
    }
  }
};

var projects = {
  "project": [{
    "title": "First project",
    "description": "Migration of investment guideline compliance rules from Charles River to BRS Aladdin Compliance Workbench.",
    "dates": "2014",
    "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
  }, {
    "title": "Second project",
    "description": "Projekte zur Implementierung von MIG21 7.4 " +
      "Projekte zur Migration von MIG21 6.1 zu 7.4" +
      "Implementierung verschiedener MIG21 UCITS IV Lawcards (Deutschland, Frankreich, Italien). " +
      "Entwicklung einer PL/SQL-Lösung zur Berechnung von Dachfondsbeständen. " +
      "Entwicklung diverser Reports mit MIG21 Report Center",
    "dates": "2014",
    "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
  }, {
    "title": "Third project",
    "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
      "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At " +
      "vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, " +
      "no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, " +
      "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et " +
      "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo " +
      "dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem " +
      "ipsum dolor sit amet.",
    "dates": "2014",
    "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
  }],
  "display": function() {
    if (projects.project.length > 0) {
      for (var project in projects.project) {
        if (projects.project.hasOwnProperty(project)) {
          $("#projects").append(HTMLprojectStart);
          $(".project-entry:last").append(HTMLprojectTitle.replace(data, projects.project[project].title));
          $(".project-entry:last").append(HTMLprojectDates.replace(data, projects.project[project].dates));
          $(".project-entry:last").append(HTMLprojectDescription.replace(data, projects.project[project].description));
          if (projects.project[project].images !== undefined) {
            projects.project[project].images.forEach(function(val) {
              $(".project-entry:last").append(HTMLprojectImage.replace(/%data%/g, val));
            });
          }
        }
      }
    }
  }
};

var education = {
  "schools": [{
    "name": "Fachhochschule Wiesbaden",
    "location": "Wiesbaden",
    "degree": "Bauingenieur",
    "majors": "Diplom Bauingenieur (FH)",
    "dates": "2002",
    "url": "https://www.hs-rm.de/fab/startseite/index.html"
  }, {
    "name": "Friedrich-Ebert-Schule Wiesbaden",
    "location": "Wiesbaden",
    "degree": "Fachhochschulreife",
    "majors": "Maschinenbau",
    "dates": "1993",
    "url": "http://www.fes-wbn.de/"
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
      if (education.schools.hasOwnProperty(school)) {
        $(".education-entry:last").append(HTMLschoolName.replace(data, education.schools[school].name).replace("#", education.schools[school].url));
        $(".education-entry:last").append(HTMLschoolDegree.replace(data, education.schools[school].degree));
        $(".education-entry:last").append(HTMLschoolDates.replace(data, education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace(data, education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace(data, education.schools[school].majors));
      }
    }
  }
  if (education.onlineCourses.length > 0) {
    //$("#education").append(HTMLschoolStart);
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (var course in education.onlineCourses) {
      if (education.onlineCourses.hasOwnProperty(course)) {
        $(".education-entry:last").append(HTMLonlineTitle.replace(data, education.onlineCourses[course].title) +
          HTMLonlineSchool.replace(data, education.onlineCourses[course].school));
        $(".education-entry:last").append(HTMLschoolDates.replace(data, education.onlineCourses[course].date));
        $(".education-entry:last").append(HTMLonlineURL.replace(data, education.onlineCourses[course].url));
      }
    }
  }
};

bio.display();
education.display();
projects.display();
work.display();

$(document).click(function(loc) {
  console.log("x: " + loc.pageX + " y: " + loc.pageY);
});

$("#mapDiv").append(googleMap);

$("#main").append(internationalizeButton);

var Name = bio.name;

function inName(Name) {
  Name = Name.split(" ");
  Name[1] = Name[1].toUpperCase();
  return Name[0].slice(0, 1).toUpperCase() + Name[0].slice(1, Name[0].length).toLowerCase() + " " + Name[1];
}
