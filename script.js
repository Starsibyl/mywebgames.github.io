const questions = [
    {
        question: "What does HTTP stand for?",
        options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "Home Tool Transfer Protocol"],
        correct: 0
    },
    {
        question: "Which browser is made by Google?",
        options: ["Firefox", "Chrome", "Safari"],
        correct: 1
    },
    {
        question: "What is the main function of a web server?",
        options: ["Store files locally", "Host and serve web content", "Manage emails"],
        correct: 1
    },
    {
        question: "Which of these is a search engine?",
        options: ["Gmail", "Google", "Facebook"],
        correct: 1
    },
    {
        question: "What does URL stand for?",
        options: ["Uniform Resource Locator", "Universal Retrieval Language", "User Resource Link"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-btn';
        button.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === question.correct) {
        buttons[selectedIndex].classList.add('correct');
        score++;
        document.getElementById('score').textContent = score;
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('correct');
    }
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            endGame();
        }
    }, 1500);
}

function endGame() {
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    document.getElementById('question').textContent = `Game Over! Your final score: ${score}/${questions.length}`;
    
    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Play Again';
    restartBtn.className = 'option-btn';
    restartBtn.style.marginTop = '20px';
    restartBtn.onclick = () => {
        currentQuestion = 0;
        score = 0;
        document.getElementById('score').textContent = '0';
        loadQuestion();
    };
    optionsDiv.appendChild(restartBtn);
}

loadQuestion();
