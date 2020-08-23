const prompt = require('prompt-sync')();
let classSize = prompt("Please enter the class size: ");
let numOfTeams = prompt("Please enter the number of teams: ");

const min_team_size = Math.floor(classSize / numOfTeams);    //4
const numOfTeams_With_extra_students = classSize % numOfTeams;   //2
const numOfTeams_with_min_team_size = numOfTeams - numOfTeams_With_extra_students;  //3
const num_Of_Students_With_Min_Teams = Math.ceil(classSize/numOfTeams);  //5

console.log(numOfTeams_With_extra_students + "teams with " +num_Of_Students_With_Min_Teams + "and");
console.log(numOfTeams_with_min_team_size + " teams with " + min_team_size + "members");