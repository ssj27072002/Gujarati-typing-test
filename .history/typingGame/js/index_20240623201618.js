body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.lesson-section, .typing-section {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
}

.header {
    margin-bottom: 20px;
}

.lessons {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.lesson-card {
    background-color: #f9a825;
    color: #fff;
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.lesson-card:hover {
    background-color: #f57f17;
}

.timer-div {
    margin-bottom: 20px;
}

.scrollable-paragraph {
    max-height: 200px;
    overflow-y: auto;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    background-color: #fafafa;
}

.styled-textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.styled-button {
    background-color: #f9a825;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.styled-button:hover {
    background-color: #f57f17;
}
