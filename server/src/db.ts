const db = [
  {
    text: "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
    answers: [
      { text: "Don’t dare to interrupt them", type: "int", value: 2 },
      {
        text: "Think it’s more important to give them some of your time; work can wait",
        type: "ext",
        value: 5,
      },
      { text: "Listen, but with only with half an ear", type: "int", value: 2 },
      {
        text: "Interrupt and explain that you are really busy at the moment",
        type: "ext",
        value: 5,
      },
    ],
  },
];

export default db;
