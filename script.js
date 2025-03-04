document.getElementById("checkBtn").addEventListener("click", () => {
    const kdInput = document.getElementById("kd").value.trim();
    const rounds = Number(document.getElementById("rounds").value);
    const damage = Number(document.getElementById("damage").value);
    const resultEl = document.getElementById("result");

    if (!kdInput || isNaN(rounds) || isNaN(damage)) {
        resultEl.textContent = "Please fill in all fields correctly!";
        return;
    }

    if (rounds < 13 || rounds > 30) {
        resultEl.textContent = "Number of rounds must be between 13 and 30!";
        return;
    }

    const [kills, deaths] = kdInput.split(":").map(Number);
    if (isNaN(kills) || isNaN(deaths)) {
        resultEl.textContent = "Incorrect K/D input!";
        return;
    }

    const kdRatio = deaths === 0 ? Infinity : kills / deaths;
    let verdict = "You are a normal player";

    const minDamageForRounds = Math.max(1000, rounds * 66.7); 

    if (isNaN(damage) || damage === "") {
        resultEl.textContent = "Please enter damage!";
        return;
    }

    if (damage < minDamageForRounds) {
        verdict = "You are a ruiner! Not enough damage! Go training!";
    } 
    else if (kdRatio < 1) {
        verdict = "You are a ruiner! K/D is too low! Maybe try to improve!";
    }

    resultEl.textContent = verdict;
});

