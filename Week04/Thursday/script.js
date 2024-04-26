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
