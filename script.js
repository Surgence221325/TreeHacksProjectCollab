const userInput = document.getElementById('user-input');
const chatbotMessages = document.querySelector('.chatbot-messages');


function generateResponse(input) {
 const responses = {
  'hi': 'Hello there!',
  'how are you': 'I am doing well, thank you!',
  'what is your name': 'My name is ChatBot.',
  'what is the importance of education': 'Education is important because it provides knowledge and skills that are necessary for personal and professional development.',
  'why is education necessary': 'Education is necessary to help individuals understand and navigate the world around them and to gain the skills they need to succeed in their personal and professional lives.',
  'what are the benefits of education': 'Education provides numerous benefits, including improved career prospects, higher earning potential, better health outcomes, and increased social mobility.',
  'what are the disadvantages of not having an education': 'Not having an education can limit an individual\'s career opportunities, earning potential, and ability to make informed decisions. It can also contribute to social and economic inequalities.',
  'how can we make education more accessible': 'There are many ways to make education more accessible, including providing scholarships, offering online courses, and creating mentorship programs for underprivileged students.',
  'what is the role of technology in education': 'Technology can play an important role in education by providing new and innovative ways for students to learn and interact with course material.',
  'what is the future of education': 'The future of education is likely to involve a greater emphasis on personalized and flexible learning, as well as the integration of new technologies and educational models.',
  'default': 'I am not sure what you mean. Can you please clarify?'
};

  const response = responses[input.toLowerCase()] || responses['default'];


  const message = document.createElement('div');
  message.classList.add('chatbot-message');
  message.innerHTML = `<p>${response}</p>`;


  chatbotMessages.appendChild(message);
}

function handleUserInput() {
  const input = userInput.value.trim();

  const message = document.createElement('div');
  message.classList.add('user-message');
  message.innerHTML = `<p>${input}</p>`;


  chatbotMessages.appendChild(message);

  generateResponse(input);

  userInput.value = '';
}

document.getElementById('send-button').addEventListener('click', handleUserInput);

userInput.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});
