function questionTemplate(i) {
    return /*html*/`
       <div> 
            <section class="question-card">
                    <h5 class="question fw-bold text-center w-75">${questions[i]['question']}</h5>
                    <figure class="answerblock hoverAnswer">
                        <div class="numberblock">1</div>
                        <p class="answeroption">${questions[i]['answer_1']}</p>
                    </figure>
                    <figure class="answerblock hoverAnswer">
                        <div class="numberblock">2</div>
                        <p class="answeroption">${questions[i]['answer_2']}</p>
                    </figure>
                    <figure class="answerblock hoverAnswer">
                        <div class="numberblock">3</div>
                        <p class="answeroption">${questions[i]['answer_3']}</p>
                    </figure>
                    <figure class="answerblock hoverAnswer">
                        <div class="numberblock">4</div>
                        <p class="answeroption">${questions[i]['answer_4']}</p>
                    </figure>
            </section>
            <figure class="buttonFigure"><button class="playButtons btn">Exit Game</button>
                    <button onclick="nextQuestion()" class="playButtons btn">Next</button>
            </figure>
         </div>
    `
}

function endScreenTemplate() {
    return /*html*/`
        <section class="endscreen col-md-8 flex-grow-1">
                    <img src="img/tropy.png" alt="tropy" class="endtropy">
                    <img class="endbrain" src="img/brain result.png" alt="brain green border">
                    <p class="text-center fw-bold ">COMPLETE <br> DINOSAUR QUIZ</p>
                    <figure class="scorefigure d-flex flex-row gap-2">
                        <p class="score">Your Score
                        </p>
                        <div class="fw-bold">
                            variable/10
                        </div>
                    </figure>
                    <button class="endscreenbutton btn">SHARE</button>
                    <button class="endscreenbutton btn">REPLAY</button>
                </section>
    `
}