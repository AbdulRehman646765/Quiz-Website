const main = document.querySelector(".main");
const homeSectionContent = document.querySelector(".home-content");
const startQuizBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizWelcomeNote = document.querySelector(".quiz-welcome-note");
const quizWelcomeH1 = document.querySelector(".quiz-welcome-note h1");
const quizBox = document.querySelector(".quiz-box");
const nextBtn = document.querySelector(".next-btn");
const optionList = document.querySelector(".option-list");

homeSectionContent.classList.add("animate");

startQuizBtn.addEventListener("click", () => {
  homeSectionContent.classList.add("active");
  popupInfo.style.display = "block";
  main.classList.add("active");
});

exitBtn.addEventListener("click", () => {
  homeSectionContent.classList.remove("active");
  homeSectionContent.classList.add("animate");
  popupInfo.style.display = "none";
  main.classList.remove("active");
});

continueBtn.addEventListener("click", () => {
  main.classList.remove("active");
  quizSection.classList.add("active");
  popupInfo.style.display = "none";
  quizWelcomeNote.classList.add("active");
  quizWelcomeH1.classList.add("welcome-animate");

  const showQuizSection = setTimeout(() => {
    quizBox.classList.add("active");
    quizWelcomeNote.classList.remove("active");

    showQuestion(0);
    questionCounter(1);
    headerScore();
  }, 4000);
});

let questionsCount = 0;
let questionsNumb = 1;
let userScore = 0;

nextBtn.addEventListener("click", () => {
  if (questionsCount < quizQuestions.length - 1) {
    questionsCount++;
    showQuestion(questionsCount);
    nextBtn.classList.remove("active");
    questionsNumb++;
    questionCounter(questionsNumb);
  } else {
    showResult();
  }
});

// getting Questions and options from arrays
function showQuestion(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = `${quizQuestions[index].number}. ${quizQuestions[index].question}`;

  let optionTag = `<div class="option"><span>${quizQuestions[index].options[0]}</span></div>
  <div class="option"><span>${quizQuestions[index].options[1]}</span></div>
  <div class="option"><span>${quizQuestions[index].options[2]}</span></div>
  <div class="option"><span>${quizQuestions[index].options[3]}</span></div>`;

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = quizQuestions[questionsCount].answer;
  let allOptions = optionList.children.length;

  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
    userScore += 1;
    headerScore();
  } else {
    answer.classList.add("incorrect");

    // if answer incorrect, auto selected correct answer
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAnswer) {
        optionList.children[i].setAttribute("class", "option correct");
      }
    }
  }

  nextBtn.classList.add("active");
  // if user has selected, disabled all options
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }
}

function questionCounter(index) {
  const questionsTotal = document.querySelector(".questions-total");
  questionsTotal.textContent = `${index} of ${quizQuestions.length} Questions`;
}

function headerScore() {
  const headerScoreText = document.querySelector(".header-score");
  headerScoreText.textContent = `Score: ${userScore} / ${quizQuestions.length}`;
}

// // Popup info box
const infoParagraphs = document.querySelectorAll(".info");
const translateBtn = document.querySelector(".translate-btn");

let currentLanguage = "engText";

function displayText(language) {
  const textArray = translateText[language];
  infoParagraphs.forEach((p, index) => {
    p.textContent = textArray[index];
  });
}

// Button click event to toggle language
translateBtn.addEventListener("click", () => {
  currentLanguage = currentLanguage === "engText" ? "urduText" : "engText";
  translateBtn.textContent =
    currentLanguage === "engText"
      ? "Translate in Urdu"
      : "Translate in English";
  displayText(currentLanguage);
});

// Display default text
displayText(currentLanguage);

// About Section and Contact us Section
const aboutUsLink = document.querySelector(".about");
const aboutSection = document.querySelector(".about-section");
const contactUsLink = document.querySelector(".contact");
const contactSection = document.querySelector(".contact-us");
const closeIcon = document.querySelector("#close-about-section");
const contactCloseIcon = document.querySelector("#contact-close-icon");

aboutUsLink.addEventListener("click", () => {
  homeSectionContent.classList.add("active");
  aboutSection.style.display = "block";
  main.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  aboutSection.style.display = "none";
  homeSectionContent.classList.remove("active");
  main.classList.remove("active");
});

contactUsLink.addEventListener("click", () => {
  homeSectionContent.classList.add("active");
  contactSection.style.display = "block";
  main.classList.add("active");
});

contactCloseIcon.addEventListener("click", () => {
  contactSection.style.display = "none";
  homeSectionContent.classList.remove("active");
  main.classList.remove("active");
});
/////////////////////////////////////////////////////////////////////////// Result Box
const resultBoxContainer = document.querySelector(".result-box-container");
const resultBox = document.querySelector(".result-box");
const thanksNote = document.querySelector(".result-box p");

function showResult() {
  quizBox.classList.remove("active");
  resultBoxContainer.style.display = "block";
  resultBox.classList.add("active");
  thanksNote.classList.add("thanks-animate");

  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Your Score is : ${userScore} out of ${quizQuestions.length}`;

  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");
  let progressStartValue = -1;
  let progressEndValue = (userScore / quizQuestions.length) * 100;
  let speed = 30;

  let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#08d8d8 ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, 0.1) 0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
  ////////////////////////////////////////////////////////////// Try Again Button
  const tryAgainBtn = document.querySelector(".tryAgain-btn");
  tryAgainBtn.addEventListener("click", () => {
    quizBox.classList.add("active");
    resultBoxContainer.style.display = "none";
    resultBox.classList.remove("active");
    nextBtn.classList.remove("active");
    thanksNote.classList.add("thanks-animate");
    questionsCount = 0;
    questionsNumb = 1;
    userScore = 0;
    showQuestion(questionsCount);
    questionCounter(questionsNumb);
    headerScore();
  });
  ////////////////////////////////////////////////////////////// Go Home Button
  const goHomeBtn = document.querySelector(".goHome-btn");
  goHomeBtn.addEventListener("click", () => {
    homeSectionContent.classList.remove("active");
    homeSectionContent.classList.add("animate");
    quizSection.classList.remove("active");
    resultBox.classList.remove("active");
    nextBtn.classList.remove("active");
    questionsCount = 0;
    questionsNumb = 1;
    userScore = 0;
    showQuestion(questionsCount);
    questionCounter(questionsNumb);
    headerScore();
  });
}
// resultBox.classList.add("active");

/////////////////////////////////////////////////////////////// quiz-extra
const quizExtra = document.querySelector(".quiz-extra");
const quizExtraLight = document.querySelector(".quiz-extra .light");
const quizExtraTitle = document.querySelector(".quiz-extra p");
const extraDetailBox = document.querySelector(".extra-details");
const detailBoxClose = document.querySelector("#close-detail-box");

quizExtra.addEventListener("click", () => {
  quizExtraLight.style.display = "none";
  quizExtraTitle.style.display = "none";
  extraDetailBox.classList.add("active");
});

detailBoxClose.addEventListener("click", () => {
  extraDetailBox.style.opacity = "0";
  extraDetailBox.style.pointerEvents = "none";
  quizExtraLight.style.display = "block";
  quizExtraTitle.style.display = "block";
});
