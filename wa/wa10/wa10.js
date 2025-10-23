let triviaBtn = document.querySelector("#js-new-quote").addEventListener('click', newJoke);

let answerBtn =document.querySelector("#js-tweet").addEventListener('click', newPunchline);

let current = {
    question: "",
    answer: "",
}

const endpoint = "https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"

async function newJoke(){
//console.log("Success");
    try {
        const response = await fetch(endpoint);
        if (!response.ok){
            throw Error(respone.statusText);
        }
        const json = await response.json();
 console.log(json);
        displayJoke(json["setup"]);
        current.newJoke = json["setup"];
        current.punchline = json["delivery"];
        console.log(current.newJoke);
        console.log(current.punchline);
    }
    catch (err) {
        console.log(err);
        alert('Failed to get new joke')
    }
}
function displayJoke(question) {
    const setupText = document.querySelector('#js-quote-text');
    setupText.textContent = question;
    const deliveryText = document.querySelector("#js-answer-text");
    deliveryText.textContent = "";
}
function newPunchline(){
    console.log("Success == answer!");
    const deliveryText = document.querySelector("#js-answer-text");
    deliveryText.textContent = current.punchline;

}
newJoke();