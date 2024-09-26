const messages = [
    "I love you",
    "You're so handsome",
    "You make my heart smile",
    "You're amazing",
    "You're the best thing in my life",
    "You light up my day",
    "You're simply wonderful",
    "I adore you",
    "You're my sunshine",
    "You must be a magician because every time I look at you, everyone else disappears!",
    "If you were a vegetable, you’d be a cute-cumber!",
    "I love you more than pizza. And that’s saying a lot!",
    "You’re like my favorite pair of socks—warm and cozy!",
    "I’m not a photographer, but I can totally picture us together forever!",
    "If you were a fruit, you’d be a fine-apple!",
    "You’re the peanut butter to my jelly!",
    "Are you a parking ticket? Because you’ve got FINE written all over you!",
    "I love you to the fridge and back!",
    "You make my heart do the happy dance!",
    "You’re my favorite notification!",
    "I think you’re suffering from a lack of vitamin ME!",
    "If kisses were snowflakes, I’d send you a blizzard!",
    "You’re the sprinkles on my cupcake!",
    "I must be a snowflake because I’ve fallen for you!",
    "You’re the cheese to my macaroni!",
    "If you were a song, you’d be the best track on the album!",
    "You make my heart skip a beet!",
    "I’d choose you over a thousand pizzas!",
    "You’re the jelly to my peanut butter!",
    "Are you a campfire? Because you’re hot and I want s’more!",
    "You must be made of copper and tellurium because you’re Cu-Te!",
    "If love were a crime, I’d be a criminal mastermind!",
    "You’re the marshmallow in my hot cocoa!",
    "Are you a time traveler? Because I can see you in my future!",
    "You’re the cat’s pajamas!",
    "I’m not saying you’re a treasure, but you’re definitely my gold!",
    "You’re my favorite distraction!",
    "If you were a dessert, you’d be a chocolate lava cake—hot and gooey!",
    "I’m nuts about you!",
];

const LoveButton = document.getElementById('LoveButton');
const messageContainer = document.getElementById('messageContainer');

LoveButton.addEventListener('click', () => {
    messageContainer.innerHTML = '';
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = message;

    messageContainer.appendChild(messageDiv);

    // Remove the message after a few seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 3000); // Change this time as needed
});