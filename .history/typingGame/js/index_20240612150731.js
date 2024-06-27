
const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');
const show_time = document.querySelector('#show-time'); 
const paragraphSelector = document.getElementById('paragraphSelector');

let startTime, endTime, totalTimeTaken, sentence_to_write;

const paragraphs = {
    1: 'ગાંધીનગર ગુજરાતની રાજધાની છે. આ શહેરમાં મોટા પ્રમાણમાં સરકારી કાર્યાલયો અને ઔદ્યોગિક ક્ષેત્ર છે. અમદાવાદ, જે ગુજરાતનું સૌથી મોટું શહેર છે, તેનું એક મહત્વનું ઐતિહાસિક અને આર્થિક કેન્દ્ર છે. અમદાવાદની સુંદર નદી સાબરમતીના કાંઠે બનેલું સાબરમતી આશ્રમ મહાત્મા ગાંધીજીની યાદ અપાવે છે.',
    2: 'સૂરત એક મહત્વપૂર્ણ વ્યાપારી શહેર છે, જે પોતાના હીરાના વેપાર અને કાપડ ઉદ્યોગ માટે જાણીતું છે. આ શહેરમાં ઘણા સુંદર બાગો અને મલ્ટીપ્લેક્સ સિનેમા છે.',
    3: 'વડોદરા શહેર એ પોતાના સંસ્કૃતિક અને શૈક્ષણિક કેન્દ્ર માટે જાણીતું છે. આ શહેરમાં ઘણા મ્યુઝિયમ્સ, પાર્ક્સ અને શૈક્ષણિક સંસ્થાઓ છે.'
};

const calculateTypingSpeed = (time_taken) => {
    let totalWords = typing_ground.value.trim();
    let actualWordsArray = totalWords === '' ? [] : totalWords.split(/\s+/);
    let correctWords = errorChecking(actualWordsArray);

    if (correctWords !== 0) {
        let typing_speed = (correctWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minute & you wrote ${correctWords} correct words out of ${sentence_to_write.length} words & time taken ${time_taken} sec`;
    } else {
        score.innerHTML = `Your typing speed is 0 words per minute & time taken ${time_taken} sec`;
    }
};

const endTypingTest = () => {
    btn.innerText = "Start";
    clearInterval(intervalID);
    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime - startTime) / 1000;

    calculateTypingSpeed(totalTimeTaken);

    show_sentence.innerHTML = "";
    typing_ground.value = "";
};

let intervalID, elapsedTime = 0;

const showTimer = () => {
    if (btn.innerText === "Done") {
        intervalID = setInterval(() => {
            elapsedTime++;
            show_time.innerHTML = elapsedTime;
        }, 1000);
    } else if (btn.innerText === "Start") {
        elapsedTime = 0;
        clearInterval(intervalID);
        show_time.innerHTML = "";
    }
};

const errorChecking = (userWords) => {
    let num = 0;
    sentence_to_write = show_sentence.innerHTML.trim().split(/\s+/);

    for (let i = 0; i < userWords.length; i++) {
        if (userWords[i] === sentence_to_write[i]) {
            num++;
        }
    }
    return num;
};

const startTyping = () => {
    let selectedValue = paragraphSelector.value;
    if (selectedValue) {
        show_sentence.innerHTML = paragraphs[selectedValue];
        let date = new Date();
        startTime = date.getTime();
        btn.innerText = "Done";
        showTimer();
    } else {
        alert("Please select a paragraph first!");
    }
};

btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;
        case "done":
            typing_ground.setAttribute('disabled', 'true');
            endTypingTest();
            break;
    }
});

paragraphSelector.addEventListener("change", function() {
    show_sentence.innerHTML = "";
    typing_ground.value = "";
    typing_ground.setAttribute('disabled', 'true');
    btn.innerText = "Start";
    elapsedTime = 0;
    clearInterval(intervalID);
    show_time.innerHTML = "0";
    score.innerHTML = "";
});
