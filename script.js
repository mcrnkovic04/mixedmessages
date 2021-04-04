let horoscopeSign = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagitarius", "Capricorn"];
function getMessagePart(array) {
    let messagePart = [];
    messagePart = array[Math.floor(Math.random()*array.length)]
    return messagePart;
}


console.log(getMessagePart(horoscopeSign));