const questions = [
    { q: "CPU ka full form kya hai?", o: ["Central Power Unit", "Central Processing Unit", "Computer Processing Unit", "Control Processing Unit"], a: 1 },
    { q: "CPU ka main kaam kya hota hai?", o: ["Data store karna", "Data process karna", "Data print karna", "Data delete karna"], a: 1 },
    { q: "ALU ka use kis liye hota hai?", o: ["Storage", "Input", "Calculation", "Output"], a: 2 },
    { q: "RAM kaisi memory hoti hai?", o: ["Permanent", "Temporary", "External", "Optical"], a: 1 },
    { q: "Power off hone par kaunsi memory data lose karti hai?", o: ["ROM", "Hard Disk", "RAM", "Pen Drive"], a: 2 },
    { q: "ROM ka main use kya hai?", o: ["Games chalana", "Booting instructions store karna", "Internet chalana", "Files delete karna"], a: 1 },
    { q: "Kaunsa primary memory hai?", o: ["Hard Disk", "Pen Drive", "RAM", "CD"], a: 2 },
    { q: "Kaunsa secondary memory device hai?", o: ["RAM", "ROM", "Hard Disk", "Cache"], a: 2 },
    { q: "Keyboard kaun sa device hai?", o: ["Output", "Input", "Storage", "Processing"], a: 1 },
    { q: "Printer kaun sa device hai?", o: ["Input", "Processing", "Output", "Storage"], a: 2 },
    { q: "Computer networking ka matlab kya hai?", o: ["Computer repair", "Computer selling", "Computers ko connect karna", "Computer formatting"], a: 2 },
    { q: "LAN ka full form kya hai?", o: ["Large Area Network", "Local Area Network", "Long Area Network", "Limited Area Network"], a: 1 },
    { q: "Internet ka example kaunsa network hai?", o: ["LAN", "MAN", "WAN", "PAN"], a: 2 },
    { q: "Operating System ka kaam kya hai?", o: ["Games banana", "Hardware manage karna", "Internet band karna", "Virus banana"], a: 1 },
    { q: "Windows kya hai?", o: ["Hardware", "Application software", "System software", "Utility software"], a: 2 },
    { q: "MS Word kis type ka software hai?", o: ["System", "Application", "Utility", "Hardware"], a: 1 },
    { q: "MS Word ka use kis liye hota hai?", o: ["Painting", "Calculation", "Document typing", "Music"], a: 2 },
    { q: "MS Excel ka use kis liye hota hai?", o: ["Drawing", "Calculation", "Video", "Browsing"], a: 1 },
    { q: "Formula =SUM() ka use kaha hota hai?", o: ["Word", "Paint", "Excel", "PowerPoint"], a: 2 },
    { q: "PowerPoint ka use kis liye hota hai?", o: ["Typing", "Presentation", "Calculation", "Internet"], a: 1 },
    { q: "Scanner kya karta hai?", o: ["Print", "Scan document", "Sound play", "Calculation"], a: 1 },
    { q: "Email ka full form kya hai?", o: ["Easy Mail", "Electronic Mail", "Express Mail", "Extra Mail"], a: 1 },
    { q: "Email ka use kya hai?", o: ["Drawing", "Message bhejna", "Calculation", "Storage"], a: 1 },
    { q: "Data kya hota hai?", o: ["Processed output", "Raw facts", "Report", "Decision"], a: 1 },
    { q: "Information kya hoti hai?", o: ["Raw data", "Unprocessed data", "Processed data", "Noise"], a: 2 },
    { q: "Virus kis category me aata hai?", o: ["Hardware", "Software", "Malware", "OS"], a: 2 },
    { q: "Antivirus ka use kis liye hota hai?", o: ["Virus banana", "Virus remove karna", "Internet chalana", "Formatting"], a: 1 },
    { q: "Formatting ka matlab kya hai?", o: ["Data copy", "Device prepare karna", "Internet connect", "Print"], a: 1 },
    { q: "Cloud storage ka example kaunsa hai?", o: ["Pen Drive", "Hard Disk", "Google Drive", "CD"], a: 2 },
    { q: "IP Address ka use kya hai?", o: ["Computer start", "Device identify", "Virus remove", "Print"], a: 1 },
    { q: "Cache memory ka use kya hota hai?", o: ["Data store permanently", "CPU ki speed badhane ke liye", "Internet chalane ke liye", "Printing ke liye"], a: 1 },
    { q: "Hard Disk kis type ki memory hai?", o: ["Primary", "Cache", "Secondary", "Register"], a: 2 },
    { q: "Pen Drive kaun si memory ka example hai?", o: ["Primary", "Secondary", "Cache", "ROM"], a: 1 },
    { q: "Computer ki first generation me kya use hota tha?", o: ["IC", "Microprocessor", "Vacuum Tubes", "AI"], a: 2 },
    { q: "Second generation computers me kya use hua?", o: ["Vacuum Tubes", "Transistors", "IC", "AI"], a: 1 },
    { q: "Fifth generation computers kis par based hain?", o: ["Vacuum tube", "Transistor", "IC", "Artificial Intelligence"], a: 3 },
    { q: "LAN ka coverage area hota hai:", o: ["Desh", "City", "Building/Office", "World"], a: 2 },
    { q: "MAN ka example kya hai?", o: ["Internet", "School Lab", "City Cable Network", "Home Network"], a: 2 },
    { q: "WAN ka best example kya hai?", o: ["LAN", "MAN", "Internet", "PAN"], a: 2 },
    { q: "Operating System kaun sa hai?", o: ["MS Word", "Excel", "Windows", "Paint"], a: 2 },
    { q: "Kaunsa application software hai?", o: ["Windows", "Linux", "MS Excel", "Android"], a: 2 },
    { q: "Utility software ka example kaunsa hai?", o: ["Paint", "Antivirus", "Word", "Excel"], a: 1 },
    { q: "Mouse ka main kaam kya hai?", o: ["Typing", "Printing", "Point aur click", "Scan"], a: 2 },
    { q: "Monitor kaun sa device hai?", o: ["Input", "Output", "Storage", "Processing"], a: 1 },
    { q: "Printer ka output hota hai:", o: ["Soft copy", "Hard copy", "Audio", "Video"], a: 1 },
    { q: "Scanner ka output hota hai:", o: ["Hard copy", "Soft copy", "Paper", "Sound"], a: 1 },
    { q: "MS Paint ka use kis liye hota hai?", o: ["Calculation", "Drawing", "Typing", "Internet"], a: 1 },
    { q: "Pencil tool ka use kis software me hota hai?", o: ["Excel", "Word", "Paint", "PowerPoint"], a: 2 },
    { q: "Bold option ka use kya karta hai?", o: ["Text ko slant", "Text ko mota", "Text underline", "Text delete"], a: 1 },
    { q: "Ctrl + H shortcut ka use hota hai:", o: ["Save", "Print", "Find & Replace", "Copy"], a: 2 },
    { q: "Mail Merge ka use kis liye hota hai?", o: ["Single letter", "Multiple personalised letters", "Drawing", "Calculation"], a: 1 },
    { q: "MS Excel me cell ka address hota hai:", o: ["Row + Row", "Column + Column", "Column + Row", "File + Sheet"], a: 2 },
    { q: "A1 ka matlab kya hai?", o: ["Column A, Row 1", "Row A, Column 1", "File name", "Formula"], a: 0 },
    { q: "AutoSum ka symbol kya hota hai?", o: ["%", "+", "Σ", "="], a: 2 },
    { q: "Excel ka use hota hai:", o: ["Drawing", "Calculation", "Gaming", "Music"], a: 1 },
    { q: "PowerPoint file ka extension hota hai:", o: [".docx", ".xlsx", ".pptx", ".txt"], a: 2 },
    { q: "Word file ka extension hota hai:", o: [".pptx", ".xlsx", ".docx", ".jpg"], a: 2 },
    { q: "Internet ka use kis liye hota hai?", o: ["Communication", "Shopping", "Study", "All of these"], a: 3 },
    { q: "Email ke To, CC, BCC hote hain:", o: ["Tools", "Features", "Virus", "Hardware"], a: 1 },
    { q: "Cyber security ka matlab kya hai?", o: ["Computer todna", "Data ko secure rakhna", "Internet band karna", "Virus banana"], a: 1 },
    { q: "Strong password me kya hona chahiye?", o: ["Sirf number", "Sirf name", "Letters, numbers, symbols", "Sirf date"], a: 2 },
    { q: "Malware ka example kaunsa hai?", o: ["Word", "Excel", "Virus", "Windows"], a: 2 },
    { q: "Cloud storage ka fayda kya hai?", o: ["Data loss", "Online access", "Virus", "Slow speed"], a: 1 },
    { q: "AI ka full form kya hai?", o: ["Automatic Intelligence", "Artificial Internet", "Artificial Intelligence", "Advanced Internet"], a: 2 },
    { q: "AI ka example kaunsa hai?", o: ["Calculator", "Alexa", "Printer", "Keyboard"], a: 1 },
    { q: "Hardware kya hota hai?", o: ["Programs", "Physical parts", "Virus", "Data"], a: 1 },
    { q: "Software kya hota hai?", o: ["Physical part", "Programs", "Wire", "Device"], a: 1 },
    { q: "Computer bina kis ke kaam nahi karta?", o: ["Hardware", "Software", "Dono", "Internet"], a: 2 },
    { q: "Data backup ka main benefit kya hai?", o: ["Data loss", "Data recovery", "Virus", "Delete"], a: 1 },
    { q: "External hard disk kis ka example hai?", o: ["Input device", "Output device", "Storage device", "Processing device"], a: 2 },
    { q: "Internet banking ka use hota hai:", o: ["Game", "Online payment", "Drawing", "Typing"], a: 1 },
    { q: "MS Word me table ka use hota hai:", o: ["Drawing", "Data organise", "Music", "Virus"], a: 1 },
    { q: "Alignment option hota hai:", o: ["Paint", "Excel & Word", "Hardware", "CPU"], a: 1 },
    { q: "Formatting ka use hota hai:", o: ["Data delete", "Text design", "Virus", "Shutdown"], a: 1 },
    { q: "Spreadsheet ka matlab kya hai?", o: ["Drawing sheet", "Calculation sheet", "Music sheet", "Paint sheet"], a: 1 },
    { q: "Excel me row hoti hai:", o: ["Vertical", "Horizontal", "Diagonal", "Square"], a: 1 },
    { q: "Excel me column hota hai:", o: ["Horizontal", "Vertical", "Circle", "Random"], a: 1 },
    { q: "OS ka kaam kya hai?", o: ["Game banana", "System manage", "Virus banana", "Drawing"], a: 1 },
    { q: "Email bina kis ke kaam nahi karta?", o: ["CPU", "Internet", "Printer", "Scanner"], a: 1 },
    { q: "IT ka full form kya hai?", o: ["Information Tool", "Internet Technology", "Information Technology", "Internal Technology"], a: 2 },
    { q: "Computer network ka use hota hai:", o: ["Data sharing", "Printer sharing", "Internet sharing", "All of these"], a: 3 },
    { q: "Modem ka use hota hai:", o: ["Typing", "Internet connect", "Print", "Scan"], a: 1 },
    { q: "Router ka use hota hai:", o: ["Virus", "Drawing", "Network connect", "Calculation"], a: 2 },
    { q: "Switch ka use hota hai:", o: ["Power off", "LAN connect", "Sound", "Print"], a: 1 },
    { q: "Hub kya karta hai?", o: ["Data process", "Devices connect", "Data store", "Print"], a: 1 },
    { q: "Internet ka father kaun mana jata hai?", o: ["Bill Gates", "Tim Berners-Lee", "Charles Babbage", "Steve Jobs"], a: 1 },
    { q: "Computer ka father kaun hai?", o: ["Newton", "Einstein", "Charles Babbage", "Tesla"], a: 2 },
    { q: "First electronic computer ka naam kya tha?", o: ["UNIVAC", "ENIAC", "ABC", "IBM"], a: 1 },
    { q: "SSD ka full form kya hai?", o: ["Super Storage Device", "Solid State Drive", "System Storage Disk", "Secure Storage Drive"], a: 1 },
    { q: "HDD ka full form kya hai?", o: ["Hard Disk Drive", "High Data Disk", "Hardware Disk Drive", "Hard Device Disk"], a: 0 },
    { q: "Spreadsheet software ka example:", o: ["Word", "Paint", "Excel", "PowerPoint"], a: 2 },
    { q: "Presentation software ka example:", o: ["Excel", "Word", "PowerPoint", "Paint"], a: 2 },
    { q: "Drawing software ka example:", o: ["Excel", "Paint", "Word", "Chrome"], a: 1 },
    { q: "Chrome kya hai?", o: ["Hardware", "Browser", "Virus", "OS"], a: 1 },
    { q: "Browser ka use hota hai:", o: ["Internet chalane", "Typing", "Print", "Scan"], a: 0 },
    { q: "Gmail kya hai?", o: ["Hardware", "Email service", "OS", "Virus"], a: 1 },
    { q: "Soft copy ka example kya hai?", o: ["Printed page", "Monitor output", "Notebook", "Book"], a: 1 },
    { q: "Hard copy ka example kya hai?", o: ["Screen", "PDF", "Print paper", "File"], a: 2 },
    { q: "Computer ka brain kya hota hai?", o: ["RAM", "ROM", "CPU", "Hard Disk"], a: 2 },
    { q: "Computer data ko kis me convert karta hai?", o: ["Virus", "Hardware", "Information", "Noise"], a: 2 }
];

let currentIdx = 0, score = 0, userName = "", timeLeft = 1800, timer;
const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL_HERE'; // Apna URL yahan dalein

function startExam() {
    userName = document.getElementById('student-name').value;
    if(!userName) return alert("Pehle apna naam likhein!");
    document.getElementById('auth-card').style.display = 'none';
    document.getElementById('quiz-card').style.display = 'block';
    renderQ();
    timer = setInterval(() => {
        timeLeft--;
        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;
        document.getElementById('timer').innerText = `Time: ${mins}m ${secs}s`;
        if(timeLeft <= 0) endTest();
    }, 1000);
}

function renderQ() {
    const q = questions[currentIdx];
    document.getElementById('q-progress').innerText = `Q ${currentIdx + 1}/${questions.length}`;
    document.getElementById('question-box').innerHTML = `<h3>${q.q}</h3>` + 
        q.o.map((opt, i) => `<button class="option-btn" onclick="checkAnswer(${i}, this)">${opt}</button>`).join('');
    document.getElementById('next-btn').disabled = true;
}

function checkAnswer(idx, btn) {
    const correct = questions[currentIdx].a;
    const allBtn = document.querySelectorAll('.option-btn');
    allBtn.forEach(b => b.disabled = true);
    if(idx === correct) { 
        btn.style.background = "#059669"; 
        score++; // 100 me se score calculate hoga
    } else { 
        btn.style.background = "#dc2626"; 
        allBtn[correct].style.background = "#059669"; 
    }
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
        body: JSON.stringify({ name: userName, score: score, total: questions.length })
    }).then(() => {
        document.getElementById('save-status').innerText = "Data Google Sheets mein save ho gaya hai!";
    }).catch(() => {
        document.getElementById('save-status').innerText = "Error: Data save nahi ho paya.";
    });
}
