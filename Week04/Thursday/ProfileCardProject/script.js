const itTrainer = {
  name: "Marcel",
  firstTime: true,
  skills: [
    {
      language: "HTML",
      level: "intermadiate",
    },
    {
      language: "CSS",
      level: "beginner",
    },
    {
      language: "JavaScript",
      level: "advanced",
    },
  ],
  getLevelOfLanguage(pLang) {
    this.skills.forEach((skill) => {
      if (pLang.toLowerCase() === skill.language.toLowerCase()) {
        console.log(skill.level);
      }
    });
  },
};

itTrainer.getLevelOfLanguage("html");

/*
Create element createElement
Select location - queryselector
Locate it - after or insertAdjacentElement("afterend", h2Tag)
*/

//import from another file object
//import pic variables from another file __ links of picture
