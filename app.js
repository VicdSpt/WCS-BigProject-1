const myQuestions = [
  {
    question: "Quel monument célèbre représente un petit garçon urinant ?",
    image: "images/bruxelles/Monuments-de-bruxelles-capitale-belgique-Manneken-Pis.jpg",
    answers: [
      { text: "Atomium", correct: false },
      { text: "Manneken-Pis", correct: true },
      { text: "Grand Sablon", correct: false },
      { text: "Jeanneke-Pis", correct: false },
    ],
  },
  {
    question:
      "Quelle est la grande place centrale de Bruxelles, classée à l'UNESCO ?",
    image: "images/bruxelles/Grand_Place_Bruselas_2.jpg",
    answers: [
      { text: "Place Royale", correct: false },
      { text: "Grand-Place", correct: true },
      { text: "Place Sainte-Catherine", correct: false },
      { text: "Place du Luxembourg", correct: false },
    ],
  },
  {
    question: "Quelle est la hauteur de l'Atomium ?",
    image: "images/bruxelles/atomium.jpg",
    answers: [
      { text: "72 m", correct: false },
      { text: "102 m", correct: true },
      { text: "152 m", correct: false },
      { text: "182 m", correct: false },
    ],
  },
  {
    question:
      "Le bar Delirium Café à Bruxelles est célèbre pour son incroyable sélection de bières. Combien de bières différentes peut-on y trouver ?",
      image: "images/bruxelles/délicafe.jpg",
    answers: [
      { text: "200", correct: false },
      { text: "500", correct: false },
      { text: "2 000", correct: true },
      { text: "3 000", correct: false },
    ],
  },
  {
    question: "Quelle est la forme typique de la gaufre de Bruxelles ?",
    image: "images/bruxelles/gauffre.jpg",
    answers: [
      { text: "Ronde et épaisse", correct: false },
      { text: "Rectangulaire et légère", correct: true },
      { text: "Carrée et caramélisée", correct: false },
      { text: "Triangulaire et moelleuse", correct: false },
    ],
  },
  {
    question: "Quel est le principal port de Toulon ?",
    image: "images/Toulon/toulon1.webp"
    answers: [
      { text: "Port de Nice", correct: false },
      { text: "La Rade de Toulon", correct: true },
      { text: "Port de Marseille", correct: false },
      { text: "Port de Cannes", correct: false },
    ],
  },
  {
    question: "Quel sport est particulièrement populaire à Toulon ?",
    image: "images/Toulon/toulon-3.jpg"
    answers: [
      { text: "Rugby", correct: true },
      { text: "Football", correct: false },
      { text: "Handball", correct: false },
      { text: "Basket-ball", correct: false },
    ],
  },
  {
    question: "Toulon est célèbre pour quel type de paysage naturel ?",
    answers: [
      { text: "Plages et rade", correct: true },
      { text: "Montagnes enneigées", correct: false },
      { text: "Forêts tropicales", correct: false },
      { text: "Déserts", correct: false },
    ],
  },
  {
    question: "Quel événement militaire est associé à Toulon ?",
    answers: [
      { text: "La base navale de la Marine nationale", correct: true },
      { text: "Les Jeux Olympiques", correct: false },
      { text: "Le Festival de Cannes", correct: false },
      { text: "Le Salon de l'Agriculture", correct: false },
    ],
  },
  {
    question:
      "Quel est le monument emblématique de Toulon surplombant la ville ?",
    answers: [
      { text: "La Tour Eiffel", correct: false },
      { text: "Le Mont Faron", correct: true },
      { text: "La Cathédrale de Notre-Dame de la Garde", correct: false },
      { text: "Le Château", correct: false },
    ],
  },
  {
    question:
      "Le premier métro automatique sans chauffeur a été inauguré à Lille",
    answers: [
      { text: "Vrai", correct: true },
      { text: "Faux", correct: false },
    ],
  },
  {
    question: "Lequel de ces présidents était originaire de Lille ?",
    answers: [
      { text: "Georges Pompidou", correct: false },
      { text: "François Mitterand", correct: false },
      { text: "Charles de Gaulle", correct: true },
      { text: "Jacques Chirac", correct: false },
    ],
  },
  {
    question: "Quelle est la boisson emblématique de Lille ?",
    answers: [
      { text: "Le Vin rouge", correct: false },
      { text: "La Bière", correct: true },
      { text: "Le Champagne", correct: false },
      { text: "Le Cidre", correct: false },
    ],
  },
  {
    question: "La cathédrale de Lille porte le nom de :",
    answers: [
      { text: "Notre Dame de la Treille", correct: true },
      { text: "Notre Dame de la Vigne", correct: false },
      { text: "Notre Dame de Paris", correct: false },
      { text: "Notre Dame de la Grappe", correct: false },
    ],
  },
  {
    question: "Lille est surnommé la Capitale des Flandres",
    answers: [
      { text: "Vrai", correct: true },
      { text: "Faux", correct: false },
    ],
  },
  {
    question: "Quelle célèbre marque de gâteaux est originaire de Nantes ?",
    answers: [
      { text: "Bonne Maman", correct: false },
      { text: "LU", correct: true },
      { text: "Milka", correct: false },
      { text: "St Michel", correct: false },
    ],
  },
  {
    question:
      "Quel lieu emblématique occupait le dernier étage de la Tour Bretagne (144m de haut) avant sa fermeture ?",
    answers: [
      { text: "Une salle de sport", correct: false },
      { text: "Un bar appelé Le Nid", correct: true },
      { text: "Un restaurant étoilé", correct: false },
      { text: "Un observatoire scientifique", correct: false },
    ],
  },
  {
    question:
      "Quel animal géant et mécanique est devenu l'une des attractions les plus célèbres des Machines de l'Île ?",
    answers: [
      { text: "Le tigre steampunk", correct: false },
      { text: "Le dragon volant", correct: false },
      { text: "Le Grand Éléphant", correct: true },
      { text: "Le rhinocéros mécanique", correct: false },
    ],
  },
  {
    question:
      "Quel fleuve traverse la ville de Nantes avant de se jeter dans l'océan Atlantique ?",
    answers: [
      { text: "La Seine", correct: false },
      { text: "La Loire", correct: true },
      { text: "Le Rhône", correct: false },
      { text: "La Garonne", correct: false },
    ],
  },
  {
    question:
      "Quel vin blanc, produit autour de Nantes et reconnu pour accompagner les fruits de mer, est le plus célèbre de la région ?",
    answers: [
      { text: "Sancerre", correct: false },
      { text: "Bordeaux blanc", correct: false },
      { text: "Chablis", correct: false },
      { text: "Muscadet", correct: true },
    ],
  },
];
// Variables pour gérer le quiz

let currentQuestionIndex = 0; // Question position à afficher
let score = 0; //Score du joueur

// DOM Elements vers HTML
const startBtn = document.querySelector(".btn-start"); //Bouton démarrer le quiz
const nextBtn = document.querySelector(".btn-next"); //Bouton question suivante
const startSection = document.querySelector(".quiz-section-start"); //Section de démarrage du quiz
const quizSection = document.querySelector(".quiz-section"); // affiche la section des question
const questionElement = document.querySelector(".question"); // afficher question et permet de la modifier
const answerBtns = document.querySelector(".button-choices"); // conteneur des boutons de réponses, ajouter ou retirer

// ---------------------------------------------------------------------------------------------------------
// burger menu
const burgerBtn = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// ---------------------------------------------------------------------------------------------------------
// function to start the quiz
// fonction pour commencer le quiz en cliquant sur le btn-star
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  startSection.style.display = "none";
  quizSection.style.display = "block";

  nextBtn.innerHTML = "Question Suivante";

  // reset + start timer
  // timeLeft = totalTime;
  // updateProgressDisplay();
  // startTimer();

  showQuestion();
}
startBtn.addEventListener("click", startQuiz);

// ---------------------------------------------------------------------------------------------------------

// fonction pour afficher la question
function showQuestion() {
  resetQuestions();
  let currentQuestion = myQuestions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;
  
  const questionImage = document.querySelector(".question-image");
  questionImage.src = currentQuestion.image;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn-choice");
    answerBtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

// function to select an answer
function selectAnswer(event) {
  const selectBtn = event.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

// function for next button
function goNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < myQuestions.length) {
    showQuestion();
  }
}
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < myQuestions.length) {
    goNextQuestion();
  } else {
    startQuiz();
  }
});

// function reset questions
function resetQuestions() {
  nextBtn.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

// function to display score
function updateScoreDisplay() {
  questionElement.innerHTML = `Score: ${score} / ${myQuestions.length}`;
  if (isCorrect) {
    updateScoreDisplay();
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
  }
}
