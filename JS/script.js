const database = {
    beginning: ["It's the most wonderful time for you, ", "Bad news, ", "This is a warning, ", "You better get ready, ", "I hope your calendar is clear, "],
    horoscopeSign: ["Aquarius, ", "Pisces, ", "Aries, ", "Taurus, ", "Gemini, ", "Cancer, ", "Leo, ", "Virgo, ", "Libra, " , "Scorpio, ", "Sagitarius, ", "Capricorn, "],
    timeStamp: ["because today ", "because this month ", "because this week ", "because this year "],
    ending: ["you're getting married!", "you're getting pregnant!", "you'll lose your job!", "you'll get hit by a car!", "you might lose all your money!", "you'll win the lottery!", "You're getting a puppy!"]

};

var message = {
    beginning: "",
    horoscopeSign: "",
    timeStamp: "",
    ending: ""
};

function setMessage(){
    message.beginning = getMessagePart(database.beginning);
    message.horoscopeSign = getMessagePart(database.horoscopeSign);
    message.timeStamp = getMessagePart(database.timeStamp);
    message.ending = getMessagePart(database.ending);
}

function getMessagePart(array) {
    let messagePart = [];
    messagePart = array[Math.floor(Math.random()*array.length)]
    return messagePart;
}

function displayMessage(){

console.log("Welcome to our randomly generated horoscope messages!");
console.log("------------------------------------------");
console.log("Here is a randomly generated message about your future:")


setMessage();

var text = "<p>";
text += message.beginning;
text += message.horoscopeSign
text += message.timeStamp;
text += message.ending;
text += "</p>";

document.getElementById("msg").innerHTML = text;

console.log("------------------------------------------");
console.log("Thank you, and please come again!");
}

function debugMessage(){
    setMessage();

    console.log(message.beginning);
    console.log(message.horoscopeSign);
    console.log(message.timeStamp);
    console.log(message.ending);
}

debugMessage();
