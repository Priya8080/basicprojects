const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correct: "Delhi"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheet",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats"
    ],
    correct: "Cascading Style Sheets"
  },
  {
    question: "Priya ka dimag humesa kharab kyu rehta hai?",
    options: ["Pagalpan","Chidhchidapan","Moody","Anger Issues"],
    correct: "Anger Issues"
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("div");
    btn.textContent = option;
    btn.classList.add("option");
    btn.onclick = function () {
      document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
      btn.classList.add("selected");
      selectedAnswer = option;
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  if (selectedAnswer === "") {
    alert("Please select an option!");
    return;
  }

  if (selectedAnswer === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;
  selectedAnswer = "";

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>Quiz Completed</h2>
      <p>Your Score: ${score} / ${quizData.length}</p>
      <button onclick="location.reload()">Restart</button>
    `;
  }
}

window.onload = loadQuestion;
