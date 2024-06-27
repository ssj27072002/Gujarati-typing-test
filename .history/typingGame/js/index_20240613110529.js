const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');
const show_time = document.querySelector('#show-time'); 
const paragraphSelector = document.getElementById('paragraphSelector');

let startTime, endTime, totalTimeTaken, sentence_to_write;

const paragraphs = {
    1: `પ્રેમાનંદ અથવા પ્રેમાનંદ ભટ્ટ મધ્યકાલીન ગુજરાતી કવિ અને માણભટ્ટ આખ્યાનકાર હતા, જેઓ તેમની અખૈયા રચનાઓ માટે જાણીતા છે. પ્રેમાનંદ માણભટ્ટની પરંપરાનાં કવિ મનાય છે. માણ ઉપર હાથથી તાલ આપીને કથાપ્રસંગોનું પઠન અને ગાયન કરવામાં કુશળ પ્રેમાનંદે સાભિનય રજુઆત દ્વારા આખ્યાન લોકપ્રિય કર્યાં હતા. ગુજરાતી સાહિત્યમાં આખ્યાનોની શરૂઆત પ્રેમાનંદ દ્વારા થયેલી હોવાનું મનાય છે. ગુજરાતી ભાષાના સર્વોત્તમ આખ્યાન કવિ તરીકે પ્રખ્યાત થયેલા પ્રેમાનંદે લોકસમુદાયમાં આનંદ સાથે વિચારશક્તિ આપતી અનેક આખ્યાન રચનાઓ ગુંજાતી કરી હતી. તેમનાં જમાનામાં તેઓ 'રાસકવિ' તરીકે ઓળખાતાં હતાં. નરસિંહ મહેતા અને સુદામા જેવા ભક્તોનાં જીવનપ્રસંગો તથા પુરાણોમાંથી કથાવસ્તુ લઇ તેમણે આખ્યાનો રચેલાં. આખ્યાન તો કથનની કળા છે. 
પ્રેમાનંદ કથનકળામાં પ્રવિણ હોવા સાથે વર્ણનો, પાત્રાલેખન, રસનિરુપણ અને વાતાવરણચિત્રણમાં પણ કુશળ હતાં. એમનાં આખ્યાનોને ઉત્તમ બનાવવામાં એમની ભાષાશક્તિ અને રસનિરુપણ શક્તિનો મહત્ત્વનો ફાળો હતો. તેમનાં સમયનાં મુઘલરાજા અને ગુજરાત પ્રદેશનાં શાસક ઔરંગઝેબ તેમને મહાકવિ પ્રેમાનંદ કહીને બોલાવતા. પ્રેમાનંદના જીવન વિશે આપણે ત્યાં લગભગ ત્રણ સદીથી ચર્ચા ચાલે છે. પ્રેમાનંદનાં જીવન વિશે વિશ્વાસપાત્ર હકીકત બહુ ઓછી જોવા મળે છે. એમની ઘણી કૃતિઓમાં રચનાવર્ષ આપ્યા છે તેવી કૃતિઓમાં સૌપ્રથમ કૃતિ ચંદ્રહાસ આખ્યાન આશરે ઈ.સ ૧૬૬૧માં અને ઓખા હરણ સંભવત ઈ.સ. ૧૬૬૭માં રચાયેલ હોવાનું મનાય છે. 
પ્રેમાનંદ વડોદરાના વતની હતા. તેઓ વડોદરાનાં વાડી મહોલ્લામાં રહેતાં હતાં. તેઓ ચોવિસા મેવાડા બ્રાહ્મણ હતાં. તેમનાં પિતાનું નામ કૃષ્ણરામ હતુ. તેમની પત્નીનું નામ હરકોર ભટ્ટ હતું. તેમનો એક પુત્ર હતો જેનું નામ વલ્લભભટ્ટ હતું. આખ્યાનો કરવાં અને માણભટ્ટ એટલે કે કથાકારનો એમનો વ્યવસાય હતો. વ્યવસાય અર્થે એમણે થોડાંક વર્ષો દક્ષિણ ગુજરાતમાં સુરત અને ત્યાંથી ખાનદેશમાં નંદનબાર અને બુરહાનપુરામાં વિતાવેલાં.
`,
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

// paragraphSelector.addEventListener('change', () => {
//     const selectedValue = paragraphSelector.value;
//     if (selectedValue) {
//         showSentence.textContent = paragraphs[selectedValue];
//         textarea.disabled = false;
//     } else {
//         showSentence.textContent = '';
//         textarea.disabled = true;
//     }
// });

textarea.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Disable copy
textarea.addEventListener('copy', (e) => {
    e.preventDefault();
});

// Disable cut
textarea.addEventListener('cut', (e) => {
    e.preventDefault();
});

// Disable paste
textarea.addEventListener('paste', (e) => {
    e.preventDefault();
});