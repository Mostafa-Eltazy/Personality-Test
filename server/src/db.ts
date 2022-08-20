const db = [
  {
    text: "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
    answers: [
      {
        text: "Don’t dare to interrupt them",
        class: "a",
        type: "int",
        value: 2,
      },
      {
        text: "Think it’s more important to give them some of your time; work can wait",
        class: "b",
        type: "ext",
        value: 5,
      },
      {
        text: "Listen, but with only with half an ear",
        class: "c",
        type: "int",
        value: 2,
      },
      {
        text: "Interrupt and explain that you are really busy at the moment",
        class: "d",
        type: "ext",
        value: 5,
      },
    ],
  },
  {
    text: "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
    answers: [
      {
        text: "Look at your watch every two minutes",
        class: "a",
        type: "int",
        value: 2,
      },
      {
        text: "Bubble with inner anger, but keep quiet",
        class: "b",
        type: "int",
        value: 5,
      },
      {
        text: "Explain to other equally impatient people in the room that the doctor is always running late",
        class: "c",
        type: "ext",
        value: 2,
      },
      {
        text: "Complain in a loud voice, while tapping your foot impatiently",
        class: "d",
        type: "ext",
        value: 4,
      },
    ],
  },
  {
    text: "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
    answers: [
      {
        text: "Don’t dare contradict them",
        class: "a",
        type: "int",
        value: 3,
      },
      {
        text: "Think that they are obviously right",
        class: "b",
        type: "int",
        value: 3,
      },
      {
        text: "Defend your own point of view, tooth and nail",
        class: "c",
        type: "ext",
        value: 4,
      },
      {
        text: "Continuously interrupt your colleague",
        class: "d",
        type: "ext",
        value: 3,
      },
    ],
  },

  {
    text: "You are taking part in a guided tour of a museum. You:",
    answers: [
      {
        text: "Are a bit too far towards the back so don’t really hear what the guide is saying",
        class: "a",
        type: "int",
        value: 3,
      },
      {
        text: "Follow the group without question",
        class: "b",
        type: "int",
        value: 3,
      },
      {
        text: "Make sure that everyone is able to hear properly",
        class: "c",
        type: "ext",
        value: 4,
      },
      {
        text: "Are right up the front, adding your own comments in a loud voice",
        class: "d",
        type: "ext",
        value: 3,
      },
    ],
  },

  {
    text: "During dinner parties at your home, you have a hard time with people who:",
    answers: [
      {
        text: " Ask you to tell a story in front of everyone else",
        class: "a",
        type: "int",
        value: 3,
      },
      {
        text: "Talk privately between themselves",
        class: "b",
        type: "int",
        value: 3,
      },
      {
        text: "Hang around you all evening",
        class: "c",
        type: "ext",
        value: 4,
      },
      {
        text: "Always drag the conversation back to themselves",
        class: "d",
        type: "ext",
        value: 3,
      },
    ],
  },

  {
    text: "You crack a joke at work, but nobody seems to have noticed. You:",
    answers: [
      {
        text: "Think it’s for the best — it was a lame joke anyway",
        class: "a",
        type: "int",
        value: 3,
      },
      {
        text: "Wait to share it with your friends after work",
        class: "b",
        type: "int",
        value: 3,
      },
      {
        text: "Try again a bit later with one of your colleagues",
        class: "c",
        type: "ext",
        value: 4,
      },
      {
        text: "Keep telling it until they pay attention",
        class: "d",
        type: "ext",
        value: 3,
      },
    ],
  },
];

export default db;
