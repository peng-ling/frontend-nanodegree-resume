var Name = "Paul Engling";
var Role = "Dipl. Ing.";

var formattedName = HTMLheaderName.replace("%data%", Name);
var formattedRole = HTMLheaderRole.replace("%data%", Role);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
