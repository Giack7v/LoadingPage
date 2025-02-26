document.getElementById("spinButton").addEventListener("click", spinWheel);

function spinWheel() {
    const prizes = ["Buono Amazon", "1000€ di vantaggio sul trasferimento titoli"];
    const result = prizes[Math.floor(Math.random() * prizes.length)];

    document.getElementById("resultText").textContent = "Hai vinto: " + result;
    document.getElementById("infoButton").style.display = "inline-block"; // Mostra il pulsante "Premi per maggiori informazioni"
}

function showContactForm() {
    document.getElementById("contact").style.display = "block"; // Mostra il modulo di contatto
    window.scrollTo(0, document.body.scrollHeight); // Scroll alla sezione contatti
}
