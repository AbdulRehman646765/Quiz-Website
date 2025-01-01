const quizQuestions = [
  {
    number: 1,
    question: "What does HTML stand for?",
    answer: "B. Hyper Text Markup Language",
    options: [
      "A. Hyper Text Making Language",
      "B. Hyper Text Markup Language",
      "C. Hyper Tool Markup Language",
      "D. High Text Markup Language",
    ],
  },
  {
    number: 2,
    question: "What does CSS stand for?",
    answer: "A. Cascading Style Sheets",
    options: [
      "A. Cascading Style Sheets",
      "B. Colorful Style Sheets",
      "C. Computer Style Sheets",
      "D. Creative Style Sheets",
    ],
  },
  // {
  //   number: 3,
  //   question: "Which property is used to change the text color?",
  //   answer: "C. color",
  //   options: [
  //     "A. font-color",
  //     "B. text-color",
  //     "C. color",
  //     "D. background-color",
  //   ],
  // },
  // {
  //   number: 4,
  //   question: "What is JavaScript mainly used for?",
  //   answer: "C. Adding interactivity to web pages",
  //   options: [
  //     "A. Creating HTML pages",
  //     "B. Defining styles",
  //     "C. Adding interactivity to web pages",
  //     "D. Managing servers",
  //   ],
  // },
  // {
  //   number: 5,
  //   question: "Which syntax is correct for an `if` condition in JavaScript?",
  //   answer: "B. if (i == 5)",
  //   options: [
  //     "A. if i == 5 then",
  //     "B. if (i == 5)",
  //     "C. if i = 5 then",
  //     "D. if i = 5",
  //   ],
  // },
  // {
  //   number: 6,
  //   question: "Which HTML tag is used to create a table?",
  //   answer: "C. table",
  //   options: ["A. div", "B. tr", "C. table", "D. td"],
  // },
  // {
  //   number: 7,
  //   question: "Which CSS property is used to make text bold?",
  //   answer: "A. font-weight",
  //   options: ["A. font-weight", "B. text-style", "C. font-bold", "D. bold"],
  // },
  // {
  //   number: 8,
  //   question:
  //     "Which method is used to add an element at the end of an array in JavaScript?",
  //   answer: "C. push()",
  //   options: ["A. append()", "B. add()", "C. push()", "D. insert()"],
  // },
  // {
  //   number: 9,
  //   question:
  //     "Which attribute in the script tag specifies an external JavaScript file?",
  //   answer: "B. src",
  //   options: ["A. href", "B. src", "C. link", "D. script"],
  // },
  // {
  //   number: 10,
  //   question: "Which CSS property is used to set the space between elements?",
  //   answer: "D. margin",
  //   options: ["A. padding", "B. spacing", "C. border-spacing", "D. margin"],
  // },
];

const translateText = {
  engText: [
    "Select one option as the answer for each question.",
    "Only one answer can be selected per question.",
    "Click the 'Next' button to move to the next question.",
    "Your score will update after each question.",
    "The final score will be displayed after completing all questions.",
  ],
  urduText: [
    "Har sawal ka jawab dene ke liye options me se ek ko select karein.",
    "Har sawal ke liye sirf ek hi jawab select karna mumkin hai.",
    "'Next' button click karne par agla sawal display hoga.",
    "Aapka score har sawal ke baad update hoga.",
    "Sabhi sawalon ke jawab dene ke baad final score dikhaya jayega.",
  ],
};
