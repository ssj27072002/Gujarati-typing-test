// // //  (actualWords / totalTimeTaken) * 60;

// // const typing_ground = document.querySelector('#textarea');
// // const btn = document.querySelector('#btn');
// // const score = document.querySelector('#score');
// // const show_sentence = document.querySelector('#showSentence');
// // const show_time = document.querySelector('#show-time'); 

// // let startTime, endTime, totalTimeTaken, sentence_to_write;


// // const sentences = [' વેબસાઇટ એ એક  સદકએ જારીઆ છે. અમે આશા રાખીએ છીએ કે ગુજરાતી કુરઆન દરેકને વાંચવું, અધ્યયન (અભ્યાસ) કરવું અને શીખવું સરળ બનાવ્યું.',
// //     ' વેબસાઇટ એ એક  સદકએ જારીઆ છે. અમે આશા રાખીએ છીએ કે ગુજરાતી કુરઆન દરેકને વાંચવું, અધ્યયન (અભ્યાસ) કરવું અને શીખવું સરળ બનાવ્યું.',
// //     ' વેબસાઇટ એ એક  સદકએ જારીઆ છે. અમે આશા રાખીએ છીએ કે ગુજરાતી કુરઆન દરેકને વાંચવું, અધ્યયન (અભ્યાસ) કરવું અને શીખવું સરળ બનાવ્યું.']

// // // step 5

// // const calculateTypingSpeed = (time_taken) => {
// //     let  totalWords = typing_ground.value.trim();
// //     let actualWords = totalWords === '' ? 0 : totalWords.split(" ");

// //     actualWords=errorChecking(actualWords);

// //     if(actualWords !== 0) {
// //         let typing_speed  =  (actualWords / time_taken) * 60;
// //         typing_speed = Math.round(typing_speed);
// //         score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} correct words out of ${sentence_to_write.length} words & time taken ${time_taken} sec`;
// //     }else{
// //         score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
// //     }
// // }

// // // step 4
// // const endTypingTest = () => {
// //     btn.innerText = "Start";
// //     showTimer();
// //     let date = new Date();
// //     endTime = date.getTime();

// //     totalTimeTaken = (endTime -startTime) / 1000;

// //     // console.log(totalTimeTaken);

// //     calculateTypingSpeed(totalTimeTaken);

// //     show_sentence.innerHTML = "";
// //     typing_ground.value = "";
// // }

// // //step 6
// // let intervalID, elapsedTime=0;

// // const showTimer=() => {
// //     if(btn.innerText ==="Done"){
// //         intervalID = setInterval(() =>{
// //             elapsedTime++;
// //             show_time.innerHTML = elapsedTime;
// //         },1000)

// //     }else if(btn.innerText ==="Start"){
// //         elapsedTime=0;
// //         clearInterval(intervalID);
// //         show_time.innerHTML ="";
// //     }
// // }

// // //step 7 
// // const errorChecking=() => {
// //       let num=0;
// //       sentence_to_write = show_sentence.innerHTML;
// //       sentence_to_write = sentence_to_write.trim().split(" ")

// //       for(let i=0; i<words.length;i++){
// //         if(words[i]=== sentence_to_write[i]){
// //             num++
// //         }
// //       }
// //     return num;
// // }



// // // step 3
// // const startTyping = () => {
// //     let randomNumber = Math.floor(Math.random() * sentences.length);
// //     // console.log(randomNumber);
// //     show_sentence.innerHTML = sentences[randomNumber];

// //     let date = new Date();
// //     startTime = date.getTime();

// //     btn.innerText = "Done";

// //     showTimer();
// // }




// // // step 2
// // btn.addEventListener('click', () => {
// //     switch (btn.innerText.toLowerCase()) {
// //         case "start":
// //             typing_ground.removeAttribute('disabled');
// //             startTyping();
// //             break;

// //         case "done":
// //             typing_ground.setAttribute('disabled' , 'true');
// //             endTypingTest();
// //             break;
// //     }
// // })
// const typing_ground = document.querySelector('#textarea');
// const btn = document.querySelector('#btn');
// const score = document.querySelector('#score');
// const show_sentence = document.querySelector('#showSentence');
// const show_time = document.querySelector('#show-time'); 

// let startTime, endTime, totalTimeTaken, sentence_to_write;

// const sentences = [
//     ' વેબસાઇટ એ એક  સદકએ જારીઆ છે. અમે આશા રાખીએ છીએ કે ગુજરાતી કુરઆન દરેકને વાંચવું, અધ્યયન (અભ્યાસ) કરવું અને શીખવું સરળ બનાવ્યું.',
//     ' વેબસાઇટ એ એક  સદકએ જારીઆ છે. અમે આશા રાખીએ છીએ કે ગુજરાતી કુરઆન દરેકને વાંચવું, અધ્યયન (અભ્યાસ) કરવું અને શીખવું સરળ બનાવ્યું.',
//     ' વેબસાઇટ એ એક  સદકએ જારીઆ છે. અમે આશા રાખીએ છીએ કે ગુજરાતી કુરઆન દરેકને વાંચવું, અધ્યયન (અભ્યાસ) કરવું અને શીખવું સરળ બનાવ્યું.'
// ];

// const calculateTypingSpeed = (time_taken) => {
//     let totalWords = typing_ground.value.trim();
//     let actualWordsArray = totalWords === '' ? 0 : totalWords.split(" ");
//     let correctWords = errorChecking(actualWordsArray);

//     if (correctWords !== 0) {
//         let typing_speed = (correctWords / time_taken) * 60;
//         typing_speed = Math.round(typing_speed);
//         score.innerHTML = `Your typing speed is ${typing_speed} words per minute & you wrote ${correctWords} correct words out of ${sentence_to_write.length} words & time taken ${time_taken} sec`;
//     } else {
//         score.innerHTML = `Your typing speed is 0 words per minute & time taken ${time_taken} sec`;
//     }
// };

// const endTypingTest = () => {
//     btn.innerText = "Start";
//     showTimer();
//     let date = new Date();
//     endTime = date.getTime();

//     totalTimeTaken = (endTime - startTime) / 1000;

//     calculateTypingSpeed(totalTimeTaken);

//     show_sentence.innerHTML = "";
//     typing_ground.value = "";
// };

// let intervalID, elapsedTime = 0;

// const showTimer = () => {
//     if (btn.innerText === "Done") {
//         intervalID = setInterval(() => {
//             elapsedTime++;
//             show_time.innerHTML = elapsedTime;
//         }, 1000);
//     } else if (btn.innerText === "Start") {
//         elapsedTime = 0;
//         clearInterval(intervalID);
//         show_time.innerHTML = "";
//     }
// };

// const errorChecking = (userWords) => {
//     let num = 0;
//     sentence_to_write = show_sentence.innerHTML.trim().split(" ");

//     for (let i = 0; i < userWords.length; i++) {
//         if (userWords[i] === sentence_to_write[i]) {
//             num++;
//         }
//     }
//     return num;
// };

// const startTyping = () => {
//     let randomNumber = Math.floor(Math.random() * sentences.length);
//     show_sentence.innerHTML = sentences[randomNumber];

//     let date = new Date();
//     startTime = date.getTime();

//     btn.innerText = "Done";

//     showTimer();
// };

// btn.addEventListener('click', () => {
//     switch (btn.innerText.toLowerCase()) {
//         case "start":
//             typing_ground.removeAttribute('disabled');
//             startTyping();
//             break;
//         case "done":
//             typing_ground.setAttribute('disabled', 'true');
//             endTypingTest();
//             break;
//     }
// });

// const typing_ground = document.querySelector('#textarea');
// const btn = document.querySelector('#btn');
// const score = document.querySelector('#score');
// const show_sentence = document.querySelector('#showSentence');
// const show_time = document.querySelector('#show-time'); 

// let startTime, endTime, totalTimeTaken, sentence_to_write;

// const sentences = [
//     'ગાંધીનગર ગુજરાતની રાજધાની છે. આ શહેરમાં મોટા પ્રમાણમાં સરકારી કાર્યાલયો અને ઔદ્યોગિક ક્ષેત્ર છે. અમદાવાદ, જે ગુજરાતનું સૌથી મોટું શહેર છે, તેનું એક મહત્વનું ઐતિહાસિક અને આર્થિક કેન્દ્ર છે. અમદાવાદની સુંદર નદી સાબરમતીના કાંઠે બનેલું સાબરમતી આશ્રમ મહાત્મા ગાંધીજીની યાદ અપાવે છે.',
// ];

// const calculateTypingSpeed = (time_taken) => {
//     let totalWords = typing_ground.value.trim();
//     let actualWordsArray = totalWords === '' ? [] : totalWords.split(/\s+/);
//     let correctWords = errorChecking(actualWordsArray);

//     if (correctWords !== 0) {
//         let typing_speed = (correctWords / time_taken) * 60;
//         typing_speed = Math.round(typing_speed);
//         score.innerHTML = `Your typing speed is ${typing_speed} words per minute & you wrote ${correctWords} correct words out of ${sentence_to_write.length} words & time taken ${time_taken} sec`;
//     } else {
//         score.innerHTML = `Your typing speed is 0 words per minute & time taken ${time_taken} sec`;
//     }
// };

// const endTypingTest = () => {
//     btn.innerText = "Start";
//     clearInterval(intervalID);
//     let date = new Date();
//     endTime = date.getTime();

//     totalTimeTaken = (endTime - startTime) / 1000;

//     calculateTypingSpeed(totalTimeTaken);

//     show_sentence.innerHTML = "";
//     typing_ground.value = "";
// };

// let intervalID, elapsedTime = 0;

// const showTimer = () => {
//     if (btn.innerText === "Done") {
//         intervalID = setInterval(() => {
//             elapsedTime++;
//             show_time.innerHTML = elapsedTime;
//         }, 1000);
//     } else if (btn.innerText === "Start") {
//         elapsedTime = 0;
//         clearInterval(intervalID);
//         show_time.innerHTML = "";
//     }
// };

// const errorChecking = (userWords) => {
//     let num = 0;
//     sentence_to_write = show_sentence.innerHTML.trim().split(/\s+/);

//     for (let i = 0; i < userWords.length; i++) {
//         if (userWords[i] === sentence_to_write[i]) {
//             num++;
//         }
//     }
//     return num;
// };

// const startTyping = () => {
//     let randomNumber = Math.floor(Math.random() * sentences.length);
//     show_sentence.innerHTML = sentences[randomNumber];

//     let date = new Date();
//     startTime = date.getTime();

//     btn.innerText = "Done";

//     showTimer();
// };

// btn.addEventListener('click', () => {
//     switch (btn.innerText.toLowerCase()) {
//         case "start":
//             typing_ground.removeAttribute('disabled');
//             startTyping();
//             break;
//         case "done":
//             typing_ground.setAttribute('disabled', 'true');
//             endTypingTest();
//             break;
//     }
// });

const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');
const show_time = document.querySelector('#show-time'); 
const paragraphSelector = document.getElementById('paragraphSelector');

let startTime, endTime, totalTimeTaken, sentence_to_write;

// const paragraphs = {

//     1: 'એલ.ડી. કૉલેજમાં હાસ્યલેખક જ્યોતીન્દ્ર દવેનું પ્રવચન હતું. મેદાન હકડેઠઠ ભરાયેલું. હું ત્યાં પહોંચીને એક ખૂણામાં બેસી ગયો. જ્યોતીન્દ્રભાઈના વાક્યે બધા ખડખડાટ હસતા હતા. મે એક હાસ્યલેખ લખેલો જે મારી નોટબુકમાં પડ્યો હતો. મનને મર્કટ કંઈ એમનેમ કહ્યું છે: કોણ જાણે કેમ, એ ક્ષણે મારા મનમાં એવો વિચાર ઝબકી ગયો કે જ્યોતીન્દ્ર દવેને સાંભળનારા અત્યારે પેટ પકડીને હસી રહ્યા છે, પણ મારી નોટમાં પડ્યો છે એ હાસ્યલેખ વાંચીને જ્યોતીન્દ્રભાઈ હસે ખરા?  આ હાસ્યાસ્પદ વિચારે મારા મનનો કબજો લઈ લીધો. નિખાલસતાથી જણાવું તો કૉલેજના પ્રથમ વર્ષનો વિદ્યાર્થી એવો હું હસવાનું ભૂલીને એ જ ચિંતામાં પડી ગયેલો કે તે હસે ખરા? હું ત્યાં હતો, મારો હાસ્યલેખ હાથ પર હતો, જ્યોતીન્દ્ર દવે પણ ત્યાં મોજૂદ હતા, પણ મારી હિંમત સંપૂર્ણપણે ગેરહાજર હતી, તેમની પાસે જવું કેવી રીતે? મારી લઘુતાગ્રંથિ આડી આવી. પછી તો તે પ્રવચન કરીને ત્યાંથી ચાલ્યા ગયા. તેમને હસાવવાની મારી મંછા મનમાં ને મનમાં જ રહી ગઈ. 
//     પણ પછી તો હું લખવાને રવાડે વ્યવસ્થિતપણે ચડી ગયો. પોણો ડઝન જેટલાં પુસ્તકોય પ્રગટ થઈ ગયાં હતાં. ત્યાં એક દિવસ જ્યોતીન્દ્ર દવેનું મારા પર પોસ્ટકાર્ડ આવ્યું કે તમારા અમદાવાદની મણિબેન આયુર્વેદિક હૉસ્પિટલમાં સારવાર લેવા આવ્યો છું. તમને મળવાની ઇચ્છા છે. મને મોટી લોટરી લાગ્યા જેટલો આનંદ થયો કેમ કે હાસ્ય એ મારો પહેલો પ્રેમ છે ને જ્યોતીન્દ્ર એટલે સાક્ષાત હાસ્યમૂર્તિ. બધાં કામ મૂકીને મિત્રો સાથે તેમની પાસે પહોંચી ગયો. મને મળીને તેમને સારું લાગ્યું હશે એ કરતાં તેમને મળીને વધારે સારું આ લખનારને લાગ્યું. કાયમ હોય છે એ કરતાંય વધુ નબળી તબિયત હોવા છતાં તેમણે મારા પુસ્તક ‘વિનોદની નજરે’નું ‘કુમાર’માં અવલોકન લખ્યું. પુસ્તક વાંચતાં તેમને હાસ્ય અને વિનોદ બન્નેને મળ્યાનો આનંદ તેમણે એ અવલોકનમાં જાહેર કર્યો આનાથી મોટી ધન્યતા મારા માટે બીજી કઈ હોઈ શકે. જ્યોતીન્દ્રભાઈએ સાચા અર્થમાં મારો વાસના મોક્ષ કર્યો. જ્યોતીન્દ્ર દવે વિશે લખતાં શાહીમાં કાયમ આદર ઊભરાય છે. એક હાસ્યકાર તરીકે જ નહીં, એક માણસ લેખે પણ એવરેસ્ટ જેટલી હાઈટ. તેમનો સ્નેહ પામ્યાનો મને અપાર આનંદ છે.
//     કોઈને છેતરવાની વૃત્તિ નહીં. કોઈને છેતર્યા નથી, હા, છેતરાયા છે ખરા. તેમના નામે પૈસા બનાવનારને પૈસા બનાવવા દીધા છે, વચ્ચે આડા આવ્યા નથી. તે કશાથી બે ખબર નહોતા. ખોટી બેઆની કેમ ચલાવવી એની તેમને ખબર હતી, એ પ્રયુક્તિ તે સારી પેઠે જાણતા હતા. પોતાની ખોટી બે આની નામના લેખમાં એ તરકીબ તેમણે દર્શાવી છે. પણ ખોટા સિક્કા ચલાવવાનો જીવનમાં ક્યારેય પ્રયાસ નહોતો કર્યો, કેમકે ખોટા સિક્કાની સામે ખોટા સિક્કા મળતા હોય છે એ વાત ફિલસૂફ હોવાને કારણે સમજતા હતા. તેમના અવસાનના બે અઠવાડિયાં અગાઉ તેમનું પુસ્તક ‘અમે બધાં’ છાપવા માટે અહીંના પ્રકાશકે તેમને એક પત્ર લખ્યો હતો. રામનારાયણ વિ. પાથકના અવસાન પ્રસંગે મુંબઈમાં એક શોકસભા ભરાયેલી, જેમાં જ્યોતીન્દ્ર વક્તા હતા. તે શોકાંજલિ આપવા ઊભા થયા. જ્યોતીન્દ્ર માત્ર હાસ્યકાર જ નહીં, એક દાર્શનિક પણ ખરા, એટલે તેમની ગંભીર-અગંભીર કોઈ પણ વાત રસપ્રદ હોય. શ્રોતાઓ એક કાન થઈ તેમને સાંભળતા હતા.',
//     2: 'સૂરત એક મહત્વપૂર્ણ વ્યાપારી શહેર છે, જે પોતાના હીરાના વેપાર અને કાપડ ઉદ્યોગ માટે જાણીતું છે. આ શહેરમાં ઘણા સુંદર બાગો અને મલ્ટીપ્લેક્સ સિનેમા છે.',
//     3: 'વડોદરા શહેર એ પોતાના સંસ્કૃતિક અને શૈક્ષણિક કેન્દ્ર માટે જાણીતું છે. આ શહેરમાં ઘણા મ્યુઝિયમ્સ, પાર્ક્સ અને શૈક્ષણિક સંસ્થાઓ છે.'
// };

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
