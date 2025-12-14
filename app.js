const citiesQuestions = [
  {
    "questions": [
      {
        "id": 1,
        "question": "Quel monument célèbre représente un petit garçon urinant ?",
        "options": [
          "Atomium",
          "Manneken-Pis",
          "Grand Sablon",
          "Jeanneke-Pis"
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "question": "Quelle est la grande place centrale de Bruxelles, classée à l'UNESCO ?",
        "options": [
          "Place Royale",
          "Grand-Place",
          "Place Sainte-Catherine",
          "Place du Luxembourg"
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "question": "Quelle est la hauteur de l'Atomium ?",
        "options": [
          "72 m",
          "102 m",
          "152 m",
          "182 m"
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "question": "Le bar Delirium Café à Bruxelles est célèbre pour son incroyable sélection de bières. Combien de bières différentes peut-on y trouver ?",
        "options": [
          "200",
          "500",
          "2 000",
          "3 000"
        ],
        "correctAnswer": 2
      },
      {
        "id": 5,
        "question": "Quelle est la forme typique de la gaufre de Bruxelles ?",
        "options": [
          "Ronde et épaisse",
          "Rectangulaire et légère",
          "Carrée et caramélisée",
          "Triangulaire et moelleuse"
        ],
        "correctAnswer": 1
      },
      {
        "id": 6,
        "question": "Quel est le principal port de Toulon ?",
        "options": [
          "Port de Nice",
          "La Rade de Toulon",
          "Port de Marseille",
          "Port de Cannes"
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "question": "Quel sport est particulièrement populaire à Toulon ?",
        "options": [
          "Rugby",
          "Football",
          "Handball",
          "Basket-ball"
        ],
        "correctAnswer": 0
      },
      {
        "id": 8,
        "question": "Toulon est célèbre pour quel type de paysage naturel ?",
        "options": [
          "Plages et rade",
          "Montagnes enneigées",
          "Forêts tropicales",
          "Déserts"
        ],
        "correctAnswer": 0
      },
      {
        "id": 9,
        "question": "Quel événement militaire est associé à Toulon ?",
        "options": [
          "La base navale de la Marine nationale",
          "Les Jeux Olympiques",
          "Le Festival de Cannes",
          "Le Salon de l'Agriculture"
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "question": "Quel est le monument emblématique de Toulon surplombant la ville ?",
        "options": [
          "La Tour Eiffel",
          "Le Mont Faron",
          "La Cathédrale de Notre-Dame de la Garde",
          "Le Château"
        ],
        "correctAnswer": 1
      },
      {
        "id": 11,
        "question": "Quelle célèbre marque de gâteaux est originaire de Nantes ?",
        "options": [
          "Bonne Maman",
          "LU",
          "Milka",
          "St Michel"
        ],
        "correctAnswer": 1
      },
      {
        "id": 12,
        "question": "Quel lieu emblématique occupait le dernier étage de la Tour Bretagne (144m de haut) avant sa fermeture ?",
        "options": [
          "Une salle de sport",
          "Un bar appelé Le Nid",
          "Un restaurant étoilé",
          "Un observatoire scientifique"
        ],
        "correctAnswer": 1
      },
      {
        "id": 13,
        "question": "Quel animal géant et mécanique est devenu l'une des attractions les plus célèbres des Machines de l'Île (association culturelle nantaise) ?",
        "options": [
          "Le tigre steampunk",
          "Le dragon volant",
          "Le Grand Éléphant",
          "Le rhinocéros mécanique"
        ],
        "correctAnswer": 2
      },
      {
        "id": 14,
        "question": "Quel fleuve traverse la ville de Nantes avant de se jeter dans l'océan Atlantique ?",
        "options": [
          "La Seine",
          "La Loire",
          "Le Rhône",
          "La Garonne"
        ],
        "correctAnswer": 1
      },
      {
        "id": 15,
        "question": "Quel vin blanc, produit autour de Nantes et reconnu pour accompagner les fruits de mer, est le plus célèbre de la région ?",
        "options": [
          "Sancerre",
          "Bordeaux blanc",
          "Chablis",
          "Muscadet"
        ],
        "correctAnswer": 3
      }
    ]
  }
]
// Js pour le bouton commencer le jeu, à améliorer
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector(".btn-start");
  const quizSection = document.querySelector(".quiz-section");
  const startSection = document.querySelector(".quiz-section-start");

  startBtn.addEventListener("click", () => {
    startSection.style.display = "none";
    quizSection.style.display = "block";
  });
});

