function getMessagePart(array) {
    let messagePart = [];
    messagePart = array[Math.floor(Math.random()*array.length)]
    return messagePart;
}

console.log("Welcome to our randomly generated horoscope messages!");
console.log("------------------------------------------");
console.log("Here is a randomly generated message about your future:")



let horoscopeSign = ["Aquarius, ", "Pisces, ", "Aries, ", "Taurus, ", "Gemini, ", "Cancer, ", "Leo, ", "Virgo, ", "Libra, " , "Scorpio, ", "Sagitarius, ", "Capricorn, "];
let timeStamp = ["because today ", "because this month ", "because this week ", "because this year "];
let beginning = ["It's the most wonderful time for you, ", "Bad news, ", "This is a warning, ", "You better get ready, ", "I hope your calendar is clear, "]
let ending = ["you're getting married!", "you're getting pregnant!", "you'll lose your job!", "you'll get hit by a car!", "you might lose all your money!", "you'll win the lottery!", "You're getting a puppy!"];

let randomMessage = "";

randomMessage += getMessagePart(beginning) + getMessagePart(horoscopeSign) + getMessagePart(timeStamp) + getMessagePart(ending);

console.log(randomMessage);

console.log("------------------------------------------");
console.log("Thank you, and please come again!");