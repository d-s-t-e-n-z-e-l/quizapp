

let questions = [
    {
        "question": "Wie heißt das berühmte Tyrannosaurus Rex - Skelett aus dem Naturkundemuseum in Berlin?",
        "answer_1": "Rexi",
        "answer_2": "Tristan",
        "answer_3": "Horatio",
        "answer_4": "Jaden",
        "lright_answer": "2",
        "number_of_question": 1,

    },
    {
        "question": "Welcher Dinosaurier war der schnellste?",
        "answer_1": "Velociraptor",
        "answer_2": "Tyrannosaurus Rex",
        "answer_3": "Gallimimus",
        "answer_4": "Struthiomimus",
        "lright_answer": "4",
        "number_of_question": 2,
    },
    {
        "question": "Was bedeuted Ankylosaurus auf Deutsch?",
        "answer_1": "Versteifte Echse mit dickem Bauch",
        "answer_2": "Kröte mit Ankerschwanz",
        "answer_3": "Echse ohne Flügel",
        "answer_4": "Breiter Riese",
        "lright_answer": "1",
        "number_of_question": 3,
    },
    {
        "question": "Wie heißt der Hybrid aus Jurassic Worl 1?",
        "answer_1": "Andromedar Rex",
        "answer_2": "Indo Raptor",
        "answer_3": "Velociraptor",
        "answer_4": "Indominus Rex",
        "lright_answer": "4",
        "number_of_question": 4,
    },
    {
        "question": "Wie lang kein aus ausgewachsender Baryonyx sein?",
        "answer_1": "4m",
        "answer_2": "20m",
        "answer_3": "11m",
        "answer_4": "8m",
        "lright_answer": "3",
        "number_of_question": 5,
    },
    {
        "question": "Wo wurde Tristan aus Frage 1 ausgegraben?",
        "answer_1": "Montana",
        "answer_2": "Wyoming",
        "answer_3": "Halbinsel Koma",
        "answer_4": "Griechenland",
        "lright_answer": "1",
        "number_of_question": 6,
    },
    {
        "question": "In welcher erdgeschichtlichen Periode haben die meisten Sauropoden gelebt?",
        "answer_1": "Trias",
        "answer_2": "Ordivizium",
        "answer_3": "Jura",
        "answer_4": "Kreide",
        "lright_answer": "3",
        "number_of_question": 7,
    },
    {
        "question": "Welche Art Dinosaurier ist Ducky aus Disneys In einem Lanf vor unserer Zeit?",
        "answer_1": "Marasaurus",
        "answer_2": "Iguanodon",
        "answer_3": "Stegosaurus",
        "answer_4": "Parasaurolophus",
        "lright_answer": "4",
        "number_of_question": 8,
    },
    {
        "question": "Wie viele Jahre beherrschten die Dinosoaurier alle Kontinente?",
        "answer_1": "140 Millionen Jahre",
        "answer_2": "300 Millionen Jahre",
        "answer_3": "90 Millionen Jahre",
        "answer_4": "10 Millionen Jahre",
        "lright_answer": "1",
        "number_of_question": 9,
    },
    {
        "question": "Welches Paar lebte erdzeitgeschichtlich am nächsten beieinandner?",
        "answer_1": "T-Rex und Stegosaurus",
        "answer_2": "TRex und Mensch",
        "answer_3": "Mensch und Stegosaurus",
        "answer_4": "Stegosaurus und Endoceratus",
        "lright_answer": "1",
        "number_of_question": 10,
    },
]

function startQuiz() {
    runQuiz(1);
}

function runQuiz(questionNumber) {
    renderQuestion(questionNumber);
}

function renderQuestion(questionNumber) {
    let innerCard = document.getElementById("innerCard")

    for (let i = 0; i < questions.length; i++) {
        if (questionNumber === questions[i]["number_of_question"]) {
            innerCard.innerHTML = questionTemplate(i);
        }
        
    }

    
}




