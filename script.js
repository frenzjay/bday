        var dateOfBirth = new Date("January 12, 2007");

        var currentDate = new Date();

        var dayOfBirthElement = document.getElementById("dayOfBirth");
        var exactAgeElement = document.getElementById("exactAge");
        var starSignElement = document.getElementById("starSign");
        var chineseBirthYearElement = document.getElementById("chineseBirthYear");
        var untilNextBirthdayElement = document.getElementById("untilNextBirthday");
        var birthstoneElement = document.getElementById("birthstone");
        var haveBeenAliveForElement = document.getElementById("haveBeenAliveFor");
        var milesTraveledAroundTheSunElement = document.getElementById("milesTraveledAroundTheSun");
        var no1MovieWhenYouWereBornElement = document.getElementById("no1MovieWhenYouWereBorn");
        var famousPeopleWhoShareYourBirthdayElement = document.getElementById("famousPeopleWhoShareYourBirthday");

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfBirth = daysOfWeek[dateOfBirth.getDay()];
dayOfBirthElement.innerHTML = dayOfBirth;

var ageInMilliseconds = currentDate - dateOfBirth; 
var ageInSeconds = Math.floor(ageInMilliseconds / 1000); 
var ageInMinutes = Math.floor(ageInSeconds / 60); 
var ageInHours = Math.floor(ageInMinutes / 60); 
var ageInDays = Math.floor(ageInHours / 24); 
var ageInWeeks = Math.floor(ageInDays / 7); 
var ageInMonths = Math.floor(ageInDays / 30); 
var ageInYears = Math.floor(ageInDays / 365); 

var exactAge = ageInYears + " years, " + (ageInMonths % 12) + " months, " + (ageInDays % 30) + " days, " + (ageInHours % 24) + " hours, " + (ageInMinutes % 60) + " minutes, and " + (ageInSeconds % 60) + " seconds.";
exactAgeElement.innerHTML = exactAge;

var starSign = "Capricorn"; 
starSignElement.innerHTML = starSign;

var chineseZodiacs = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
var chineseZodiacIndex = (dateOfBirth.getFullYear() - 4) % 12; 
var chineseBirthYear = chineseZodiacs[chineseZodiacIndex];
chineseBirthYearElement.innerHTML = chineseBirthYear;

var nextBirthday = new Date(dateOfBirth.getFullYear() + ageInYears + 1, dateOfBirth.getMonth(), dateOfBirth.getDate());
var timeUntilNextBirthdayInMilliseconds = nextBirthday - currentDate;
var timeUntilNextBirthdayInSeconds = Math.floor(timeUntilNextBirthdayInMilliseconds / 1000); 
var timeUntilNextBirthdayInMinutes = Math.floor(timeUntilNextBirthdayInSeconds / 60); 
var timeUntilNextBirthdayInHours = Math.floor(timeUntilNextBirthdayInMinutes / 60);
var timeUntilNextBirthdayInDays = Math.floor(timeUntilNextBirthdayInHours / 24);

var untilNextBirthday = timeUntilNextBirthdayInDays + " days, " + (timeUntilNextBirthdayInHours % 24) + " hours, " + (timeUntilNextBirthdayInMinutes % 60) + " minutes, and " + (timeUntilNextBirthdayInSeconds % 60) + " seconds.";
untilNextBirthdayElement.innerHTML = untilNextBirthday;

var birthstones = ["Garnet", "Amethyst", "Aquamarine", "Diamond", "Emerald", "Pearl", "Ruby", "Peridot", "Sapphire", "Opal", "Topaz", "Turquoise"];
var birthstoneIndex = dateOfBirth.getMonth(); 
var birthstone = birthstones[birthstoneIndex];
birthstoneElement.innerHTML = birthstone;

haveBeenAliveForElement.innerHTML += "<li>Full hours: " + ageInHours + "</li>";
haveBeenAliveForElement.innerHTML += "<li>Full days: " + ageInDays + "</li>";
haveBeenAliveForElement.innerHTML += "<li>Full weeks: " + ageInWeeks + "</li>";
haveBeenAliveForElement.innerHTML += "<li>Full months: " + ageInMonths + "</li>";
haveBeenAliveForElement.innerHTML += "<li>Years: " + ageInYears + "</li>";

var earthOrbitalRadius = 149597870;
var earthOrbitalPeriod = 365.256363; 
var earthOrbitalSpeed = (2 * Math.PI * earthOrbitalRadius) / earthOrbitalPeriod; 
var milesTraveledAroundTheSun = Math.round((ageInDays * earthOrbitalSpeed) / 1.609); 
milesTraveledAroundTheSunElement.innerHTML = milesTraveledAroundTheSun.toLocaleString() + " miles";

var no1MovieWhenYouWereBorn = "Night at the Museum"; // https://www.boxofficemojo.com/weekend/by-year/2007/?area=PH&sort=rank&order=ASC&ref_=bo_ydw__resort#table
no1MovieWhenYouWereBornElement.innerHTML = no1MovieWhenYouWereBorn;

var famousPeopleWhoShareYourBirthday = ["Zayn Malik", "Howard Stern", "Naya Rivera", "Rob Zombie"]; // https://www.famousbirthdays.com/january12.html
for (var i = 0; i < famousPeopleWhoShareYourBirthday.length; i++) {
    famousPeopleWhoShareYourBirthdayElement.innerHTML += "<li>" + famousPeopleWhoShareYourBirthday[i] + "</li>";
}