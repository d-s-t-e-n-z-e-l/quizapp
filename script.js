

let questions = [
    {
        "question": "Wie heißt das berühmte Tyrannosaurus Rex - Skelett aus dem Naturkundemuseum in Berlin?",
        "answer_1": "Rexi",
        "answer_2": "Tristan",
        "answer_3": "Horatio",
        "answer_4": "Jaden",
        "right_answer": "Rexi",
        "number_of_question": 1,

    },
    {
        "question": "Welcher Dinosaurier war der schnellste?",
        "answer_1": "Velociraptor",
        "answer_2": "Tyrannosaurus Rex",
        "answer_3": "Gallimimus",
        "answer_4": "Struthiomimus",
        "right_answer": "Gallimimus",
        "number_of_question": 2,
    },
    {
        "question": "Was bedeuted Ankylosaurus auf Deutsch?",
        "answer_1": "Versteifte Echse mit dickem Bauch",
        "answer_2": "Kröte mit Ankerschwanz",
        "answer_3": "Echse ohne Flügel",
        "answer_4": "Breiter Riese",
        "right_answer": "Versteifte Echse mit dickem Bauch",
        "number_of_question": 3,
    },
    {
        "question": "Wie heißt der Hybrid aus Jurassic Worl 1?",
        "answer_1": "Andromedar Rex",
        "answer_2": "Indo Raptor",
        "answer_3": "Velociraptor",
        "answer_4": "Indominus Rex",
        "right_answer": "Indominus Rex",
        "number_of_question": 4,
    },
    {
        "question": "Wie lang kein aus ausgewachsender Baryonyx sein?",
        "answer_1": "4m",
        "answer_2": "20m",
        "answer_3": "11m",
        "answer_4": "8m",
        "right_answer": "11m",
        "number_of_question": 5,
    },
    {
        "question": "Wo wurde Tristan aus Frage 1 ausgegraben?",
        "answer_1": "Montana",
        "answer_2": "Wyoming",
        "answer_3": "Halbinsel Kola",
        "answer_4": "Griechenland",
        "right_answer": "Montana",
        "number_of_question": 6,
    },
    {
        "question": "In welcher erdgeschichtlichen Periode haben die meisten Sauropoden gelebt?",
        "answer_1": "Trias",
        "answer_2": "Ordivizium",
        "answer_3": "Jura",
        "answer_4": "Kreide",
        "right_answer": "Jura",
        "number_of_question": 7,
    },
    {
        "question": "Welche Art Dinosaurier ist Ducky aus Disneys In einem Lanf vor unserer Zeit?",
        "answer_1": "Marasaurus",
        "answer_2": "Iguanodon",
        "answer_3": "Stegosaurus",
        "answer_4": "Parasaurolophus",
        "right_answer": "Parasaurolophus",
        "number_of_question": 8,
    },
    {
        "question": "Wie viele Jahre beherrschten die Dinosoaurier alle Kontinente?",
        "answer_1": "140 Millionen Jahre",
        "answer_2": "300 Millionen Jahre",
        "answer_3": "90 Millionen Jahre",
        "answer_4": "10 Millionen Jahre",
        "right_answer": "140 Millionen Jahre",
        "number_of_question": 9,
    },
    {
        "question": "Welches Paar lebte erdzeitgeschichtlich am nächsten beieinandner?",
        "answer_1": "T-Rex und Stegosaurus",
        "answer_2": "T-Rex und Mensch",
        "answer_3": "Mensch und Stegosaurus",
        "answer_4": "Stegosaurus und Endoceratus",
        "right_answer": "T-Rex und Mensch",
        "number_of_question": 10,
    },
]


function renderStartScreen() {
    let innerCard = document.getElementById("innerCard");
    innerCard.innerHTML = startScreenTemplate();
    console.log("renderstartscreen")
}

function startQuiz() {
    localStorage.clear();//alle Werte aus dem LocStor werden gelöscht
    runQuiz(1);
    console.log("start")
}

function runQuiz(questionNumber) {
    renderQuestion(questionNumber);
    console.log("runquiz")
}

function renderQuestion(questionNumber) {
    let innerCard = document.getElementById("innerCard")

    for (let i = 0; i < questions.length; i++) {
        if (questionNumber === questions[i]["number_of_question"]) {
            innerCard.innerHTML = questionTemplate(i);
            setVariable("numberKey", questionNumber);// speichert den Wert von questionNumber im localStorag
        }
    }
    console.log("render questions")

}

function nextQuestion() {
    currentNumber = getVariable("numberKey")//aktuelle Fragenummer holen
    nextNumber = currentNumber + 1;//Fragenummer um 1 erhöhen
    if (nextNumber === 11) {
        endGame();
    } else {
        runQuiz(nextNumber)//runquiz mit der neuen Zahl ablaufen lassen
    }

}

function exitGame() {
    localStorage.clear();//alle Werte aus dem LocStor werden gelöscht
    renderStartScreen();
}

function endGame() {
    renderEndscreen();
}

function renderEndscreen() {
    let innerCard = document.getElementById("innerCard");
    innerCard.innerHTML = endScreenTemplate();
}

function checkSelection(N) {
    let currentQuestion = getVariable("numberKey") // der aktuelle locstor Wert zeigt in welcher Frage wir sind, reduzieren wir ihn unten um 1 erhlaten wie die x-te stelle des arrays quest.

    answerBlockID = N;
    answer = "answer_";
    answerNumber = answer + N; // nimmt in zeile 161 die Werte answer_1 , answer_2,  answer_3 und answer_4 an, ne nachdem was N durch den buttonclick gerade hat

    if (questions[currentQuestion - 1][answerNumber] === questions[currentQuestion - 1]["right_answer"]) {
        selcetionRight(answerBlockID);        
    } else {
        selectionWrong(answerBlockID);
    }
}

function selcetionRight(){
    selectedQuestion = document.getElementById(answerBlockID);
    selectedQuestion.classList.add('answerblockGreen');//ändere hintergrund zu grün
}


function selectionWrong(){
    selectedQuestion = document.getElementById(answerBlockID)
    selectedQuestion.classList.add('answerblockRed')//ändere hintergrund zu rot
    //markiere die richtige mit grün
}

function setVariable(key, variable) {
    localStorage.setItem(key, JSON.stringify(variable));
}

function getVariable(key) {
    return JSON.parse(localStorage.getItem(key));
}


