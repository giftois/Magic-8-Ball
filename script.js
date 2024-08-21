// Function to greet the user
const greeting = (input) => {
    input = input || document.getElementById("name").value || "User"; // Use prompt input or default to "User"
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Hello, ${input}!`;
}

// Function to generate a random response
const randomResponse = () => {
    const responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

// Function to validate input and display response
const validInput = (string) => {
    const emphasis = document.getElementById("emphasis");
    emphasis.style.textDecoration = "underline";
    emphasis.style.fontWeight = "bold";
    emphasis.style.fontSize = "20px";

    if (string.trim().toLowerCase() === "hello 8-ball" || string.trim().toLowerCase() === "hello 8 ball") {
        userName = prompt("Hello, what's your name?");
        greeting(userName);
        
    } else if (string.trim() === "") {
        response.innerHTML = "Please type a question above.";
    } else {
        const responseText = randomResponse();
        const responseElement = document.createElement("h2");
        responseElement.textContent = responseText;
        const responseBox = document.getElementById("response-box");
        responseBox.innerHTML = ""; 
        responseBox.appendChild(responseElement);
    }
}

// Event listener for the submit button
document.getElementById("submit-button").addEventListener("click", () => {
    const question = document.getElementById("question-box").value;
    validInput(question);
    document.getElementById("question-box").value = ""; // Clear input field after submission
});