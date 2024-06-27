document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = {
        1: "Paragraph 1 content goes here...",
        2: "Paragraph 2 content goes here...",
        3: "Paragraph 3 content goes here..."
    };

    const paragraphSelector = document.getElementById('paragraphSelector');
    const showSentence = document.getElementById('showSentence');
    const textarea = document.getElementById('textarea');
    const btn = document.getElementById('btn');
    const scoreDiv = document.getElementById('score');

    let correctText = ''; // Variable to store the correct text
    let wrongWords = []; // Array to store wrong words

    paragraphSelector.addEventListener('change', () => {
        const selectedValue = paragraphSelector.value;
        if (selectedValue) {
            showSentence.textContent = paragraphs[selectedValue];
            textarea.disabled = false;
            correctText = paragraphs[selectedValue].trim(); // Store the correct text
            scoreDiv.textContent = ''; // Clear previous score
            textarea.value = ''; // Clear textarea
            textarea.style.borderColor = ''; // Reset textarea border color
            wrongWords = []; // Reset wrong words array
        } else {
            showSentence.textContent = '';
            textarea.disabled = true;
        }
    });

    btn.addEventListener('click', () => {
        const typedText = textarea.value.trim(); // Get the typed text
        const typedWords = typedText.split(/\s+/); // Split typed text into words

        // Compare typed words with correct words
        typedWords.forEach((word, index) => {
            if (word !== correctText.split(/\s+/)[index]) {
                wrongWords.push(word); // Store wrong words
            }
        });

        // Highlight wrong words in red
        const highlightedText = correctText.split(/\s+/).map((word, index) => {
            if (typedWords[index] !== word) {
                return `<span style="color: red">${typedWords[index]}</span>`;
            } else {
                return typedWords[index];
            }
        }).join(' ');

        // Display highlighted text
        textarea.value = highlightedText;

        // Display score
        const score = (typedWords.length - wrongWords.length) / typedWords.length * 100;
        scoreDiv.textContent = `Accuracy: ${score.toFixed(2)}%`;

        // Disable textarea
        textarea.disabled = true;
    });

    // Disable context menu (right-click)
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
});


