const questions = [
    { q: "CPU ka mukhya karya kya hai?", o: ["Activities control & Data processing", "Sirf Power Supply", "Sirf Storage"], a: 0 },
    { q: "RAM kis prakar ki memory hai?", o: ["Permanent", "Temporary (Volatile)", "Secondary"], a: 1 },
    { q: "1st Generation computer mein kya use hota tha?", o: ["Transistors", "Vacuum Tubes", "IC Chips"], a: 1 },
    { q: "Networking mein LAN ka matlab kya hai?", o: ["Local Area Network", "Large Network", "Long Area"], a: 0 },
    { q: "Inme se kaunsa Output device hai?", o: ["Keyboard", "Scanner", "Monitor"], a: 2 }
];

let currentIdx = 0, score = 0, userName = "", timeLeft = 120, timer;
const scriptURL = 'https://script.google.com/macros/s/AKfycbyDFuKyQttl1EuMhpn7Cwjx8gs7NzW_SYArkXmH8fUVenZrlrZIcNDZlfTA1EcZs9eS5w/exec';

function startExam() {
    userName = document.getElementById('student-name').value;
    if(!userName) return alert("Pehle naam likhein!");
    document.getElementById('auth-card').style.display = 'none';
    document.getElementById('quiz-card').style.display = 'block';
    renderQ();
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Time: ${timeLeft}s`;
        if(timeLeft <= 0) endTest();
    }, 1000);
}

function renderQ() {
    const q = questions[currentIdx];
    document.getElementById('q-progress').innerText = `Q ${currentIdx + 1}/5`;
    document.getElementById('question-box').innerHTML = `<h3>${q.q}</h3>` + 
        q.o.map((opt, i) => `<button class="option-btn" onclick="checkAnswer(${i}, this)">${opt}</button>`).join('');
    document.getElementById('next-btn').disabled = true;
}

function checkAnswer(idx, btn) {
    const correct = questions[currentIdx].a;
    const allBtn = document.querySelectorAll('.option-btn');
    allBtn.forEach(b => b.disabled = true);
    if(idx === correct) { btn.style.background = "#059669"; score += 20; }
    else { btn.style.background = "#dc2626"; allBtn[correct].style.background = "#059669"; }
    document.getElementById('next-btn').disabled = false;
}

function handleNext() {
    currentIdx++;
    if(currentIdx < questions.length) renderQ();
    else endTest();
}

function endTest() {
    clearInterval(timer);
    document.getElementById('quiz-card').style.display = 'none';
    document.getElementById('result-card').style.display = 'block';
    document.getElementById('score-num').innerText = score;
    
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ name: userName, score: score })
    }).then(() => {
        document.getElementById('save-status').innerText = "Data successfully saved in Google Sheets!";
    }).catch(() => {
        document.getElementById('save-status').innerText = "Network Error! Could not save.";
    });
}