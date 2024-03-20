let questions = [
    {
        "question": "Wie heißt das berühmte Tyrannosaurus Rex - Skelett aus dem Naturkundemuseum in Berlin?",
        "answer_1": "Rexi",
        "answer_2": "Tristan",
        "answer_3": "Horatio",
        "answer_4": "Jaden",
        "right_answer": "Tristan",
        "number_of_question": 1,

    },
    {
        "question": "Welcher Dinosaurier war der Schnellste?",
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
        "question": "Wie lang kann aus ausgewachsener Baryonyx sein?",
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

let audioSuccess = new Audio('sounds/success.mp3');
let audioFail = new Audio('sounds/fail.mp3');



function renderStartScreen() {
    let innerCard = document.getElementById("innerCard");
    innerCard.innerHTML = startScreenTemplate();
}

function startQuiz() {
    localStorage.clear();//alle Werte aus dem LocStor werden gelöscht
    setVariable("collectedPoints", 0)// setzt in den loc stor als bisher richtige antworten den wert 0, der später bei jedem "richtig" um 1 erhöht wird
    runQuiz(1);
}

function runQuiz(questionNumber) {
    setDisableCheck()//setze variablenwert in locstor auf initial true für anklickbare divs bei antwortoptionen
    renderQuestion(questionNumber);

}

function setDisableCheck() {
    let disableCheck = true;
    setVariable("disablekey", disableCheck);// speichert true in loc stor
}


function resetDisableCheck() {
    let disableCheck = false;
    setVariable("disablekey", disableCheck);// speichert false in loc stor und verhindetr anklickbare antworten nach 1. auswahl
}

function renderQuestion(questionNumber) {
    setBackgroundWhite();
    let innerCard = document.getElementById("innerCard")

    for (let i = 0; i < questions.length; i++) {
        if (questionNumber === questions[i]["number_of_question"]) {
            innerCard.innerHTML = questionTemplate(i, questionNumber);
            setProgress(questionNumber);//aktualisiert den Forschrittsbutton
            setVariable("numberKey", questionNumber);// speichert den Wert von questionNumber im localStorag

        }
    }
}

function setProgress(questionNumber) {
    let quotient = questionNumber / questions.length;
    percent = quotient * 100 - 10;  //Prozent ausrechnen
    document.getElementById("progressStep").innerHTML = /*html*/`${percent}%`; // fügt die sichtbare prozentzahl in den balken ein
    document.getElementById("progressStep").style.width = /*html*/`${percent}%`; // ändert je anch fortschritt die breite des balkens
}

function setBackgroundWhite() {
    document.getElementById("innerCard").classList.remove('background');
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
    endScore = getVariable("collectedPoints")//holt sich die gezählöten punkte aus dem locstor
    innerCard.innerHTML = endScreenTemplate(endScore); // holt sich die
}

function checkSelection(N) {
    let disableCheck = getVariable("disablekey")// holt sich den True aus dem lc stor

    if (disableCheck === true) {
        let currentQuestion = getVariable("numberKey") // der aktuelle locstor Wert zeigt in welcher Frage wir sind, reduzieren wir ihn unten um 1 erhlaten wie die x-te stelle des arrays quest.

        answerBlockID = N;
        answer = "answer_";
        answerNumber = answer + N; // nimmt in zeile 161 die Werte answer_1 , answer_2,  answer_3 und answer_4 an, ne nachdem was N durch den buttonclick gerade hat

        if (questions[currentQuestion - 1][answerNumber] === questions[currentQuestion - 1]["right_answer"]) {
            selcetionRight(answerBlockID);
            raisePoints();
            audioSuccess.play();
        } else {
            selectionWrong(answerBlockID);
            showRightAnswer(currentQuestion);
            audioFail.play();
        }
        setNextButtonEnabled();
        resetDisableCheck();
    }
}

function setNextButtonEnabled() {
    document.getElementById("next").disabled = false;
}


function selcetionRight(answerBlockID) {
    rightAnswer = document.getElementById(answerBlockID);
    rightAnswer.classList.add('answerblockGreen');//ändere hintergrund zu grün
}

function raisePoints() {
    currentPoints = getVariable("collectedPoints");//packt die aktuelle Zahl anrichtigen antorten aus dem locstor in die var curretpoints, beginnt mit 0
    newPoints = currentPoints + 1;
    setVariable("collectedPoints", newPoints)// loc stor wird mit um 1 erhöhten wert aktualisiert
    //zahl im loc stor speichern und dann auf endscreen zeigen
}


function selectionWrong(answerBlockID) {
    selectedQuestion = document.getElementById(answerBlockID);
    selectedQuestion.classList.add('answerblockRed');//ändere hintergrund zu rot

}

function showRightAnswer(currentQuestion) {
    for (let i = 1; i < 5; i++) {
        answerKey = "answer_";
        checkedAnswer = answerKey + i //answer_1 , answer_2,  answer_3 und answer_4

        if (questions[currentQuestion - 1][checkedAnswer] === questions[currentQuestion - 1]["right_answer"]) {
            selcetionRight(i)
        }
    } //durch die fragemöglichkeiten iterieren und dort wo right_answer = questions--currentquestion-1 --answer_x , dann dort grün markieren 
}

function setVariable(key, variable) {
    localStorage.setItem(key, JSON.stringify(variable));
}

function getVariable(key) {
    return JSON.parse(localStorage.getItem(key));
}


