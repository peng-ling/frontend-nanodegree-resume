var bio = {
  "Name": "Paul Engling",
  "Role": "Dipl. Ing.",
  "contacts": {
    "mobile": "650-555-555",
    "email": "no@realemail.com",
    "github": "peng-ling",
    "twitter": "pengling",
    "location": "New York City"
  },
  "bioPic": "images/fry.jpg",
  "welcomeMessage": "Hello World, here I am",
  "Skills": ["MIG21", "PL/SQL", "DMS", "XML / XSLT", "VBA", "C# code snippets", "KAG- und Depotbankprozesse", "Wertpapierkenntnisse inkl. Termin- und Devisengeschäfte", "SWIFT", "FundsXML", "FundDesigner"]
}

var work = {
  "jobs": [{
    "jobposition": "Consultant",
    "employer": "ACL",
    "years": "09/2014 - heute",
    "location": "Frankfurt am Main",
    "Description": "Bla"
  }, {
    "jobposition": "Consultant",
    "employer": "Princeton Financial systems GmbH",
    "years": "09/2011 – 09/2014",
    "location": "Frankfurt am Main",
    "Description": "Projekte zur Implementierung von MIG21 7.4 Projekte zur Migration von MIG21 6.1 zu 7.4Implementierung verschiedener MIG21 UCITS IV Lawcards (Deutschland, Frankreich, Italien). Entwicklung einer PL/SQL-Lösung zur Berechnung von Dachfondsbeständen. Entwicklung diverser Reports mit MIG21 Report Center"
  }]
}

var projects = {
    "project": [{
      "name": "Bla",
      "description": "Bla",
      "year": 2014,
      "projectImage": "images/fry.jpg"
    }, {
      "name": "Bla 2",
      "description": "Bla",
      "year": 2014,
      "projectImage": "images/fry.jpg"
    }],
    "display": function() {
      for (project in projects.project) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[project].name));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.project[project].year));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.project[project].description));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project[project].projectImage));
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
      "online courses": [{
        "name": "Udacity",
        "location": "world wide web",
        "dates": 2015,
        "degree": "Nano Degree Web Frontend Developer",
        "major": "Web Frontend Developer"
      }]
    };


    $("#header").append(HTMLheaderName.replace("%data%",bio.Name));
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.Role));
    $("#topContacts").prepend(HTMLcontactGeneric.replace("%data%", bio.contacts.mobile));

    //if (bio.skills.length > 0)...

    if (bio.Skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (skill in bio.Skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.Skills[skill]));
      };
    };

    function myfunc() {
      if (work.jobs.length > 0) {
        for (job in work.jobs) {
          $("#workExperience").append(HTMLworkStart);
          $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job]
            .employer) + HTMLworkTitle.replace("%data%", work.jobs[job].jobposition));
          $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
          $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].years));
          $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].Description));
        };
      };
    }

    projects.display();

    $(document).click(function(loc) {
      console.log("x: " + loc.pageX + " y: " + loc.pageY);
    });

    $("#mapDiv").append(googleMap);

    $("#main").append(internationalizeButton);

    function inName(Name) {
      intName = Name.split(" ");
      intName[1] = intName[1].toUpperCase();
      return intName[0].slice(0, 1).toUpperCase + intName[0].slice(0, 1).toLowerCase + " " + intName[1];
    }
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
