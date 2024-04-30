/** Object */
const student = {
  name: "Olena",
  age: 25,
  skills: ["HTML", "CSS", "JavaScript", "Java", "React", "C#"],
  hasInternship: false,
  checkInternshipStatus: function () {
    if (this.hasInternship) {
      return "Congratulations! You rock!";
    } else {
      return "No worries, there is still time. Keep on going!";
    }
  },
};

/** Object constructor */
function StudentConstructor(name, age, skills, hasInternship) {
  this.name = name;
  this.age = age;
  this.skills = skills;
  this.hasInternship = hasInternship;
  this.checkInternshipStatus = function () {
    /*if(this.hasInternship){
            return "Congratulations! You rock!";
        } else {
            return "No worries, there is still time. Keep on going!";
        }*/
    return this.hasInternship
      ? "Congratulations! You rock!"
      : "No worries, there is still time. Keep on going!";
  };
}

/** Class */
class StudentClass {
  constructor(name, age, skills, hasInternship) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.hasInternship = hasInternship;
  }
  checkInternshipStatus() {
    return this.hasInternship
      ? "Congratulations! You rock!"
      : "No worries, there is still time. Keep on going!";
  }
}

const vlad = new StudentConstructor(
  "Vlad",
  30,
  ["I know everything", "I am perfect"],
  false
);

const violetta = new StudentClass(
  "Violetta",
  24,
  ["Testing", "HTML", "CSS"],
  true
);

console.log(vlad.name);
console.log(vlad.checkInternshipStatus());

console.log(violetta.name);
console.log(violetta.checkInternshipStatus());
Ausblenden;
