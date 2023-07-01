// Get chatbot elements

const name = document.querySelector("#name")
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');


inputForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const input = inputField.value;

    inputField.value = '';
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

    
    let message = document.createElement('div');
    message.classList.add('chatbot-message', 'user-message');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
    conversation.appendChild(message);

    const response = generateResponse(input);

    message = document.createElement('div');
    message.classList.add('chatbot-message', 'chatbot');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
    conversation.appendChild(message);
    message.scrollIntoView({ behavior: "smooth" });
});


function generateResponse(input) {
    const keyword = input.toLowerCase();

    if (keyword.includes('service')) {
        return 'For service inquiries, please contact us at service@codemade.com or call +1-123-456-7890.';
    } else if (keyword.includes('sale')) {
        return 'For sales inquiries, please contact us at sales@codemade.com or call +1-987-654-3210.';
    } else if (keyword.includes('hi')) {
        return ('Hello! Type service or sales for contact information')
    } else if (keyword.includes('hello')) {
        return 'Hello! Type service or sales for contact information'
    } else {
        
        const responses = [
            "Hello, how can I help you today? 😊",
            "I'm sorry, I didn't understand your question. Could you please rephrase it? 😕",
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}


function toggleContent() {
    const chatbotContainer = document.getElementById('containerid');
    if (chatbotContainer.style.display === 'none') {
        chatbotContainer.style.display = 'block';
    } else { chatbotContainer.style.display = 'none' }
}


function services() {
    const trigger = [

    ];
}






// sign-up form //

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

$(document).ready(function() {
    setTimeout(function() {
      $('#containerid').show();
    }, 3000); // 3000 milliseconds (3 seconds) is the delay before the element pops up
  });
