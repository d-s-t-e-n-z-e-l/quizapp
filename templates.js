function startScreenTemplate() {
    return /*html*/`
        <h5 class="card-title fw-bold text-center">Welcome to <br>The Awesome Dinosaur Quiz.</h5>
                    <p class="card-text text-center">Ready for the Challenge?</p>
                    <div class="startbuttondiv btn d-flex">
                        <button  onclick="startQuiz()" type="button" class="startbutton">START NOW </button>
                        <img class="chevron-right" src="img/chevron.png" alt="chevron-right">
                    </div>
    `
}

function questionTemplate(i, questionNumber) {
    return /*html*/`
       <div> 
            <section class="question-card">
                    <h5 class="question fw-bold text-center w-75">${questions[i]['question']}</h5>
                    <figure id="1" onclick="checkSelection(1)" class="answerblock hoverAnswer">
                        <div class="numberblock">1</div>
                        <p class="answeroption">${questions[i]['answer_1']}</p>
                    </figure>
                    <figure id="2" onclick="checkSelection(2)" class="answerblock hoverAnswer">
                        <div class="numberblock">2</div>
                        <p class="answeroption">${questions[i]['answer_2']}</p>
                    </figure>
                    <figure id="3" onclick="checkSelection(3)" class="answerblock hoverAnswer">
                        <div class="numberblock">3</div>
                        <p class="answeroption">${questions[i]['answer_3']}</p>
                    </figure>
                    <figure id="4" onclick="checkSelection(4)" class="answerblock hoverAnswer">
                        <div class="numberblock">4</div>
                        <p class="answeroption">${questions[i]['answer_4']}</p>
                    </figure>
            </section>
            <figure class="buttonFigure">
                <button onclick="exitGame()" class="playButtons btn">Exit Game</button>
                <span>${questionNumber}/10</span>
                <button onclick="nextQuestion()" class="playButtons btn">Next</button>
            </figure>
            <figure class="progress" role="progressbar">
                <div id="progressStep" class="progress-bar" style="width: 0%"></div>
            </figure
>
         </div>
    `
}

function endScreenTemplate(endScore) {
    return /*html*/`
        <section class="endscreen col-md-8 flex-grow-1">
                    <img src="img/tropy.png" alt="tropy" class="endtropy">
                    <img class="endbrain" src="img/brain result.png" alt="brain green border">
                    <p class="text-center fw-bold ">COMPLETE <br> DINOSAUR QUIZ</p>
                    <figure class="scorefigure d-flex flex-row gap-2">
                        <p class="score">Your Score
                        </p>
                        <div class="fw-bold">
                            ${endScore}/10
                        </div>
                    </figure>
                    <button  class="endscreenbutton btn">SHARE</button>
                    <button onclick="startQuiz()" class="endscreenbutton btn">REPLAY</button>
                </section>
    `
}