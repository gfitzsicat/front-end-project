const jokeContainer = document.getElementById("joke");
const btn = document.getElementById('btn');
const badBtn = document.getElementById('badBtn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const badUrl = "https://v2.jokeapi.dev/joke/Dark,Spooky?type=single"



let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click", getJoke);
getJoke;



let getBadJoke = () => { 
    jokeContainer.classList.remove("fade");
    fetch(badUrl)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade")
    })
}
badBtn.addEventListener('click', () =>{
    alert("These are BAD JOKES and OFFENSIVE!. You may LEAVE NOW otherwise click 'ok' or press 'enter'");
    getBadJoke()
})
